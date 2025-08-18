import MaxWidthWrapper from "../components/max-width-wrapper";
import Features from "../components/our-tutors/features";
import Hero from "../components/our-tutors/hero";
import Stats from "../components/our-tutors/stats";
import SEO from "../seo";

function OurTutors() {
  return (
    <>
      <SEO
        title="Our Tutors | Expert Educators at VizSchool"
        description="Meet the passionate, certified educators behind VizSchool. Our tutors mentor, guide, and inspire K–12 learners through engaging, personalized online lessons."
        canonical="https://yourdomain.com/our-tutors"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Our Tutors",
          url: "https://yourdomain.com/our-tutors",
          description:
            "Meet the passionate, certified educators behind VizSchool. Our tutors mentor, guide, and inspire K–12 learners through engaging, personalized online lessons.",
        }}
      />
      <Hero />

      <MaxWidthWrapper className="max-w-screen-xl py-20 lg:py-24 space-y-12 md:space-y-16 lg:space-y-20">
        <Features />
        <Stats />
      </MaxWidthWrapper>
    </>
  );
}

export default OurTutors;
