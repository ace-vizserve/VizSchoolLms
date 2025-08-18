import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import MaxWidthWrapper from "../components/max-width-wrapper";
import { Badge } from "../components/ui/badge";
import { buttonVariants } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import SEO from "../seo";

const blogs = [
  {
    category: "Education",
    readTime: "4 min read",
    title: "Why Flexible Learning Works for Every Student",
    excerpt:
      "Discover how VizSchool’s flexible approach allows students to learn at their own pace while still meeting academic goals.",
    image: "/assets/reviews/blog-1.png",
  },
  {
    category: "Technology",
    readTime: "5 min read",
    title: "How VizSchool Uses Technology to Enhance Learning",
    excerpt:
      "From interactive lessons to real-time progress tracking, here’s how VizSchool integrates technology into everyday learning.",
    image: "/assets/reviews/blog-2.png",
  },
  {
    category: "Parent Tips",
    readTime: "3 min read",
    title: "Helping Your Child Succeed in Online School",
    excerpt: "Practical strategies for parents to keep their children engaged and motivated while studying online.",
    image: "/assets/reviews/blog-3.png",
  },
  {
    category: "Student Life",
    readTime: "6 min read",
    title: "A Day in the Life of a VizSchool Student",
    excerpt: "Follow a Primary 5 student’s daily routine to see how online classes, projects, and breaks fit together.",
    image: "/assets/reviews/blog-4.png",
  },
  {
    category: "Academics",
    readTime: "5 min read",
    title: "Mastering Math with VizSchool’s Interactive Lessons",
    excerpt: "Why our interactive and gamified math lessons help students grasp complex concepts faster and better.",
    image: "/assets/reviews/blog-5.png",
  },
  {
    category: "Parent Tips",
    readTime: "4 min read",
    title: "Balancing Screen Time and Learning Time",
    excerpt: "Learn how to manage your child’s screen time effectively while ensuring quality education at home.",
    image: "/assets/reviews/blog-6.png",
  },
  {
    category: "Technology",
    readTime: "5 min read",
    title: "The Future of Online Education in the Singapore",
    excerpt: "Explore how platforms like VizSchool are shaping the future of education for international students.",
    image: "/assets/reviews/blog-7.png",
  },
  {
    category: "Student Life",
    readTime: "3 min read",
    title: "Fun Activities to Keep Learning Exciting",
    excerpt:
      "Beyond the screen: simple activities you can do at home to make learning more engaging. Learning can be fun.",
    image: "/assets/reviews/blog-8.png",
  },
  {
    category: "Academics",
    readTime: "6 min read",
    title: "How VizSchool Prepares Students for the Next Grade Level",
    excerpt: "Step-by-step insights into how our curriculum ensures readiness for academic progression.",
    image: "/assets/reviews/blog-9.png",
  },
];

function Blogs() {
  return (
    <>
      <SEO
        title="VizSchool LMS Blog | Education Insights and Tips"
        description="Stay updated with VizSchool LMS blog articles. Get tips, guides, and insights into online learning, student growth, and education technology."
        canonical="https://yourdomain.com/blogs"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "VizSchool LMS Blog",
          url: "https://yourdomain.com/blogs",
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
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((details, idx) => (
            <motion.div
              initial={{ translateY: 10, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: 0.15 % idx,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
              viewport={{
                once: true,
              }}
              key={idx}>
              <Card className="shadow-none overflow-hidden rounded-md">
                <CardHeader className="p-0 overflow-hidden max-h-52">
                  <div
                    style={{
                      backgroundImage: `url(${details.image})`,
                    }}
                    className="aspect-video bg-cover w-full hover:scale-105 hover:brightness-90 transition-all"
                  />
                </CardHeader>
                <CardContent className="py-6">
                  <div className="flex items-center gap-3">
                    <Badge variant={"outline"}>{details.category}</Badge>
                    <span className="font-medium text-xs text-muted-foreground">{details.readTime}</span>
                  </div>

                  <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight">{details.title}</h3>
                  <p className="mt-2 text-muted-foreground line-clamp-2">{details.excerpt}</p>

                  <Link
                    to={"/blogs/123"}
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
      </MaxWidthWrapper>
    </>
  );
}

export default Blogs;
