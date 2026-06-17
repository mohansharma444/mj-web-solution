import React from "react";
import Link from "next/link";
import {
  FaWhatsapp,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Logo from "./Logo";

const INSTAGRAM_URL =
  "https://www.instagram.com/mj_web_solutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Technologies", href: "/technologies" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact Us", href: "/contact" },
];

const keyServices = [
  { name: "Business Website Development", href: "/services" },
  { name: "E-commerce Website Development", href: "/services" },
  { name: "Custom Web Applications", href: "/services" },
  { name: "Mobile App Development", href: "/services" },
  { name: "School Management Systems", href: "/services" },
  { name: "Hospital Management Systems", href: "/services" },
  { name: "SEO & Digital Marketing", href: "/services" },
  { name: "Website Maintenance", href: "/services" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <Logo showText={true} textColorClass="text-white" iconSize={40} />
            <p className="text-slate-400 text-sm leading-relaxed mt-2">
              MJ Web Solution is a full-service web and mobile app development company providing complete digital solutions for businesses, startups, schools, hospitals, restaurants, and e-commerce brands.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://wa.me/916378695789"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all duration-200"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="tel:+916378695789"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-200"
                aria-label="Call Now"
              >
                <FaPhone className="w-4 h-4" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-pink-400 hover:bg-pink-600 hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide mb-5 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-10 after:h-0.5 after:bg-blue-600">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide mb-5 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-10 after:h-0.5 after:bg-blue-600">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {keyServices.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide mb-5 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-10 after:h-0.5 after:bg-blue-600">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Jaipur, Rajasthan, India</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+916378695789" className="hover:text-white transition-colors">
                  +91 6378695789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="https://wa.me/916378695789" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +91 6378695789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:ms110vms@gmail.com" className="hover:text-white transition-colors">
                  ms110vms@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} MJ Web Solution. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-slate-300 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
