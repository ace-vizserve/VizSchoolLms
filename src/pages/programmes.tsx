import { Check } from "lucide-react";
import AcademicPathway from "../components/programmes/academic-pathway";
import Courses from "../components/programmes/courses";
import Hero from "../components/programmes/hero";
import HowItWorks from "../components/programmes/how-it-works";
import { Programs } from "../components/programmes/programs";
import AnimatedMeshGradient from "../components/ui/animated-mesh-gradient";
import { Badge } from "../components/ui/badge";
import { BASE_URL } from "../constants";
import { cn } from "../lib/utils";
import SEO from "../seo";

function Programmes() {
  return (
    <>
      <SEO
        title="Our Programmes | Innovative Learning for K-12 Students"
        description="Explore VizSchool LMS programmes — from core subjects to special courses. Designed to enhance learning for primary and secondary students."
        canonical={`${BASE_URL}/our-programmes`}
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "OurProgrammesPage",
          name: "Our Programmes VizSchool LMS",
          url: `${BASE_URL}/our-programmes`,
        }}
      />
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        <AnimatedMeshGradient primaryColor="#FD8735" secondaryColor="#007AFF" overlayOpacity={0.3} />
        <Hero />
      </div>
      <Features />
      <Programs />
      <AcademicPathway />
      <div className="flex flex-col gap-12 md:gap-16 lg:gap-20 py-14 md:py-20">
        <Courses />
        <HowItWorks />
      </div>
    </>
  );
}

const features = [
  {
    category: "VizIndie",
    title: "Independent Learning with Guided Support ",
    details: "VizIndie is ideal for self-motivated learners who prefer a self-paced approach while benefiting from structured guidance and academic oversight.",
    imageUrl: "/assets/programmes/programmes-1.jpg",
    listTitle: "Why Choose VizIndie?",
    listContent: [
      "Full flexibility in learning schedule and pace.",
      "Access to curated learning modules, high-quality teaching notes, and assessments.",
      "Optional academic mentoring with quarterly progress check-ins.",
    ],
  },
  {
    category: "VizFlex",
    title: "Blended Support for Balanced Learners",
    details: "VizFlex offers a balanced approach to virtual schooling by combining independent study with live teacher interaction. It is designed for families who want structure alongside flexibility.",
    imageUrl: "/assets/programmes/programmes-3.jpeg",
    listTitle: "Is VizFlex Right for Your Family? ",
    listContent: [
      "Flexible schedules supported by weekly learning plans.",
      "Curated modules, teaching notes, and guided assessments.",
      "Live sessions, feedback, and optional academic mentoring.",
    ],
  },
  {
    category: "VizLive",
    title: "Full-Time Virtual Classroom Experience",
    details: "VizLive is a full-time virtual school programme for students who thrive in interactive, structured learning environments with daily live lessons.",
    imageUrl: "/assets/programmes/programmes-2.jpeg",
    listTitle: "Ideal for Learners Who Enjoy Live Online Sessions",
    listContent: [
      "Daily live classes led by qualified HFSE teachers.",
      "Structured schedules that promote consistency and discipline.",
      "Access to curated modules, teaching notes, and continuous assessments.",
      "Ongoing academic mentoring and personalised support.",
    ],
  },
];

function Features() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 md:py-20 lg:py-24 px-6 ">
      <div className="max-w-screen-lg w-full">
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20 lg:space-y-28">
          {features.map((feature, idx) => (
            <div
              key={feature.category}
              className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse">
              <div
                style={{
                  backgroundImage: `url(${feature.imageUrl})`,
                }}
                className={cn("w-full aspect-[4/2] rounded-xl basis-1/2 bg-cover", {
                  "brightness-125": idx === 0,
                })}
              />
              <div className="basis-1/2 shrink-0">
                <Badge className="uppercase font-semibold text-2xl">{feature.category}</Badge>
                <h4 className="my-3 text-xl font-semibold tracking-tight">{feature.title}</h4>
                <p className="text-muted-foreground text-[17px]">{feature.details}</p>

                <h5 className="mt-8 mb-5 text-xl font-bold text-foreground tracking-tight">{feature.listTitle}</h5>

                <ul className="space-y-4">
                  {feature.listContent.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="mt-0.5 rounded-full bg-primary/10 p-1 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Check className="size-5 text-primary" strokeWidth={3} />
                      </div>
                      <span className="text-foreground/80 text-[16px] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programmes;
