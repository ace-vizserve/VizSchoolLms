import { ArrowUpRight, BookOpen, Filter, Info } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { Badge } from "../../ui/badge";
import { buttonVariants } from "../../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../../ui/card";

const classTypes = [
  { label: "Global Class 3 (ENGLISH + FRENCH)", value: "Global Class 3 (ENGLISH + FRENCH)" },
  { label: "Global Class 2 (ENGLISH + TAMIL)", value: "Global Class 2 (ENGLISH + TAMIL)" },
  { label: "Global Class 1 (ENGLISH + MANDARIN)", value: "Global Class 1 (ENGLISH + MANDARIN)" },
  { label: "Standard Class (ENGLISH + TAGALOG)", value: "Standard Class (ENGLISH + TAGALOG)" },
];

const gradeLevels = [
  { label: "Primary 1", value: "Primary 1" },
  { label: "Primary 2", value: "Primary 2" },
  { label: "Primary 3", value: "Primary 3" },
  { label: "Primary 4", value: "Primary 4" },
  { label: "Primary 5", value: "Primary 5" },
  { label: "Primary 6", value: "Primary 6" },
];

const primarySchoolCourses = [
  // Primary 1 - All 4 class types
  {
    gradeLevel: "Primary 1",
    price: "S$50",
    title: "Global Class 3 (ENGLISH + FRENCH)",
    excerpt: "Master counting, number recognition, and simple problem-solving through games and visual learning tools.",
    image: "/assets/reviews/blog-2.png",
  },
  {
    gradeLevel: "Primary 1",
    price: "S$40",
    title: "Global Class 2 (ENGLISH + TAMIL)",
    excerpt:
      "Introduce young learners to the wonders of nature, basic experiments, and how science explains everyday things.",
    image: "/assets/reviews/blog-3.png",
  },
  {
    gradeLevel: "Primary 1",
    price: "S$45",
    title: "Global Class 1 (ENGLISH + MANDARIN)",
    excerpt:
      "Build strong reading, writing, and speaking skills through interactive lessons and engaging activities for young learners.",
    image: "/assets/reviews/blog-1.png",
  },
  {
    gradeLevel: "Primary 1",
    price: "Free",
    title: "Standard Class (ENGLISH + TAGALOG)",
    excerpt:
      "Comprehensive learning program covering core subjects with focus on English and Tagalog bilingual education.",
    image: "/assets/reviews/blog-4.png",
  },
  // Primary 2 - All 4 class types
  {
    gradeLevel: "Primary 2",
    price: "Free",
    title: "Global Class 1 (ENGLISH + MANDARIN)",
    excerpt: "Enhance vocabulary, grammar, and reading comprehension to build confident and effective communicators.",
    image: "/assets/reviews/blog-4.png",
  },
  {
    gradeLevel: "Primary 2",
    price: "S$60",
    title: "Standard Class (ENGLISH + TAGALOG)",
    excerpt:
      "Deepen understanding of addition, subtraction, and basic multiplication using visual aids and practice exercises.",
    image: "/assets/reviews/blog-5.png",
  },
  {
    gradeLevel: "Primary 2",
    price: "Free",
    title: "Global Class 3 (ENGLISH + FRENCH)",
    excerpt: "Learn about plants, animals, and their environments through exciting projects and hands-on activities.",
    image: "/assets/reviews/blog-6.png",
  },
  {
    gradeLevel: "Primary 2",
    price: "S$55",
    title: "Global Class 2 (ENGLISH + TAMIL)",
    excerpt: "Develop strong foundational skills in language and mathematics with engaging bilingual instruction.",
    image: "/assets/reviews/blog-7.png",
  },
  // Primary 3 - All 4 class types
  {
    gradeLevel: "Primary 3",
    price: "S$30",
    title: "Global Class 3 (ENGLISH + FRENCH)",
    excerpt: "Develop artistic expression through drawing, painting, and crafts while exploring colors and shapes.",
    image: "/assets/reviews/blog-7.png",
  },
  {
    gradeLevel: "Primary 3",
    price: "S$45",
    title: "Global Class 2 (ENGLISH + TAMIL)",
    excerpt:
      "Gain basic computer skills, from typing to safe internet use, tailored for young primary school students.",
    image: "/assets/reviews/blog-8.png",
  },
  {
    gradeLevel: "Primary 3",
    price: "S$50",
    title: "Standard Class (ENGLISH + TAGALOG)",
    excerpt: "Strengthen core competencies in language arts, mathematics, and sciences with bilingual instruction.",
    image: "/assets/reviews/blog-1.png",
  },
  {
    gradeLevel: "Primary 3",
    price: "S$48",
    title: "Global Class 1 (ENGLISH + MANDARIN)",
    excerpt: "Build advanced reading comprehension and creative writing skills in a supportive learning environment.",
    image: "/assets/reviews/blog-9.png",
  },
  // Primary 4 - All 4 class types
  {
    gradeLevel: "Primary 4",
    price: "Free",
    title: "Global Class 1 (ENGLISH + MANDARIN)",
    excerpt: "Promote physical health, teamwork, and coordination through guided exercises and games.",
    image: "/assets/reviews/blog-9.png",
  },
  {
    gradeLevel: "Primary 4",
    price: "S$55",
    title: "Standard Class (ENGLISH + TAGALOG)",
    excerpt: "Build strong mathematical foundations and problem-solving skills for upper primary levels.",
    image: "/assets/reviews/blog-2.png",
  },
  {
    gradeLevel: "Primary 4",
    price: "S$52",
    title: "Global Class 3 (ENGLISH + FRENCH)",
    excerpt: "Explore world cultures and languages through interactive lessons and multimedia resources.",
    image: "/assets/reviews/blog-3.png",
  },
  {
    gradeLevel: "Primary 4",
    price: "S$50",
    title: "Global Class 2 (ENGLISH + TAMIL)",
    excerpt: "Enhance critical thinking and analytical skills through engaging bilingual curriculum.",
    image: "/assets/reviews/blog-6.png",
  },
  // Primary 5 - All 4 class types
  {
    gradeLevel: "Primary 5",
    price: "S$70",
    title: "Standard Class (ENGLISH + TAGALOG)",
    excerpt: "Refine writing techniques, expand vocabulary, and prepare for upper primary examinations.",
    image: "/assets/reviews/blog-1.png",
  },
  {
    gradeLevel: "Primary 5",
    price: "S$65",
    title: "Global Class 2 (ENGLISH + TAMIL)",
    excerpt: "Develop critical thinking and advanced mathematical reasoning for challenging word problems.",
    image: "/assets/reviews/blog-3.png",
  },
  {
    gradeLevel: "Primary 5",
    price: "S$68",
    title: "Global Class 1 (ENGLISH + MANDARIN)",
    excerpt: "Prepare for PSLE with comprehensive review and advanced language skills development.",
    image: "/assets/reviews/blog-8.png",
  },
  {
    gradeLevel: "Primary 5",
    price: "S$72",
    title: "Global Class 3 (ENGLISH + FRENCH)",
    excerpt: "Master complex concepts in science and mathematics with international curriculum approach.",
    image: "/assets/reviews/blog-5.png",
  },
  // Primary 6 - Standard Class only
  {
    gradeLevel: "Primary 6",
    price: "S$80",
    title: "Standard Class (ENGLISH + TAGALOG)",
    excerpt: "Comprehensive preparation for Primary School Leaving Examination with intensive practice and revision.",
    image: "/assets/reviews/blog-4.png",
  },
  {
    gradeLevel: "Primary 6",
    price: "S$85",
    title: "Standard Class (ENGLISH + TAGALOG)",
    excerpt: "Complete PSLE mathematics revision covering all topics with exam strategies and time management.",
    image: "/assets/reviews/blog-5.png",
  },
  {
    gradeLevel: "Primary 6",
    price: "S$82",
    title: "Standard Class (ENGLISH + TAGALOG)",
    excerpt: "Intensive English language preparation focusing on composition, comprehension, and oral skills for PSLE.",
    image: "/assets/reviews/blog-2.png",
  },
];

const getAvailableClassTypes = (gradeLevel: string) => {
  const isPrimary1to5 = ["Primary 1", "Primary 2", "Primary 3", "Primary 4", "Primary 5"].includes(gradeLevel);

  if (isPrimary1to5) {
    return classTypes;
  } else {
    return [{ label: "Standard Class (ENGLISH + TAGALOG)", value: "Standard Class (ENGLISH + TAGALOG)" }];
  }
};

function PrimaryCourses() {
  const [selectedGradeLevel, setSelectedGradeLevel] = useState("");
  const [selectedClassType, setSelectedClassType] = useState("");

  const availableClassTypes = useMemo(() => getAvailableClassTypes(selectedGradeLevel), [selectedGradeLevel]);

  const handleGradeLevelChange = (level: string) => {
    setSelectedGradeLevel(level);
    // Reset class type if it's no longer available in the new grade level
    const available = getAvailableClassTypes(level);
    if (!available.some((ct) => ct.value === selectedClassType)) {
      setSelectedClassType("");
    }
  };

  const filteredCourses = useMemo(() => {
    return primarySchoolCourses.filter((course) => {
      const matchesGradeLevel = !selectedGradeLevel || course.gradeLevel === selectedGradeLevel;
      const matchesClassType = !selectedClassType || course.title === selectedClassType;
      return matchesGradeLevel && matchesClassType;
    });
  }, [selectedGradeLevel, selectedClassType]);

  return (
    <div className="max-w-7xl mx-auto space-y-10 p-4">
      {/* Primary Filter Section - ORANGE THEME */}
      <div className="bg-orange-50/30 p-8 rounded-3xl border border-orange-100 shadow-sm backdrop-blur-md space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-6 flex-1">
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-orange-600 flex items-center gap-2">
                <BookOpen size={14} /> Select Grade Level
              </label>
              <div className="flex flex-wrap gap-2 p-1.5 bg-orange-100/50 rounded-2xl w-fit">
                {gradeLevels.map((level) => (
                  <button
                    key={level.value}
                    onClick={() => handleGradeLevelChange(level.value)}
                    className={cn(
                      "px-4 py-2 rounded-xl text-sm font-bold transition-all",
                      selectedGradeLevel === level.value
                        ? "bg-white text-orange-600 shadow-sm"
                        : "text-orange-900/60 hover:text-orange-900"
                    )}>
                    {level.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-orange-600 flex items-center gap-2">
                <Filter size={14} /> Preferred Class Language
              </label>
              <div className="flex flex-wrap gap-2">
                {availableClassTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setSelectedClassType(selectedClassType === type.value ? "" : type.value)}
                    className={cn(
                      "px-4 py-2.5 rounded-xl text-xs font-bold border-2 transition-all duration-200",
                      selectedClassType === type.value
                        ? "border-orange-500 bg-orange-50 text-orange-600 shadow-inner"
                        : "border-slate-200 bg-white text-slate-600 hover:border-orange-200"
                    )}>
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Banner - ORANGE THEME */}
      <div className="relative group overflow-hidden bg-primary rounded-3xl p-8 shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 text-white">
          <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30 shrink-0">
            <Info size={28} />
          </div>
          <div>
            <h4 className="font-bold text-xl tracking-tight">Primary Curriculum Guide</h4>
            <p className="text-orange-50 text-sm opacity-90">
              Primary 1-5 offers all Global Classes. Primary 6 focuses on PSLE excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Grid and Card - ORANGE THEME */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((details, i) => (
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

              <div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-100">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Investment</span>
                  <span className="text-xl font-black text-slate-900">{details.price}</span>
                </div>
                {details.price === "Free" && (
                  <Badge className="bg-orange-100 text-orange-600 font-bold border-none">Limited</Badge>
                )}
              </div>
            </CardContent>

            <CardFooter className="pb-8 px-8">
              <Link
                target="_blank"
                to={"https://enrol.hfse.edu.sg/admission/dashboard"}
                className={buttonVariants({
                  className: "w-full !h-14 !rounded-2xl !font-black !shadow-lg !shadow-orange-200 text-white group",
                })}>
                Enroll Now
                <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default PrimaryCourses;
