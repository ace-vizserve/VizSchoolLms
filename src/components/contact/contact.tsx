import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

// Fix for Leaflet marker icons (Webpack/Vite issue)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Declare global grecaptcha
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
    message: "",
    captchaToken: "",
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaError, setCaptchaError] = useState("");
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);

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
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setCaptchaError("");
      return true;
    } catch {
      setCaptchaError("Error verifying reCAPTCHA");
      return false;
    }
  };

  const resetRecaptcha = () => {
    if (widgetId.current !== null && window.grecaptcha) {
      window.grecaptcha.reset(widgetId.current);
      setFormData((prev) => ({ ...prev, captchaToken: "" }));
    }
  };

  const handleFormSubmit = async () => {
    setIsSubmitting(true);
    setCaptchaError("");

    const isCaptchaValid = await handleCaptchaVerify();
    if (!isCaptchaValid) {
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
      setFormData({ email: "", phone: "", name: "", message: "", captchaToken: "" });
      resetRecaptcha();
    }, 1500);
  };

  const handleNewsletterSubmit = async () => {
    alert("Thank you for subscribing!");
    setNewsletterEmail("");
  };

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Contact Form and Newsletter Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="mb-6">
                <Badge className="bg-blue-100 text-[#4247cb] hover:bg-blue-100 mb-4">Contact Form</Badge>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4247cb] focus:border-[#4247cb] outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4247cb] focus:border-[#4247cb] outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4247cb] focus:border-[#4247cb] outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#4247cb] focus:border-[#4247cb] outline-none transition-colors resize-none"
                    placeholder="Tell us about your project, questions, or how we can help..."
                  />
                </div>

                {/* reCAPTCHA v2 */}
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
                  className="bg-[#ff8930] hover:bg-[#ff7520] text-white px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-50">
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

          {/* Newsletter Signup */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[#ff8930] to-[#ff7520] rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3">Our Newsletter</h3>
                <p className="text-orange-100 mb-6 text-sm leading-relaxed">
                  Stay updated with our latest news, updates, and exclusive offers delivered straight to your inbox.
                </p>

                <div className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-white/50 outline-none transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="newsletter-agreement"
                      required
                      className="w-4 h-4 rounded border-white/30 bg-white/20 text-white focus:ring-white/50"
                    />
                    <label htmlFor="newsletter-agreement" className="text-xs text-white/90">
                      I agree to receive marketing emails
                    </label>
                  </div>

                  <Button
                    onClick={handleNewsletterSubmit}
                    className="w-full bg-white text-[#ff8930] hover:bg-orange-50 font-medium py-3 rounded-lg transition-colors">
                    Subscribe Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
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

        {/* Map Section */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <MapContainer
            center={[1.308333, 103.879167]} // coordinates from Google Earth
            zoom={18}
            style={{ height: "320px", width: "100%" }}
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
  );
};

export default Contact;