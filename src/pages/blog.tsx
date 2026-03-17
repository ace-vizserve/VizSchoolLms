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
import { blogService } from "../services/firebase-config";
import type { BlogPost } from "../services/firebase-config";

function Blog() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

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

  const formatDate = (date: any) => {
    if (!date) return "";
    const dateObj = date.toDate ? date.toDate() : new Date(date);
    return dateObj.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
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
            className="flex flex-wrap items-center"
          >
            <Button
              size="sm"
              variant="ghost"
              className="pointer-events-none flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Share
            </Button>

            <Button variant="ghost" size="icon">
              <Twitter />
            </Button>

            <Button variant="ghost" size="icon">
              <Facebook />
            </Button>

            <Button variant="ghost" size="icon">
              <LinkedIn />
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
      d="M256 25.45c-9.42 4.177-19.542 7-30.166 8.27..."
      fill="#55acee"
    />
  </svg>
);

const Facebook = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 36 36" width="1em" height="1em" {...props}>
    <path d="M15 35.8C6.5 34.3 0 26.9..." />
  </svg>
);

const LinkedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 256" width="1em" height="1em" {...props}>
    <path
      d="M218.123 218.127h-37.931..."
      fill="#0A66C2"
    />
  </svg>
);

export default Blog;