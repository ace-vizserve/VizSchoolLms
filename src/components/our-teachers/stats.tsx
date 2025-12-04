import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { cn } from "../../lib/utils";
import { AnimatedNumber } from "../ui/animated-number";

function Stats() {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-screen-xl mx-auto w-full py-12 px-6 xl:px-0">
        <h2 className="text-primary text-3xl md:text-4xl font-extrabold tracking-tight">
          Dedicated. Experienced. Inspiring.
        </h2>
        <p className="mt-4 text-base md:text-lg max-w-2xl text-foreground/70">
          Our teachers bring a wealth of experience, passion, and commitment to every lesson—mentoring students, guiding
          their growth, and inspiring a lifelong love for learning.
        </p>

        <div className="mt-16 sm:mt-24 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16 justify-center">
          <div>
            <AnimatedNumberInView value={900} textColor="text-[#4247cb]" />

            <p className="mt-6 font-semibold text-xl">Students Mentored</p>
            <p className="mt-2 text-[17px] text-muted-foreground">
              Hundreds of learners guided towards academic and personal success.
            </p>
          </div>
          <div>
            <AnimatedNumberInView value={10000} textColor="text-[#ff8930]" />
            <p className="mt-6 font-semibold text-xl">Hours of Teaching</p>
            <p className="mt-2 text-[17px] text-muted-foreground">
              Extensive experience in delivering engaging, personalized lessons.
            </p>
          </div>
          <div>
            <AnimatedNumberInView value={420} textColor="text-emerald-500" />
            <p className="mt-6 font-semibold text-xl">Courses Delivered</p>
            <p className="mt-2 text-[17px] text-muted-foreground">
              From core subjects to special skills, we've taught it all.
            </p>
          </div>
          <div>
            <AnimatedNumberInView value={2000} textColor="text-[#4247cb]" />
            <p className="mt-6 font-semibold text-xl">Lessons Completed</p>
            <p className="mt-2 text-[17px] text-muted-foreground">
              Every lesson is a step towards our students' highest potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnimatedNumberInView({ value, textColor }: { value: number; textColor: string }) {
  const [stat, setStat] = useState<number>(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (isInView && stat === 0) {
    setStat(value);
  }

  return (
    <div className={cn("text-5xl md:text-6xl font-bold", textColor)} ref={ref}>
      <AnimatedNumber
        springOptions={{
          bounce: 0.25,
          duration: 1000,
        }}
        value={stat}
      />
      +
    </div>
  );
}

export default Stats;