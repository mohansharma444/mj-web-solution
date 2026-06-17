import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technologies We Use",
  description: "Explore the modern, scalable technology stacks we use at MJ Web Solution, including Next.js, Node.js, Laravel, Flutter, and MongoDB.",
};

const techCategories = [
  {
    title: "Frontend Engineering",
    desc: "For user interfaces, we prioritize lightning-fast page loading speeds, dynamic layouts, and standard SEO optimization.",
    techs: [
      { name: "React", desc: "Interactive UI layouts" },
      { name: "Next.js", desc: "App routing, SSR & SEO" },
      { name: "Tailwind CSS", desc: "Premium styling utilities" },
      { name: "TypeScript", desc: "Robust bug-free code logic" },
    ],
    icon: "💻",
  },
  {
    title: "Backend Services",
    desc: "We engineer secure APIs, transactional databases, background processing tasks, and security firewalls.",
    techs: [
      { name: "Node.js", desc: "High-concurrency servers" },
      { name: "PHP", desc: "Robust scripting engine" },
      { name: "Laravel", desc: "Elegant MVC API framework" },
      { name: "Express.js", desc: "Minimalist Node framework" },
    ],
    icon: "⚙️",
  },
  {
    title: "Mobile App Development",
    desc: "We build native performance apps for Android and iOS using cross-platform codebases to save timeline costs.",
    techs: [
      { name: "Flutter", desc: "High-fidelity canvas painting" },
      { name: "React Native", desc: "Native JS components bridges" },
    ],
    icon: "📱",
  },
  {
    title: "Databases & Caching",
    desc: "Structured schemas and caching layouts optimized for complex queries and real-time database transactions.",
    techs: [
      { name: "MySQL", desc: "Relational database ERP files" },
      { name: "MongoDB", desc: "NoSQL flexible user documents" },
      { name: "PostgreSQL", desc: "Advanced enterprise scaling" },
    ],
    icon: "🗄️",
  },
  {
    title: "CMS & Platforms",
    desc: "For rapid site launches, blog setups, and standard shop networks, we utilize robust CMS integrations.",
    techs: [
      { name: "WordPress", desc: "Flexible corporate portals" },
      { name: "Shopify", desc: "Scalable e-commerce stores" },
    ],
    icon: "🔌",
  },
];

export default function TechnologiesPage() {
  return (
    <div className="flex flex-col gap-16 pb-12">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col gap-4">
          <span className="text-blue-400 font-bold uppercase text-xs sm:text-sm tracking-widest">Our Tech Stack</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Technologies We Use
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mt-2">
            Leveraging modern frameworks, secure backend servers, robust database systems, and verified SEO methodologies.
          </p>
        </div>
      </section>

      {/* 2. Detailed Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {techCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-slate-100 pb-12 ${
                idx === techCategories.length - 1 ? "border-b-0 pb-0" : ""
              }`}
            >
              {/* Left Column: Category Description */}
              <div className="lg:col-span-4 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{cat.icon}</span>
                  <h2 className="text-xl font-bold text-slate-900">{cat.title}</h2>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-1">{cat.desc}</p>
              </div>

              {/* Right Column: Tech Cards */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="bg-slate-50 border border-slate-100 rounded-xl p-5 hover:border-blue-200 transition-colors"
                  >
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">{tech.name}</h3>
                    <p className="text-slate-500 text-xs mt-1">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Global CTA banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-lg shadow-blue-500/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl flex flex-col gap-5 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Looking to Consult on Architecture Decisions?
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
              Not sure whether to use Next.js or WordPress? Or deciding between Flutter and React Native? Let our technical architects review your requirements and provide a clear system schematic.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center bg-white hover:bg-slate-50 text-blue-600 font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg"
              >
                Schedule Technical Call
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
