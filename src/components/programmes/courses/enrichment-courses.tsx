import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../../ui/badge";
import { buttonVariants } from "../../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../../ui/card";

const enrichmentCourses = [
  {
    category: "Music",
    title: "Beginner Piano for Kids",
    excerpt: "Learn the basics of piano playing, reading musical notes, and performing simple songs with confidence.",
    image: "/assets/reviews/blog-1.png",
  },
  {
    category: "Coding",
    title: "Coding with Scratch",
    excerpt:
      "Introduce young learners to programming concepts through fun, drag-and-drop coding activities using Scratch.",
    image: "/assets/reviews/blog-2.png",
  },
  {
    category: "Public Speaking",
    title: "Confident Communicators Workshop",
    excerpt: "Boost self-esteem and improve communication skills through speech practice, storytelling, and role-play.",
    image: "/assets/reviews/blog-3.png",
  },
  {
    category: "Drama",
    title: "Acting and Stage Performance",
    excerpt:
      "Discover the art of drama, from improvisation to stage presence, in a supportive and creative environment.",
    image: "/assets/reviews/blog-4.png",
  },
  {
    category: "Robotics",
    title: "LEGO Robotics for Beginners",
    excerpt: "Build and program simple robots using LEGO kits while learning engineering and problem-solving skills.",
    image: "/assets/reviews/blog-5.png",
  },
  {
    category: "Creative Writing",
    title: "Storytelling and Creative Writing",
    excerpt:
      "Encourage imagination and writing skills through guided story creation, poems, and journaling activities.",
    image: "/assets/reviews/blog-6.png",
  },
  {
    category: "Art",
    title: "Watercolor Painting for Kids",
    excerpt:
      "Explore watercolour techniques to create vibrant, expressive artwork inspired by nature and everyday life.",
    image: "/assets/reviews/blog-7.png",
  },
  {
    category: "Dance",
    title: "Hip-Hop Dance Basics",
    excerpt: "Learn fun, energetic dance routines while improving rhythm, flexibility, and coordination.",
    image: "/assets/reviews/blog-8.png",
  },
  {
    category: "STEM",
    title: "Fun Science Experiments",
    excerpt:
      "Engage in exciting hands-on experiments to learn about chemistry, physics, and biology in a safe lab setting.",
    image: "/assets/reviews/blog-9.png",
  },
];

function EnrichmentCourses() {
  return (
    <div className="max-w-7xl mx-auto space-y-10 p-4">
      {/* Enrichment Header Section - PURPLE THEME */}
      <div className="relative group overflow-hidden bg-violet-600 rounded-3xl p-8 shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 text-white">
          <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 shrink-0">
            <Sparkles size={28} />
          </div>
          <div>
            <h4 className="font-bold text-2xl tracking-tight">Speciality Enrichment</h4>
            <p className="text-violet-50 text-sm opacity-90 max-w-xl">
              From Music to Robotics, discover elective courses designed to ignite passion and build future-ready skills
              beyond the classroom.
            </p>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {enrichmentCourses.map((details, i) => (
          <Card
            key={i}
            className="group flex flex-col bg-white border-slate-200 shadow-sm hover:shadow-2xl hover:border-violet-200 transition-all duration-500 rounded-[2rem] overflow-hidden hover:-translate-y-2">
            <CardHeader className="p-0 relative">
              <div
                style={{ backgroundImage: `url(${details.image})` }}
                className="aspect-[16/10] bg-cover bg-center w-full group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/95 backdrop-blur-md text-violet-600 font-black px-4 py-1.5 shadow-sm border-none rounded-full">
                  {details.category}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="flex-grow pt-8 px-8 space-y-5">
              <div className="min-h-[120px] space-y-3">
                <h3 className="text-xl font-black text-slate-900 leading-tight group-hover:text-violet-600 transition-colors duration-300">
                  {details.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{details.excerpt}</p>
              </div>

              {/* Removed Tutor Section */}
              <div className="py-5 border-t border-slate-100"></div>
            </CardContent>

            <CardFooter className="pb-8 px-8">
              <Link
                target="_blank"
                to={"https://enrol.hfse.edu.sg/admission/dashboard"}
                className={buttonVariants({
                  className:
                    "w-full !h-14 !rounded-2xl !font-black !text-base transition-all duration-300 group bg-violet-600 hover:bg-violet-700 shadow-lg shadow-violet-200 text-white",
                })}>
                Enrol Now
                <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default EnrichmentCourses;
