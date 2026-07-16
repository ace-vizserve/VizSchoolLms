import { useEffect } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";

// Regular Pages
import Hero from "./pages/Hero";

// Static Blog Posts

// Admin Pages
import AdminDashboard from "./pages/admin-dashboard";
import AdminLogin from "./pages/admin-login";

// ScrollToTop component to handle navigation scrolling
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Layout component that conditionally shows NavBar/Footer
function Layout() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");
  const isHeroPage = location.pathname === "/";

  return (
    <main className="flex flex-col min-h-dvh">
      {!isAdminPage && !isHeroPage && <NavBar />}
      <ScrollToTop />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Hero />} />

          {/* <Route path="/about-vizschool-virtual-learning" element={<About />} />

          <Route path="/school-fees-tuition-vizschool" element={<SchoolFees />} />

          <Route path="/contact-vizschool-admissions" element={<ContactUs />} />

          <Route path="/vizschool-blog-latest-education-news" element={<Blogs />} /> */}

          {/* Individual Blog Routes */}
          {/* <Route path="/blogs/vizschool-flexible-virtual-school-global" element={<Blog1 />} />
          <Route path="/blogs/academic-pathway-online-schooling" element={<Blog2 />} />
          <Route path="/blogs/programmes-vizindie-vizflex-vizlive" element={<Blog3 />} />
          <Route path="/blogs/education-scope-primary-secondary" element={<Blog4 />} /> */}

          {/* Dynamic Blog Route - handles Firebase blog posts */}
          {/* <Route path="/blogs/:slug" element={<Blog />} /> */}

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* <Route path="/vizschool-reviews-testimonials" element={<Reviews />} />

          <Route path="/vizschool-sitemap" element={<Sitemap />} />

          <Route path="/vizschool-teachers-expert-educators" element={<OurTeachers />} />

          <Route path="/vizschool-frequently-asked-questions" element={<FAQ />} />

          <Route path="/vizschool-online-learning-programmes" element={<Programmes />} />

          <Route path="/vizschool-primary-school-grades-1-6" element={<Primary />} />

          <Route path="/secondary" element={<Secondary />} />

          <Route path="/enrichment" element={<Enrichment />} /> */}

          {/* Optional: Redirect unknown routes to the homepage */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      {!isAdminPage && !isHeroPage && <Footer />}
    </main>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
