import { Award, BookOpen, GraduationCap, HeartHandshake, MessageCircle, Users } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../ui/button";

const features = [
  {
    icon: GraduationCap,
    title: "Certified Educators",
    description:
      "VizSchool teachers are qualified professionals with recognised credentials and real classroom experience. They bring subject expertise, structure, and enthusiasm to every online lesson.",
  },
  {
    icon: Users,
    title: "Mentors & Guides",
    description:
      "Beyond teaching academic content, our educators act as mentors. They coach students to build confidence, resilience, independence, and a genuine love for learning.",
  },
  {
    icon: HeartHandshake,
    title: "Student-Centered Approach",
    description:
      "Every lesson is designed around the learner. Teachers adapt instruction to suit individual learning styles, strengths, and areas for growth, ensuring meaningful progress for every student.",
  },
  {
    icon: BookOpen,
    title: "Engaging Lessons",
    description:
      "Through interactive activities, practical examples, and clear explanations, VizSchool teachers make complex concepts accessible, relevant, and enjoyable in an online setting.",
  },
  {
    icon: MessageCircle,
    title: "Open Communication",
    description:
      "Teachers maintain clear communication with both parents and students, providing regular feedback, progress updates, and timely academic support.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description:
      "With consistent encouragement and structured guidance, VizSchool teachers support learners in achieving academic milestones and celebrating personal successes.",
  },
];

function Features() {
  return (
    <div className="py-12 md:py-16">
      <h2 className="text-primary text-3xl sm:text-4xl font-extrabold tracking-tight text-center">
        Dedicated Teachers, Real Results
      </h2>
<div className="mt-4 text-center max-w-2xl mx-auto text-base md:text-lg text-muted-foreground space-y-6">
  <p className="text-pretty">
    VizSchool’s certified educators are committed to supporting every learner’s growth. Through consistent guidance, thoughtful mentoring, and personalised instruction, they help students develop both academically and personally.
  </p>

  <p className="text-pretty">
    Our teachers focus on understanding each learner’s strengths, challenges, and learning pace, ensuring that every child feels supported, motivated, and confident in their learning journey.
  </p>
</div>

      <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group flex flex-col relative overflow-hidden rounded-xl py-6 px-5 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
            }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff8930]/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-xl"></div>

            <Button size={"icon"} variant={"outline"} className="bg-primary/10">
              <feature.icon className="h-6 w-6 stroke-[#ff8930] stroke-2" />
            </Button>

            <span className="mt-3 text-lg font-bold text-[#ff8930] relative z-10">{feature.title}</span>

            <p className="mt-1 text-muted-foreground text-[15px] relative z-10 leading-relaxed">
              {feature.description}
            </p>

            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Features;