export default function OurStory() { 
  return (
    <div className="pb-10">
      <div className="flex items-center justify-center">
        <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
          <div>
            <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold leading-[1.2]! tracking-tighter text-primary">
              Our Story
            </h1>

            {/* First paragraph */}
            <p className="mt-6 max-w-[60ch] sm:text-lg text-foreground/80">
              VizSchool was conceptualised in 2020 during the global pandemic, following HFSE International School’s successful transition to online learning. This pivotal period inspired the Balikbahay Series, rooted in the Filipino words balik (to return) and bahay (home), reflecting the belief that education begins within the family.
            </p>

            {/* Second paragraph */}
            <p className="mt-4 max-w-[60ch] sm:text-lg text-foreground/80">
              From this philosophy, the school was created to support globally mobile and migrant families seeking high-quality, flexible, and accessible education from anywhere in the world. Our virtual learning platform ensures continuity in learning while preserving meaningful family time during a child’s formative years.
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
