import MaxWidthWrapper from "../max-width-wrapper";
import { buttonVariants } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import EnrichmentCourses from "./courses/enrichment-courses";
import PrimaryCourses from "./courses/primary-courses";
import SecondaryCourses from "./courses/secondary-couses";

function Courses() {
  return (
    <MaxWidthWrapper className="max-w-screen-xl">
      <div className="text-center">
        <h2 className="text-primary text-3xl md:text-4xl !leading-[1.15] font-extrabold tracking-tight">
          VizSchool Courses
        </h2>
        <p className="mt-1.5 text-lg text-muted-foreground">
          Explore the wide range of courses offered by VizSchool across all programmes
        </p>
      </div>

      <div className=" py-10 md:py-14">
        <Tabs defaultValue="primary" className="w-full">
          <TabsList className="mx-auto inline-flex h-auto justify-center flex-wrap bg-muted/50 p-2 gap-4 rounded-xl border border-border">
            <TabsTrigger
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:bg-muted data-[state=inactive]:hover:text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-primary/25 data-[state=active]:scale-105",
              })}
              value="primary">
              Primary
            </TabsTrigger>
            <TabsTrigger
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:bg-muted data-[state=inactive]:hover:text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-primary/25 data-[state=active]:scale-105",
              })}
              value="secondary">
              Secondary
            </TabsTrigger>
            <TabsTrigger
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:bg-muted data-[state=inactive]:hover:text-foreground data-[state=active]:bg-violet-600 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-primary/25 data-[state=active]:scale-105",
              })}
              value="enrichment">
              Enrichment
            </TabsTrigger>
          </TabsList>

          <TabsContent className="mt-6 md:mt-12" value="primary">
            <PrimaryCourses />
          </TabsContent>
          <TabsContent className="mt-6 md:mt-12" value="secondary">
            <SecondaryCourses />
          </TabsContent>
          <TabsContent className="mt-6 md:mt-12" value="enrichment">
            <EnrichmentCourses />
          </TabsContent>
        </Tabs>
      </div>
    </MaxWidthWrapper>
  );
}

export default Courses;
