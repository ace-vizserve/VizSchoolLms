import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";

function PrivacyPolicy() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="p-0" variant={"link"}>
          PDPA
        </Button>
      </DialogTrigger>
      <DialogContent className="!max-w-3xl pt-10">
        <ScrollArea className="h-[60vh]">
          <DialogHeader className="items-center">
            <img src="/assets/logo.png" alt="VizSchool Logo" className="size-24 object-cover mb-2" />
            <DialogTitle className="text-primary font-bold">Personal Data Protection Statement</DialogTitle>
            <DialogDescription>Effective Date: 2025</DialogDescription>
          </DialogHeader>
          <div className="mt-4 text-muted-foreground text-sm leading-relaxed">
            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="text-black font-semibold mb-2">1. Introduction</h2>
              <p>
                VizSchool LMS ("we," "our," or "us") is committed to protecting your privacy. This Personal Data Protection Statement
                explains how we collect, use, and safeguard your personal information when you use our platform.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="text-black font-semibold mb-2">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc ml-5 space-y-1 mt-2">
                <li>
                  <strong>Personal Information:</strong> Name, email address, contact details, and other information you
                  provide when registering an account.
                </li>
                <li>
                  <strong>Usage Information:</strong> Data on how you interact with our platform, including login
                  details, course progress, and preferences.
                </li>
                <li>
                  <strong>Device & Technical Data:</strong> IP address, browser type, and device information for
                  security and analytics purposes.
                </li>
              </ul>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="text-black font-semibold mb-2">3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc ml-5 space-y-1 mt-2">
                <li>Provide and improve our services.</li>
                <li>Personalize your learning experience.</li>
                <li>
                  Communicate with you regarding updates, support, and promotional content (you may opt out anytime).
                </li>
                <li>Ensure security, detect fraud, and comply with legal requirements.</li>
              </ul>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="text-black font-semibold mb-2">4. How We Share Your Information</h2>
              <p>We do not sell your personal information. However, we may share it with:</p>
              <ul className="list-disc ml-5 space-y-1 mt-2">
                <li>
                  <strong>Service Providers:</strong> Trusted third parties that help us operate our platform (e.g.,
                  hosting, analytics, customer support).
                </li>
                <li>
                  <strong>Legal Obligations:</strong> When required by law or to protect the rights and safety of users
                  and our platform.
                </li>
              </ul>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="text-black font-semibold mb-2">5. Data Security</h2>
              <p>
                We implement security measures to protect your data, but no online service is 100% secure. We encourage
                you to use strong passwords and safeguard your account information.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="text-black font-semibold mb-2">6. Your Rights & Choices</h2>
              <p>You have the right to:</p>
              <ul className="list-disc ml-5 space-y-1 mt-2">
                <li>Access, update, or delete your personal information.</li>
                <li>Opt out of marketing communications.</li>
                <li>Request a copy of your data (subject to verification).</li>
              </ul>
              <p className="mt-2">
                To exercise these rights, contact us at{" "}
                <a href="mailto:care@vizschool.com" className="text-[#ff8930] hover:text-[#ff7520] underline">
                  care@vizschool.com
                </a>
                .
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="text-black font-semibold mb-2">7. Cookies & Tracking Technologies</h2>
              <p>
                We use cookies and similar technologies to enhance user experience, analyze usage, and improve our
                services. You can manage cookie preferences in your browser settings.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="text-black font-semibold mb-2">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on our website, and
                continued use of VizSchool LMS constitutes acceptance of the revised terms.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="text-black font-semibold mb-2">9. Contact Information</h2>
              <p className="mb-10">
                If you have any questions about this Agreement, please contact us at{" "}
                <a href="mailto:care@vizschool.com" className="text-[#ff8930] hover:text-[#ff7520] underline">
                  care@vizschool.com
                </a>
                .
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default PrivacyPolicy;