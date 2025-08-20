import { motion } from "motion/react";
import { Link } from "react-router-dom";
import MaxWidthWrapper from "../components/max-width-wrapper";
import { BASE_URL } from "../constants";
import SEO from "../seo";

function Sitemap() {
  return (
    <>
      <SEO
        title="VizSchool LMS Sitemap | Navigate Our Learning Platform"
        description="View the complete sitemap for VizSchool LMS. Quickly navigate to our programmes, reviews, blog, FAQs, and contact information."
        canonical={`${BASE_URL}/sitemap`}
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "SitemapPage",
          name: "Sitemap VizSchool LMS",
          url: `${BASE_URL}/sitemap`,
        }}
      />
      <MaxWidthWrapper className="max-w-4xl min-h-full flex items-center justify-center">
        <div className="w-full space-y-10 md:space-y-12 py-16 md:py-20 lg:py-24">
          {/* Page Title */}
          <motion.h2
            initial={{ translateY: 10, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              duration: 0.25,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            viewport={{ amount: "all", once: true }}
            className="text-primary text-3xl md:text-4xl font-extrabold tracking-tighter">
            Sitemap
          </motion.h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Quick Links */}
            <div className="space-y-4 md:space-y-6">
              <motion.h2
                initial={{ translateY: 10, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{
                  delay: 0.15,
                  duration: 0.25,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                viewport={{ amount: "all", once: true }}
                className="text-primary text-lg md:text-xl font-extrabold tracking-tighter">
                Quick Links
              </motion.h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-gray-900">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-gray-900">
                    Why VizSchool?
                  </Link>
                </li>
                <li>
                  <Link to="/our-teachers" className="text-muted-foreground hover:text-gray-900">
                    Our Teachers
                  </Link>
                </li>
                <li>
                  <Link to="/reviews" className="text-muted-foreground hover:text-gray-900">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="text-muted-foreground hover:text-gray-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="text-muted-foreground hover:text-gray-900">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-muted-foreground hover:text-gray-900">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap" className="text-muted-foreground hover:text-gray-900">
                    Sitemap
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get Started */}
            <div className="space-y-6">
              <motion.h2
                initial={{ translateY: 10, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{
                  delay: 0.15,
                  duration: 0.25,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                viewport={{ amount: "all", once: true }}
                className="text-primary text-lg md:text-xl font-extrabold tracking-tighter">
                Get Started
              </motion.h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-gray-900">
                    Why VizSchool?
                  </Link>
                </li>
                <li>
                  <Link to="/our-teachers" className="text-muted-foreground hover:text-gray-900">
                    Teachers
                  </Link>
                </li>
                <li>
                  <Link to="/reviews" className="text-muted-foreground hover:text-gray-900">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="text-muted-foreground hover:text-gray-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="text-muted-foreground hover:text-gray-900">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-muted-foreground hover:text-gray-900">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Our Programmes */}
            <div className="space-y-6">
              <motion.h2
                initial={{ translateY: 10, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{
                  delay: 0.15,
                  duration: 0.25,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                viewport={{ amount: "all", once: true }}
                className="text-primary text-lg md:text-xl font-extrabold tracking-tighter">
                Our Programmes
              </motion.h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/primary-courses" className="text-muted-foreground hover:text-gray-900">
                    Primary
                  </Link>
                </li>
                <li>
                  <Link to="/secondary-courses" className="text-muted-foreground hover:text-gray-900">
                    Secondary
                  </Link>
                </li>
                <li>
                  <Link to="/enrichment-courses" className="text-muted-foreground hover:text-gray-900">
                    Enrichment
                  </Link>
                </li>
                <li>
                  <Link to="/our-programmes" className="text-muted-foreground hover:text-gray-900">
                    All Programmes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}

export default Sitemap;
