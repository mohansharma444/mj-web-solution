"use client";

import React, { useState, useEffect } from "react";

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    // Show by default on load in case page starts scrolled
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3.5 transition-all duration-500 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      {/* Phone Call Floating Button */}
      <a
        href="tel:+916378695789"
        className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg hover:shadow-blue-500/35 transition-all duration-300 hover:-translate-y-1 group relative"
        aria-label="Call Now"
      >
        <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        {/* Tooltip */}
        <span className="absolute right-14 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Call Now
        </span>
      </a>

      {/* Instagram Floating Button */}
      <a
       href="https://www.instagram.com/mj_web_solutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white flex items-center justify-center shadow-lg hover:shadow-pink-500/35 transition-all duration-300 hover:-translate-y-1 group relative"
        aria-label="Instagram Profile"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.01 3.796.056 1.03.047 1.782.227 2.412.474a4.901 4.901 0 0 1 1.777 1.157 4.901 4.901 0 0 1 1.157 1.777c.247.63.427 1.38.474 2.412.047 1.012.056 1.366.056 3.796t-.01 2.784c-.047 1.03-.227 1.782-.474 2.412a4.902 4.902 0 0 1-1.157 1.777 4.902 4.902 0 0 1-1.777 1.157c-.63.247-1.38.427-2.412.474-1.012.047-1.366.056-3.796.056t-2.784-.01c-1.03-.047-1.782-.227-2.412-.474a4.903 4.903 0 0 1-1.777-1.157 4.903 4.903 0 0 1-1.157-1.777c-.247-.63-.427-1.38-.474-2.412-.047-1.012-.056-1.366-.056-3.796t.01-2.784c.047-1.03.227-1.782.474-2.412a4.9 4.9 0 0 1 1.157-1.777 4.9 4.9 0 0 1 1.777-1.157c.63-.247 1.38-.427 2.412-.474 1.01-.047 1.366-.056 3.796-.056zM12 5.802a6.198 6.198 0 1 0 0 12.396 6.198 6.198 0 0 0 0-12.396zm0 2.2a3.998 3.998 0 1 1 0 7.996 3.998 3.998 0 0 1 0-7.996zm6.406-1.185a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
            clipRule="evenodd"
          />
        </svg>
        {/* Tooltip */}
        <span className="absolute right-14 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Instagram
        </span>
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/916378695789"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-emerald-500/35 transition-all duration-300 hover:-translate-y-1 group relative"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.884-6.974C16.586 1.83 14.116.811 11.48.811c-5.442 0-9.866 4.42-9.87 9.86-.001 1.762.462 3.483 1.34 5.016l-.98 3.577 3.677-.964zm10.743-7.04c-.3-.15-1.77-.875-2.045-.974-.275-.1-.475-.15-.675.15-.2.3-.775.974-.95 1.174-.175.2-.35.225-.65.075-1.025-.513-1.695-.967-2.366-2.117-.175-.3-.175-.557-.057-.756.105-.18.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.493-.51-.675-.52-.172-.007-.368-.009-.565-.009-.196 0-.517.074-.788.374-.27.3-1.032 1.01-1.032 2.461 0 1.45 1.053 2.85 1.2 3.05.147.2 2.072 3.166 5.022 4.44.702.303 1.25.484 1.677.62.704.223 1.345.19 1.85.115.565-.08 1.77-.724 2.02-1.39.25-.664.25-1.232.175-1.39-.075-.158-.275-.258-.575-.408z" />
        </svg>
        {/* Tooltip */}
        <span className="absolute right-14 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          WhatsApp Chat
        </span>
      </a>
    </div>
  );
}
