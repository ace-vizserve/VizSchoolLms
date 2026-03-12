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
  read_time: "10 min read",
  title: "VizSchool Education Scope: Primary and Secondary Levels",
  created_at: "January 2026",
  excerpt:
    "A comprehensive and flexible academic pathway designed to support learners from Primary One to Secondary Four through a values based and globally aligned virtual curriculum.",
  image: "/assets/blogs/blog-4.png",
};

function Blog4() {
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
          Exploring the VizSchool Course Scope From Primary to Secondary
        </h2>

        <p className="text-base md:text-lg font-medium text-neutral-700 first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left">
          {post.excerpt}
        </p>

        <p className="mt-8">
          A well-structured curriculum plays a crucial role in shaping a child's learning journey. At VizSchool, the
          course scope is thoughtfully designed to provide academic continuity, depth, and flexibility while supporting
          holistic development at every stage.
        </p>

        <p>
          Covering Primary One to Secondary Four, VizSchool offers a progressive online academic pathway aligned with the
          Singapore curriculum framework and international benchmarks. This ensures that learners receive a strong
          foundation while remaining globally relevant.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Academic Levels and Learning Progression</h2>

        <p>
          VizSchool supports learners across multiple stages of development, recognising that academic and personal needs
          evolve.
        </p>

        <p>The programme spans:</p>

        <div className="space-y-4 my-6">
          <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
            <p className="text-sm font-semibold text-primary mb-1">Primary One to Primary Three</p>
            <p className="text-sm text-neutral-700">Building foundational skills and learning habits</p>
          </div>

          <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
            <p className="text-sm font-semibold text-primary mb-1">Primary Four to Primary Six</p>
            <p className="text-sm text-neutral-700">Deepening knowledge and developing independence</p>
          </div>

          <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
            <p className="text-sm font-semibold text-primary mb-1">Secondary One to Secondary Four</p>
            <p className="text-sm text-neutral-700">Advanced learning and examination preparation</p>
          </div>
        </div>

        <p>
          Each level builds upon the previous one, ensuring continuity in learning and readiness for progression within
          VizSchool, transition to on-site HFSE schooling, or movement to other international institutions following
          similar standards.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Core Academic Subjects</h2>

        <p>
          Across all levels, VizSchool focuses on developing strong academic fundamentals through core subjects that form
          the backbone of learning.
        </p>

        <p>These subjects include:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="bg-white border border-neutral-200 p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-primary mb-2">English</h3>
            <p className="text-sm text-neutral-700">
              Comprehensive language development focusing on reading, writing, and communication skills
            </p>
          </div>

          <div className="bg-white border border-neutral-200 p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-primary mb-2">Mathematics</h3>
            <p className="text-sm text-neutral-700">
              Problem-solving and numerical literacy building strong mathematical foundations
            </p>
          </div>

          <div className="bg-white border border-neutral-200 p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-primary mb-2">Science</h3>
            <p className="text-sm text-neutral-700">
              Inquiry-based learning exploring natural phenomena and scientific concepts
            </p>
          </div>

          <div className="bg-white border border-neutral-200 p-5 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-primary mb-2">Mother Tongue Filipino</h3>
            <p className="text-sm text-neutral-700">
              Language and cultural education maintaining connection to Filipino heritage
            </p>
          </div>
        </div>

        <p>
          Lessons are delivered through live interactive sessions and supported by independent tasks, allowing learners
          to engage deeply with concepts while developing confidence and competence in each subject area.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Enrichment Courses for Holistic Development</h2>

        <p>
          Beyond academics, VizSchool places strong emphasis on life skills and future ready learning through carefully
          curated enrichment courses.
        </p>

        <p>These include:</p>

        <div className="space-y-5 my-8">
          <div className="bg-primary/5 border border-primary/20 p-5 rounded-lg">
            <h3 className="text-lg font-bold text-primary mb-2">Computer Basics</h3>
            <p className="text-sm text-neutral-700">
              Building foundational digital literacy and responsible technology use
            </p>
          </div>

          <div className="bg-primary/5 border border-primary/20 p-5 rounded-lg">
            <h3 className="text-lg font-bold text-primary mb-2">Financial Literacy through Smart Money Habits</h3>
            <p className="text-sm text-neutral-700">
              Introducing saving, budgeting, and entrepreneurship concepts
            </p>
          </div>

          <div className="bg-primary/5 border border-primary/20 p-5 rounded-lg">
            <h3 className="text-lg font-bold text-primary mb-2">ICT and Robotics - Tech Innovators Programme</h3>
            <p className="text-sm text-neutral-700">
              Covering coding, web design, app creation, and AI awareness
            </p>
          </div>
        </div>

        <p>
          These enrichment courses are integrated into the weekly schedule to ensure learners develop practical skills
          alongside academic knowledge.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Instructional Design and Learning Structure</h2>

        <p>
          VizSchool follows a student centred and inquiry based instructional design that balances structure with
          flexibility.
        </p>

        <p>Learning includes:</p>

        <ul className="my-6 space-y-2">
          <li>Live online sessions lasting 25 to 30 minutes to maintain focus and engagement</li>
          <li>A balance of synchronous teacher led lessons and asynchronous self-paced tasks</li>
          <li>Weekly learning rhythms that support consistency and routine</li>
        </ul>

        <p>
          The weekly structure typically focuses on core subjects earlier in the week, innovation and life skills later
          in the week, and performance-based assessments to apply learning meaningfully.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Assessment and Performance Based Learning</h2>

        <p>
          Assessment at VizSchool is continuous and purposeful. Learners are evaluated through formative tasks such as
          classwork, quizzes, reflections, and projects, alongside quarterly summative assessments.
        </p>

        <p>
          Performance Based Tasks allow students to demonstrate real world application of learning, while digital
          portfolios compiled each term showcase growth, achievement, and reflection over time.
        </p>

        <p>This balanced approach ensures academic rigour while supporting confidence and mastery.</p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
          Values Education and Co-Curricular Experiences
        </h2>

        <p>
          VizSchool integrates values education and holistic development into its course scope through homeroom sessions,
          STAR programmes, and co-curricular activities.
        </p>

        <p>
          Students are encouraged to develop character, leadership, collaboration, and creativity, guided by HFSE's
          values-based framework. These experiences support emotional wellbeing and social connections even within a
          virtual learning environment.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">A Well-Rounded Online Learning Experience</h2>

        <p>
          The VizSchool course scope reflects a commitment to educating the whole child. By combining academic
          excellence, enrichment learning, structured assessments, and values education, VizSchool ensures learners are
          prepared not only for the next academic level but also for life beyond the classroom.
        </p>

        <p>
          Families can be confident that their child's learning journey is supported with clarity, purpose, and
          flexibility at every stage.
        </p>

        <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl my-8 text-center">
          <p className="text-base font-semibold text-primary mb-2">Explore VizSchool's Course Offerings</p>
          <p className="text-sm text-neutral-700 mb-4">
            To learn more about VizSchool and its academic offerings, reach out to our Admissions Team today.
          </p>
          <p className="text-sm text-neutral-700 font-medium">
            Contact us at{" "}
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

export default Blog4;