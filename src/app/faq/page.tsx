"use client";

import React, { useState } from "react";
import Link from "next/link";

const faqCategories = [
  { id: "all", name: "All Questions" },
  { id: "general", name: "General & Process" },
  { id: "pricing", name: "Pricing & Billing" },
  { id: "tech", name: "Technologies" },
  { id: "support", name: "Support & SLA" },
];

const faqsData = [
  // General
  {
    q: "What services does MJ Web Solution offer?",
    a: "We offer comprehensive digital services including Custom Website Development, E-commerce Platforms, Android & iOS Mobile App Development, School/Hospital ERPs, Custom CRM/ERP software, SEO, Digital Marketing, and Website Maintenance.",
    category: "general",
  },
  {
    q: "How long does it take to build a business website?",
    a: "Standard business websites typically take 2-3 weeks, while complex platforms, ERP systems, and e-commerce stores can take 4-8 weeks depending on the functionality, page count, and integrations.",
    category: "general",
  },
  {
    q: "Do you design custom layouts or use pre-made templates?",
    a: "We prioritize bespoke engineering. Our designers create unique UI/UX wireframes from scratch on Figma tailored to your brand identity, ensuring you stand out from templates.",
    category: "general",
  },

  // Pricing
  {
    q: "What are your standard payment milestones?",
    a: "For project contracts, we typically divide payments into: 50% advance payment to trigger design wireframes, 30% upon core client dashboard approval, and 20% post-QA validation and deployment.",
    category: "pricing",
  },
  {
    q: "Are there any hidden domain or server hosting fees?",
    a: "None. All server requirements, third-party API configurations, and premium font files are detailed upfront in our agreements, so there are no surprise billing items.",
    category: "pricing",
  },

  // Tech
  {
    q: "Why do you recommend Next.js over standard WordPress?",
    a: "Next.js offers superior page speed index values, server-side caching mechanisms, and robust static site generation, making it much more search-engine-friendly (SEO optimized) and highly secure.",
    category: "tech",
  },
  {
    q: "Do you build cross-platform mobile apps?",
    a: "Yes! We use Flutter and React Native to build unified codebases for Android and iOS, saving our clients nearly 40% in development and lifecycle support costs compared to native setups.",
    category: "tech",
  },

  // Support
  {
    q: "What is covered in your Website Maintenance subscription?",
    a: "Our maintenance package includes: daily database backups to cloud drives, security patch installs, database index tuning, 2 hours of visual or text edits, and priority helpdesk response.",
    category: "support",
  },
  {
    q: "How do we request support for code bugs or downtime?",
    a: "You can write directly to our engineering desk at ms110vms@gmail.com, send a quick text to our official WhatsApp support channel, or call our emergency hotline: +91 6378695789.",
    category: "support",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs =
    activeCategory === "all"
      ? faqsData
      : faqsData.filter((f) => f.category === activeCategory);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="flex flex-col gap-16 pb-12">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col gap-4">
          <span className="text-blue-400 font-bold uppercase text-xs sm:text-sm tracking-widest">Help Desk</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mt-2">
            Find instant answers regarding project pricing, technology architectures, security timelines, and SLA agreements.
          </p>
        </div>
      </section>

      {/* 2. FAQ Accordion catalog */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 w-full">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(null); // Reset open states
              }}
              className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200/60 rounded-xl overflow-hidden shadow-sm hover:border-slate-300 transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 text-sm sm:text-base hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-blue-600 text-xl">{isOpen ? "−" : "+"}</span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-slate-100" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <p className="p-5 text-xs sm:text-sm text-slate-500 leading-relaxed bg-slate-50/50">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Global CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-12 text-white text-center sm:text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl flex flex-col gap-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Have a Specific Question Unanswered?
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
              Our support team is available 24/7. Chat directly via WhatsApp or submit a detailed ticket through our contact form.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 justify-center sm:justify-start">
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center bg-white hover:bg-slate-50 text-blue-600 font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg"
              >
                Send Us a Message
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
