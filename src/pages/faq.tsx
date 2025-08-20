import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem } from "../components/ui/accordion";
import { BASE_URL } from "../constants";
import { cn } from "../lib/utils";
import SEO from "../seo";

const faq = [
  {
    question: "What is VizSchool?",
    answer:
      "VizSchool is an online learning platform with live virtual classes, interactive activities, and personalised teacher support—bringing the classroom experience straight to your device.",
  },
  {
    question: "How do I join a class?",
    answer:
      "After enrolling, you’ll receive a class link via email and in your dashboard. Simply click the link at the scheduled time to join your live virtual session.",
  },
  {
    question: "Can I access lessons after they’re over?",
    answer:
      "Yes! All live classes are recorded and stored in your account so you can replay them anytime, along with any shared resources or assignments.",
  },
  {
    question: "What devices can I use for VizSchool?",
    answer:
      "You can join classes using a laptop, tablet, or smartphone. For the best experience, we recommend a stable internet connection, a webcam, and a microphone.",
  },
  {
    question: "What if I have technical issues during a class?",
    answer:
      "Our support team is here to help. You can reach us via live chat or email, and we’ll guide you through troubleshooting so you can get back to learning quickly.",
  },
];

function FAQ() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions | VizSchool LMS Help Center"
        description="Find answers to the most common questions about VizSchool LMS, including courses, enrollment, certificates, and platform features."
        canonical={`${BASE_URL}/faq`}
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          name: "FAQ VizSchool LMS",
          url: `${BASE_URL}/faq`,
        }}
      />

      <div className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-3xl">
          <h2 className="text-3xl md:text-4xl !leading-[1.15] font-extrabold tracking-tight">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="mt-1.5 text-lg text-muted-foreground">
            Quick answers to common questions about our products and services.
          </p>

          <Accordion type="single" collapsible className="mt-8 space-y-4" defaultValue="question-0">
            {faq.map(({ question, answer }, index) => (
              <AccordionItem key={question} value={`question-${index}`} className="bg-white py-1 px-4 rounded-xl">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "text-primary flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                      "text-start text-lg"
                    )}>
                    {question}
                    <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 stroke-primary stroke-3" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default FAQ;
