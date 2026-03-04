import { ArrowUpRight, Filter, Info, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { Badge } from "../../ui/badge";
import { Button, buttonVariants } from "../../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../../ui/card";

const gradeLevels = [
  { label: "All Levels", value: "" },
  { label: "Secondary 1", value: "Secondary 1" },
  { label: "Secondary 2", value: "Secondary 2" },
  { label: "Secondary 3", value: "Secondary 3" },
  { label: "Secondary 4", value: "Secondary 4" },
];

const secondarySchoolCourses = [
  {
    gradeLevel: "Secondary 1",
    title: "Standard Class (ENGLISH + TAGALOG)",
    excerpt:
      "Dive into classic and modern literature while developing strong analytical writing and comprehension skills.",
    image: "/assets/reviews/blog-4.png",
  },
  {
    gradeLevel: "Secondary 2",
    title: "Standard Class (ENGLISH + TAGALOG)",
    excerpt:
      "Enhance persuasive speaking, critical thinking, and writing skills through structured debates and discussions.",
    image: "/assets/reviews/blog-1.png",
  },
  {
    gradeLevel: "Secondary 3",
    title: "Standard Class (ENGLISH + TAGALOG)",
    excerpt: "Learn the principles of digital illustration, photo editing, and creative design projects.",
    image: "/assets/reviews/blog-3.png",
  },
  {
    gradeLevel: "Secondary 4",
    title: "Standard Class (ENGLISH + TAGALOG)",
    excerpt: "Improve physical endurance, coordination, and teamwork through various indoor and outdoor activities.",
    image: "/assets/reviews/blog-6.png",
  },
];

function SecondaryCourses() {
  const [selectedGradeLevel, setSelectedGradeLevel] = useState("");

  const filteredCourses = useMemo(() => {
    return secondarySchoolCourses.filter((course) => {
      return !selectedGradeLevel || course.gradeLevel === selectedGradeLevel;
    });
  }, [selectedGradeLevel]);

  return (
    <div className="max-w-7xl mx-auto space-y-10 p-4">
      {/* Enhanced Filter Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-50/50 p-6 rounded-3xl border border-slate-200/60 shadow-sm backdrop-blur-md">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-orange-600 font-bold uppercase tracking-wider text-xs">
            <Filter size={14} />
            Browse Catalogue
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">Grade Levels</h3>
        </div>

        <div className="flex flex-wrap gap-2 p-1.5 bg-orange-100/50 rounded-2xl w-fit">
          {gradeLevels.map((level) => (
            <button
              key={level.value}
              onClick={() => setSelectedGradeLevel(level.value)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-bold transition-all",
                selectedGradeLevel === level.value
                  ? "bg-white text-orange-600 shadow-sm"
                  : "text-orange-900/60 hover:text-orange-900",
              )}>
              {level.label}
            </button>
          ))}
        </div>
      </div>

      {/* Modern Info Banner */}
      <div className="relative group overflow-hidden bg-primary rounded-3xl p-8 shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 text-white">
          <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 shrink-0">
            <Info className="text-white" size={24} />
          </div>
          <div className="space-y-1">
            <p className="text-white font-bold text-lg">Class Format Availability</p>
            <p className="text-orange-50 text-sm leading-relaxed max-w-2xl">
              All secondary courses (Secondary 1-4) are currently offered as{" "}
              <span className="text-primary-foreground font-semibold underline decoration-secondary/50 underline-offset-4">
                Standard Class (ENGLISH + TAGALOG)
              </span>{" "}
              only.
            </p>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((details, i) => (
            <Card
              key={i}
              className="group flex flex-col bg-white border-slate-200 shadow-sm hover:shadow-2xl hover:border-orange-200 transition-all duration-500 rounded-xl overflow-hidden hover:-translate-y-2">
              <CardHeader className="p-0 relative">
                <div
                  style={{ backgroundImage: `url(${details.image})` }}
                  className="aspect-[16/10] bg-cover bg-center w-full group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-orange-500 text-white font-black px-4 py-1.5 shadow-md border-none rounded-full">
                    {details.gradeLevel}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="flex-grow pt-8 px-8">
                <h3 className="text-xl font-black text-slate-900 group-hover:text-orange-600 transition-colors">
                  {details.title}
                </h3>
                <p className="text-slate-500 text-sm mt-3 line-clamp-3">{details.excerpt}</p>

                <div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-100"></div>
              </CardContent>

              <CardFooter className="pb-8 px-8 flex-col gap-4">
                <Link
                  target="_blank"
                  to={"https://enrol.hfse.edu.sg/admission/dashboard"}
                  className={buttonVariants({
                    className: "w-full !h-14 !rounded-2xl !font-black !shadow-lg !shadow-orange-200 text-white group",
                  })}>
                  Enrol Now
                  <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                <Link
                  to={"/school-fees-tuition-vizschool"}
                  className={buttonVariants({
                    className: "text-primary w-full !h-14 !rounded-2xl !font-black !shadow-lg !shadow-orange-200 group",
                    variant: "outline",
                  })}>
                  See Pricing Details
                  <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20 px-4 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mb-4">
              <X className="text-slate-300" size={40} />
            </div>
            <h4 className="text-xl font-bold text-slate-900">No results found</h4>
            <p className="text-slate-500 mt-1">We couldn't find any courses for this specific level.</p>
            <Button variant="link" onClick={() => setSelectedGradeLevel("")} className="mt-4 text-primary font-bold">
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SecondaryCourses;
