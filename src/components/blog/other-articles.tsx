import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

const allArticles = [
  {
    id: 1,
    title: "VizSchool: A Virtual School Offering Quality Online Education",
    excerpt:
      "Launched January 2026, VizSchool by HFSE provides flexible, values-based online education for Primary and Secondary students worldwide.",
    category: "Education",
    read_time: "9 min read",
    created_at: "January 2026",
    image: "/assets/blogs/blog-1.png",
    slug: "vizschool-flexible-virtual-school-global",
  },
  {
    id: 2,
    title: "Academic Pathway: Online Schooling From Primary to Secondary",
    excerpt:
      "A flexible, values-based online schooling approach designed for modern families seeking continuity, balance, and academic excellence.",
    category: "Education",
    read_time: "15 min read",
    created_at: "January 2026",
    image: "/assets/blogs/blog-2.png",
    slug: "academic-pathway-online-schooling",
  },
  {
    id: 3,
    title: "Programmes of VizSchool: VizIndie, VizFlex & VizLive Explained",
    excerpt:
      "Discover how VizIndie, VizFlex, and VizLive offer distinct learning pathways to support different learning styles and family lifestyles.",
    category: "Education",
    read_time: "12 min read",
    created_at: "January 2026",
    image: "/assets/blogs/blog-3.png",
    slug: "vizschool-programmes-online-learning",
  },
  {
    id: 4,
    title: "VizSchool Education Scope: Primary and Secondary Levels",
    excerpt:
      "A comprehensive and flexible academic pathway designed to support learners from Primary One to Secondary Four.",
    category: "Education",
    read_time: "10 min read",
    created_at: "January 2026",
    image: "/assets/blogs/blog-4.png",
    slug: "education-scope-primary-secondary",
  },
];

interface OtherArticlesProps {
  currentSlug?: string;
}

function OtherArticles({ currentSlug }: OtherArticlesProps) {
  // Filter out the current article and get the first 2
  const otherArticles = allArticles
    .filter((article) => article.slug !== currentSlug)
    .slice(0, 2);

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
                      <span className="text-xs text-muted-foreground">{article.read_time}</span>
                    </div>

                    <h3 className="font-bold text-lg text-primary transition-colors duration-200 line-clamp-2 mb-2">
                      {article.title}
                    </h3>

                    <p className="text-sm text-neutral-600 line-clamp-2 mb-3">{article.excerpt}</p>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Calendar className="size-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{article.created_at}</span>
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