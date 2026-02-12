import { useEffect } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar";

import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import About from "./pages/about";

import ContactUs from "./pages/ContactUs";

import Blog from "./pages/blog";
import Blogs from "./pages/blogs";
import Enrichment from "./pages/enrichment";
import FAQ from "./pages/faq";

import OurTeachers from "./pages/our-teachers";
import Primary from "./pages/primary";
import Programmes from "./pages/programmes";
import Reviews from "./pages/reviews";
import SchoolFees from "./pages/school-fees";
import Secondary from "./pages/secondary";
import Sitemap from "./pages/sitemap";

// ScrollToTop component to handle navigation scrolling
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <main className="flex flex-col min-h-dvh">
        <NavBar />
        <ScrollToTop />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Hero />} />

            <Route path="/about-vizschool-virtual-learning" element={<About />} />

            <Route path="/school-fees-tuition-vizschool" element={<SchoolFees />} />

            <Route path="/contact-vizschool-admissions" element={<ContactUs />} />

            <Route path="/vizschool-blog-latest-education-news" element={<Blogs />} />

            <Route path="/vizschool-reviews-testimonials" element={<Reviews />} />

            <Route path="/vizschool-sitemap" element={<Sitemap />} />

            <Route path="/vizschool-teachers-expert-educators" element={<OurTeachers />} />

            <Route path="/blogs/:id" element={<Blog />} />

            <Route path="/vizschool-frequently-asked-questions" element={<FAQ />} />

            <Route path="/vizschool-online-learning-programmes" element={<Programmes />} />

            <Route path="/vizschool-primary-school-grades-1-6" element={<Primary />} />

            <Route path="/secondary" element={<Secondary />} />

            <Route path="/enrichment" element={<Enrichment />} />

            {/* Optional: Redirect unknown routes to the homepage */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
