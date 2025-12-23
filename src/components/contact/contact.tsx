import emailjs from "@emailjs/browser";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import SuccessModal from "../ui/successModal";

// Fix for Leaflet marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

declare global {
  interface Window {
    grecaptcha: any;
    onRecaptchaLoad?: () => void;
  }
}

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    inquiryType: "",
    subject: "",
    message: "",
    captchaToken: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaError, setCaptchaError] = useState("");
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  // Load reCAPTCHA script
  useEffect(() => {
    if (window.grecaptcha) {
      setRecaptchaLoaded(true);
      return;
    }

    window.onRecaptchaLoad = () => {
      setRecaptchaLoaded(true);
    };

    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      if (window.onRecaptchaLoad) {
        window.onRecaptchaLoad = undefined;
      }
    };
  }, []);

  // Initialize reCAPTCHA when loaded
  useEffect(() => {
    if (recaptchaLoaded && recaptchaRef.current && !widgetId.current) {
      try {
        const siteKey = import.meta.env.VITE_CAPTCHA_SITE_KEY || "";
        widgetId.current = window.grecaptcha.render(recaptchaRef.current, {
          sitekey: siteKey,
          callback: (token: string) => {
            setFormData((prev) => ({ ...prev, captchaToken: token }));
            setCaptchaError("");
          },
          "expired-callback": () => {
            setFormData((prev) => ({ ...prev, captchaToken: "" }));
            setCaptchaError("reCAPTCHA has expired. Please verify again.");
          },
          "error-callback": () => {
            setCaptchaError("reCAPTCHA error occurred. Please try again.");
          },
        });
      } catch (error) {
        console.error("Error rendering reCAPTCHA:", error);
        setCaptchaError("Failed to load reCAPTCHA");
      }
    }
  }, [recaptchaLoaded]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaVerify = async () => {
    if (!formData.captchaToken) {
      setCaptchaError("Please complete the reCAPTCHA verification");
      return false;
    }
    setCaptchaError("");
    return true;
  };

  const resetRecaptcha = () => {
    if (widgetId.current !== null && window.grecaptcha) {
      window.grecaptcha.reset(widgetId.current);
      setFormData((prev) => ({ ...prev, captchaToken: "" }));
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your full name");
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage("Please enter your email address");
      return false;
    }
    if (!formData.phone.trim()) {
      setErrorMessage("Please enter your mobile number");
      return false;
    }
    if (!formData.inquiryType) {
      setErrorMessage("Please select an inquiry type");
      return false;
    }
    if (!formData.subject.trim()) {
      setErrorMessage("Please enter a subject");
      return false;
    }
    return true;
  };

  const handleFormSubmit = async () => {
    setIsSubmitting(true);
    setErrorMessage("");
    setCaptchaError("");

    // Validate form
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    // Verify captcha
    const isCaptchaValid = await handleCaptchaVerify();
    if (!isCaptchaValid) {
      setIsSubmitting(false);
      return;
    }

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        throw new Error("EmailJS configuration is missing");
      }

      const now = new Date();
      const timestamp = now.toLocaleString("en-SG", {
        dateStyle: "full",
        timeStyle: "short",
        timeZone: "Asia/Singapore",
      });

      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        inquiry_type: formData.inquiryType,
        subject: formData.subject,
        message: formData.message || "No message provided",
        time: timestamp,
      };

      await emailjs.send(serviceId, templateId, templateParams);

      // Show success modal
      setShowSuccessModal(true);

      // Reset form
      setFormData({
        email: "",
        phone: "",
        name: "",
        inquiryType: "",
        subject: "",
        message: "",
        captchaToken: "",
      });
      resetRecaptcha();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrorMessage("Failed to send message. Please try again or contact us directly at admissions@hfse.edu.sg");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Success Modal */}
        <SuccessModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} />

        {/* Contact Form and Map Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="mb-6">
                <Badge className="bg-blue-100 text-[#4247cb] hover:bg-blue-100 mb-4">Contact Form</Badge>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-800 border border-red-200">
                  <p className="text-sm font-medium">{errorMessage}</p>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4247cb] focus:border-[#4247cb] outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4247cb] focus:border-[#4247cb] outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number *
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => {
                      const numericValue = e.target.value.replace(/\D/g, "");
                      setFormData((prev) => ({ ...prev, phone: numericValue }));
                    }}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4247cb] focus:border-[#4247cb] outline-none transition-colors"
                    placeholder="Enter your mobile number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type *</label>
                  <div className="space-y-2">
                    {[
                      "General Inquiry",
                      "Admission Inquiry",
                      "Product or Service Inquiry",
                      "Partnership and Collaboration",
                      "Feedbacks and Comments",
                      "Other Inquiry",
                    ].map((type) => (
                      <label key={type} className="flex items-center">
                        <input
                          type="radio"
                          name="inquiryType"
                          value={type}
                          checked={formData.inquiryType === type}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-[#4247cb] focus:ring-[#4247cb]"
                        />
                        <span className="ml-2 text-sm text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4247cb] focus:border-[#4247cb] outline-none transition-colors"
                    placeholder="Enter the subject of your message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4247cb] focus:border-[#4247cb] outline-none transition-colors resize-none"
                    placeholder="Enter your message here"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Verification *</label>
                  <div className="flex flex-col space-y-2">
                    <div ref={recaptchaRef} className="recaptcha-container">
                      {!recaptchaLoaded && (
                        <div className="flex items-center justify-center h-20 bg-gray-100 rounded border-2 border-dashed border-gray-300">
                          <div className="text-center">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#4247cb] mx-auto mb-2"></div>
                            <span className="text-sm text-gray-500">Loading reCAPTCHA...</span>
                          </div>
                        </div>
                      )}
                    </div>
                    {captchaError && <p className="text-red-500 text-sm">{captchaError}</p>}
                  </div>
                </div>

                <Button
                  onClick={handleFormSubmit}
                  disabled={isSubmitting || !formData.captchaToken}
                  className="w-full bg-[#ff8930] hover:bg-[#ff7520] text-white px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-full">
              <MapContainer
                center={[1.308333, 103.879167]}
                zoom={18}
                style={{ height: "100%", minHeight: "600px", width: "100%" }}
                aria-label="Map showing HFSE Singapore International School">
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap contributors"
                />
                <Marker position={[1.308333, 103.879167]}>
                  <Popup>
                    HFSE International School
                    <br />
                    223 Mountbatten Road #02-23, Mountbatten Square, Singapore 398008
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#4247cb] rounded-2xl p-6 text-white">
            <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">+65 8200 0062</h3>
            <p className="text-blue-100 text-sm">
              Call us during business hours for immediate assistance with your inquiries and support needs.
            </p>
          </div>

          <div className="bg-[#4247cb] rounded-2xl p-6 text-white">
            <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">admissions@hfse.edu.sg</h3>
            <p className="text-blue-100 text-sm">
              Send us an email and we'll respond within 24 hours to help you with your questions.
            </p>
          </div>

          <div className="bg-[#4247cb] rounded-2xl p-6 text-white">
            <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">223 Mountbatten Road, 01-10 Singapore 398008</h3>
            <p className="text-blue-100 text-sm">
              Visit our office in the heart of Singapore for face-to-face consultations and meetings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
