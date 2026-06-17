import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about MJ Web Solution, our mission, vision, values, and why we are the trusted digital engineering partner for global businesses.",
};

const values = [
  {
    title: "Innovation First",
    desc: "We stay ahead of the technical curve, utilizing modern frameworks like Next.js, Flutter, and Node.js to provide optimized web and mobile platforms.",
    icon: "💡",
  },
  {
    title: "Quality Engineering",
    desc: "We write clean, documented, and modular code, running strict QA validation checks before any project goes live.",
    icon: "🛡️",
  },
  {
    title: "Transparency & Trust",
    desc: "We believe in direct client communication, providing regular timeline updates, progress logs, and fair pricing.",
    icon: "🤝",
  },
  {
    title: "Lifetime Support",
    desc: "Our collaboration doesn't end at deployment. We offer proactive maintenance and security scaling support.",
    icon: "🔧",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-20 pb-12">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col gap-4">
          <span className="text-blue-400 font-bold uppercase text-xs sm:text-sm tracking-widest">Get to Know Us</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            About MJ Web Solution
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mt-2">
            Providing high-fidelity web development, mobile applications, management software, and custom digital strategies.
          </p>
        </div>
      </section>

      {/* 2. Detailed History & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Journey & Dedication to Coding Excellence
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              MJ Web Solution started with a clear vision: to bridge the gap between complex software engineering and beautiful user interfaces. We recognized that businesses, startups, and institutions needed reliable systems that are not only powerful but also intuitive for everyday users.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Over the years, we have scaled our services from landing pages to complex, multi-tenant database systems, including School Management Platforms (ERP), Hospital Automations, e-commerce networks, and custom Android/iOS applications. Our core team consists of expert UI designers, software engineers, SEO specialists, and technical advisors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="border-l-4 border-blue-600 pl-4 py-1">
                <h3 className="font-bold text-slate-900 text-base">Our Mission</h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                  To build high-performance, robust, and scalable digital solutions that empower brands to automate operations and drive sales.
                </p>
              </div>
              <div className="border-l-4 border-emerald-500 pl-4 py-1">
                <h3 className="font-bold text-slate-900 text-base">Our Vision</h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                  To be a premier global software solutions agency recognized for outstanding architecture, client partnerships, and technical integrity.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-100 rounded-2xl p-8 shadow-sm flex flex-col gap-6">
            <h3 className="text-lg font-bold text-slate-900 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-8 after:h-0.5 after:bg-blue-655">
              Why Global Clients Partner With Us
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm text-slate-600 mt-2">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Structured timeline management with milestones</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Strict code review schedules for high security</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Optimized database structures for high-speed queries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Transparent and affordable budget plans</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>Lifetime bug support and platform maintenance</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-blue-600 font-bold uppercase text-xs sm:text-sm tracking-wider">Our Anchors</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Values That Drive Our Success
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              We anchor our coding standards and corporate communication on foundational principles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-slate-200/60 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl font-bold text-blue-600">
                  {v.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900">{v.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Call To Action section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl shadow-blue-500/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl flex flex-col gap-6 text-center sm:text-left">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Upgrade Your Digital Infrastructure?
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
              Contact our solutions engineering team today. We offer a free website health audit, performance reviews, and detailed software feasibility charts.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center bg-white hover:bg-slate-50 text-blue-600 font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg"
              >
                Contact Our Engineers
              </Link>
              <a
                href="https://wa.me/916378695789"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center border border-blue-400 hover:bg-blue-500/20 text-white font-bold px-8 py-3.5 rounded-full transition-colors"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
