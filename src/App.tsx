import { useEffect } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar";

import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import About from "./pages/about";

import ContactUs from "./pages/ContactUs";

import Blogs from "./pages/blogs";
import FAQ from "./pages/faq";
import OurTutors from "./pages/our-tutors";
import Programmes from "./pages/programmes";
import Reviews from "./pages/reviews";
import Sitemap from "./pages/sitemap";
import Primary from "./pages/primary";
import Secondary from "./pages/secondary";
import Enrichment from "./pages/enrichment";

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

            <Route path="/about" element={<About />} />

            <Route path="/contact-us" element={<ContactUs />} />

            <Route path="/blogs" element={<Blogs />} />

            <Route path="/reviews" element={<Reviews />} />

            <Route path="/sitemap" element={<Sitemap />} />

            <Route path="/our-tutors" element={<OurTutors />} />

            <Route path="/faq" element={<FAQ />} />

            <Route path="/our-programmes" element={<Programmes />} />

            <Route path="/primary" element={<Primary />} />

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
