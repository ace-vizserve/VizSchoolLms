import MaxWidthWrapper from "../components/max-width-wrapper";

import Testimonials from "../components/reviews/testimonials";
import { BASE_URL } from "../constants";
import SEO from "../seo";

function Reviews() {
  return (
    <>
      <SEO
        title="Reviews & Testimonials | VizSchool"
        description="Read genuine reviews and testimonials from VizSchool students and parents about their learning experience and academic growth."
        canonical={`${BASE_URL}/vizschool-reviews-testimonials`}
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "ReviewsPage",
          name: "Reviews VizSchool LMS",
          url: `${BASE_URL}/vizschool-reviews-testimonials`,
        }}
      />

      <MaxWidthWrapper className="max-w-screen-xl">
        <Testimonials />
      </MaxWidthWrapper>
    </>
  );
}

export default Reviews;
