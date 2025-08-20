import MaxWidthWrapper from "../components/max-width-wrapper";

import Testimonials from "../components/reviews/testimonials";
import { BASE_URL } from "../constants";
import SEO from "../seo";

function Reviews() {
  return (
    <>
      <SEO
        title="Student and Parent Reviews | VizSchool LMS Experience"
        description="Read reviews from students and parents who have experienced VizSchool LMS. See how our platform transforms learning into an engaging journey."
        canonical={`${BASE_URL}/reviews`}
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "ReviewsPage",
          name: "Reviews VizSchool LMS",
          url: `${BASE_URL}/reviews`,
        }}
      />

      <MaxWidthWrapper className="max-w-screen-xl">
        <Testimonials />
      </MaxWidthWrapper>
    </>
  );
}

export default Reviews;
