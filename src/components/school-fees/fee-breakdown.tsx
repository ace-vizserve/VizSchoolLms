import { Sparkles, TrendingUp, Users } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const schoolPrograms = [
  {
    programName: "VizIndie",
    overview: "Parent-led Program",
    feeRange: "3,150 – 3,450",
    icon: Users,
    breakdown: [
      {
        component: "Annual Tuition",
        fee: "$2,500",
        details: "Base fee for program access, advisor support, core curriculum guidance",
      },
      {
        component: "Curriculum Bundle",
        fee: "$200 – $500",
        details: "Suggested books and learning materials",
      },
      {
        component: "Advisor Sessions",
        fee: "$300",
        details: "Four scheduled online check-ins with HFSE academic & wellbeing advisors",
      },
      {
        component: "Assessment Kit",
        fee: "$150",
        details: "Year-end testing Tools",
      },
      {
        component: "US/SG Accreditation",
        fee: "Optional: $300 – $500",
        details: "Documentation & report processing",
      },
    ],
  },
  {
    programName: "VizFlex",
    overview: "Blended/Asynchronous Program",
    feeRange: "4,350 – 4,650",
    icon: TrendingUp,
    breakdown: [
      {
        component: "Annual Tuition",
        fee: "$3,500",
        details: "Includes platform access (MobyMax, Labster), advisor support",
      },
      {
        component: "Online Platform Fee",
        fee: "Included",
        details: "Full access to licensed digital curriculum",
      },
      {
        component: "Print Material Kit",
        fee: "$300 – $600",
        details: "Grade-level consumables & workbooks",
      },
      {
        component: "Unit / Quarterly Tests",
        fee: "$200",
        details: "Digital assessments via online tools",
      },
      {
        component: "Advisor Check-ins",
        fee: "$350",
        details: "Six scheduled online sessions for guidance & progress review",
      },
      {
        component: "Hybrid Workshops",
        fee: "Optional: $150 – $250/session",
        details: "2–4 optional face-to-face workshops per year",
      },
      {
        component: "Accreditation Support",
        fee: "Optional: $300 – $500",
        details: "Accreditation assistance",
      },
    ],
  },
  {
    programName: "VizLive",
    overview: "Full Virtual School Experience",
    feeRange: "5,500",
    icon: Sparkles,
    breakdown: [
      {
        component: "Annual Tuition",
        fee: "$5,500",
        details: "Includes daily live classes, homeroom, grading",
      },
      {
        component: "Live Class Platform",
        fee: "Included",
        details: "Zoom classes, LMS portal (with recording access)",
      },
      {
        component: "Digital Assessment Tools",
        fee: "Included",
        details: "End-term diagnostics",
      },
      {
        component: "Community & Clubs",
        fee: "Included",
        details: "Access to virtual events, clubs, peer support",
      },
      {
        component: "Dedicated Homeroom Teacher",
        fee: "Included",
        details: "Assigned teacher monitors student progress",
      },
      {
        component: "Quarterly Reports",
        fee: "Included",
        details: "Formal academic progress reports",
      },
      {
        component: "SG Accreditation",
        fee: "Optional: $300 – $500",
        details: "Singapore accreditation support",
      },
      {
        component: "On-campus Hybrid Add-Ons",
        fee: "Optional: $250/quarter",
        details: "Face-to-face sessions at HFSE hub or partner site",
      },
    ],
  },
];

export default function FeeBreakdown() {
  return (
    <div className="max-w-6xl mx-auto text-center">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Transparent Pricing</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Detailed Fee Breakdown
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          See exactly what's included in each program with our comprehensive fee structure
        </p>
      </div>

      <Tabs defaultValue={schoolPrograms[0].programName} className="w-full">
        <TabsList className="mx-auto inline-flex h-auto justify-center flex-wrap bg-muted/50 gap-4 p-2 rounded-xl border border-border">
          {schoolPrograms.map((tab) => {
            const Icon = tab.icon;
            return (
              <TabsTrigger
                key={tab.programName}
                value={tab.programName}
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:bg-muted data-[state=inactive]:hover:text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:shadow-primary/25 data-[state=active]:scale-105",
                })}>
                <Icon className="w-5 h-5 mr-2" strokeWidth={2.5} />
                {tab.programName}
              </TabsTrigger>
            );
          })}
        </TabsList>

        {schoolPrograms.map((program) => (
          <TabsContent key={program.programName} value={program.programName}>
            <ProgramBreakdown program={program} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

function ProgramBreakdown({ program }: { program: (typeof schoolPrograms)[0] }) {
  return (
    <div className="mt-6 md:mt-12">
      <div className="mb-6 p-6 rounded-xl bg-muted/50 border border-border">
        <h3 className="text-2xl font-bold text-foreground mb-2">{program.programName}</h3>
        <p className="text-lg text-muted-foreground mb-3">{program.overview}</p>
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground">Total Fee Range:</span>
          <span className="text-2xl font-bold text-primary">${program.feeRange}</span>
        </div>
      </div>

      <div className="border-2 border-dashed border-border bg-muted/30 rounded-xl">
        <Table className="bg-card rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              <TableHead className="text-base text-center font-semibold text-foreground py-4">Component</TableHead>
              <TableHead className="text-base text-center font-semibold text-foreground py-4">Fee</TableHead>
              <TableHead className="text-base text-center font-semibold text-foreground py-4">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {program.breakdown.map((item, index) => (
              <TableRow key={index} className="border-dashed hover:bg-muted/20">
                <TableCell className="font-medium text-foreground py-4">{item.component}</TableCell>
                <TableCell className="text-center py-4">
                  <span className={`font-semibold ${item.fee === "Included" ? "text-primary" : "text-foreground"}`}>
                    {item.fee}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground py-4">{item.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
