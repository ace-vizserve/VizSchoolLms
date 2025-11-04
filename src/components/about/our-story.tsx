export default function OurStory() {
  return (
    <div className="pb-10">
      <div className="flex items-center justify-center">
        <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
          <div>
            <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold leading-[1.2]! tracking-tighter text-primary">
              Our Story
            </h1>
            <p className="mt-6 max-w-[60ch] sm:text-lg text-foreground/80">
              VizSchool was conceptualised in 2020 during the global pandemic, following the successful implementation
              of online learning initiatives in response to the COVID-19 crisis. This pivotal moment gave rise to the
              Balikbahay Series—a creative concept inspired by the Filipino word balik (go back) bahay (home)
              underscoring the fundamental belief that education begins within the family.
            </p>
          </div>
          <div
            style={{
              backgroundImage: "url('/assets/about/our-story.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-full aspect-video rounded-xl"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <p className="mt-6 text-center text-pretty sm:text-lg text-foreground/80">
          As an extension of this philosophy, VizSchool represents the collective aspiration of our global community of
          migrant families: to provide high-quality, flexible, and accessible education from anywhere in the world. It
          is designed to support families who frequently travel or relocate, ensuring that their children can continue
          their learning journey seamlessly while preserving meaningful time together during their formative years.
        </p>
      </div>
    </div>
  );
}
