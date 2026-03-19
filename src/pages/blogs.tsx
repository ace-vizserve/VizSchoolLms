import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MaxWidthWrapper from "../components/max-width-wrapper";
import { Badge } from "../components/ui/badge";
import { buttonVariants } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { BASE_URL } from "../constants";
import SEO from "../seo";
import { blogService } from "../services/supabase-config";
import type { BlogPost } from "../services/supabase-config";

function Blogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        console.log("🔍 Fetching blogs from Supabase...");
        const fetchedBlogs = await blogService.getAllBlogs(true); // Only published
        console.log("✅ Fetched blogs:", fetchedBlogs);
        console.log("📊 Number of blogs:", fetchedBlogs.length);
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("❌ Error fetching blogs:", error);
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <MaxWidthWrapper className="max-w-screen-xl mx-auto py-16 md:py-20 lg:py-24">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </MaxWidthWrapper>
    );
  }

  if (error) {
    return (
      <MaxWidthWrapper className="max-w-screen-xl mx-auto py-16 md:py-20 lg:py-24">
        <div className="text-center py-12">
          <p className="text-red-500 text-lg">{error}</p>
        </div>
      </MaxWidthWrapper>
    );
  }

  return (
    <>
      <SEO
        title="VizSchool Blog | Latest Education News & Insights"
        description="Read the VizSchool Blog for the latest school news, learning tips, resources, and insights for students and parents."
        canonical={`${BASE_URL}/vizschool-blog-latest-education-news`}
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "VizSchool LMS Blogs",
          url: `${BASE_URL}/vizschool-blog-latest-education-news`,
        }}
      />
      <MaxWidthWrapper className="max-w-screen-xl mx-auto py-16 md:py-20 lg:py-24">
        <motion.h2
          initial={{ translateY: 10, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{
            duration: 0.25,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          viewport={{
            once: true,
          }}
          className="text-primary mb-14 text-4xl md:text-5xl font-extrabold text-center tracking-tighter">
          VizSchool making news
        </motion.h2>

        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No blog posts yet. Check back soon!</p>
            <p className="text-sm text-gray-500 mt-2">Debug: Check browser console for details</p>
          </div>
        ) : (
          <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog, idx) => (
              <motion.div
                initial={{ translateY: 10, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: (idx % 3) * 0.1,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                viewport={{
                  once: true,
                }}
                key={blog.id}>
                <Card className="shadow-none overflow-hidden rounded-md">
                  <CardHeader className="p-0 overflow-hidden max-h-52">
                    <div
                      style={{
                        backgroundImage: `url(${blog.image})`,
                      }}
                      className="aspect-video bg-cover bg-center w-full hover:scale-105 hover:brightness-90 transition-all"
                    />
                  </CardHeader>
                  <CardContent className="py-6">
                    <div className="flex items-center gap-3">
                      <Badge variant={"outline"}>{blog.category}</Badge>
                      <span className="font-medium text-xs text-muted-foreground">{blog.readTime}</span>
                    </div>

                    <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground line-clamp-2">
                      {blog.seo?.metaDescription || blog.excerpt}
                    </p>

                    <Link
                      to={`/blogs/${blog.slug}`}
                      className={buttonVariants({
                        className: "!mt-6 !shadow-none",
                        size: "sm",
                      })}>
                      Read more <ChevronRight />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </MaxWidthWrapper>
    </>
  );
}

export default Blogs;