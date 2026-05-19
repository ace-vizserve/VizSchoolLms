import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const supabaseUrl = process.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey =
  process.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY ||
  process.env.VITE_SUPABASE_ANON_KEY ||
  "";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const DEFAULT_TITLE =
  "VizSchool LMS | Learn Anywhere, Anytime with Confidence";
const DEFAULT_DESCRIPTION =
  "Experience VizSchool LMS — flexible, interactive, and certificate-ready learning for K-12 students. Learn anywhere, anytime, at your own pace.";
const DEFAULT_IMAGE = "https://vizschool.org/vizschool-logo.svg";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function toAbsoluteUrl(maybeUrl: string, host: string): string {
  if (!maybeUrl) return DEFAULT_IMAGE;
  if (/^https?:\/\//i.test(maybeUrl)) return maybeUrl;
  const proto = host.startsWith("localhost") ? "http" : "https";
  return `${proto}://${host}${maybeUrl.startsWith("/") ? "" : "/"}${maybeUrl}`;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  const slugParam = req.query.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam || "";

  let title = DEFAULT_TITLE;
  let description = DEFAULT_DESCRIPTION;
  let image = DEFAULT_IMAGE;

  if (slug) {
    try {
      const { data: post } = await supabase
        .from("blogs")
        .select("title, slug, excerpt, image, seo")
        .eq("slug", slug)
        .eq("published", true)
        .single();

      if (post) {
        title = post.seo?.metaTitle || post.title || DEFAULT_TITLE;
        description =
          post.seo?.metaDescription || post.excerpt || DEFAULT_DESCRIPTION;
        image = post.seo?.ogImage || post.image || DEFAULT_IMAGE;
      }
    } catch (err) {
      console.error("blog-og: supabase lookup failed", err);
    }
  }

  const host = (req.headers["x-forwarded-host"] || req.headers.host || "vizschool.org") as string;
  const proto =
    (req.headers["x-forwarded-proto"] as string) ||
    (host.startsWith("localhost") ? "http" : "https");
  const pageUrl = `${proto}://${host}/blogs/${slug}`;
  const absoluteImage = toAbsoluteUrl(image, host);

  let html: string;
  try {
    html = readFileSync(join(process.cwd(), "dist", "index.html"), "utf-8");
  } catch (err) {
    console.error("blog-og: could not read dist/index.html", err);
    res.status(500).send("Internal Server Error");
    return;
  }

  const tags = `
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${escapeHtml(pageUrl)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${escapeHtml(absoluteImage)}" />
    <meta property="og:image:secure_url" content="${escapeHtml(absoluteImage)}" />
    <meta property="og:site_name" content="VizSchool" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${escapeHtml(pageUrl)}" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(absoluteImage)}" />
    <link rel="canonical" href="${escapeHtml(pageUrl)}" />`;

  const out = html
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`)
    .replace(
      /<meta\s+name=["']description["'][^>]*>/i,
      `<meta name="description" content="${escapeHtml(description)}" />`,
    )
    .replace("</head>", `${tags}\n  </head>`);

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=300, stale-while-revalidate=600",
  );
  res.status(200).send(out);
}
