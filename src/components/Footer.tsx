import { Mail, MapPin, Phone } from "lucide-react";
import type { SVGProps } from "react";
import { Link, useLocation } from "react-router-dom";
import TermsCondition from "../components/modal/terms-conditions"; // adjust path if needed
import { cn } from "../lib/utils";
import MaxWidthWrapper from "./max-width-wrapper";
import PrivacyPolicy from "./modal/privacy-policy";
import ReturnPolicy from "./modal/return-policy";
import { Button, buttonVariants } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <MaxWidthWrapper
        className={cn("max-w-screen-xl", {
          "pb-24 md:pb-28 lg:pb-0": pathname === "/our-programmes",
        })}>
        {/* Newsletter Section */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">Join Our Newsletter</h3>
              <p className="text-sm text-muted-foreground">
                Be the first to know about our latest updates, exclusive offers, and more.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row gap-2 w-full sm:w-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded text-sm bg-white"
              />
              <Button className="w-full md:w-max" size={"lg"}>
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          {/* Get Started */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Get Started</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-gray-900">
                  Why VizSchool?
                </Link>
              </li>
              <li>
                <Link to="/our-tutors" className="text-muted-foreground hover:text-gray-900">
                  Tutors
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-muted-foreground hover:text-gray-900">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-muted-foreground hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-muted-foreground hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-gray-900">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Our Programmes</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/Primary" className="text-muted-foreground hover:text-gray-900">
                  Primary
                </Link>
              </li>
              <li>
                <Link to="/Secondary" className="text-muted-foreground hover:text-gray-900">
                  Secondary
                </Link>
              </li>
              <li>
                <Link to="/enrichment" className="text-muted-foreground hover:text-gray-900">
                  Enrichment
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-full md:col-span-1 w-max mx-auto md:mx-0">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-3">
              <Link to="#">
                <Facebook />
              </Link>
              <Link to="#">
                <Instagram />
              </Link>
              <Link to="#">
                <LinkedIn />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="col-span-full md:col-span-1 text-lg font-semibold mb-3">Talk to Us</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-500" />
                <Link to="mailto:contact@vizschool.com" className="text-blue-600 hover:text-blue-800">
                  contact@vizschool.com
                </Link>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-gray-500" />
                <span className="text-muted-foreground">+65 8449 1000</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 mt-0.5 text-gray-500 flex-shrink-0" />
                <span className="text-muted-foreground">
                  223 Mountbatten Road #02-23
                  <br />
                  Mountbatten Square,
                  <br />
                  Singapore 398008
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-gray-200 pt-4 text-center">
          <div className="flex flex-wrap items-center space-x-4 mb-4 text-sm">
            <TermsCondition />
            <span className="text-gray-400">|</span>
            <ReturnPolicy />
            <span className="text-gray-400">|</span>
            <PrivacyPolicy />
            <span className="text-gray-400">|</span>
            <Link
              to="/sitemap"
              className={buttonVariants({
                variant: "link",
                className: "!p-0",
              })}>
              Sitemap
            </Link>
          </div>
          <p className="text-sm text-muted-foreground flex justify-start">
            Copyright © 2025 VizSchool. All rights reserved.
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

const LinkedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1.5em"
    height="1.5em"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 256 256"
    {...props}>
    <path
      d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
      fill="#0A66C2"
    />
  </svg>
);

const Instagram = () => (
  <div
    style={{
      backgroundImage: "url(/assets/instagram.png)",
    }}
    className="w-[1.5em] h-[1.5em] bg-cover"
  />
);

const Facebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 36"
    fill="url(#facebook__a)"
    height="1.5em"
    width="1.5em"
    {...props}>
    <defs>
      <linearGradient x1="50%" x2="50%" y1="97.078%" y2="0%" id="facebook__a">
        <stop offset="0%" stopColor="#0062E0" />
        <stop offset="100%" stopColor="#19AFFF" />
      </linearGradient>
    </defs>
    <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
    <path
      fill="#FFF"
      d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
    />
  </svg>
);

export default Footer;
