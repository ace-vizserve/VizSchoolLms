import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { blogService } from "../../services/firebase-config";
import type { BlogPost } from "../../services/firebase-config";

interface OtherArticlesProps {
  currentSlug?: string;
}

function OtherArticles({ currentSlug }: OtherArticlesProps) {
  const [otherArticles, setOtherArticles] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOtherArticles = async () => {
      try {
        const articles = await blogService.getLatestBlogs(2, currentSlug);
        setOtherArticles(articles);
      } catch (error) {
        console.error("Error fetching other articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOtherArticles();
  }, [currentSlug]);

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
      <section className="mt-16">
        <Separator className="mb-8" />
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Other Articles</h2>
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </section>
    );
  }

  if (otherArticles.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">
      <Separator className="mb-8" />

      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Other Articles</h2>

      <div className="grid gap-6 md:gap-8">
        {otherArticles.map((article) => (
          <Link key={article.id} to={`/blogs/${article.slug}`}>
            <article className="group cursor-pointer bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/20">
              <div className="flex flex-col sm:flex-row gap-4 p-5">
                <div className="sm:w-1/3 flex-shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 sm:h-full object-cover rounded-lg"
                  />
                </div>

                <div className="sm:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>

                    <h3 className="font-bold text-lg text-primary transition-colors duration-200 line-clamp-2 mb-2">
                      {article.title}
                    </h3>

                    <p className="text-sm text-neutral-600 line-clamp-2 mb-3">{article.excerpt}</p>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Calendar className="size-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{formatDate(article.createdAt)}</span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default OtherArticles;