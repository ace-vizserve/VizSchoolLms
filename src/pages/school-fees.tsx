import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, CircleCheck, Sparkles, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import FeeBreakdown from "../components/school-fees/fee-breakdown";
import { Badge } from "../components/ui/badge";
import { buttonVariants } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { BASE_URL } from "../constants";
import SEO from "../seo";

const schoolFees = [
  {
    programName: "VizIndie",
    overview: "Independent Learning",
    fees: 2500.0,
    promo: 1250.0,
    whoItsFor: "Parents who prefer to fully homeschool their child using their own pace and materials",
    features: [
      "Parent-led learning with HFSE guidance",
      "Customizable curriculum",
      "Quarterly academic review",
      "Homeroom & Family Support",
      "HFSE Cambridge Alignment",
    ],
    isPopular: false,
    icon: Users,
  },
  {
    programName: "VizFlex",
    overview: "Flexible Learning | Hybrid",
    fees: 3500.0,
    promo: 1750.0,
    whoItsFor: "Independent learners who thrive with structure but need schedule flexibility",
    features: [
      "Blended print/online curriculum (by level)",
      "Asynchronous video learning",
      "Subject advisor support",
      "Access to MobyMax / platforms",
      "Optional workshops",
    ],
    isPopular: false,
    icon: TrendingUp,
  },
  {
    programName: "VizLive",
    overview: "Synchronous Online Learning",
    fees: 5500.0,
    promo: 2750.0,
    whoItsFor: "Students who prefer full online classroom experience with interaction and regular teacher support",
    features: [
      "Daily Zoom-based live classes",
      "HFSE teachers with Singapore-level standards",
      "Subject grading & mentorship",
      "Clubs, assemblies, and community",
      "Includes assessment platforms (e.g. MAP, MobyMax)",
    ],
    isPopular: false,
    icon: Sparkles,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function SchoolFees() {
  return (
    <>
      <SEO
        title="School Fees | Innovative Learning for K-12 Students"
        description="Learn more about VizSchool's transparent and flexible school fees. Discover affordable, high-quality online education options for preschool to secondary levels designed to suit your family's learning goals."
        canonical={`${BASE_URL}/school-fees`}
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "SchoolFeesPage",
          name: "School Fees | VizSchool LMS",
          url: `${BASE_URL}/school-fees`,
        }}
      />

      <div className="relative min-h-screen py-20 md:py-28 px-6 bg-gradient-to-b from-background via-primary/5 to-background">
        {/* Background blur effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-40 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-base md:text-lg mb-6">
              <Sparkles className="w-5 h-5" />
              <span>Academic Year 2025–2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
              School Fees
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transparent, flexible pricing for quality education. Choose the program that fits your family's learning
              style and budget.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {schoolFees.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  variants={item}
                  key={plan.programName}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="flex relative group rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-card overflow-hidden">
                  <div className=" absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex flex-col flex-1 relative p-8">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                      className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6">
                      <Icon className="w-7 h-7" strokeWidth={2} />
                    </motion.div>

                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{plan.programName}</h3>
                      <p className="text-sm font-semibold text-primary">{plan.overview}</p>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-foreground">S${plan.promo.toLocaleString()}</span>
                        <span className="text-lg text-muted-foreground line-through">
                          S${plan.fees.toLocaleString()}
                        </span>
                      </div>
                      <div className="mt-2">
                        <Badge variant="secondary" className="text-xs">
                          50% Early Bird Discount
                        </Badge>
                      </div>
                    </div>

                    <div className="mb-6 p-4 rounded-lg bg-muted/50">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">Perfect for:</span> {plan.whoItsFor}
                      </p>
                    </div>

                    <Separator className="my-6" />

                    <div className="mb-8">
                      <p className="text-sm font-semibold text-foreground mb-4">What's Included:</p>
                      <ul className="space-y-3">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3 text-sm text-foreground leading-relaxed">
                            <CircleCheck className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary" strokeWidth={2.5} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      target="_blank"
                      to={"https://enrol.hfse.edu.sg/admission/dashboard"}
                      className={buttonVariants({
                        className:
                          "mt-auto w-full !h-14 !rounded-2xl !font-black !shadow-lg !shadow-orange-200 text-white group",
                      })}>
                      Enrol in {plan.programName} <ArrowUpRight />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Note Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 text-center">
            <div className="inline-flex flex-col gap-3 items-center px-8 py-6 rounded-2xl bg-card border border-border">
              <CircleCheck className="w-8 h-8 text-primary" strokeWidth={2.5} />
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
                All programs include access to HFSE’s quality curriculum, academic support, and alignment with
                international standards.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-16 md:pt-20 lg:pt-24">
          <FeeBreakdown />
        </motion.div>
      </div>
    </>
  );
}

export default SchoolFees;
