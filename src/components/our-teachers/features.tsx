import { Award, BookOpen, GraduationCap, HeartHandshake, MessageCircle, Users } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../ui/button";

const features = [
  {
    icon: GraduationCap,
    title: "Certified Educators",
    description:
      "Our teachers are qualified professionals with real classroom experience, bringing expertise and passion to every lesson.",
  },
  {
    icon: Users,
    title: "Mentors & Guides",
    description:
      "Beyond teaching, they coach and inspire—helping students build confidence, resilience, and a love for learning.",
  },
  {
    icon: HeartHandshake,
    title: "Student-Centered Approach",
    description:
      "Every teacher focuses on understanding each learner’s strengths and challenges, tailoring lessons to individual needs.",
  },
  {
    icon: BookOpen,
    title: "Engaging Lessons",
    description:
      "Through interactive content and practical examples, our teachers make complex topics simple and enjoyable.",
  },
  {
    icon: MessageCircle,
    title: "Open Communication",
    description:
      "Teachers stay connected with parents and students, ensuring progress is clear and support is always available.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description:
      "With consistent guidance and encouragement, our teachers help students achieve milestones and celebrate success.",
  },
];

function Features() {
  return (
    <div className="py-12 md:py-16">
      <h2 className="text-primary text-3xl sm:text-4xl font-extrabold tracking-tight text-center">
        Dedicated Teachers, Real Results
      </h2>
      <p className="text-pretty mt-4 text-center text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
        At VizSchool, our certified educators go beyond teaching—mentoring, guiding, and personalizing lessons to build
        confidence, foster communication, and drive lasting success.
      </p>
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
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-xl"></div>

            <Button size={"icon"} variant={"outline"} className="bg-primary/10">
              <feature.icon className="h-6 w-6 stroke-orange-500 stroke-2" />
            </Button>

            <span className="mt-3 text-lg font-bold text-orange-500 relative z-10">{feature.title}</span>

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
