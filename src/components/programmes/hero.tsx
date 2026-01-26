import { buttonVariants } from "../ui/button";

function Hero() {
  return (
    <div className="z-10 max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6">
      <div className="text-white flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold !leading-tight">
          Unlock Your Potential with Our Engaging Learning Programmes
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80">
          Discover a world of knowledge with our expertly crafted courses. We offer a flexible and affordable learning
          experience designed to help you succeed.
        </p>
        <div className="mt-8">
          <a
            href="https://enrol.hfse.edu.sg/"
            className={buttonVariants({
              size: "lg",
              className: "!text-base lg:!text-lg !font-extrabold !py-5 lg:!py-6 !px-10",
            })}>
            Get Started
          </a>
        </div>
      </div>
      <div
        className="w-full aspect-video bg-cover rounded-4xl border-6 lg:border-8 border-primary"
        style={{
          backgroundImage: `url(/assets/programmes/programmes-hero.jpg)`,
        }}
      />
    </div>
  );
}

export default Hero;
