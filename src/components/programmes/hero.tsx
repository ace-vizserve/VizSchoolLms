import { CirclePlay } from "lucide-react";
import { motion } from "motion/react";
import { buttonVariants } from "../ui/button";

function Hero() {
  return (
    <div className="z-10 max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6">
      <div className="text-white">
        <div className="-space-y-1">
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
            className="mt-6 text-xl md:text-2xl font-bold">
            VizSchool
          </motion.h1>
          <motion.p
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
            className="font-extrabold text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl">
            Campus
          </motion.p>
        </div>
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
          className="mt-6 text-xl md:text-2xl font-bold">
          Engaging and effective learning made affordable
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
          }}
          className="mt-6 flex items-center gap-4">
          <a
            href="#sign-up"
            className={buttonVariants({
              size: "lg",
              className: "!hidden lg:!flex !text-base lg:!text-lg !font-extrabold !py-5 lg:!py-6 !w-2/5",
            })}>
            Sign up now
          </a>

          <a
            href="#watch-demo"
            className={buttonVariants({
              size: "lg",
              variant: "outline",
              className:
                "!text-base lg:!text-lg !font-extrabold !py-5 lg:!py-6 !w-2/5 !bg-white/10 !backdrop-blur-sm !border-white/20 hover:!bg-white/20 ! hover:!text-white",
            })}>
            <CirclePlay className="!h-5 !w-5" /> Watch Demo
          </a>
        </motion.div>
      </div>
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
        className="w-full aspect-video bg-cover rounded-4xl border-6 lg:border-8 border-primary"
        style={{
          backgroundImage: `url(/assets/programmes/programmes-hero.jpg)`,
        }}
      />
    </div>
  );
}

export default Hero;
