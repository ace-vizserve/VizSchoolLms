import React from "react";
import NotifyForm from "../components/coming-soon/notify-form";
import AnimatedMeshGradient from "../components/ui/animated-mesh-gradient";
import { BASE_URL } from "../constants";
import SEO from "../seo";

const highlights = ["Expert-led programmes", "Learn from anywhere", "Primary to Secondary pathways"];

const Hero: React.FC = () => {
  return (
    <>
      <SEO
        title="VizSchool LMS | Launching Soon"
        description="VizSchool LMS is on rebound — we're revamping our website to serve you better. Drop your email to get notified the second we launch."
        canonical={BASE_URL}
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "VizSchool LMS",
          url: BASE_URL,
        }}
      />
      <div className="flex items-center justify-center hero-container relative min-h-screen bg-gradient-to-b from-[#242b61] to-[#192152] overflow-hidden">
        <AnimatedMeshGradient primaryColor="#FD8735" secondaryColor="#007AFF" overlayOpacity={0.3} />
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
        {/* Main content */}
        <section className="w-full relative z-10 py-24 lg:py-32 text-white">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
              {/* Left: marketing copy + enrollment ticket */}

              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="fade-in-heading flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-white" />
                  <span className="font-serif text-xs tracking-[0.3em] uppercase text-white">VizSchool Notice</span>
                </div>

                <h1 className="fade-in-heading font-mono uppercase text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-white mb-3">
                  On Rebound
                </h1>
                <p className="fade-in-heading font-serif text-2xl sm:text-3xl lg:text-4xl text-[#ff8930] mb-6">
                  Launching soon.
                </p>

                <p className="fade-in-buttons text-base sm:text-lg text-white max-w-md mb-8 leading-relaxed">
                  We are revamping our website to serve you better. Drop your email to get notified the second we
                  launch.
                </p>

                <ul className="fade-in-buttons flex flex-col gap-2.5 mb-10 text-left">
                  {highlights.map((label) => (
                    <li key={label} className="flex items-center gap-3 text-white text-sm sm:text-base">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff8930]/15 text-[#ff8930] text-xs font-bold">
                        ✓
                      </span>
                      {label}
                    </li>
                  ))}
                </ul>

                {/* Enrollment ticket — the waitlist form */}
              </div>

              <div className="mx-auto fade-in-buttons relative w-full max-w-lg -rotate-1 bg-[#faf7f0] text-[#161b33] border-2 border-dashed border-[#161b33]/20 rounded-sm px-6 py-7 sm:px-8 sm:py-8 shadow-[8px_8px_0_0_rgba(0,0,0,0.25)]">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="font-serif text-[11px] tracking-[0.25em] uppercase text-[#ff8930] mb-1">
                      Hold your spot
                    </p>
                    <h2 className="font-mono uppercase text-lg sm:text-xl">Join the waitlist</h2>
                  </div>
                  <img src="/assets/logo.png" alt="VidSchool Logo" className="w-20 h-20 object-contain" />
                </div>
                <NotifyForm />
                <p className="text-[#161b33]/50 text-xs mt-4">No spam — just one email the moment we launch.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
