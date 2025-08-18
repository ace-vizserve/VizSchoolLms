import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import AnimatedMeshGradient from "../ui/animated-mesh-gradient";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden px-6 md:px-8">
      <AnimatedMeshGradient />
      <div className="min-h-screen py-16 xl:py-0 grid relative z-10 max-w-screen-xl w-full mx-auto xl:grid-cols-2 gap-6">
        <div className="self-center">
          <motion.div
            initial={{ translateY: 10, opacity: 0, scale: 0.9 }}
            whileInView={{ translateY: 0, opacity: 1, scale: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.4,
              type: "spring",
              bounce: 0.4,
            }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100/80 to-blue-100/80 backdrop-blur-sm border border-orange-200/50 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-orange-700">Premium Tutoring Experience</span>
          </motion.div>
          <motion.h1
            initial={{ translateY: 10, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.25,
              duration: 0.25,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            viewport={{
              once: true,
            }}
            className="text-white max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-extrabold !leading-[1.2] tracking-tight">
            Our Tutors
          </motion.h1>
          <motion.p
            initial={{ translateY: 10, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.25,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            viewport={{
              once: true,
            }}
            className="mt-6 max-w-[60ch] text-base md:text-lg text-white">
            At VizSchool, our tutors do more than teach—they mentor, guide, and inspire every learner. With real
            classroom expertise and innovative tools, they deliver engaging, personalized lessons that build confidence,
            skills, and a love for learning.
          </motion.p>
          <motion.div
            initial={{ translateY: 10, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.75,
              duration: 0.25,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            viewport={{
              once: true,
            }}>
            <Button size="lg" className="mt-8 text-sm lg:text-base font-extrabold py-6 lg:py-7 gap-2">
              Explore our courses
              <ArrowUpRight className="size-5 stroke-3" />
            </Button>
          </motion.div>
        </div>

        <div className="self-center h-full max-h-[768px] pt-10 md:pt-16 lg:pt-24 grid grid-cols-1 md:grid-cols-2 gap-6 w-full rounded-xl lg:rounded-none">
          <motion.div
            initial={{ translateY: 10, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.25,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            viewport={{
              once: true,
            }}
            className="w-full self-center lg:self-start h-full max-h-[360px] flex items-end bg-white/20 backdrop-blur-2xl border border-white/20 rounded-3xl">
            <img
              className="aspect-[4/3] md:aspect-square w-full h-auto object-cover"
              src="/assets/our-tutors/teacher-1.webp"
            />
          </motion.div>

          <motion.div
            initial={{ translateY: 10, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.85,
              duration: 0.25,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            viewport={{ once: true }}
            className="w-full max-h-[360px] h-full self-center lg:self-center flex items-end px-4 bg-white/20 backdrop-blur-2xl border border-white/20 rounded-3xl">
            <img
              src="/assets/our-tutors/teacher-2.webp"
              alt="VizSchool Tutor"
              className="aspect-[4/3] md:aspect-square w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
