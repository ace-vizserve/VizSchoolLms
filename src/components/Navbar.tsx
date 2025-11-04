import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[999] w-full bg-white/70 backdrop-blur-lg shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 md:py-3">
        <div className="flex items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center md:justify-start justify-center flex-1 md:flex-none">
            <Link to="/">
              <img src="/assets/logo.png" alt="VidSchool Logo" className="w-20 h-20 object-contain" />
            </Link>
          </div>

          {/* Navigation Menu - Desktop */}
          <div className="hidden md:flex items-center space-x-8 ml-8">
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "text-blue-600" : "hover:text-secondary font-medium")}>
              About
            </NavLink>
            <NavLink
              to={"/our-programmes"}
              className={({ isActive }) => (isActive ? "text-blue-600" : "hover:text-secondary font-medium")}>
              Programmes
            </NavLink>
            <NavLink
              to={"/school-fees"}
              className={({ isActive }) => (isActive ? "text-blue-600" : "hover:text-secondary font-medium")}>
              School Fees
            </NavLink>
            <NavLink
              to={"/reviews"}
              className={({ isActive }) => (isActive ? "text-blue-600" : "hover:text-secondary font-medium")}>
              Reviews
            </NavLink>
            <NavLink
              to={"/blogs"}
              className={({ isActive }) => (isActive ? "text-blue-600" : "hover:text-secondary font-medium")}>
              Blogs
            </NavLink>
            <NavLink
              to={"/contact-us"}
              className={({ isActive }) => (isActive ? "text-blue-600" : "hover:text-secondary font-medium")}>
              Contact Us
            </NavLink>
          </div>

          {/* Login Button - Desktop */}
          <div className="hidden md:flex items-center ml-auto">
            <a href="https://lms.vizschool.org/login/index.php" target="_blank" rel="noopener noreferrer">
              <Button size={"lg"}>Login</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink to={"/about"} className="block px-3 py-2 hover:text-secondary font-medium">
              About
            </NavLink>
            <NavLink to={"/our-programmes"} className="block px-3 py-2 hover:text-secondary font-medium">
              Programmes
            </NavLink>
            <NavLink to={"/reviews"} className="block px-3 py-2 hover:text-secondary font-medium">
              Reviews
            </NavLink>
            <NavLink to="/blogs" className="block px-3 py-2 hover:text-secondary font-medium">
              Blogs
            </NavLink>
            <NavLink to="/contact-us" className="block px-3 py-2 hover:text-secondary font-medium">
              Contact Us
            </NavLink>
            <a href="https://lms.vizschool.org/login/index.php" target="_blank" rel="noopener noreferrer">
              <Button size={"lg"} className="w-full">
                Login
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
