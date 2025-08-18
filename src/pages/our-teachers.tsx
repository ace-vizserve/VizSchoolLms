import MaxWidthWrapper from "../components/max-width-wrapper";
import Features from "../components/our-teachers/features";
import Hero from "../components/our-teachers/hero";
import Stats from "../components/our-teachers/stats";
import SEO from "../seo";

function OurTeachers() {
  return (
    <>
      <SEO
        title="Our Teachers | Expert Educators at VizSchool"
        description="Meet the passionate, certified educators behind VizSchool. Our teachers mentor, guide, and inspire K–12 learners through engaging, personalized online lessons."
        canonical="https://yourdomain.com/our-teachers"
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Our Teachers",
          url: "https://yourdomain.com/our-teachers",
          description:
            "Meet the passionate, certified educators behind VizSchool. Our teachers mentor, guide, and inspire K–12 learners through engaging, personalized online lessons.",
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

export default OurTeachers;
