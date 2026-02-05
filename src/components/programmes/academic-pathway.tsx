import { ArrowRight, Check, GraduationCap, TrendingUp } from "lucide-react";

export default function AcademicPathway() {
  const learningPoints = [
    {
      icon: GraduationCap,
      title: "Preschool to Secondary Levels",
      content:
        "Programmes follow the HFSE curriculum framework mapped to the Singapore syllabus and international benchmarks.",
    },
    {
      icon: TrendingUp,
      title: "Progressive Evaluation",
      content:
        "Students undergo formative and summative assessments each term to monitor academic development and holistic growth.",
    },
    {
      icon: ArrowRight,
      title: "Promotion Criteria",
      content:
        "Successful completion of each level qualifies learners for promotion to the next grade or transition to on-site schooling within the HFSE network.",
    },
  ];

  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-10 lg:px-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-lg mb-6">
            <GraduationCap className="w-5 h-5" />
            <span>Educational Excellence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
            Academic Pathway
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            HFSE VizSchool provides a structured yet flexible learning journey designed to nurture independence,
            discipline, and academic excellence from early years to secondary levels.
          </p>
        </div>

        <div className="mt-20 md:mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">Learning Progression</h2>
            <p className="text-muted-foreground text-lg">A comprehensive framework for continuous academic growth</p>
          </div>

          <ul className="space-y-6 max-w-4xl mx-auto">
            {learningPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <li
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative flex items-start gap-5 p-6 md:p-8">
                    <div className="flex-shrink-0 mt-1">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150" />
                        <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          <Icon className="w-6 h-6" strokeWidth={2.5} />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-[17px] md:text-lg text-foreground leading-relaxed">
                        <span className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {point.title}:{" "}
                        </span>
                        <span className="text-muted-foreground">{point.content}</span>
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/5 border border-primary/20">
            <Check className="w-5 h-5 text-primary" strokeWidth={2.5} />
            <p className="text-sm md:text-base text-foreground font-medium">
              Seamless progression aligned with international standards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
