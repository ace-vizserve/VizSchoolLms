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

function PrivacyPolicy() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="p-0" variant="link">
          PDPA
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
              Personal Data Protection Statement
            </DialogTitle>
            <DialogDescription>Effective Date: 2025</DialogDescription>
          </DialogHeader>

          <div className="mt-4 text-muted-foreground text-sm leading-relaxed">

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="text-black font-semibold mb-2">1. Introduction</h2>
              <p>
                VizSchool is committed to safeguarding the privacy and personal data of our
                stakeholders, including students, parents, staff, and visitors, in accordance
                with the Personal Data Protection Act (PDPA) of Singapore.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="text-black font-semibold mb-2">
                2. Collection, Use, and Disclosure of Personal Data
              </h2>
              <p>
                VizSchool collects, uses, and discloses personal data for legitimate educational,
                administrative, and operational purposes, including but not limited to:
              </p>
              <ul className="list-disc ml-5 space-y-1 mt-2">
                <li>Processing applications, registrations, and enrollments</li>
                <li>Facilitating communication related to programs, events, and activities</li>
                <li>
                  Managing administrative matters such as tuition fees, financial assistance,
                  and emergency situations
                </li>
                <li>Complying with legal and regulatory requirements</li>
                <li>Conducting surveys, analytics, or research to improve services</li>
              </ul>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="text-black font-semibold mb-2">3. Student-Specific Purposes</h2>
              <p>
                In addition to the purposes above, VizSchool may collect, use, and disclose
                student personal data to:
              </p>
              <ul className="list-disc ml-5 space-y-1 mt-2">
                <li>Deliver educational programs, assessments, grading, and certifications</li>
                <li>Support student welfare, counseling, and pastoral care services</li>
                <li>Manage co-curricular and extracurricular activities</li>
                <li>Maintain student records, attendance, and academic progress</li>
                <li>
                  Communicate with parents or guardians regarding student progress and well-being
                </li>
              </ul>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="text-black font-semibold mb-2">4. Use of Photos and Videos</h2>
              <p>
                VizSchool may capture photographs and videos during school events, activities,
                and programs. These materials may be used for publicity purposes, including
                brochures, newsletters, social media platforms, and the VizSchool website.
              </p>
              <p className="mt-2">
                Individuals who do not wish for their or their child’s image to be used may
                notify VizSchool’s Data Protection Officer (DPO) in writing.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="text-black font-semibold mb-2">5. Consent</h2>
              <p>
                By providing personal data to VizSchool, you consent to the collection, use,
                and disclosure of such data for the purposes outlined in this statement. Where
                required, explicit consent will be obtained before collecting sensitive data.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="text-black font-semibold mb-2">
                6. Protection of Personal Data
              </h2>
              <p>
                VizSchool implements reasonable security measures to protect personal data
                against unauthorized access, modification, disclosure, or loss. Access to
                personal data is limited to authorized personnel on a need-to-know basis.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="text-black font-semibold mb-2">
                7. Disclosure to Third Parties
              </h2>
              <p>
                VizSchool does not disclose personal data to third parties without consent,
                unless required or permitted by law. Permissible disclosures may include:
              </p>
              <ul className="list-disc ml-5 space-y-1 mt-2">
                <li>Regulatory and statutory authorities</li>
                <li>
                  Authorized third-party service providers supporting VizSchool operations
                </li>
                <li>Emergency situations or lawful requests under PDPA exemptions</li>
              </ul>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="text-black font-semibold mb-2">
                8. Retention of Personal Data
              </h2>
              <p>
                Personal data is retained only for as long as necessary to fulfill its intended
                purpose or as required by law. Thereafter, data is securely deleted, destroyed,
                or anonymized.
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="text-black font-semibold mb-2">
                9. Access, Correction, and Withdrawal of Consent
              </h2>
              <ul className="list-disc ml-5 space-y-1 mt-2">
                <li>Request access to personal data</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>
                  Withdraw consent for the collection, use, or disclosure of data, subject to
                  legal or contractual obligations
                </li>
              </ul>
              <p className="mt-2">
                Requests may be submitted to VizSchool’s Data Protection Officer at{" "}
                <a
                  href="mailto:care@vizschool.com"
                  className="text-[#ff8930] hover:text-[#ff7520] underline"
                >
                  care@vizschool.com
                </a>
                .
              </p>
            </section>

            <section className="hover:bg-gray-50 p-4 rounded-lg">
              <h2 className="text-black font-semibold mb-2">
                10. Updates to This Statement
              </h2>
              <p className="mb-10">
                VizSchool may update this Personal Data Protection Statement from time to time
                to reflect changes in regulatory requirements or internal practices. The latest
                version will be published on our official platforms.
              </p>
            </section>

          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default PrivacyPolicy;
