import { Globe, Laptop, Users } from "lucide-react";
import { Badge } from "../ui/badge";

const programs = [
  {
    icon: Globe,
    title: "VizIndie",
    description: "Flexible Virtual Schooling for Globally-Minded Families",
  },
  {
    icon: Laptop,
    title: "VizFlex",
    description: "Blended Support for Balanced Learners",
  },
  {
    icon: Users,
    title: "VizLive",
    description: "Full-Time Virtual Classroom Experience",
  },
];

export function Programs() {
  return (
    <div>
      <div className="max-w-(--breakpoint-xl) mx-auto px-6 text-center py-24">
        <Badge className="font-semibold">Our Programs</Badge>
        <h2 className="mt-5 max-w-4xl mx-auto text-4xl sm:text-5xl leading-[1.1] font-semibold tracking-tighter text-balance">
          Programs That Empower Every Learner to Excel
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          HFSE VizSchool offers a flexible, accredited online learning pathway that empowers students to learn from
          anywhere while staying connected to a vibrant global community. Each program is designed to match your
          family’s lifestyle, learning goals, and pace — ensuring that every child learns with joy, confidence, and
          purpose.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {programs.map((program) => (
            <div key={program.title} className="w-full sm:max-w-xs rounded-lg border bg-muted p-1">
              <div className="relative px-6 py-10 bg-card rounded-md border h-full overflow-hidden">
                <div className="relative z-1 flex flex-col items-center">
                  <program.icon className="size-12 text-primary" strokeWidth={1.75} />
                  <h3 className="mt-8 text-xl font-semibold tracking-tight">{program.title}</h3>
                  <p className="mt-3">{program.description}</p>
                </div>

                <PatternDashedTop />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
const PatternDashedTop = () => {
  return (
    <div
      className="absolute inset-0 -top-px -left-px z-0"
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
            radial-gradient(ellipse 70% 50% at 50% 0%, #000 60%, transparent 100%)
      `,
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    />
  );
};
