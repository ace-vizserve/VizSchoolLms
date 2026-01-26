import { ArrowRight, Check, Sparkles } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { BASE_URL } from "../constants";
import { cn } from "../lib/utils";
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
      <div className="hero-container relative min-h-screen bg-gradient-to-br from-[#4247cb] via-[#3d42c0] to-[#383db5] overflow-hidden">
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
              <span className="w-2 h-2 bg-[#ff8930] rounded-full mr-2 animate-pulse"></span>
              Online Learning Platform
            </div>
            <h1 className="fade-in-heading text-5xl md:text-7xl font-black mb-4 leading-tight mt-8 md:mt-0 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Empowering You to Learn
              <br />
              <span className="text-4xl md:text-6xl font-light">Online, Anytime, Anywhere</span>
            </h1>
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
        {/* New Enrol Now CTA Section */}
        <div className="relative z-10 py-16 px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Discover our diverse range of programmes designed to foster academic excellence and personal growth. Enrol
            today and unlock your full potential!
          </p>
          <a
            href="https://enrol.hfse.edu.sg/"
            className="group bg-gradient-to-r from-[#ff8930] to-[#ff7520] hover:from-[#ff7520] hover:to-[#ff6010] text-white font-semibold py-4 px-10 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mx-auto w-fit">
            Enrol Now
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
        <Programmes />
      </div>
    </>
  );
};

const features = [
  {
    category: "VizIndie",
    title: "Independent Learning with Guidance",
    details: "Ideal for self-motivated learners who prefer a self-paced approach.",
    imageUrl: "/assets/programmes/programmes-1.jpg",
    listTitle: "Why Choose VizIndie?",
    listContent: [
      "Complete flexibility in schedule and pace.",
      "Access to curated modules, quality teaching notes, and assessments.",
      "Optional academic mentoring and quarterly check-ins.",
    ],
  },
  {
    category: "VizFlex",
    title: "Blended Support for Balanced Learners",
    details: "Perfect for families seeking a structured yet flexible experience.",
    imageUrl: "/assets/programmes/programmes-3.jpeg",
    listTitle: "Is VizFlex for your family?",
    listContent: [
      "Complete flexibility in schedule and pace.",
      "Access to curated modules, quality teaching notes, and assessments.",
      "Optional academic mentoring and quarterly check-ins.",
    ],
  },
  {
    category: "VizLive",
    title: "Full-Time Virtual Classroom Experience",
    details: "Best for students who thrive with live interaction and consistent structure.",
    imageUrl: "/assets/programmes/programmes-2.jpeg",
    listTitle: "Love Online Sessions?",
    listContent: [
      "Complete flexibility in schedule and pace.",
      "Access to curated modules, quality teaching notes, and assessments.",
      "Optional academic mentoring and quarterly check-ins.",
    ],
  },
];

function Programmes() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 md:py-20 lg:py-24 px-6 ">
      <div className="max-w-screen-lg w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-2">Our Programmes</h2>
          <h3 className="text-2xl text-white/80">Choose the best plan for your learning style</h3>
        </div>
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20 lg:space-y-28">
          {features.map((feature, idx) => (
            <div
              key={feature.category}
              className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div
                style={{
                  backgroundImage: `url(${feature.imageUrl})`,
                }}
                className={cn("w-full aspect-[4/2] rounded-xl basis-1/2 bg-cover", {
                  "brightness-125": idx === 0,
                })}
              />
              <div className="basis-1/2 shrink-0">
                <Badge className="uppercase font-semibold text-sm bg-orange-400">{feature.category}</Badge>
                <h4 className="my-3 text-3xl font-semibold tracking-tight text-white">{feature.title}</h4>
                <p className="text-white/80 text-[17px]">{feature.details}</p>

                <h5 className="mt-8 mb-5 text-xl font-bold text-white tracking-tight">{feature.listTitle}</h5>

                <ul className="space-y-4">
                  {feature.listContent.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="mt-0.5 rounded-full bg-primary/10 p-1 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Check className="size-5 text-orange-400" strokeWidth={3} />
                      </div>
                      <span className="text-white/80 text-[16px] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <PricingTeaser />
      </div>
    </div>
  );
}

function PricingTeaser() {
  return (
    <div className="w-full mt-8 md:mt-16 w-full mx-auto space-y-20 lg:space-y-28">
      <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md p-8 md:p-12 shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium text-white">Transparent Pricing</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Affordable Programs for Every Ambition</h2>

          <p className="text-lg text-white/90 mb-6 max-w-2xl">
            Quality education shouldn't break the bank. Our programs start at just{" "}
            <span className="font-bold text-white">$2,500 SGD</span>, with flexible payment options and comprehensive
            support included.
          </p>

          <Link
            to="/school-fees"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#4247cb] font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 group">
            See Full Pricing Details
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex flex-wrap gap-6 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Flexible payment plans</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Full support included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
