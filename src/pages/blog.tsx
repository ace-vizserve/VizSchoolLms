import { Calendar, Share2 } from "lucide-react";
import { motion } from "motion/react";
import type { SVGProps } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OtherArticles from "../components/blog/other-articles";
import MaxWidthWrapper from "../components/max-width-wrapper";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { blogService } from "../services/supabase-config";
import type { BlogPost } from "../services/supabase-config";
import { useSEO } from "../hooks/useSEO";

function Blog() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  // Set SEO meta tags when post is loaded
  useSEO({
    title: post?.seo?.metaTitle || post?.title || "VizSchool Blog",
    description: post?.seo?.metaDescription || post?.excerpt || "",
    image: post?.seo?.ogImage || post?.image || "",
    url: window.location.href,
    type: "article",
    siteName: "VizSchool",
  });

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;

      try {
        const fetchedPost = await blogService.getBlogBySlug(slug);
        setPost(fetchedPost);
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  // Share functionality
  const handleShare = async (platform?: "twitter" | "facebook" | "linkedin") => {
    if (!post) return;

    const url = window.location.href;
    const title = post.title;
    const text = post.excerpt || post.seo?.metaDescription || "";

    if (!platform) {
      // Native Web Share API (mobile friendly)
      if (navigator.share) {
        try {
          await navigator.share({
            title: title,
            text: text,
            url: url,
          });
        } catch (err) {
          // User cancelled or share failed, fallback to copy
          if (err instanceof Error && err.name !== "AbortError") {
            copyToClipboard(url);
          }
        }
      } else {
        // Fallback: copy to clipboard
        copyToClipboard(url);
      }
      return;
    }

    // Platform-specific sharing
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    };

    window.open(shareUrls[platform], "_blank", "width=600,height=400");
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (loading) {
    return (
      <MaxWidthWrapper className="max-w-4xl py-16 md:py-20 lg:py-24">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </MaxWidthWrapper>
    );
  }

  if (!post) {
    return (
      <MaxWidthWrapper className="max-w-4xl py-16 md:py-20 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Blog Post Not Found
          </h1>
          <p className="text-muted-foreground">
            The blog post you are looking for does not exist.
          </p>
        </div>
      </MaxWidthWrapper>
    );
  }

  return (
    <MaxWidthWrapper className="max-w-4xl py-16 md:py-20 lg:py-24">
      <header className="pb-6">
        <motion.h1
          initial={{ translateY: 10, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{
            duration: 0.25,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-2 text-primary"
        >
          {post.title}
        </motion.h1>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <motion.div
            initial={{ translateY: 10, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.25,
              duration: 0.25,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            viewport={{ once: true }}
            className="flex items-center gap-3 flex-wrap"
          >
            <Badge variant="outline">{post.category}</Badge>
            <span className="font-medium text-xs text-muted-foreground">
              {post.readTime}
            </span>
            <span className="font-medium text-xs text-muted-foreground">•</span>

            <div className="flex items-center gap-1.5">
              <Calendar className="size-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                {formatDate(post.createdAt)}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ translateY: 10, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.25,
              duration: 0.25,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-1"
          >
            <Button
              size="sm"
              variant="ghost"
              className="flex items-center gap-2"
              onClick={() => handleShare()}
            >
              <Share2 className="w-4 h-4" />
              Share
            </Button>

            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => handleShare("twitter")}
              title="Share on Twitter"
              className="h-9 w-9"
            >
              <Twitter className="h-5 w-5" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => handleShare("facebook")}
              title="Share on Facebook"
              className="h-9 w-9"
            >
              <Facebook className="h-5 w-5" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => handleShare("linkedin")}
              title="Share on LinkedIn"
              className="h-9 w-9"
            >
              <LinkedIn className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </header>

      <Separator />

      <motion.div
        initial={{ translateY: 10, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{
          delay: 0.35,
          duration: 0.25,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        viewport={{ once: true }}
        className="my-8"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-xl shadow-lg object-cover aspect-video"
        />
      </motion.div>

      {/* BLOG CONTENT */}
      <article
        className="
        prose
        prose-lg
        max-w-none
        prose-headings:text-primary
        prose-h2:text-2xl
        prose-h2:font-bold
        prose-h2:mt-10
        prose-h2:mb-4
        prose-h3:text-xl
        prose-h3:font-bold
        prose-blockquote:border-primary
        prose-blockquote:italic
        prose-blockquote:font-semibold
        prose-blockquote:text-neutral-800
        prose-p:text-neutral-700
        prose-p:leading-relaxed
        prose-img:rounded-xl
        prose-img:shadow-md
        "
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <OtherArticles currentSlug={post.slug} />
    </MaxWidthWrapper>
  );
}

/* Social Icons */

const Twitter = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 209" width="1em" height="1em" {...props}>
    <path
      d="M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
      fill="#55acee"
    />
  </svg>
);

const Facebook = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 36 36" width="1em" height="1em" {...props}>
    <path
      fill="#4267B2"
      d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"
    />
    <path
      fill="#FFF"
      d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
    />
  </svg>
);

const LinkedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" width="1em" height="1em" {...props}>
    <g fill="none">
      <path
        d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z"
        fill="#0A66C2"
      />
      <path
        d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default Blog;