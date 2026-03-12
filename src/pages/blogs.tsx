import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import MaxWidthWrapper from "../components/max-width-wrapper";
import { Badge } from "../components/ui/badge";
import { buttonVariants } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { BASE_URL } from "../constants";
import SEO from "../seo";

const blogs = [
  {
    category: "Education",
    readTime: "9 min read",
    title: "VizSchool: A Virtual School Offering Quality Online Education",
    excerpt:
      "Launched January 2026, VizSchool by HFSE provides flexible, values-based online education for Primary and Secondary students worldwide.",
    image: "/assets/blogs/blog-1.png",
  },
  {
    category: "Education",
    readTime: "15 min read",
    title: "Academic Pathway: Online Schooling From Primary to Secondary",
    excerpt:
      "Discover VizSchool’s online schooling pathway from Primary One to Secondary Four, with clear progression, balanced assessments, and global standards.",
    image: "/assets/blogs/blog-2.png",
  },
  {
    category: "Education",
    readTime: "12 min read",
    title: "Programmes of VizSchool: VizIndie, VizFlex & VizLive Explained",
    excerpt:
      "Discover how VizIndie, VizFlex, and VizLive programmes at VizSchool deliver flexible online learning designed to support diverse learners worldwide.",
    image: "/assets/blogs/blog-3.png",
  },
  {
    category: "Education",
    readTime: "10 min read",
    title: "VizSchool Education Scope: Primary and Secondary Levels",
    excerpt:
      "Explore VizSchool’s course scope from Primary One to Secondary Four with core subjects, enrichment, and flexible online learning",
    image: "/assets/blogs/blog-4.png",
  },
  
];

function Blogs() {
  return (
    <>
      <SEO
        title="VizSchool Blog | Latest Education News & Insights"
        description="Read the VizSchool Blog for the latest school news, learning tips, resources, and insights for students and parents."
        canonical={`${BASE_URL}/vizschool-blog-latest-education-news`}
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "Blogs",
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
                    to={"/blogs/vizschool-flexible-virtual-school-global"}
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
