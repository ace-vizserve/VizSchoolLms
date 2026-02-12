import Contact from "../components/contact/contact";
import { BASE_URL } from "../constants";
import SEO from "../seo";

const ContactUs = () => {
  return (
    <>
      <SEO
        title="Contact VizSchool: Admissions, Inquiries & Support"
        description="Contact VizSchool for inquiries, admissions support, and more. Reach our team via phone, email, or visit us for assistance."
        canonical={`${BASE_URL}/contact-vizschool-admissions`}
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact VizSchool LMS",
          url: `${BASE_URL}/contact-vizschool-admissions`,
        }}
      />

      {/* Contact Form directly on landing */}
      <Contact />
    </>
  );
};

export default ContactUs;
