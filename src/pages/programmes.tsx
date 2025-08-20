import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import EnrollNowCTA, { EnrollNowCTAMobile } from "../components/programmes/enroll-now-cta";

import Courses from "../components/programmes/courses";
import Hero from "../components/programmes/hero";
import HowItWorks from "../components/programmes/how-it-works";
import AnimatedMeshGradient from "../components/ui/animated-mesh-gradient";
import { Button } from "../components/ui/button";
import { BASE_URL } from "../constants";
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
      <EnrollNowCTA />
      <EnrollNowCTAMobile />
      <Features />
      <div className="flex flex-col gap-12 md:gap-16 lg:gap-20 py-14 md:py-20">
        <Courses />
        <HowItWorks />
      </div>
    </>
  );
}

const features = [
  {
    category: "Learning Experience",
    title: "Engage in interactive online classes",
    details:
      "Join live virtual lessons with real-time discussions, shared screens, and collaborative tools—making online learning as dynamic and engaging as being in a physical classroom.",
    tutorialLink: "#",
    imageUrl: "/assets/programmes/programmes-1.jpeg",
  },
  {
    category: "Progress Tracking",
    title: "See growth through easy-to-read reports",
    details:
      "Every class activity is automatically recorded and turned into simple, visual progress reports—helping parents and students stay on track with their learning goals.",
    tutorialLink: "#",
    imageUrl: "/assets/programmes/programmes-2.jpeg",
  },
  {
    category: "Teacher Support",
    title: "Get help beyond class hours",
    details:
      "Experienced teachers provide week-long support through chat, personalised feedback, and extra resources—so learning continues even after the live session ends.",
    tutorialLink: "#",
    imageUrl: "/assets/programmes/programmes-3.jpeg",
  },
];

function Features() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 md:py-20 lg:py-24 px-6">
      <div className="max-w-screen-lg w-full">
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20 lg:space-y-28">
          {features.map((feature) => (
            <div
              key={feature.category}
              className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse">
              <div
                style={{
                  backgroundImage: `url(${feature.imageUrl})`,
                }}
                className="w-full aspect-[4/2] rounded-xl basis-1/2 bg-cover"
              />
              <div className="basis-1/2 shrink-0">
                <span className="uppercase font-semibold text-sm text-muted-foreground">{feature.category}</span>
                <h4 className="my-3 text-3xl font-semibold tracking-tight">{feature.title}</h4>
                <p className="text-muted-foreground text-[17px]">{feature.details}</p>
                <Button asChild className="mt-6 rounded-full min-w-40 text-[15px]">
                  <Link to={feature.tutorialLink}>
                    Learn More <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programmes;
