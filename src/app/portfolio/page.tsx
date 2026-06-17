"use client";

import React, { useState } from "react";
import Link from "next/link";

const categories = [
  "All",
  "Corporate Websites",
  "E-commerce",
  "Management Systems",
  "Mobile Apps",
  "Booking & Portals",
];

const projectsData = [
  {
    title: "Apex Consulting Portal",
    category: "Corporate Websites",
    desc: "A premium corporate web platform with dynamic client onboarding and appointment scheduling.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    year: "2025",
  },
  {
    title: "Nexus Logistics Group",
    category: "Corporate Websites",
    desc: "Multi-language brand website with live package tracking status API integrations.",
    tech: ["React", "CSS Modules", "Node.js"],
    year: "2025",
  },
  {
    title: "Trendz Fashion Hub",
    category: "E-commerce",
    desc: "Sleek e-commerce storefront with high-speed filters, cart overlays, and stripe integrations.",
    tech: ["Shopify", "Liquid", "Tailwind CSS"],
    year: "2024",
  },
  {
    title: "Organica Grocery Store",
    category: "E-commerce",
    desc: "Custom grocery shopping system with slot-based deliveries and inventory synching.",
    tech: ["Next.js", "MongoDB", "Node.js"],
    year: "2025",
  },
  {
    title: "EduPulse School ERP",
    category: "Management Systems",
    desc: "School administration portal automating admissions, report cards, class rosters, and fees.",
    tech: ["Laravel", "PHP", "MySQL", "React"],
    year: "2025",
  },
  {
    title: "CareFirst Hospital Hub",
    category: "Management Systems",
    desc: "Hospital CRM coordinating doctor rosters, OPD check-ins, medical inventory, and bill receipts.",
    tech: ["Next.js", "Express.js", "MongoDB"],
    year: "2025",
  },
  {
    title: "BizControl ERP Platform",
    category: "Management Systems",
    desc: "Multi-tenant business suite featuring double-entry ledgers, employee payroll, and tax logs.",
    tech: ["React", "Django", "PostgreSQL"],
    year: "2024",
  },
  {
    title: "SalesFlow CRM Dashboard",
    category: "Management Systems",
    desc: "Customer tracking dashboard with Kanban pipeline visualizers and email notifications.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    year: "2025",
  },
  {
    title: "FitTrack Personal Trainer",
    category: "Mobile Apps",
    desc: "Android & iOS fitness logging application with calorie trackers, workout schedules, and alerts.",
    tech: ["Flutter", "Dart", "SQLite"],
    year: "2025",
  },
  {
    title: "TeleDoc Diagnostics App",
    category: "Mobile Apps",
    desc: "Secure HIPAA-compliant telehealth consulting app with video calling and prescriptions.",
    tech: ["React Native", "WebRTC", "Node.js"],
    year: "2025",
  },
  {
    title: "Bites & Bowls Ordering",
    category: "Booking & Portals",
    desc: "Custom restaurant menu and online ordering platform linked with kitchen ticket print servers.",
    tech: ["React", "PHP", "Tailwind CSS"],
    year: "2025",
  },
  {
    title: "Haven Listings Directory",
    category: "Booking & Portals",
    desc: "Real estate listing catalog with map overlays, street view, and direct whatsapp chat buttons.",
    tech: ["Next.js", "Google Maps API", "MySQL"],
    year: "2024",
  },
  {
    title: "Staycation Hotel Booker",
    category: "Booking & Portals",
    desc: "Room availability calendar, reservation grids, and payment gateways for luxury resorts.",
    tech: ["Next.js", "Stripe API", "Node.js"],
    year: "2025",
  },
  {
    title: "Safari Escape Tours",
    category: "Booking & Portals",
    desc: "Travel booking platform displaying custom tour durations, seat listings, and review cards.",
    tech: ["WordPress", "Elementor", "PHP"],
    year: "2025",
  },
  {
    title: "Chrono News Network",
    category: "Booking & Portals",
    desc: "High-volume news blog platform featuring RSS feeds, banner ads, and advanced page caching.",
    tech: ["WordPress", "MySQL", "PHP"],
    year: "2024",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => {
          if (activeCategory === "Corporate Websites") return p.category === "Corporate Websites";
          if (activeCategory === "E-commerce") return p.category === "E-commerce";
          if (activeCategory === "Management Systems") return p.category === "Management Systems";
          if (activeCategory === "Mobile Apps") return p.category === "Mobile Apps";
          if (activeCategory === "Booking & Portals") return p.category === "Booking & Portals";
          return true;
        });

  return (
    <div className="flex flex-col gap-16 pb-12">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col gap-4">
          <span className="text-blue-400 font-bold uppercase text-xs sm:text-sm tracking-widest">Our Projects</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Our Work Portfolio
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mt-2">
            A diverse showcase of corporate websites, high-conversion e-commerce systems, ERP/CRM portals, and mobile apps.
          </p>
        </div>
      </section>

      {/* 2. Portfolio Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Selector */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-3 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/60 rounded-2xl p-6 hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                    {project.category}
                  </span>
                  <span className="text-xs font-medium text-slate-400">{project.year}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl flex flex-col gap-5 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Have a Similar Product to Build?
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
              We customize the user interface, backend systems, database schemas, and API sets to match your exact workflow logic. Speak with our lead project manager today.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center bg-white hover:bg-slate-50 text-blue-600 font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg"
              >
                Discuss Project Requirements
              </Link>
              <a
                href="https://wa.me/916378695789"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center border border-blue-400 hover:bg-blue-500/20 text-white font-bold px-8 py-3.5 rounded-full transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
