import { motion } from "motion/react";
import { Link } from "react-router-dom";
import MaxWidthWrapper from "../components/max-width-wrapper";
import { BASE_URL } from "../constants";
import SEO from "../seo";

function Sitemap() {
  return (
    <>
      <SEO
        title="Sitemap | VizSchool"
        description="Explore the VizSchool sitemap to quickly find pages, programmes, and information across the VizSchool website."
        canonical={`${BASE_URL}/vizschool-sitemap`}
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "SitemapPage",
          name: "Sitemap VizSchool LMS",
          url: `${BASE_URL}/vizschool-sitemap`,
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
                  <Link to="/about-vizschool-virtual-learning" className="text-muted-foreground hover:text-gray-900">
                    Why VizSchool?
                  </Link>
                </li>
                <li>
                  <Link to="/vizschool-teachers-expert-educators" className="text-muted-foreground hover:text-gray-900">
                    Our Teachers
                  </Link>
                </li>
                <li>
                  <Link to="/vizschool-reviews-testimonials" className="text-muted-foreground hover:text-gray-900">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    to="/vizschool-blog-latest-education-news"
                    className="text-muted-foreground hover:text-gray-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact-vizschool-admissions" className="text-muted-foreground hover:text-gray-900">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/vizschool-frequently-asked-questions"
                    className="text-muted-foreground hover:text-gray-900">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/vizschool-sitemap" className="text-muted-foreground hover:text-gray-900">
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
                  <Link to="/about-vizschool-virtual-learning" className="text-muted-foreground hover:text-gray-900">
                    Why VizSchool?
                  </Link>
                </li>
                <li>
                  <Link to="/vizschool-teachers-expert-educators" className="text-muted-foreground hover:text-gray-900">
                    Teachers
                  </Link>
                </li>
                <li>
                  <Link to="/vizschool-reviews-testimonials" className="text-muted-foreground hover:text-gray-900">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    to="/vizschool-blog-latest-education-news"
                    className="text-muted-foreground hover:text-gray-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact-vizschool-admissions" className="text-muted-foreground hover:text-gray-900">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/vizschool-frequently-asked-questions"
                    className="text-muted-foreground hover:text-gray-900">
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
                  <Link to="/vizschool-primary-school-grades-1-6" className="text-muted-foreground hover:text-gray-900">
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
                  <Link
                    to="/vizschool-online-learning-programmes"
                    className="text-muted-foreground hover:text-gray-900">
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
