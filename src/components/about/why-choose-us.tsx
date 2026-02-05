import {
  Clock,
  FileCheck,
  GraduationCap,
  HeartHandshake,
  NotebookText,
  ShieldCheck,
  Sliders,
  Sparkles,
} from "lucide-react";
import { Badge } from "../ui/badge";

const plusPoints = [
  {
    icon: ShieldCheck,
    title: "Flexible Learning",
    description: "Self-paced homeschooling with structured support options.",
  },
  {
    icon: Clock,
    title: "Catch-Up Opportunities",
    description: "The Bridging Programme helps late enrollees stay aligned with their grade level.",
  },
  {
    icon: HeartHandshake,
    title: "Holistic Development",
    description: "Students join co-curricular activities that build character and confidence.",
  },
  {
    icon: FileCheck,
    title: "Rigorous Assessments",
    description: "Examinations follow Singapore standards to ensure academic consistency.",
  },
  {
    icon: Sparkles,
    title: "Engaging Lessons",
    description: "Interactive classes inspire curiosity and make learning more meaningful.",
  },
  {
    icon: Sliders,
    title: "Personalized Teaching",
    description: "Lessons are tailored to each learner’s pace, strengths, and learning style.",
  },
  {
    icon: GraduationCap,
    title: "Qualified Teachers",
    description: "Full-time educators guide students with experience, care, and dedication.",
  },
  {
    icon: NotebookText,
    title: "Comprehensive Materials",
    description: "Well-crafted notes and worksheets reinforce mastery and independent study.",
  },
];

export function WhyChooseUs() {
  return (
    <div id="why-choose-us" className="max-w-(--breakpoint-xl) mx-auto px-6 text-center pt-16 md:pt-20 lg:pt-24">
      <Badge className="px-4 text-base font-semibold">Why Choose Us</Badge>
      <h2 className="mt-5 max-w-4xl mx-auto text-4xl sm:text-5xl leading-[1.1] font-semibold tracking-tighter text-balance">
        Shaping the Future of Smart and Flexible Learning
      </h2>
      <p className="mt-5 text-lg text-muted-foreground">
        At HFSE VizSchool, learning knows no boundaries. We combine flexibility with structure, ensuring every learner,
        wherever they are, receives a quality, holistic, and globally aligned education designed for success.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 justify-center">
        {plusPoints.map((plusPoint) => (
          <div
            key={plusPoint.title}
            className="relative overflow-hidden border rounded-lg px-6 py-10 w-full flex flex-col items-center gap-2 bg-gradient-to-b from-primary/3">
            <BackgroundPattern />

            <plusPoint.icon className="size-14 stroke-[1.5px] text-primary" />
            <h3 className="mt-6 text-xl font-semibold">{plusPoint.title}</h3>
            <p className="text-muted-foreground text-balance">{plusPoint.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function BackgroundPattern() {
  return (
    <div
      className="absolute inset-0 -top-px -left-px -z-1"
      style={{
        backgroundImage: `
        linear-gradient(to right, var(--border) 1px, transparent 1px),
        linear-gradient(to bottom, var(--border) 1px, transparent 1px)
      `,
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 0 0",
        maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
        WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    />
  );
}
