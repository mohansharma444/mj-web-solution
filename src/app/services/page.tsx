"use client";

import React, { useState } from "react";
import Link from "next/link";

const serviceCategories = [
  { id: "All", name: "All Services" },
  { id: "WebMobile", name: "Web & Mobile" },
  { id: "BusinessERP", name: "Enterprise & ERPs" },
  { id: "PortalsBooking", name: "Portals & Bookings" },
  { id: "GrowthSupport", name: "Growth & Support" },
];

const allServicesData = [
  // 1. Web & Mobile
  {
    title: "Business Website Development",
    category: "WebMobile",
    icon: "💻",
    desc: "Speed-optimized, responsive corporate websites designed to build digital trust and represent your brand authority.",
  },
  {
    title: "E-commerce Website Development",
    category: "WebMobile",
    icon: "🛒",
    desc: "Feature-rich online storefronts with cart features, secure checkouts, shipping calculators, and admin control panels.",
  },
  {
    title: "Custom Web Applications",
    category: "WebMobile",
    icon: "⚡",
    desc: "Interactive, dynamic cloud web apps tailored to your custom database model, user permissions, and workflows.",
  },
  {
    title: "Mobile App Development (Android & iOS)",
    category: "WebMobile",
    icon: "📱",
    desc: "Cross-platform mobile apps engineered using Flutter and React Native to offer high-fidelity performance.",
  },
  {
    title: "Landing Pages",
    category: "WebMobile",
    icon: "📄",
    desc: "High-conversion single page layouts crafted specifically for targeted advertising campaigns and product launches.",
  },
  {
    title: "Portfolio Websites",
    category: "WebMobile",
    icon: "🎨",
    desc: "Sleek, visual portfolios for designers, writers, photographers, and individual consultants to display their achievements.",
  },
  {
    title: "Blog Websites",
    category: "WebMobile",
    icon: "✍️",
    desc: "Speed-tuned content platforms with advanced caching, tag systems, search integration, and layout flexibility.",
  },

  // 2. Enterprise & ERPs
  {
    title: "School Management Systems",
    category: "BusinessERP",
    icon: "🏫",
    desc: "Comprehensive educational portals covering student admissions, fee collections, exam scorecards, and notice boards.",
  },
  {
    title: "Hospital Management Systems",
    category: "BusinessERP",
    icon: "🏥",
    desc: "Digital clinic workflows managing doctor schedules, patient check-ins, prescriptions, pharmacy logs, and invoicing.",
  },
  {
    title: "CRM Development",
    category: "BusinessERP",
    icon: "📊",
    desc: "Custom Customer Relationship Management systems to monitor sales leads, customer calls, team pipelines, and follow-ups.",
  },
  {
    title: "ERP Development",
    category: "BusinessERP",
    icon: "⚙️",
    desc: "End-to-end Enterprise Resource Planning solutions automating inventory schedules, supply chains, and employee payrolls.",
  },
  {
    title: "LMS (Learning Management Systems)",
    category: "BusinessERP",
    icon: "🎓",
    desc: "Interactive e-learning networks offering online lecture streams, student assignments, quiz modules, and certificates.",
  },
  {
    title: "Inventory Management Systems",
    category: "BusinessERP",
    icon: "📦",
    desc: "Real-time stock checkers with supplier logs, alerts for low stock levels, barcode scanners, and warehouse listings.",
  },
  {
    title: "POS Software",
    category: "BusinessERP",
    icon: "💳",
    desc: "Cloud-based Point of Sale billing softwares with sales reporting, receipts, multi-device support, and printer integrations.",
  },

  // 3. Portals & Bookings
  {
    title: "Restaurant Website & Ordering Systems",
    category: "PortalsBooking",
    icon: "🍔",
    desc: "Digital menus with local delivery selectors, cart orders, payment setup, table bookings, and order notification systems.",
  },
  {
    title: "Real Estate Websites",
    category: "PortalsBooking",
    icon: "🏢",
    desc: "Interactive property listing platforms with advanced filters, neighborhood maps, virtual tours, and agent channels.",
  },
  {
    title: "Hotel Booking Websites",
    category: "PortalsBooking",
    icon: "🏨",
    desc: "Room inventory calendars, rate sheets, check-in checkout booking pipelines, and reservation notification cards.",
  },
  {
    title: "Travel & Tourism Websites",
    category: "PortalsBooking",
    icon: "✈️",
    desc: "Destination catalogs, booking panels for tour packages, dynamic pricing charts, reviews, and booking lists.",
  },
  {
    title: "News Portals",
    category: "PortalsBooking",
    icon: "📰",
    desc: "High-traffic news layouts with category dashboards, real-time alerts, ad banners, and visual layouts.",
  },
  {
    title: "Job Portals",
    category: "PortalsBooking",
    icon: "💼",
    desc: "Job boards where employers list vacancies, and candidates upload resumes, filter applications, and trace status.",
  },
  {
    title: "Matrimonial Websites",
    category: "PortalsBooking",
    icon: "💍",
    desc: "Secure user registration profiles, match suggestions, advanced filter options, chat integration, and privacy filters.",
  },
  {
    title: "Educational Platforms",
    category: "PortalsBooking",
    icon: "📚",
    desc: "University hubs, online schools, academic landing networks, and course listings configured for high engagement.",
  },

  // 4. Growth & Support
  {
    title: "SEO Services",
    category: "GrowthSupport",
    icon: "🔍",
    desc: "Deep keyword analysis, site speed auditing, schema generation, link authority planning, and monthly keyword audits.",
  },
  {
    title: "Digital Marketing",
    category: "GrowthSupport",
    icon: "📈",
    desc: "High-conversion ad strategies on Google Ads, Meta Ads, social content plans, and pixel tracking to drive sales.",
  },
  {
    title: "Website Maintenance & Support",
    category: "GrowthSupport",
    icon: "🔧",
    desc: "Proactive database cleanups, security patches, framework updates, content adjustments, and server health tracking.",
  },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? allServicesData
      : allServicesData.filter((s) => s.category === activeCategory);

  return (
    <div className="flex flex-col gap-16 pb-12">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col gap-4">
          <span className="text-blue-400 font-bold uppercase text-xs sm:text-sm tracking-widest">Our Offerings</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Our Digital Services
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mt-2">
            A comprehensive suite of customized web development, mobile apps, specialized ERPs, and search marketing solutions.
          </p>
        </div>
      </section>

      {/* 2. Interactive Service Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-12">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-3 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/60 rounded-2xl p-7 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl font-bold mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>
              
              <Link
                href="/contact"
                className="text-blue-600 font-bold text-xs inline-flex items-center gap-1.5 mt-auto"
              >
                Inquire Now
                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Global Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
          <div className="relative z-10 max-w-2xl flex flex-col gap-5 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Need a Custom Solution Built from Scratch?
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              If your business requirements don't map to a generic service, our developers specialize in custom systems architecture. Let's schedule a call to explore details.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-blue-500/20"
              >
                Book Free Consultation
              </Link>
              <a
                href="https://wa.me/916378695789"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center border border-slate-700 hover:bg-slate-800 text-white font-bold px-8 py-3.5 rounded-full transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
