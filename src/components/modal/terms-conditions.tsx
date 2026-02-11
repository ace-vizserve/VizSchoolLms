import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";

function TermsConditions() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="p-0" variant="link">
          Terms & Conditions
        </Button>
      </DialogTrigger>

      <DialogContent className="!max-w-3xl pt-10">
        <ScrollArea className="h-[60vh]">
          <DialogHeader className="items-center">
            <img
              src="/assets/logo.png"
              alt="VizSchool Logo"
              className="size-24 object-cover mb-2"
            />
            <DialogTitle className="text-primary font-bold">
              Terms and Conditions
            </DialogTitle>
            <DialogDescription>Effective Date: 2025</DialogDescription>
          </DialogHeader>

          <div className="mt-4 text-muted-foreground text-sm leading-relaxed">

            <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <h2 className="text-black font-semibold mb-2">1. Introduction</h2>
              <p>
                Welcome to the VizSchool website and platform (“Website”). By accessing or using
                this Website, you agree to be bound by these Terms and Conditions (“Terms”).
                If you do not agree with these Terms, please do not use this Website.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <h2 className="text-black font-semibold mb-2">2. Intellectual Property Rights</h2>
              <p>
                All content, design, layout, logos, graphics, text, and materials available on
                this Website are the property of VizSchool or its licensors, unless otherwise
                stated. These materials are protected by copyright, trademark, and other
                intellectual property laws.
              </p>
              <p className="mt-2">
                You may not reproduce, distribute, modify, or use any content without prior
                written permission from VizSchool.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <h2 className="text-black font-semibold mb-2">3. Use of the Website</h2>
              <p>
                You agree to use this Website for lawful purposes only and in a manner that does
                not infringe the rights of others or restrict their use and enjoyment of the
                Website.
              </p>
              <p className="mt-2">
                Prohibited activities include, but are not limited to, transmitting unlawful,
                harmful, offensive, or misleading content, or attempting to disrupt the normal
                operation of the Website.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <h2 className="text-black font-semibold mb-2">4. Accuracy of Information</h2>
              <p>
                While VizSchool strives to ensure that information provided on this Website is
                accurate and up to date, we make no warranties or representations regarding the
                accuracy, completeness, or reliability of any content.
              </p>
              <p className="mt-2">
                Content may be updated, modified, or removed at any time without prior notice.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <h2 className="text-black font-semibold mb-2">5. Third-Party Links</h2>
              <p>
                This Website may contain links to third-party websites for convenience or
                informational purposes. VizSchool does not endorse, control, or assume
                responsibility for the content, policies, or practices of any third-party
                websites.
              </p>
              <p className="mt-2">
                Access to third-party websites is at your own risk.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <h2 className="text-black font-semibold mb-2">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, VizSchool shall not be liable for any
                direct, indirect, incidental, consequential, or punitive damages arising from
                your use of or inability to use this Website.
              </p>
              <p className="mt-2">
                This includes, but is not limited to, loss or damage caused by viruses, technical
                failures, or unauthorized access.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <h2 className="text-black font-semibold mb-2">7. Data Protection and Privacy</h2>
              <p>
                VizSchool respects your privacy and is committed to protecting your personal
                data in accordance with applicable data protection laws. Please refer to our
                Personal Data Protection and Privacy Policy for more information.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <h2 className="text-black font-semibold mb-2">8. Changes to the Terms</h2>
              <p>
                VizSchool reserves the right to amend or update these Terms at any time without
                prior notice. Your continued use of the Website constitutes acceptance of the
                revised Terms.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <h2 className="text-black font-semibold mb-2">9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of
                Singapore. Any disputes arising from or related to these Terms shall be subject
                to the exclusive jurisdiction of the courts of Singapore.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <h2 className="text-black font-semibold mb-2">10. Contact Us</h2>
              <p className="mb-10">
                If you have any questions regarding these Terms and Conditions, please contact
                us at{" "}
                <a
                  href="mailto:care@vizschool.com"
                  className="text-[#ff8930] hover:text-[#ff7520] underline transition-colors duration-200"
                >
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

export default TermsConditions;
