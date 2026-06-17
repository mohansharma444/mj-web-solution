"use client";

import React, { useState } from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

// Portfolio Projects data
const portfolioProjects = [
  {
    id: 1,
    title: "Apex Corporate Portal",
    category: "Websites",
    desc: "A premium business website for a multinational firm with interactive services and career portal.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 2,
    title: "E-Cart Superstore",
    category: "E-commerce",
    desc: "Full-stack e-commerce marketplace featuring fast checkout, payment gateway, and vendor dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Shopify"],
  },
  {
    id: 3,
    title: "EduPulse School ERP",
    category: "Management Systems",
    desc: "Comprehensive School Management System handling admissions, fees, exams, and parent communications.",
    tech: ["Next.js", "Laravel", "MySQL"],
  },
  {
    id: 4,
    title: "Bites & Bowls App",
    category: "Websites",
    desc: "Responsive restaurant website with online food ordering, menu customizer, and seat reservations.",
    tech: ["React", "PHP", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "Haven Homes Real Estate",
    category: "Websites",
    desc: "Premium real estate listing directory with map navigation, booking tours, and agent chats.",
    tech: ["Next.js", "Node.js", "MySQL"],
  },
  {
    id: 6,
    title: "HealthTrack Mobile App",
    category: "Mobile Apps",
    desc: "Cross-platform mobile application for telemedicine, doctor appointment scheduling, and health logs.",
    tech: ["Flutter", "Node.js", "MongoDB"],
  },
];

const industries = [
  { name: "Retail & E-commerce", icon: "🛒" },
  { name: "Schools & Education", icon: "🏫" },
  { name: "Hospitals & Healthcare", icon: "🏥" },
  { name: "Restaurants & Food", icon: "🍔" },
  { name: "Real Estate & Housing", icon: "🏢" },
  { name: "Travel & Tourism", icon: "✈️" },
  { name: "Startups & MVPs", icon: "🚀" },
  { name: "Corporate Services", icon: "👔" },
];

const processSteps = [
  {
    step: "01",
    title: "Requirement Gathering",
    desc: "We analyze your project goals, study market trends, and detail features to align on a perfect roadmap.",
  },
  {
    step: "02",
    title: "UI/UX Architecture",
    desc: "Our designers craft premium, interactive wireframes and visual designs customized to your brand identity.",
  },
  {
    step: "03",
    title: "Agile Development",
    desc: "Our engineers write highly performant, clean, and responsive code utilizing modern tech stacks.",
  },
  {
    step: "04",
    title: "Rigorous QA Testing",
    desc: "We run automated scripts, functional tests, security checks, and cross-browser testing to ensure bug-free delivery.",
  },
  {
    step: "05",
    title: "Deployment & Launch",
    desc: "We set up optimized server hosting, configure security firewalls, run SEO checks, and launch your platform live.",
  },
  {
    step: "06",
    title: "Maintenance & Support",
    desc: "We provide regular platform updates, database backups, security patches, and lifetime tech support.",
  },
];

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Flutter", category: "Mobile" },
  { name: "React Native", category: "Mobile" },
  { name: "Node.js", category: "Backend" },
  { name: "PHP / Laravel", category: "Backend" },
  { name: "WordPress", category: "CMS" },
  { name: "Shopify", category: "CMS" },
  { name: "MongoDB", category: "Database" },
  { name: "MySQL", category: "Database" },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Director, Apex Academy",
    text: "MJ Web Solution developed our School Management System. Their team was professional, the delivery was on time, and the system has streamlined our entire operations. Highly recommended!",
  },
  {
    name: "Sarah D'Souza",
    role: "Founder, E-Cart Superstore",
    text: "We wanted a high-performance e-commerce store with unique design elements. MJ Web Solution exceeded our expectations! Our sales doubled within 3 months of launching our new store.",
  },
  {
    name: "Amit Mehta",
    role: "CEO, Haven Real Estate",
    text: "Fantastic real estate website development! Their integrated filters and maps work incredibly fast. The design is beautiful and fully responsive.",
  },
];

const faqs = [
  {
    q: "What services does MJ Web Solution offer?",
    a: "We offer comprehensive digital services including Custom Website Development, E-commerce Platforms, Android & iOS Mobile App Development, School/Hospital ERPs, Custom CRM/ERP software, SEO, Digital Marketing, and Website Maintenance.",
  },
  {
    q: "How long does it take to build a business website?",
    a: "Standard business websites typically take 2-3 weeks, while complex platforms, ERP systems, and e-commerce stores can take 4-8 weeks depending on the functionality, page count, and integrations.",
  },
  {
    q: "Will my website be mobile-friendly and SEO optimized?",
    a: "Yes! Every website we build is 100% responsive (optimized for mobile, tablets, and desktops) and includes standard on-page SEO meta tags, sitemap, and fast-loading configurations.",
  },
  {
    q: "Do you offer post-launch support and maintenance?",
    a: "Absolutely. We offer flexible Website Maintenance & Support packages that cover server hosting management, daily backups, software updates, security monitoring, and design additions.",
  },
];

export default function Home() {
  const [portfolioFilter, setPortfolioFilter] = useState("All");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const filteredProjects =
    portfolioFilter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === portfolioFilter);

  return (
    <div className="flex flex-col gap-20 pb-12">
      
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white pt-20 pb-28 overflow-hidden min-h-[85vh] flex items-center">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        
        {/* Abstract blurred background shapes */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
              <span className="inline-flex items-center self-center lg:self-start bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                🚀 Welcome to MJ Web Solution
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text text-transparent">
                Transforming Your Ideas Into <span className="text-blue-500">Digital Reality</span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                We design and build high-performance websites, e-commerce stores, mobile applications, and enterprise management systems that accelerate your business growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/services"
                  className="w-full sm:w-auto text-center bg-slate-900/60 hover:bg-slate-900 border border-slate-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Hero Visual Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-slate-900/40 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-sm animate-fade-in">
                {/* Visual tech stack representations */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 bg-red-500 rounded-full" />
                    <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <span className="w-3 h-3 bg-emerald-500 rounded-full" />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">mjwebsolution.app</span>
                </div>
                <div className="space-y-4">
                  <div className="h-6 bg-slate-800/80 rounded w-2/3" />
                  <div className="h-4 bg-slate-800/50 rounded w-full" />
                  <div className="h-4 bg-slate-800/50 rounded w-5/6" />
                  <div className="grid grid-cols-3 gap-3 pt-4">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 flex flex-col items-center">
                      <span className="text-xl">💻</span>
                      <span className="text-[9px] font-bold text-slate-400 mt-1">Web Dev</span>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 flex flex-col items-center">
                      <span className="text-xl">📱</span>
                      <span className="text-[9px] font-bold text-slate-400 mt-1">Mobile Apps</span>
                    </div>
                    <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-3 flex flex-col items-center">
                      <span className="text-xl">📈</span>
                      <span className="text-[9px] font-bold text-slate-400 mt-1">SEO Boost</span>
                    </div>
                  </div>
                  <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-850 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white">MJ</div>
                    <div className="flex-1">
                      <div className="h-2 bg-slate-800 rounded w-1/3 mb-1.5" />
                      <div className="h-1.5 bg-slate-800 rounded w-2/3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Company Introduction & Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-blue-600 font-bold uppercase text-sm tracking-wider">Who We Are</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              A Complete Digital Partner for Modern Enterprises & Startups
            </h2>
            <p className="text-slate-600 leading-relaxed">
              MJ Web Solution is a premier software engineering and IT solutions firm. We deliver tailored websites, high-speed mobile applications, robust management systems (ERP/CRM), and high-ROI digital marketing strategies.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether you are a startup building a minimal viable product (MVP), an educational institution scaling e-learning, a hospital automating diagnostics, or a restaurant launching online orders, we bring technical excellence to every line of code.
            </p>
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold text-sm"
              >
                Learn More About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-6 grid grid-cols-2 gap-6">
            <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 flex flex-col gap-2">
              <span className="text-3xl sm:text-4xl font-black text-blue-600">250+</span>
              <span className="text-slate-900 font-bold text-sm">Projects Delivered</span>
              <span className="text-slate-500 text-xs">For clients worldwide</span>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 flex flex-col gap-2">
              <span className="text-3xl sm:text-4xl font-black text-blue-600">150+</span>
              <span className="text-slate-900 font-bold text-sm">Active Clients</span>
              <span className="text-slate-500 text-xs">Trust our long-term support</span>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 flex flex-col gap-2">
              <span className="text-3xl sm:text-4xl font-black text-blue-600">5+</span>
              <span className="text-slate-900 font-bold text-sm">Years Experience</span>
              <span className="text-slate-500 text-xs">In custom development</span>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 flex flex-col gap-2">
              <span className="text-3xl sm:text-4xl font-black text-blue-600">100%</span>
              <span className="text-slate-900 font-bold text-sm">Client Satisfaction</span>
              <span className="text-slate-500 text-xs">Track record of success</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Overview Grid */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-blue-600 font-bold uppercase text-sm tracking-wider">Our Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              High-Quality Solutions We Offer
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              From responsive landing pages to multi-tenant ERP software, we build robust products using cutting-edge architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-8 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  💻
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Website Development</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Custom-crafted corporate websites, responsive portfolio setups, blogs, and highly interactive platforms using fast, SEO-friendly Next.js and React.
                </p>
              </div>
              <Link href="/services" className="text-blue-600 font-bold text-xs inline-flex items-center gap-1.5 mt-auto">
                Explore Website Dev
                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-8 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  🛒
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">E-commerce Development</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Advanced online stores with secure checkout workflows, customized administration panels, API payment integrations, and stock management.
                </p>
              </div>
              <Link href="/services" className="text-blue-600 font-bold text-xs inline-flex items-center gap-1.5 mt-auto">
                Explore E-commerce
                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-8 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  📱
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Mobile App Development</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  High-fidelity cross-platform Android and iOS mobile applications built on Flutter and React Native, featuring smooth animations and native APIs.
                </p>
              </div>
              <Link href="/services" className="text-blue-600 font-bold text-xs inline-flex items-center gap-1.5 mt-auto">
                Explore Mobile Apps
                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-8 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  ⚙️
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Enterprise ERP/CRM</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  School ERP portals, Hospital management automation, customized CRM dashboards, learning management systems (LMS), and inventory software.
                </p>
              </div>
              <Link href="/services" className="text-blue-600 font-bold text-xs inline-flex items-center gap-1.5 mt-auto">
                Explore Management Softwares
                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-8 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  🔍
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">SEO & Digital Marketing</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Targeted search engine optimization to drive search traffic, content writing, speed optimizations, and ad campaign setups for high conversion.
                </p>
              </div>
              <Link href="/services" className="text-blue-600 font-bold text-xs inline-flex items-center gap-1.5 mt-auto">
                Explore Marketing & SEO
                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-8 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  🔧
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Website Maintenance</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Regular framework updates, database backup schedules, server migration tasks, security audits, and continuous performance optimization.
                </p>
              </div>
              <Link href="/services" className="text-blue-600 font-bold text-xs inline-flex items-center gap-1.5 mt-auto">
                Explore Maintenance Services
                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Industries We Serve */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-blue-600 font-bold uppercase text-sm tracking-wider">Diverse Verticals</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            We adapt our technology solutions to fit specialized business models and institutional requirements.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 rounded-2xl p-6 flex flex-col items-center gap-3 text-center transition-all duration-200"
            >
              <span className="text-4xl select-none">{ind.icon}</span>
              <span className="text-sm font-bold text-slate-800">{ind.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Development Process Timeline */}
      <section className="bg-slate-900 text-white py-20 overflow-hidden relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-blue-400 font-bold uppercase text-sm tracking-wider">Work Strategy</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Development Process
            </h2>
            <p className="text-slate-400 text-sm">
              We employ structured Agile stages to ensure transparency, pixel-perfect design, and reliable software delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-slate-950/60 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 relative group"
              >
                <span className="absolute top-4 right-6 text-4xl sm:text-5xl font-black text-slate-800 group-hover:text-blue-500/10 transition-colors">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-white mb-3 mt-4 relative z-10">{step.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Portfolio Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col gap-4">
          <span className="text-blue-600 font-bold uppercase text-sm tracking-wider">Our Showcase</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Recent Projects & Cases
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Take a look at websites, management systems, and applications we have created.
          </p>
        </div>

        {/* Portfolio Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-10">
          {["All", "Websites", "E-commerce", "Management Systems", "Mobile Apps"].map((tab) => (
            <button
              key={tab}
              onClick={() => setPortfolioFilter(tab)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                portfolioFilter === tab
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200/60 rounded-2xl p-6 hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-4 mb-2">{project.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">{project.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Technologies We Use */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-blue-600 font-bold uppercase text-sm tracking-wider">Tech Ecosystem</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Technologies We Use
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              We choose robust, industry-standard languages and databases to build high-scaling products.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="bg-white border border-slate-200/65 rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200"
              >
                <span className="text-lg font-bold text-slate-800">{tech.name}</span>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold mt-1">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Client Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-blue-600 font-bold uppercase text-sm tracking-wider">Feedback</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Read stories of how we helped other founders and institutions automate their processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative"
            >
              <span className="absolute top-4 right-6 text-6xl text-slate-200 select-none pointer-events-none">“</span>
              <p className="text-slate-600 text-sm italic leading-relaxed mb-6 relative z-10">
                "{testi.text}"
              </p>
              <div>
                <h4 className="text-sm font-bold text-slate-900">{testi.name}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{testi.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 flex flex-col gap-4">
            <span className="text-blue-600 font-bold uppercase text-sm tracking-wider">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-sm">
              Quick answers to common questions about our development pricing, process, and support timeline.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200/70 rounded-xl overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
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
        </div>
      </section>

      {/* 10. Contact & Location Section */}
      <section id="contact-home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Contact details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-blue-600 font-bold uppercase text-sm tracking-wider">Get in Touch</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Have a web project, mobile app, or software idea in mind? Or need to discuss SEO pricing? Submit the form, call us directly, or chat with our experts on WhatsApp.
            </p>

            <div className="space-y-4 mt-4">
              <div className="flex items-center gap-4 bg-slate-50 p-4 border border-slate-100 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg">
                  📞
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wide">Call Support</span>
                  <a href="tel:+916378695789" className="text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors">
                    +91 6378695789
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-50 p-4 border border-slate-100 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-lg">
                  💬
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wide">WhatsApp Support</span>
                  <a href="https://wa.me/916378695789" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-800 hover:text-emerald-600 transition-colors">
                    +91 6378695789
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-50 p-4 border border-slate-100 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg">
                  ✉️
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wide">Direct Email</span>
                  <a href="mailto:ms110vms@gmail.com" className="text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors">
                    ms110vms@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form embed */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}
