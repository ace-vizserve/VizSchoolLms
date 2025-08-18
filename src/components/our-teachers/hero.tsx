import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Marquee } from "../magicui/marquee";
import AnimatedMeshGradient from "../ui/animated-mesh-gradient";
import { Button } from "../ui/button";

interface Tutor {
  id: number;
  name: string;
  title: string;
  image: string;
  uniqueKey?: string;
}

interface TutorCardProps {
  name: string;
  title: string;
  image: string;
  uniqueKey: string;
}

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  const tutors: Tutor[] = [
    { id: 1, name: "Joe Johnson", title: "Mathematics Expert", image: "/assets/our-tutors/teacher-1.webp" },
    { id: 2, name: "Michelle Chen", title: "Physics Specialist", image: "/assets/our-tutors/teacher-2.webp" },
    { id: 3, name: "Emily Rodriguez", title: "Chemistry Master", image: "/assets/our-tutors/teacher-3.webp" },
    { id: 4, name: "Lisa Thompson", title: "Biology Expert", image: "/assets/our-tutors/teacher-4.png" },
    { id: 5, name: "David Kim", title: "English Literature", image: "/assets/our-tutors/teacher-5.png" },
  ];

  const infiniteTutors = [...tutors, ...tutors].map((tutor, index) => ({
    ...tutor,
    uniqueKey: `${tutor.id}-${index}`,
  }));

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const TutorCard = ({ name, title, image, uniqueKey }: TutorCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        key={uniqueKey}
        className="relative bg-gradient-to-br from-white/25 to-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl p-4 text-white flex flex-col w-full h-[420px] my-4 shadow-2xl transition-all duration-700 hover:scale-105 group overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(255, 165, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)"
            : "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        }}>
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-blue-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + i}s`,
              }}
            />
          ))}
        </div>

        {/* Card header with enhanced controls */}
        <div className="flex justify-between w-full mb-4 relative z-10">
          <div className="flex items-center space-x-2">
            <div className="h-1 w-8 bg-white/40 rounded-full transition-all duration-300 group-hover:bg-white/60"></div>
            <div className="h-1 w-1 bg-white/40 rounded-full transition-all duration-300 group-hover:bg-white/60"></div>
          </div>
          <div className="flex space-x-2">
            <span
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                isHovered ? "bg-green-400 shadow-lg shadow-green-400/50" : "bg-white/30"
              }`}></span>
            <span
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                isHovered ? "bg-orange-400 shadow-lg shadow-orange-400/50" : "bg-white/30"
              }`}></span>
            <span
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                isHovered ? "bg-blue-400 shadow-lg shadow-blue-400/50" : "bg-white/30"
              }`}></span>
          </div>
        </div>

        {/* Image container */}
        <div className="relative w-full flex-1 overflow-hidden rounded-2xl border-2 border-white/40 bg-gradient-to-b from-orange-800/20 to-blue-900/20 shadow-2xl transition-all duration-500">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-400/20 via-blue-400/10 to-transparent opacity-100 transition-opacity duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-100 transition-opacity duration-500" />

          {/* Main image */}
          <img
            src={image}
            alt={`${name} - ${title}`}
            className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Enhanced content section */}
        <div className="text-center mt-4 px-2 relative z-10">
          <h3 className="text-lg font-bold mb-1 group-hover:text-white transition-colors duration-300">{name}</h3>
          <p className="text-xs uppercase tracking-wider text-white/80 font-medium mb-2 group-hover:text-white/90 transition-colors duration-300">
            {title}
          </p>
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium border border-white/20 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300">
            <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
            <span>Available</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedMeshGradient />

      {/* CSS Styles for animations */}
      <style>{`
        @keyframes slideUpSmooth {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .carousel-vertical {
          animation: slideUpSmooth ${infiniteTutors.length * 4}s linear infinite;
          display: flex;
          flex-direction: column;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-orange-400/10 to-blue-400/10 blur-xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-40 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-blue-400/10 to-orange-400/10 blur-xl"
        />
      </div>

      <div className="min-h-screen py-16 xl:py-0 grid gap-8 xl:gap-0 relative z-10 max-w-screen-xl w-full mx-auto xl:grid-cols-2 px-6 md:px-8">
        <div className="self-center space-y-8">
          {/* Enhanced badge */}
          <motion.div
            initial={{ translateY: 20, opacity: 0, scale: 0.8 }}
            whileInView={{ translateY: 0, opacity: 1, scale: 1 }}
            transition={{
              delay: 0.1,
              duration: 0.6,
              type: "spring",
              bounce: 0.4,
            }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-orange-100/90 to-blue-100/90 backdrop-blur-md border border-orange-200/60 shadow-lg shadow-orange-100/20">
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <Sparkles className="w-4 h-4 text-orange-600" />
            </motion.div>
            <span className="text-sm font-bold text-orange-700">Premium Tutoring Experience</span>
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          </motion.div>

          {/* Enhanced heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ translateY: 30, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{
                delay: 0.25,
                duration: 0.8,
                type: "spring",
                bounce: 0.3,
              }}
              viewport={{ once: true }}
              className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black !leading-[1.1] tracking-tight">
              Meet Our{" "}
              <span className="relative text-white">
                Expert
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full"
                />
              </span>{" "}
              Teachers
            </motion.h1>
          </div>

          {/* Enhanced description */}
          <motion.p
            initial={{ translateY: 30, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              type: "spring",
              bounce: 0.2,
            }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-white/90 leading-relaxed max-w-[55ch] font-medium">
            At VizSchool, our tutors don't just teach—they <span className="text-orange-200 font-semibold">mentor</span>
            , <span className="text-blue-200 font-semibold">guide</span>, and{" "}
            <span className="text-orange-200 font-semibold">inspire</span> every learner. With real classroom expertise
            and cutting-edge tools, they deliver transformative, personalized learning experiences.
          </motion.p>

          {/* Enhanced CTA button */}
          <motion.div
            initial={{ translateY: 30, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.75,
              duration: 0.8,
              type: "spring",
              bounce: 0.2,
            }}
            viewport={{ once: true }}
            className="pt-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="text-base font-bold py-7 px-8 gap-3 bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 shadow-xl shadow-orange-500/25 border-0">
                Explore Our Courses
                <ArrowUpRight className="size-5 stroke-3" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <Marquee
          pauseOnHover
          vertical
          className={`[--duration:100s] flex justify-center w-full max-h-screen mx-auto xl:mx-0 lg:w-1/2 xl:ml-auto lg:self-end self-center ${
            isLoaded ? "animate-fade-in-up" : "opacity-0"
          }`}>
          {infiniteTutors.map((tutor) => (
            <TutorCard key={tutor.id} {...tutor} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Hero;
