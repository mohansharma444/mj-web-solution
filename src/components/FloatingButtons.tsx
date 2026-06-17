"use client";

import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa";

const INSTAGRAM_URL = "https://www.instagram.com/mj_web_solutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 transition-all duration-500 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      {/* Phone Call */}
      <a
        href="tel:+916378695789"
        className="w-13 h-13 w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg hover:shadow-blue-500/35 transition-all duration-300 hover:-translate-y-1 group relative"
        aria-label="Call Now"
      >
        <FaPhone className="w-5 h-5" />
        <span className="absolute right-14 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Call Now
        </span>
      </a>

      {/* Instagram */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white flex items-center justify-center shadow-lg hover:shadow-pink-500/35 transition-all duration-300 hover:-translate-y-1 group relative"
        aria-label="Instagram Profile"
      >
        <FaInstagram className="w-5 h-5" />
        <span className="absolute right-14 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Instagram
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/916378695789"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-emerald-500/35 transition-all duration-300 hover:-translate-y-1 group relative"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
        <span className="absolute right-14 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          WhatsApp Chat
        </span>
      </a>
    </div>
  );
}
