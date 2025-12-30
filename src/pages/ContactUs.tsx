import Contact from "../components/contact/contact";
import MaxWidthWrapper from "../components/max-width-wrapper";
import AnimatedMeshGradient from "../components/ui/animated-mesh-gradient";
import { Badge } from "../components/ui/badge";
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
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <AnimatedMeshGradient primaryColor="#FD8735" secondaryColor="#007AFF" overlayOpacity={0.3} />
        
        {/* Foreground Content */}
        <MaxWidthWrapper className="relative z-10 space-y-6 text-center text-white">
          <Badge className="font-semibold rounded-full py-1 border-none bg-white/20 backdrop-blur-sm">
            Get in Touch
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">We'd love to hear from you</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Whether you have a question, feedback, or just want to say hello, our team is ready to help.
          </p>
          <div className="flex items-center justify-center gap-4"></div>
        </MaxWidthWrapper>
      </div>
      <Contact />
    </>
  );
};

export default ContactUs;
