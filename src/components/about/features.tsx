import Lottie from "lottie-react";
import { motion } from "motion/react";
import kidStudying from "../../../public/assets/about/kid-studying.json";
import MaxWidthWrapper from "../max-width-wrapper";

import OurStory from "./our-story";

const features = [
  {
    title: "About Us",
    details:
      "HFSE VizSchool is the virtual learning arm of HFSE International School, a pioneering international school in Singapore founded by and for global migrant families. It was created to extend HFSE’s mission of being an International School for All offering accessible, technology-enabled, and values-based education that transcends borders. Guided by the HAPI values — Happy, Humble, Assertive, Appreciative, Productive, Proactive, Independent, and Interdependent — VizSchool empowers learners around the world to thrive academically and emotionally while staying connected to their identity, family, and global community.",
    tutorialLink: "#",
    asset: kidStudying,
  },
  {
    category: "To be the Leading Virtual School Empowering Global Citizens",
    title: "💡 Our Mission",
    details:
      "VizSchool shapes lifelong learners with empathy, integrity, and innovation—global citizens committed to building communities, bridging differences, and creating meaningful legacies that inspire generations to come.",
    tutorialLink: "#",
    assetUrl: "/assets/about/kid.png",
  },
  {
    category: "To Shape Global Citizens Who Create a Meaningful Legacy",
    title: "👩‍🏫 Our Vision",
    details:
      "VizSchool envisions a borderless world of learning, empowering global citizens to grow in knowledge, values, and purpose—ready to lead, connect, and create positive change across cultures.",
    tutorialLink: "#",
    assetUrl: "/assets/about/lady.png",
  },
];

function Features() {
  return (
    <MaxWidthWrapper className="min-h-screen py-16 md:py-20 lg:py-24">
      <OurStory />
      <div className="flex items-center justify-center ">
        <div className="mt-8 md:mt-16 max-w-screen-lg w-full py-10 px-6">
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
          <div className="w-full mx-auto space-y-16 md:space-y-24 lg:space-y-32">
            {features.map((feature, idx) =>
              idx === 0 ? (
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
                    animationData={feature.asset}
                    loop={true}
                  />

                  <div className="basis-1/2 shrink-0">
                    <h4 className="my-3 text-2xl md:text-3xl font-bold tracking-tight text-primary">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm md:text-[17px]">{feature.details}</p>
                  </div>
                </motion.div>
              ) : (
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
                    <div className="text-xs uppercase font-bold inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-4 border border-primary text-primary">
                      {feature.category}
                    </div>
                    <h4 className="my-3 text-2xl md:text-3xl font-bold tracking-tight">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm md:text-[17px]">{feature.details}</p>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 md:mt-32 text-center">
        <div className="bg-primary rounded-3xl p-8 md:p-12 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students learning at their own pace with VizSchool
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
            Get Started Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Features;
