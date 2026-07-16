import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { supabase } from "../../services/supabase-config";
import { waitlistSchema, type WaitlistSchema } from "../../zod-schema";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

function NotifyForm() {
  const form = useForm<WaitlistSchema>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: { name: "", email: "" },
  });

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  async function onSubmit(values: WaitlistSchema) {
    try {
      const { error } = await supabase.from("waitlist").insert({
        name: values.name,
        email: values.email,
      });

      if (error && error.code !== "23505") {
        throw error;
      }

      try {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId =
          import.meta.env.VITE_EMAILJS_WAITLIST_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

        if (serviceId && templateId) {
          const timestamp = new Date().toLocaleString("en-SG", {
            dateStyle: "full",
            timeStyle: "short",
            timeZone: "Asia/Singapore",
          });

          await emailjs.send(serviceId, templateId, {
            name: values.name,
            email: values.email,
            time: timestamp,
          });
        }
      } catch (emailError) {
        console.error("EmailJS notification error", emailError);
      }

      if (error?.code === "23505") {
        toast.success("You're already on the list! 🎉", {
          description: "We'll email you the second we launch.",
        });
      } else {
        toast.success("Spot reserved! 🎉", {
          description: "We'll email you the second we launch.",
        });
      }

      form.reset();
    } catch (error) {
      console.error("Waitlist submission error", error);
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Your name"
                  className="h-10 px-0 bg-transparent border-0 border-b-2 border-[#161b33]/20 rounded-none text-[#161b33] placeholder:text-[#161b33]/40 focus-visible:ring-0 focus-visible:border-[#ff8930]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-[#c2410c] text-left" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  type="email"
                  placeholder="Your email"
                  className="h-10 px-0 bg-transparent border-0 border-b-2 border-[#161b33]/20 rounded-none text-[#161b33] placeholder:text-[#161b33]/40 focus-visible:ring-0 focus-visible:border-[#ff8930]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-[#c2410c] text-left" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="h-11 w-full mt-1 bg-[#ff8930] hover:bg-[#ff7520] text-white font-mono uppercase tracking-wide text-sm rounded-sm shadow-none">
          {form.formState.isSubmitting ? "Reserving..." : "Reserve my spot"}
          {!form.formState.isSubmitting && <ArrowRight className="w-4 h-4" />}
        </Button>
      </form>
    </Form>
  );
}

export default NotifyForm;
