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
  read_time: "12 min read",
  title: "Programmes of VizSchool: VizIndie, VizFlex & VizLive Explained",
  created_at: "January 2026",
  excerpt:
    "Discover how VizIndie, VizFlex, and VizLive offer distinct learning pathways to support different learning styles, family lifestyles, and levels of academic support.",
  image: "/assets/blogs/blog-3.png",
};

function Blog3() {
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
          Understanding the Three VizSchool Programmes: VizIndie, VizFlex and VizLive
        </h2>

        <p className="text-base md:text-lg font-medium text-neutral-700 first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left">
          {post.excerpt}
        </p>

        <p className="mt-8">
          Choosing the right schooling option is an important decision for every family. With different learning styles,
          schedules, and levels of support needed, flexibility matters more than ever. VizSchool was designed with this
          in mind, offering three distinct virtual learning programmes that cater to a wide range of learners.
        </p>

        <p>
          Whether your child thrives with independence, benefits from guided support, or prefers daily live interaction,
          VizSchool provides a pathway that aligns with your family's lifestyle and learning goals.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Why VizSchool Offers Multiple Learning Pathways</h2>

        <p>
          Every child learns differently. Some students work best at their own pace, while others need structure and
          regular interaction with teachers and peers. VizSchool recognises these differences and offers programme
          options that balance flexibility, structure, and engagement.
        </p>

        <p>
          All VizSchool programmes are grounded in HFSE's academic standards, values based education, and commitment to
          holistic development. The difference lies in how learning is delivered and supported.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
          1. VizIndie: Flexible Virtual Schooling for Independent Learners
        </h2>

        <p>
          VizIndie is designed for self-motivated learners and families seeking maximum flexibility. This programme
          allows students to learn at their own pace while maintaining academic continuity.
        </p>

        <div className="bg-white border border-neutral-200 p-6 rounded-lg shadow-sm my-6">
          <p className="text-sm text-neutral-700 mb-4">
            Learners have access to curated learning modules, quality teaching notes, and assessments that align with the
            curriculum. The flexible schedule allows families to plan learning around travel, personal commitments, or
            other educational pursuits. Optional academic mentoring and quarterly check ins provide guidance without
            compromising independence.
          </p>
          <p className="text-sm text-neutral-700 font-semibold">
            VizIndie is ideal for families who value autonomy and for students who are confident in managing their own
            learning with light support.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
          2. VizFlex: Blended Support for Balanced Learners
        </h2>

        <p>
          VizFlex offers a balanced approach that combines independent learning with regular live teacher interaction.
          This programme is suited for families who want flexibility but also appreciate structure and consistent
          guidance.
        </p>

        <div className="bg-white border border-neutral-200 p-6 rounded-lg shadow-sm my-6">
          <p className="text-sm text-neutral-700 mb-4">
            Students follow guided weekly learning plans that help them stay organised and focused. Live teacher sessions
            provide opportunities for clarification, discussion, and feedback. Learners also participate in co-curricular
            activities and community events, supporting social connections and holistic growth.
          </p>
          <p className="text-sm text-neutral-700 font-semibold">
            VizFlex is a strong choice for learners who benefit from teacher support while still enjoying the freedom of
            a flexible schedule.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
          3. VizLive: Full Time Virtual Classroom Experience
        </h2>

        <p>
          VizLive is a full-time virtual classroom designed for students who thrive with routine, interaction, and
          real-time engagement. Learners attend daily live online classes led by certified HFSE teachers.
        </p>

        <div className="bg-white border border-neutral-200 p-6 rounded-lg shadow-sm my-6">
          <p className="text-sm text-neutral-700 mb-4">
            Classes encourage collaboration through discussions, group projects, and interactive activities. Continuous
            assessments aligned with Singapore standards ensure academic rigour and progress tracking. This programme
            closely mirrors a traditional school environment while maintaining the benefits of online learning.
          </p>
          <p className="text-sm text-neutral-700 font-semibold">
            VizLive is ideal for students who enjoy learning alongside peers and perform best with consistent structure
            and teacher presence.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">A Shared Foundation Across All Programmes</h2>

        <p>
          While each programme differs in delivery, all VizSchool pathways share the same strong foundation. Students
          engage with core academic subjects, enrichment courses, and values education guided by the HAPI values.
          Assessment, progression, and academic standards remain consistent across programmes.
        </p>

        <p>
          This ensures that families can choose the learning style that suits their child without compromising quality or
          outcomes.
        </p>

        <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
          Choosing the Right VizSchool Programme for Your Child
        </h2>

        <p>
          Selecting the right programme depends on your child's learning preferences, level of independence, and your
          family's lifestyle. VizIndie offers freedom and flexibility, VizFlex provides balance and guidance, and VizLive
          delivers structure and daily interaction.
        </p>

        <p>
          VizSchool empowers families to choose with confidence, knowing that each pathway supports academic excellence,
          personal growth, and global readiness.
        </p>

        <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl my-8 text-center">
          <p className="text-base font-semibold text-primary mb-2">Ready to Find the Right Programme?</p>
          <p className="text-sm text-neutral-700 mb-4">
            To learn more about VizSchool and find the programme that best fits your child, connect with the VizSchool
            team and begin your virtual learning journey today.
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

export default Blog3;