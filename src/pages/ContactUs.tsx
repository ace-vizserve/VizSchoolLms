import Contact from "../components/contact/contact";
import { BASE_URL } from "../constants";
import SEO from "../seo";

const ContactUs = () => {
  return (
    <>
      <SEO
        title="Contact VizSchool LMS | Get in Touch with Our Team"
        description="Reach out to VizSchool LMS for inquiries, support, or partnerships. Our friendly team is here to help you with your learning journey."
        canonical={`${BASE_URL}/contact-us`}
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact VizSchool LMS",
          url: `${BASE_URL}/contact-us`,
        }}
      />

      {/* Contact Form directly on landing */}
      <Contact />
    </>
  );
};

export default ContactUs;
