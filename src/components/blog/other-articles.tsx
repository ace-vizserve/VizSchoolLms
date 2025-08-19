import { motion } from "motion/react";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

const otherArticles = [
  {
    id: 1,
    title: "Building Study Habits That Actually Stick",
    excerpt:
      "Learn practical strategies to develop consistent study routines that work with your schedule, not against it.",
    category: "Study Tips",
    read_time: "3 min read",
    created_at: "March 10, 2024",
    image: "/assets/reviews/blog-2.png",
  },
  {
    id: 2,
    title: "The Science Behind Effective Online Learning",
    excerpt:
      "Discover the research-backed methods that make virtual education as effective as traditional classroom learning.",
    category: "Research",
    read_time: "5 min read",
    created_at: "March 8, 2024",
    image: "/assets/reviews/blog-3.png",
  },
  {
    id: 3,
    title: "Preparing Students for Future Careers",
    excerpt:
      "How modern education adapts to prepare students for jobs that don't exist yet and skills that matter most.",
    category: "Career Prep",
    read_time: "4 min read",
    created_at: "March 5, 2024",
    image: "/assets/reviews/blog-4.png",
  },
];

function OtherArticles() {
  return (
    <motion.section
      initial={{ translateY: 20, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        duration: 0.4,
      }}
      viewport={{ once: true }}
      className="mt-16">
      <Separator className="mb-8" />

      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Other Articles</h2>

      <div className="grid gap-6 md:gap-8">
        {otherArticles.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: index * 0.1,
              duration: 0.3,
            }}
            viewport={{ once: true }}
            className="group cursor-pointer bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/20">
            <div className="flex flex-col sm:flex-row gap-4 p-6">
              <div className="sm:w-1/3 flex-shrink-0">
                <img src={article.image} alt={article.title} className="w-full h-48 sm:h-32 object-cover rounded-lg" />
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
                  <svg className="w-3 h-3 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs text-muted-foreground">{article.created_at}</span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default OtherArticles;
