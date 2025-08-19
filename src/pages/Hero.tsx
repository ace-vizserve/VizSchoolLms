import React from "react";
import Testimonials from "../components/Testimonials";
import { BASE_URL } from "../constants";
import SEO from "../seo";

const Hero: React.FC = () => {
  return (
    <>
      <SEO
        title="VizSchool LMS | Learn Anywhere, Anytime with Confidence"
        description="Experience VizSchool LMS — flexible, interactive, and certificate-ready learning for K-12 students. Learn anywhere, anytime, at your own pace."
        canonical={BASE_URL}
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "VizSchool LMS",
          url: BASE_URL,
        }}
      />
      <div className="hero-container relative min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 overflow-hidden">
        {/* Modern animated background elements with original shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Original Triangles with modern styling */}
          <div className="absolute top-20 left-16 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-white opacity-80 animate-pulse"></div>
          <div
            className="absolute top-32 right-20 w-0 h-0 border-l-6 border-r-6 border-b-10 border-l-transparent border-r-transparent border-b-white opacity-60 animate-bounce"
            style={{ animationDelay: "1s" }}></div>
          <div
            className="absolute bottom-40 left-32 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-white opacity-70 animate-pulse"
            style={{ animationDelay: "2s" }}></div>
          <div
            className="absolute top-1/3 right-1/4 w-0 h-0 border-l-10 border-r-10 border-b-15 border-l-transparent border-r-transparent border-b-white opacity-50 animate-ping"
            style={{ animationDelay: "0.5s" }}></div>

          {/* Additional Triangles behind persons */}
          <div
            className="absolute top-60 left-1/4 w-0 h-0 border-l-6 border-r-6 border-b-8 border-l-transparent border-r-transparent border-b-white opacity-40 animate-pulse"
            style={{ animationDelay: "1.5s" }}></div>
          <div
            className="absolute top-72 right-1/3 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-white opacity-50 animate-bounce"
            style={{ animationDelay: "2s" }}></div>
          <div
            className="absolute bottom-48 left-1/2 w-0 h-0 border-l-5 border-r-5 border-b-7 border-l-transparent border-r-transparent border-b-white opacity-60 animate-ping"
            style={{ animationDelay: "0.8s" }}></div>

          {/* Original Circles with modern animations */}
          <div className="absolute top-40 left-20 w-12 h-12 bg-white rounded-full opacity-60 animate-pulse"></div>
          <div
            className="absolute top-1/2 right-16 w-16 h-16 bg-white rounded-full opacity-40 animate-bounce"
            style={{ animationDelay: "1.5s" }}></div>
          <div
            className="absolute bottom-32 right-1/3 w-8 h-8 bg-white rounded-full opacity-70 animate-pulse"
            style={{ animationDelay: "3s" }}></div>

          {/* Additional Circles behind persons */}
          <div
            className="absolute top-84 left-3/3 w-10 h-10 bg-white rounded-full opacity-50 animate-bounce"
            style={{ animationDelay: "1s" }}></div>
          <div
            className="absolute top-80 right-1/4 w-14 h-14 bg-white rounded-full opacity-45 animate-pulse"
            style={{ animationDelay: "2.5s" }}></div>
          <div
            className="absolute bottom-56 left-2/3 w-6 h-6 bg-white rounded-full opacity-65 animate-ping"
            style={{ animationDelay: "0.5s" }}></div>

          {/* Original Dot grids with modern animations */}
          <div className="absolute top-24 left-1/4 grid grid-cols-5 gap-1">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-white rounded-full opacity-60 animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}></div>
            ))}
          </div>
          <div className="absolute bottom-1/4 left-16 grid grid-cols-4 gap-1">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-white rounded-full opacity-50 animate-pulse"
                style={{ animationDelay: `${i * 0.15}s` }}></div>
            ))}
          </div>
          <div className="absolute top-1/3 right-32 grid grid-cols-5 gap-1">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-white rounded-full opacity-40 animate-pulse"
                style={{ animationDelay: `${i * 0.12}s` }}></div>
            ))}
          </div>
          <div className="absolute bottom-40 right-20 grid grid-cols-4 gap-1">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}></div>
            ))}
          </div>

          {/* Additional Dot grids behind persons */}
          <div className="absolute top-70 left-1/5 grid grid-cols-4 gap-1">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-white rounded-full opacity-55 animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}></div>
            ))}
          </div>
          <div className="absolute bottom-60 right-1/4 grid grid-cols-5 gap-1">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-white rounded-full opacity-45 animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}></div>
            ))}
          </div>

          {/* Original Plus signs with modern animations */}
          <div
            className="absolute top-1/2 right-1/3 text-white text-2xl opacity-60 font-light animate-spin"
            style={{ animationDuration: "8s" }}>
            +
          </div>
          <div className="absolute bottom-1/3 left-1/3 text-white text-xl opacity-50 font-light animate-pulse">+</div>

          {/* Additional modern gradient orbs for depth */}
          <div className="absolute top-16 right-32 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-16 w-24 h-24 bg-gradient-to-tr from-white/8 to-transparent rounded-full blur-lg animate-pulse"
            style={{ animationDelay: "4s" }}></div>
        </div>

        {/* Custom CSS for fade-in animation */}
        <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fade-in-heading {
          animation: fadeInUp 1.2s ease-out forwards;
        }
        
        .fade-in-buttons {
          animation: fadeInUp 1s ease-out 0.5s forwards;
          opacity: 0;
        }
        
        .fade-in-person1 {
          animation: fadeInUp 1.5s ease-out 0.8s forwards;
          opacity: 0;
        }
        
        .fade-in-person2 {
          animation: fadeInUp 1.5s ease-out 1.2s forwards;
          opacity: 0;
        }
        
        .fade-in-person3 {
          animation: fadeInUp 1.5s ease-out 1.6s forwards;
          opacity: 0;
        }
      `}</style>

        {/* Main content with modern styling */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center text-white pt-20 md:pt-0">
          {/* Modern heading with enhanced typography and fade-in animation */}
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-white/20">
              <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
              Online Learning Platform
            </div>
            <h1 className="fade-in-heading text-5xl md:text-7xl font-black mb-4 leading-tight mt-8 md:mt-0 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Empowering You to Learn
              <br />
              <span className="text-4xl md:text-6xl font-light">Online, Anytime, Anywhere</span>
            </h1>
          </div>

          {/* Modern CTA buttons with glassmorphism and fade-in animation */}
          <div className="fade-in-buttons flex flex-col sm:flex-row gap-4 mb-8 mt-8">
            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Started
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
            <button className="group border-2 border-white/30 bg-white/10 backdrop-blur-md hover:bg-white hover:text-blue-600 text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Enroll Now
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>

          {/* Three people with modern capsule shapes - keeping original alignment */}
          <div className="flex flex-row items-end justify-center gap-4 md:gap-16 mt-6 md:mt-8">
            {/* Person 1 - with fade-in animation */}
            <div className="fade-in-person1 relative flex-shrink-0 group mb-10 lg:mb-0">
              <div className="w-24 h-32 md:w-64 md:h-80 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full shadow-2xl transform group-hover:scale-105 transition-transform duration-300 border-4 border-white/20"></div>
              <div className="absolute inset-0 flex items-end justify-center">
                <img
                  src="/assets/child1.png"
                  alt="Child learning with book"
                  className="h-28 md:h-72 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                  style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))" }}
                />
              </div>
            </div>

            {/* Person 2 - Center */}
            <div className="fade-in-person2 relative flex-shrink-0 group mb-10 lg:mb-0">
              <div className="w-28 h-36 md:w-72 md:h-88 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full shadow-2xl transform group-hover:scale-105 transition-transform duration-300 border-4 border-white/20"></div>
              <div className="absolute inset-0 flex items-end justify-center">
                <img
                  src="/assets/child3.png"
                  alt="Teen learning with laptop"
                  className="h-32 md:h-80 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                  style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))" }}
                />
              </div>
            </div>

            {/* Person 3 */}
            <div className="fade-in-person3 relative flex-shrink-0 group mb-10 lg:mb-0">
              <div className="w-24 h-32 md:w-64 md:h-80 bg-gradient-to-br from-green-300 to-green-400 rounded-full shadow-2xl transform group-hover:scale-105 transition-transform duration-300 border-4 border-white/20"></div>
              <div className="absolute inset-0 flex items-end justify-center">
                <img
                  src="/assets/child2.png"
                  alt="Child learning with tablet"
                  className="h-28 md:h-72 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                  style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))" }}
                />
              </div>
            </div>
          </div>
        </div>

        <Testimonials />

        {/* Modern stats section with glassmorphism cards */}
        <div className="relative z-10 py-20 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-white backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Student Success Stories
              </div>
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text">
                Students & Parents Love VizSchool!
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
              {/* Statistic 1 */}
              <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-white/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="/assets/image1.png" alt="Student studying" className="w-16 h-16 object-contain" />
                </div>
                <div className="text-white text-4xl md:text-5xl font-black mb-3 group-hover:text-blue-100 transition-colors duration-300">
                  95%
                </div>
                <div className="text-white/90 text-sm md:text-base font-medium leading-relaxed">
                  Students enjoy
                  <br />
                  Newcastle
                </div>
              </div>

              {/* Statistic 2 */}
              <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-white/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="/assets/image2.png" alt="Star rating" className="w-16 h-16 object-contain animate-pulse" />
                </div>
                <div className="text-white text-3xl md:text-4xl font-black mb-3 group-hover:text-blue-100 transition-colors duration-300">
                  9 out of 10
                </div>
                <div className="text-white/90 text-sm md:text-base font-medium leading-relaxed">
                  Parents love the
                  <br />
                  flexibility
                </div>
              </div>

              {/* Statistic 3 */}
              <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-white/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="/assets/image3.png" alt="Confident student" className="w-16 h-16 object-contain" />
                </div>
                <div className="text-white text-4xl md:text-5xl font-black mb-3 group-hover:text-blue-100 transition-colors duration-300">
                  85%
                </div>
                <div className="text-white/90 text-sm md:text-base font-medium leading-relaxed">
                  Students feel
                  <br />
                  more confident
                </div>
              </div>

              {/* Statistic 4 */}
              <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-white/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="/assets/image4.png" alt="Multiple courses" className="w-16 h-16 object-contain" />
                </div>
                <div className="text-white text-3xl md:text-4xl font-black mb-3 group-hover:text-blue-100 transition-colors duration-300">
                  4 out of 5
                </div>
                <div className="text-white/90 text-sm md:text-base font-medium leading-relaxed">
                  Students book
                  <br />
                  multiple courses
                </div>
              </div>

              {/* Statistic 5 */}
              <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-white/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <img src="/assets/image5.png" alt="Certificate trophy" className="w-10 h-10 object-contain" />
                </div>
                <div className="text-white text-4xl md:text-5xl font-black mb-3 group-hover:text-blue-100 transition-colors duration-300">
                  100%
                </div>
                <div className="text-white/90 text-sm md:text-base font-medium leading-relaxed">
                  Students earn
                  <br />
                  certificates
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
