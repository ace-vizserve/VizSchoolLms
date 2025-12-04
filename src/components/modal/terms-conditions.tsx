import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { ScrollArea } from "../ui/scroll-area";

function TermsConditions() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="p-0" variant={"link"}>
          Terms & Conditions
        </Button>
      </DialogTrigger>
      <DialogContent className="!max-w-3xl pt-10">
        <ScrollArea className="h-[60vh]">
          <DialogHeader className="items-center">
            <img src="/assets/logo.png" alt="VizSchool Logo" className="size-24 object-cover mb-2" />
            <DialogTitle className="text-primary font-bold">End User License Agreement</DialogTitle>
            <DialogDescription>Effective Date: 2025</DialogDescription>
          </DialogHeader>
          <div className="mt-4 text-muted-foreground text-sm leading-relaxed">
            <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <h2 className="text-black font-semibold mb-2">1. Introduction</h2>
              <p>
                This End User License Agreement ("Agreement") is a legal agreement between you ("User") and VizSchool
                LMS ("Company," "we," "our," or "us"). By accessing or using VizSchool LMS, you agree to comply with and
                be bound by this Agreement. If you do not agree, you may not use the platform.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <h2 className="text-black font-semibold mb-2">2. License Grant</h2>
              <p>
                Subject to your compliance with this Agreement, VizSchool LMS grants you a limited, non-exclusive,
                non-transferable, and revocable license to access and use the platform for personal, educational, and
                non-commercial purposes.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <h2 className="text-black font-semibold mb-2">3. Restrictions</h2>
              <ul className="list-disc ml-5 space-y-1">
                <li>Copy, modify, distribute, or create derivative works of any content from VizSchool LMS.</li>
                <li>Share, sell, or sublicense your account or any portion of the platform.</li>
                <li>Use the platform for any unlawful or unauthorized purposes.</li>
                <li>Attempt to gain unauthorized access to VizSchool LMS, its systems, or other user accounts.</li>
              </ul>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <h2 className="text-black font-semibold mb-2">4. User Accounts & Security</h2>
              <p>
                You are responsible for maintaining the confidentiality of your login credentials and any activity under
                your account. We are not liable for any loss or damage resulting from unauthorized access to your
                account.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <h2 className="text-black font-semibold mb-2">5. Content & Intellectual Property</h2>
              <p>
                All content on VizSchool LMS, including but not limited to course materials, videos, graphics, and
                software, is owned by VizSchool LMS or its licensors and protected under copyright and intellectual
                property laws. Unauthorized use of content is strictly prohibited.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <h2 className="text-black font-semibold mb-2">6. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to VizSchool LMS at our sole discretion if you
                violate this Agreement. Upon termination, your right to use the platform will cease immediately.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <h2 className="text-black font-semibold mb-2">7. Disclaimers & Limitation of Liability</h2>
              <div className="space-y-2">
                <p>
                  VizSchool LMS is provided "as is" without warranties of any kind. We do not guarantee uninterrupted or
                  error-free access.
                </p>
                <p>
                  We are not liable for any indirect, incidental, or consequential damages arising from your use of the
                  platform.
                </p>
              </div>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <h2 className="text-black font-semibold mb-2">8. Changes to this Agreement</h2>
              <p>
                We may update this Agreement from time to time. Any changes will be posted on our website, and continued
                use of VizSchool LMS constitutes acceptance of the revised terms.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <h2 className="text-black font-semibold mb-2">9. Governing Law</h2>
              <p>This Agreement shall be governed by and construed in accordance with the laws of Singapore.</p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200">
              <h2 className="text-black font-semibold mb-2">10. Contact Information</h2>
              <p className="mb-10">
                If you have any questions about this Agreement, please contact us at{" "}
                <a
                  href="mailto:care@vizschool.com."
                  className="text-[#ff8930] hover:text-[#ff7520] underline transition-colors duration-200">
                  care@vizschool.com.
                </a>
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default TermsConditions;