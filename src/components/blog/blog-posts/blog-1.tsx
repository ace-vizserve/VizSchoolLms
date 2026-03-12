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
  read_time: "9 min read",
  title: "VizSchool: A Virtual School Offering Quality Online Education",
  created_at: "January 2026",
  excerpt:
    "Launched January 2026, VizSchool by HFSE provides flexible, values-based online education for Primary and Secondary students worldwide.",
  image: "/assets/blogs/blog-1.png",
};


function Blog1() {
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
        <p className="text-base md:text-lg font-medium text-neutral-700 first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left">
          {post.excerpt}
        </p>

        <p className="mt-8">
          Launched in January 2026, VizSchool offers a virtual schooling experience tailored for globally mobile and
          modern families. As the online arm of HFSE International School, this flexible learning platform extends
          HFSE's mission of being an International School for All by providing accessible, technology-enabled, and
          values-based education beyond physical borders.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">What Is VizSchool?</h2>

        <p>
          VizSchool provides continuity in education, allowing learners to thrive academically, emotionally, and
          socially while remaining connected to their family and global community.
        </p>

        <p>
          Guided by the HAPI values—Happy, Humble, Assertive, Appreciative, Productive, Proactive, Independent, and
          Interdependent—the programme shapes not only how students learn but also who they become.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">The Story Behind VizSchool</h2>

        <p>
          The concept for this virtual school emerged in 2020 during the global pandemic, after HFSE successfully
          transitioned to online learning. This period inspired the "Balikbahay Series", rooted in the belief that
          education begins at home and that family plays a key role in a child's learning journey.
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic font-semibold text-lg text-neutral-800 my-8">
          "Education begins at home and family plays a key role in a child's learning journey."
        </blockquote>

        <p>
          From this philosophy, VizSchool was created to support migrant and globally mobile families who seek
          high-quality, flexible, and accessible education grounded in strong values.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Vision and Mission of VizSchool</h2>

        <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl my-6">
          <h3 className="text-primary font-semibold mb-2">Vision</h3>
          <p className="text-sm text-neutral-700 mb-4">
            To create a borderless world of learning that empowers global citizens to grow in knowledge, values, and
            purpose. VizSchool aims to shape learners ready to lead, connect, and make a positive impact across
            cultures.
          </p>
          <h3 className="text-primary font-semibold mb-2">Mission</h3>
          <p className="text-sm text-neutral-700">
            To nurture lifelong learners with empathy, integrity, and innovation, guiding them to build meaningful
            legacies and contribute positively to their communities.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
          Flexible Learning Pathways to Suit Every Family
        </h2>

        <p>VizSchool offers three programmes tailored to different learning styles and family lifestyles:</p>

        <div className="space-y-6 my-8">
          <div className="bg-white border border-neutral-200 p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-2">1. VizIndie Flexible Virtual Schooling</h3>
            <p className="text-sm text-neutral-700">
              Ideal for self-motivated learners who prefer a self-paced approach. Students enjoy flexibility in
              schedule, access to curated modules, and optional academic mentoring with quarterly check-ins.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-2">2. VizFlex Blended Support Programme</h3>
            <p className="text-sm text-neutral-700">
              Combines independent learning with live teacher sessions. Learners follow weekly plans, receive feedback,
              and participate in co-curricular activities. This option suits families seeking structure with
              flexibility.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 p-5 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-2">3. VizLive Full-Time Virtual Classroom</h3>
            <p className="text-sm text-neutral-700">
              Provides daily live online classes led by certified HFSE teachers. Students engage in collaborative
              projects, real-time discussions, and continuous assessments aligned with Singapore standards.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Academic Coverage and Curriculum Design</h2>

        <p>
          This online programme offers a complete pathway from Primary One to Secondary Four, aligned with the
          Singapore curriculum and international benchmarks.
        </p>

        <p>
          Core subjects include English, Mathematics, Science, and Mother Tongue Filipino, while enrichment courses
          support holistic development with Computer Basics, Financial Literacy, ICT and Robotics, and Technology
          Innovation.
        </p>

        <p>
          Learning combines short, focused live sessions with self-paced tasks. The platform uses an inquiry-based,
          student-centred approach supported by multimedia tools.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Assessment and Learning Progression</h2>

        <p>
          VizSchool uses a balanced assessment framework combining formative assessments with quarterly evaluations.
          Performance-based tasks let students apply learning in real-world contexts, while digital portfolios track
          progress and reflections each term.
        </p>

        <p>
          Successful completion allows learners to continue in the online school, transition to on-site HFSE schooling,
          or move to other international institutions with similar standards.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">A Connected Global School Experience</h2>

        <p>
          Beyond academics, learners enjoy access to HFSE's wider school community. Students may participate in campus
          activities, school celebrations, clubs, competitions, and hybrid learning experiences throughout the year.
        </p>

        <p>This ensures that even in a virtual setting, students remain socially engaged and connected.</p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Begin Your Learning Journey with VizSchool</h2>

        <p>
          VizSchool offers families a trusted virtual education pathway blending academic rigour, flexibility, and
          values-based learning. Designed for today's global families, it provides continuity, connection, and
          confidence in every child's learning journey.
        </p>

        <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl my-8 text-center">
          <p className="text-base font-semibold text-primary mb-2">Ready to Get Started?</p>
          <p className="text-sm text-neutral-700 mb-4">
            Launching in January 2026, the school invites families worldwide to experience an online programme that
            puts purpose, people, and progress at the heart of education.
          </p>
          <p className="text-sm text-neutral-700 font-medium">
            Contact our Admissions Team at{" "}
            <a href="tel:+6582000062" className="text-primary hover:underline">
              +65 8200 0062
            </a>{" "}
            to learn more about VizSchool and its programmes.
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

export default Blog1;