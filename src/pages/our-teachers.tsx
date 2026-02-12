import MaxWidthWrapper from "../components/max-width-wrapper";
import Features from "../components/our-teachers/features";
import Hero from "../components/our-teachers/hero";
import Stats from "../components/our-teachers/stats";
import { BASE_URL } from "../constants";
import SEO from "../seo";

function OurTeachers() {
  return (
    <>
      <SEO
        title="VizSchool Teachers: Certified Educators Guiding Every Learner"
        description="Meet VizSchool’s certified teachers and mentors. Experienced online educators delivering personalised, student-centred learning for global families."
        canonical={`${BASE_URL}/vizschool-teachers-expert-educators`}
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "OurTeachersPage",
          name: "Our Teachers VizSchool LMS",
          url: `${BASE_URL}/vizschool-teachers-expert-educators`,
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
