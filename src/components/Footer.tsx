import React from "react";
import Link from "next/link";
import Logo from "./Logo";

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
          
          {/* Company Info Column */}
          <div className="flex flex-col gap-4">
            <Logo showText={true} textColorClass="text-white" iconSize={40} />
            <p className="text-slate-400 text-sm leading-relaxed mt-2">
              MJ Web Solution is a full-service web and mobile app development company providing complete digital solutions for businesses, startups, schools, hospitals, restaurants, and e-commerce brands.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://wa.me/916378695789"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-500 hover:bg-emerald-600 hover:text-white transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.884-6.974C16.586 1.83 14.116.811 11.48.811c-5.442 0-9.866 4.42-9.87 9.86-.001 1.762.462 3.483 1.34 5.016l-.98 3.577 3.677-.964zm10.743-7.04c-.3-.15-1.77-.875-2.045-.974-.275-.1-.475-.15-.675.15-.2.3-.775.974-.95 1.174-.175.2-.35.225-.65.075-1.025-.513-1.695-.967-2.366-2.117-.175-.3-.175-.557-.057-.756.105-.18.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.493-.51-.675-.52-.172-.007-.368-.009-.565-.009-.196 0-.517.074-.788.374-.27.3-1.032 1.01-1.032 2.461 0 1.45 1.053 2.85 1.2 3.05.147.2 2.072 3.166 5.022 4.44.702.303 1.25.484 1.677.62.704.223 1.345.19 1.85.115.565-.08 1.77-.724 2.02-1.39.25-.664.25-1.232.175-1.39-.075-.158-.275-.258-.575-.408z" />
                </svg>
              </a>
              <a
                href="tel:+916378695789"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-200"
                aria-label="Call Now"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-pink-500 hover:bg-pink-600 hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.796.056 1.03.047 1.782.227 2.412.474a4.901 4.901 0 0 1 1.777 1.157 4.901 4.901 0 0 1 1.157 1.777c.247.63.427 1.38.474 2.412.047 1.012.056 1.366.056 3.796t-.01 2.784c-.047 1.03-.227 1.782-.474 2.412a4.902 4.902 0 0 1-1.157 1.777 4.902 4.902 0 0 1-1.777 1.157c-.63.247-1.38.427-2.412.474-1.012.047-1.366.056-3.796.056t-2.784-.01c-1.03-.047-1.782-.227-2.412-.474a4.903 4.903 0 0 1-1.777-1.157 4.903 4.903 0 0 1-1.157-1.777c-.247-.63-.427-1.38-.474-2.412-.047-1.012-.056-1.366-.056-3.796t.01-2.784c.047-1.03.227-1.782.474-2.412a4.9 4.9 0 0 1 1.157-1.777 4.9 4.9 0 0 1 1.777-1.157c.63-.247 1.38-.427 2.412-.474 1.01-.047 1.366-.056 3.796-.056zM12 5.802a6.198 6.198 0 1 0 0 12.396 6.198 6.198 0 0 0 0-12.396zm0 2.2a3.998 3.998 0 1 1 0 7.996 3.998 3.998 0 0 1 0-7.996zm6.406-1.185a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide mb-5 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-10 after:h-0.5 after:bg-blue-600">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide mb-5 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-10 after:h-0.5 after:bg-blue-600">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {keyServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="text-white text-base font-bold tracking-wide mb-5 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:w-10 after:h-0.5 after:bg-blue-600">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  Jaipur, Rajasthan, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+916378695789" className="hover:text-white transition-colors">
                  +91 6378695789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.02-5.11-2.884-6.974C16.586 1.83 14.116.811 11.48.811c-5.442 0-9.866 4.42-9.87 9.86-.001 1.762.462 3.483 1.34 5.016l-.98 3.577 3.677-.964zm10.743-7.04c-.3-.15-1.77-.875-2.045-.974-.275-.1-.475-.15-.675.15-.2.3-.775.974-.95 1.174-.175.2-.35.225-.65.075-1.025-.513-1.695-.967-2.366-2.117-.175-.3-.175-.557-.057-.756.105-.18.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.493-.51-.675-.52-.172-.007-.368-.009-.565-.009-.196 0-.517.074-.788.374-.27.3-1.032 1.01-1.032 2.461 0 1.45 1.053 2.85 1.2 3.05.147.2 2.072 3.166 5.022 4.44.702.303 1.25.484 1.677.62.704.223 1.345.19 1.85.115.565-.08 1.77-.724 2.02-1.39.25-.664.25-1.232.175-1.39-.075-.158-.275-.258-.575-.408z" />
                </svg>
                <a href="https://wa.me/916378695789" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +91 6378695789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:ms110vms@gmail.com" className="hover:text-white transition-colors">
                  ms110vms@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} MJ Web Solution. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
