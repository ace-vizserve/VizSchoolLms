import Lottie from "lottie-react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import kidStudying from "../../../public/assets/about/kid-studying.json";
import MaxWidthWrapper from "../max-width-wrapper";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const features = [
  {
    category: "Our Mission",
    title: "💡 Why VizSchool?",
    details:
      "At VizSchool, we believe that education should be flexible, empowering, and accessible to every student. That’s why we offer a unique learning experience designed to meet learners where they are—at home, on the go, or anywhere in between.Every completed course comes with a Certificate of Completion, helping learners celebrate progress and showcase their achievements. And because we’re built with both students and families in mind, our easy-to-use tools make it simple for parents to stay involved and track their child’s growth.",
    tutorialLink: "#",
    assetUrl: "/assets/about/kid.png",
  },
  {
    category: "Education & Tutoring",
    title: "👩‍🏫 Our Teachers",
    details:
      "Behind every VizSchool course is a team of passionate, certified educators—many from HFSE International School—who bring real classroom experience to the digital world. They're not just instructors; they’re mentors, focused on making each lesson engaging, relatable, and tailored to every learner's needs.Through interactive content, personalized feedback, and consistent guidance, our tutors go beyond teaching. With VizSchool, your child is never learning alone.",
    tutorialLink: "#",
    assetUrl: "/assets/about/lady.png",
  },
  {
    category: "About VizSchool",
    title: "About Us",
    details:
      "VizSchool is a modern learning platform built to support K–12 students with high-quality, engaging, and flexible online education Designed with the vision of making learning accessible beyond the four walls of a classroom, VizSchool offers a curated catalog of courses—from academic enrichment to special skills and self-paced programs.In partnership with HFSE International School, we aim to bridge traditional learning with digital innovation—preparing students not just for exams, but for the real world. Whether you're catching up, leveling up, or exploring new interests, VizSchool is your second school—right at your fingertips.",
    tutorialLink: "#",
    asset: kidStudying,
  },
];

function Features() {
  return (
    <MaxWidthWrapper className="min-h-screen flex items-center justify-center py-16 md:py-20 lg:py-24">
      <div className="max-w-screen-lg w-full py-10 px-6">
        <motion.h2
          initial={{ translateY: 10, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{
            duration: 0.25,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          viewport={{
            once: true,
          }}
          className="text-primary text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl md:text-center md:mx-auto">
          Your Learning. Your Pace. Your Future.
        </motion.h2>
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-16 md:space-y-24 lg:space-y-32">
          {features.slice(0, 2).map((feature, idx) => (
            <motion.div
              initial={{ translateY: 10, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: 0.15 % idx,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
              viewport={{
                once: true,
              }}
              key={feature.category}
              className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse">
              <div
                style={{ backgroundImage: `url(${feature.assetUrl})` }}
                className="w-full aspect-square bg-cover rounded-xl border border-border/50 basis-1/2"
              />
              <div className="basis-1/2 shrink-0">
                <Badge variant={"outline"} className="uppercase font-semibold">
                  {feature.category}
                </Badge>
                <h4 className="my-3 text-2xl md:text-3xl font-bold tracking-tight">{feature.title}</h4>
                <p className="text-muted-foreground text-sm md:text-[17px]">{feature.details}</p>
                <Button asChild className="mt-6 rounded-full min-w-40 text-[15px]">
                  <Link to={feature.tutorialLink}>
                    Learn More <ArrowRight />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ translateY: 10, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              duration: 0.25,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            viewport={{
              once: true,
            }}
            className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse">
            <Lottie
              className="w-full aspect-square bg-cover rounded-xl basis-1/2"
              animationData={features[2].asset}
              loop={true}
            />

            <div className="basis-1/2 shrink-0">
              <Badge variant={"outline"} className="uppercase font-semibold">
                {features[2].category}
              </Badge>
              <h4 className="my-3 text-2xl md:text-3xl font-bold tracking-tight">{features[2].title}</h4>
              <p className="text-muted-foreground text-sm md:text-[17px]">{features[2].details}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Features;
