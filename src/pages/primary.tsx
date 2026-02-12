import {
  CheckCircle,
  Clock,
  CreditCard,
  Edit,
  ExternalLink,
  FileText,
  Globe,
  GraduationCap,
  UserCheck,
  Users,
} from "lucide-react";
import { BASE_URL } from "../constants";
import SEO from "../seo";

const Primary = () => {
  return (
    <>
      <SEO
        title="Primary School Programme (Grades 1–6) | VizSchool"
        description=" Discover VizSchool’s Primary School Programme for Grades 1–6, offering face-to-face learning that builds strong academic foundations and character."
        canonical={`${BASE_URL}/vizschool-primary-school-grades-1-6`}
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "OurProgrammesPage",
          name: "Our Programmes VizSchool LMS",
          url: `${BASE_URL}/vizschool-primary-school-grades-1-6`,
        }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-[#007AFF] text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative px-6 md:px-20 py-20 text-center">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm font-medium">Primary Education</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">
              INCOMING PRIMARY
              <span className="block text-3xl md:text-5xl mt-2 text-[#FD8735]">Grades 1-6</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Start your child's educational journey with us. Quality education that builds strong foundations for the
              future.
            </p>
          </div>
        </div>

        <div className="px-6 md:px-20 py-16">
          {/* Requirements Section */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Primary Level Course Information */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[#007AFF]/10 rounded-xl">
                    <GraduationCap className="w-6 h-6 text-[#007AFF]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Primary Level Course Information</h2>
                </div>

                <div className="space-y-6">
                  {/* Assessment */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Students will be graded on the following:
                    </h3>
                    <div className="space-y-2">
                      {[
                        "Topical Tests for all subjects taught",
                        "Class Participation",
                        "School Activities & Events",
                        "Behaviour in Class",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#007AFF] rounded-full"></div>
                          <p className="text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Course Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Approved Course Titles:</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Primary One",
                        "Primary Two",
                        "Primary Three",
                        "Primary Four",
                        "Primary Five",
                        "Primary Six",
                      ].map((course, index) => (
                        <div key={index} className="bg-blue-50 px-3 py-2 rounded-lg text-[#007AFF] font-medium text-sm">
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-800">Mode of Delivery:</span>
                      <span className="text-gray-700 ml-2">Face-to-Face</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">Duration:</span>
                      <span className="text-gray-700 ml-2">10 months (full-time)</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">Entry Requirement:</span>
                      <span className="text-gray-700 ml-2">Pass Entrance Test</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">Certificate:</span>
                      <span className="text-gray-700 ml-2">Completion Certificate</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enrollment Requirements */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[#FD8735]/10 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-[#FD8735]" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Enrollment Requirements</h2>
                </div>

                <div className="space-y-4">
                  {[
                    "Original and photocopy Grade 6 Report Card",
                    "Photocopy of NSO/PSA Birth Certificate",
                    "Certificate of Good Moral Character from previous school",
                    "Undertaking (downloaded form) signed by the student and parent/guardian",
                    "One (1) copy of 2x2 latest photo",
                  ].map((req, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#FD8735] text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{req}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Requirements and Information */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Age Requirements & Teacher Ratios */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Age Requirements & Teacher Ratios</h3>

                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-gray-800">Age Requirements:</h4>
                  {[
                    "Primary One: 6 years old",
                    "Primary Two: 7 years old",
                    "Primary Three: 8 years old",
                    "Primary Four: 9 years old",
                    "Primary Five: 10 years old",
                    "Primary Six: 11 years old",
                  ].map((req, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-[#FD8735] rounded-full"></div>
                      <p className="text-gray-700">{req}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Teacher-Student Ratios:</h4>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Primary One:</span>
                      <span className="font-semibold text-[#007AFF]">1:20</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Primary Two - Three:</span>
                      <span className="font-semibold text-[#007AFF]">1:25</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Primary Four - Six:</span>
                      <span className="font-semibold text-[#007AFF]">1:35</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Graduation Requirements & Assessment */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Requirements & Assessment</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Requirements for Graduation:</h4>
                    <div className="space-y-2">
                      {[
                        "Academic competency (75% passing grade)",
                        "Minimum 80% attendance required",
                        "Adherence to behavioural standards and character guidelines",
                      ].map((req, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700 text-sm">{req}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Mode of Assessment:</h4>
                    <div className="space-y-2">
                      {["Written Work", "Performance Tasks", "Term Examinations"].map((mode, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#007AFF] rounded-full"></div>
                          <p className="text-gray-700 text-sm">{mode}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Calendar */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#FD8735]/10 rounded-xl">
                  <Clock className="w-6 h-6 text-[#FD8735]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Academic Calendar 2025</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-xl p-4">
                  <h4 className="font-semibold text-[#007AFF] mb-2">Commencement Date</h4>
                  <p className="text-gray-800 font-medium">06 January 2025</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <h4 className="font-semibold text-[#FD8735] mb-2">Primary One to Two</h4>
                  <p className="text-gray-800 font-medium">End: 17 November 2025</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <h4 className="font-semibold text-green-600 mb-2">Primary Three to Six</h4>
                  <p className="text-gray-800 font-medium">End: 18-20 November 2025</p>
                </div>
              </div>
            </div>

            {/* Modules Taught */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mb-16">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#007AFF]/10 rounded-xl">
                    <FileText className="w-6 h-6 text-[#007AFF]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Modules Taught</h3>
                </div>
                <button className="inline-flex items-center gap-2 bg-[#007AFF] text-white px-6 py-3 rounded-lg hover:bg-[#0056CC] transition-colors font-medium shadow-lg">
                  <FileText className="w-5 h-5" />
                  Download All Modules PDF
                </button>
              </div>

              <div className="grid gap-4">
                {[
                  { subject: "English", syllabus: "Singapore's Ministry of Education Syllabus" },
                  { subject: "Mathematics", syllabus: "Singapore's Ministry of Education Syllabus" },
                  { subject: "Science", syllabus: "Singapore's Ministry of Education Syllabus" },
                  { subject: "Mother Tongue", syllabus: "International Syllabus" },
                  { subject: "History (Secondary One & Two)", syllabus: "International Syllabus" },
                  { subject: "Humanities (Secondary Three & Four)", syllabus: "International Syllabus" },
                  { subject: "Contemporary Art", syllabus: "International Syllabus" },
                  { subject: "Literature", syllabus: "International Syllabus" },
                  { subject: "Co-Curricular Activities", syllabus: "International Syllabus" },
                  { subject: "Pastoral Ministry And Personal Development", syllabus: "International Syllabus" },
                  { subject: "Physical Education And Health", syllabus: "International Syllabus" },
                ].map((module, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{module.subject}</h4>
                      <p className="text-sm text-gray-600">{module.syllabus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Foreign Applicants Notice */}
            <div className="bg-orange-50 border-l-4 border-[#FD8735] rounded-xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#FD8735]/10 rounded-lg">
                  <Globe className="w-6 h-6 text-[#FD8735]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#FD8735] mb-2">International Applicants</h3>
                  <p className="text-orange-800 leading-relaxed">
                    For foreign applicants, dual citizens and applicants born in the Philippines with foreign parents,
                    please proceed to the Office of International Affairs or email{" "}
                    <a
                      href="mailto:admissions@vizschool.com"
                      className="font-semibold text-[#FD8735] hover:text-orange-700 underline">
                      admissions@vizschool.com
                    </a>{" "}
                    for the initial assessment of your requirements and proper documentation.
                  </p>
                </div>
              </div>
            </div>

            {/* Admission Procedures */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-[#007AFF]/10 rounded-xl">
                  <Users className="w-6 h-6 text-[#007AFF]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Admission Procedures</h2>
              </div>

              <div className="grid gap-8">
                {[
                  {
                    step: "Payment",
                    title: "Pay Processing Fee",
                    description:
                      "Pay the processing fee of PHP 500 at the University Finance Office or any payment channel of Vizschool. Secure the payment receipt as this will be uploaded during the online application process.",
                    link: "https://www.vizschool.com/finance",
                    linkText: "Payment Channels",
                    icon: <CreditCard className="w-6 h-6 text-[#007AFF]" />,
                  },
                  {
                    step: "Application",
                    title: "Submit Online Application",
                    description:
                      "Fill out the online application form. Upload the payment receipt, grade 6 copy of grades/report card (1st grading period), and PSA/NSO Birth Certificate.",
                    link: "https://www.vizschool.com/admissions",
                    linkText: "Apply Online",
                    icon: <Edit className="w-6 h-6 text-[#007AFF]" />,
                  },
                  {
                    step: "Schedule",
                    title: "Get Entrance Exam Schedule",
                    description:
                      "Get your entrance exam schedule from the Testing Center (for on-site application) or wait for the email from the Testing Center for your entrance exam schedule.",
                    icon: <Clock className="w-6 h-6 text-[#007AFF]" />,
                  },
                  {
                    step: "Orientation",
                    title: "Attend Pre-Enrollment",
                    description:
                      "Attend the pre-enrollment orientation on the scheduled date, then submit the requirements to proceed with the enrollment.",
                    icon: <UserCheck className="w-6 h-6 text-[#007AFF]" />,
                  },
                ].map((procedure, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                          <div className="flex items-center gap-3 mb-3">
                            {procedure.icon}
                            <div>
                              <span className="text-sm font-medium text-[#007AFF] uppercase tracking-wider">
                                {procedure.step}
                              </span>
                              <h3 className="text-xl font-semibold text-gray-800">{procedure.title}</h3>
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed mb-4">{procedure.description}</p>
                          {procedure.link && (
                            <a
                              href={procedure.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-[#007AFF] hover:text-[#0056CC] font-medium transition-colors">
                              {procedure.linkText}
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    {index < 3 && <div className="absolute left-6 top-16 w-0.5 h-8 bg-[#007AFF] opacity-30"></div>}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <div className="bg-[#007AFF] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Join our community of learners and give your child the best educational foundation. Our admissions
                  team is here to guide you through every step of the process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://www.vizschool.com/admissions"
                    className="inline-flex items-center gap-2 bg-white text-[#007AFF] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    APPLY NOW
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Primary;
