import { CheckCircle, FileText, Users, ExternalLink, GraduationCap, Globe, CreditCard, Edit, Clock, UserCheck } from 'lucide-react';

const Primary = () => {
  return (
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
            Start your child's educational journey with us. Quality education that builds strong foundations for the future.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-20 py-16">
        {/* Requirements Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Application Requirements */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#007AFF]/10 rounded-xl">
                  <FileText className="w-6 h-6 text-[#007AFF]" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Application Requirements</h2>
              </div>
              
              <div className="space-y-4">
                {[
                  "Grade 6 Copy of Grades / Report Card (1st Grading Period)",
                  "Payment Receipt (Processing Fee)",
                  "Photocopy of NSO/PSA Birth Certificate"
                ].map((req, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#007AFF] text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{req}</p>
                  </div>
                ))}
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
                  "One (1) copy of 2x2 latest photo"
                ].map((req, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#FD8735] text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{req}</p>
                  </div>
                ))}
              </div>
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
                  <a href="mailto:admissions@vizschool.com" className="font-semibold text-[#FD8735] hover:text-orange-700 underline">
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
                  description: "Pay the processing fee of PHP 500 at the University Finance Office or any payment channel of Vizschool. Secure the payment receipt as this will be uploaded during the online application process.",
                  link: "https://www.vizschool.com/finance",
                  linkText: "Payment Channels",
                  icon: <CreditCard className="w-6 h-6 text-[#007AFF]" />
                },
                {
                  step: "Application",
                  title: "Submit Online Application",
                  description: "Fill out the online application form. Upload the payment receipt, grade 6 copy of grades/report card (1st grading period), and PSA/NSO Birth Certificate.",
                  link: "https://www.vizschool.com/admissions",
                  linkText: "Apply Online",
                  icon: <Edit className="w-6 h-6 text-[#007AFF]" />
                },
                {
                  step: "Schedule",
                  title: "Get Entrance Exam Schedule",
                  description: "Get your entrance exam schedule from the Testing Center (for on-site application) or wait for the email from the Testing Center for your entrance exam schedule.",
                  icon: <Clock className="w-6 h-6 text-[#007AFF]" />
                },
                {
                  step: "Orientation",
                  title: "Attend Pre-Enrollment",
                  description: "Attend the pre-enrollment orientation on the scheduled date, then submit the requirements to proceed with the enrollment.",
                  icon: <UserCheck className="w-6 h-6 text-[#007AFF]" />
                }
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
                            <span className="text-sm font-medium text-[#007AFF] uppercase tracking-wider">{procedure.step}</span>
                            <h3 className="text-xl font-semibold text-gray-800">{procedure.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">{procedure.description}</p>
                        {procedure.link && (
                          <a
                            href={procedure.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#007AFF] hover:text-[#0056CC] font-medium transition-colors"
                          >
                            {procedure.linkText}
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  {index < 3 && (
                    <div className="absolute left-6 top-16 w-0.5 h-8 bg-[#007AFF] opacity-30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-[#007AFF] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join our community of learners and give your child the best educational foundation. 
                Our admissions team is here to guide you through every step of the process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.vizschool.com/admissions"
                  className="inline-flex items-center gap-2 bg-white text-[#007AFF] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  APPLY NOW
                  <ExternalLink className="w-5 h-5" />
                </a>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Primary;