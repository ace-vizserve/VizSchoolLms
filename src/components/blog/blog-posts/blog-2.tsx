import { Calendar, Share2 } from "lucide-react";
import { motion } from "motion/react";
import type { SVGProps } from "react";
import OtherArticles from "../other-articles";
import MaxWidthWrapper from "../../max-width-wrapper";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Separator } from "../../ui/separator";

const post = {
  category: "Education",
  read_time: "15 min read",
  title: "Academic Pathway: Online Schooling From Primary to Secondary",
  created_at: "January 2026",
  excerpt:
    "A flexible, values-based online schooling approach designed for modern families seeking continuity, balance, and academic excellence within a supportive and well-structured learning environment.",
  image: "/assets/blogs/blog-2.png",
};

function Blog2() {
  return (
    <MaxWidthWrapper className="max-w-4xl py-16 md:py-20 lg:py-24">
      <header className="pb-6">
        <motion.h1
          initial={{ translateY: 10, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{
            duration: 0.25,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          viewport={{
            once: true,
          }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-2 text-primary">
          {post.title}
        </motion.h1>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <motion.div
            initial={{ translateY: 10, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.25,
              duration: 0.25,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            viewport={{ once: true }}
            className="flex items-center gap-3 flex-wrap">
            <Badge variant="outline">{post.category}</Badge>
            <span className="font-medium text-xs text-muted-foreground">{post.read_time}</span>
            <span className="font-medium text-xs text-muted-foreground">•</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="size-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{post.created_at}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ translateY: 10, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{
              delay: 0.25,
              duration: 0.25,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center">
            <Button size="sm" variant="ghost" className="pointer-events-none flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>

            <Button variant="ghost" size="icon">
              <Twitter />
            </Button>
            <Button variant="ghost" size="icon">
              <Facebook />
            </Button>
            <Button variant="ghost" size="icon">
              <LinkedIn />
            </Button>
          </motion.div>
        </div>
      </header>

      <Separator />

      <motion.div
        initial={{ translateY: 10, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{
          delay: 0.35,
          duration: 0.25,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        viewport={{
          once: true,
        }}
        className="my-8">
        <img src={post.image} alt={post.title} className="w-full rounded-xl shadow-lg object-cover aspect-video" />
      </motion.div>

      <article className="prose prose-neutral prose-lg max-w-none leading-relaxed">
        <h2 className="text-3xl font-bold text-primary mt-0 mb-4">
          A Flexible Path to Academic Excellence, Learning That Fits Your Family's Lifestyle
        </h2>

        <p className="text-base md:text-lg font-medium text-neutral-700 first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left">
          {post.excerpt}
        </p>

        <p className="mt-8">
          Family life today comes in many forms. Work commitments, travel schedules, training routines, and personal
          circumstances all shape how learning fits into daily life. Online schooling offers families the flexibility to
          align education with their routines while maintaining clear academic goals and high standards.
        </p>

        <p>
          Some families relocate for work or live across different regions. Others support children pursuing sports,
          creative arts, or specialised interests. Many families simply value a home-centred rhythm that allows learning
          to take place alongside meaningful family time. In each situation, online schooling provides continuity,
          structure, and adaptability while keeping learning purposeful and consistent.
        </p>

        <p>
          Launching in January 2026, VizSchool offers a thoughtful approach to online schooling that blends academic
          rigour with family-friendly flexibility. As the virtual learning arm of HFSE International School, VizSchool
          extends the mission of being an International School for All, making quality education accessible to families
          wherever they are.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Why Families Choose Online Schooling</h2>

        <p>
          Families choose online schooling because it supports continuity, personalisation, and a balanced learning pace.
          At VizSchool, the experience is intentionally designed. Lessons are planned by certified educators, interaction
          is purposeful, and student wellbeing is woven into daily schedules. Learning adapts to the learner while
          maintaining clear expectations and progression.
        </p>

        <p>Online schooling at VizSchool supports families who value flexibility alongside structure, including:</p>

        <ul className="my-6 space-y-2">
          <li>Globally mobile families seeking continuity across locations</li>
          <li>Households with travel or variable work schedules</li>
          <li>Learners engaged in sports, performing arts, or specialised training</li>
          <li>Students who benefit from tailored pacing and focused learning blocks</li>
          <li>Parents who prioritise a family-centred, values-driven education</li>
        </ul>

        <p>
          Rather than fitting learning into a fixed routine, online schooling at VizSchool aligns with each family's
          rhythm while keeping academic outcomes clear and consistent.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
          What Makes VizSchool's Online Schooling Distinct
        </h2>

        <p>
          Online schooling at VizSchool balances flexibility with care, guidance, and connection. Learners remain
          academically supported while developing independence and confidence. The HAPI values of Happy, Humble,
          Assertive, Appreciative, Productive, Proactive, Independent, and Interdependent guide both learning experiences
          and character development.
        </p>

        <p>
          Certified HFSE educators deliver carefully sequenced lessons through a technology-enabled platform that
          encourages inquiry, discussion, and meaningful practice. Screen time is purposeful and interactive, ensuring
          that online schooling supports engagement, reflection, and deep understanding.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
          Flexible Learning Pathways for Diverse Family Needs
        </h2>

        <p>
          VizSchool offers three pathways within a unified online schooling framework, allowing families to select the
          level of structure that suits them best.
        </p>

        <div className="space-y-6 my-8">
          <div className="bg-white border border-neutral-200 p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-2">VizIndie Flexible Learning</h3>
            <p className="text-sm text-neutral-700">
              Designed for self-motivated learners who progress at their own pace through curated modules and
              assessments. Optional mentoring and quarterly check-ins provide guidance while preserving schedule
              flexibility.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-2">VizFlex Blended Support</h3>
            <p className="text-sm text-neutral-700">
              A balanced pathway combining weekly learning plans, live teacher sessions, and regular feedback. This
              option suits families who value both independence and a steady learning rhythm.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-2">VizLive Full-Time Virtual Classroom</h3>
            <p className="text-sm text-neutral-700">
              A structured pathway with daily live lessons, collaborative activities, and ongoing assessments led by
              experienced HFSE teachers.
            </p>
          </div>
        </div>

        <p>
          Each pathway aligns with international benchmarks, ensuring online schooling remains structured, credible, and
          outcomes-focused.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Academic Coverage and Curriculum</h2>

        <p>
          VizSchool delivers a complete academic journey from Primary One to Secondary Four, aligned with the Singapore
          curriculum and international standards. Core subjects include English, Mathematics, Science, and Mother Tongue
          Filipino. Enrichment subjects broaden learning through Computer Basics, ICT and Robotics, Financial Literacy,
          and Technology Innovation.
        </p>

        <p>
          Short, focused live sessions are paired with self-paced tasks. This balance supports effective online schooling
          by allowing learners to manage time well while maintaining depth and clarity of understanding.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Assessment That Reflects Meaningful Progress</h2>

        <p>
          Assessment at VizSchool is designed to show growth over time. Formative checks, quarterly evaluations, and
          performance-based tasks help students apply learning with confidence. Digital portfolios capture work samples,
          reflections, and milestones each term.
        </p>

        <p>
          This approach makes online schooling transparent for families and supports smooth transitions within VizSchool,
          to on-site HFSE schooling, or to other international institutions.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Community, Connection, and Belonging</h2>

        <p>
          Online schooling at VizSchool includes intentional opportunities for connection. Learners may participate in
          campus celebrations, clubs, competitions, and hybrid learning experiences throughout the year. These shared
          moments strengthen relationships, communication skills, and confidence within a wider school community.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Designed for Real Life, Built for the Future</h2>

        <p>
          Education should support how families live and grow. Online schooling at VizSchool honours this by combining
          flexibility with structure and values with vision. Families gain the freedom to move, plan, and spend time
          together while maintaining academic consistency and purpose.
        </p>

        <p>
          Launching in January 2026, VizSchool invites families worldwide to experience online schooling that adapts to
          real life and prepares learners for a future without borders.
        </p>

        <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl my-8 text-center">
          <p className="text-base font-semibold text-primary mb-2">Ready to Begin Your Academic Journey?</p>
          <p className="text-sm text-neutral-700 mb-4">
            For admissions and enquiries, contact us to learn more about VizSchool and its online schooling programmes.
          </p>
          <p className="text-sm text-neutral-700 font-medium">
            Contact our Admissions Team at{" "}
            <a href="tel:+6582000062" className="text-primary hover:underline">
              +65 8200 0062
            </a>
          </p>
        </div>
      </article>

      <OtherArticles />
    </MaxWidthWrapper>
  );
}

const Twitter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 209"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}>
    <path
      d="M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
      fill="#55acee"
    />
  </svg>
);

const Facebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 36"
    fill="url(#facebook__a)"
    height="1em"
    width="1em"
    {...props}>
    <defs>
      <linearGradient x1="50%" x2="50%" y1="97.078%" y2="0%" id="facebook__a">
        <stop offset="0%" stopColor="#0062E0" />
        <stop offset="100%" stopColor="#19AFFF" />
      </linearGradient>
    </defs>
    <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
    <path
      fill="#FFF"
      d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
    />
  </svg>
);

const LinkedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 256 256"
    {...props}>
    <path
      d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
      fill="#0A66C2"
    />
  </svg>
);

export default Blog2;