import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Blog",
  description: "Read technical articles, SEO checklists, and ERP software design tips written by developers and engineers at MJ Web Solution.",
};

const blogPosts = [
  {
    title: "Why Next.js is the Ultimate Framework for SEO in 2026",
    category: "Web Development",
    date: "June 15, 2026",
    readTime: "5 min read",
    desc: "Explore how Next.js Server-Side Rendering (SSR), static site generation, and optimized image features boost search rankings and page speeds.",
    slug: "why-nextjs-is-best-for-seo",
  },
  {
    title: "Streamlining Academics: How School ERPs Save Administrative Hours",
    category: "Software Solutions",
    date: "May 28, 2026",
    readTime: "7 min read",
    desc: "A comprehensive look at automated student admissions, cloud fee receipts, online result cards, and parent communications.",
    slug: "school-erp-automation-benefits",
  },
  {
    title: "The E-commerce Core Checklist to Boost Checkout Conversions",
    category: "E-commerce",
    date: "May 12, 2026",
    readTime: "6 min read",
    desc: "From checkout optimizations and address selectors to quick page loads, discover how to reduce cart abandonment rates.",
    slug: "ecommerce-conversion-rate-optimization",
  },
  {
    title: "Why Local Business SEO is Critical for Brick-and-Mortar Growth",
    category: "Digital Marketing",
    date: "April 25, 2026",
    readTime: "4 min read",
    desc: "Practical steps to optimize Google Business Profile, structure schema tags, and build citations to drive map directions.",
    slug: "local-seo-tips-for-businesses",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-16 pb-12">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col gap-4">
          <span className="text-blue-400 font-bold uppercase text-xs sm:text-sm tracking-widest">Tech Insights</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Insights & Technology Blogs
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mt-2">
            Stay updated with modern web standards, software automation, search engine optimization strategies, and marketing trends.
          </p>
        </div>
      </section>

      {/* 2. Blog List Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-slate-200/60 rounded-2xl p-7 hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 text-xs mb-4">
                  <span className="font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-400 font-medium">{post.date}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-400 font-medium">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  {post.desc}
                </p>
              </div>
              <Link
                href="/contact"
                className="text-blue-600 font-bold text-xs inline-flex items-center gap-1.5 mt-auto group"
              >
                Read Article
                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Newsletter Optin banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-205/60 rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto flex flex-col gap-5">
          <h3 className="text-xl font-extrabold text-slate-900">Subscribe to Tech Updates</h3>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
            Get our latest code tips, optimization guides, and website checklist updates delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-2 max-w-md mx-auto w-full">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-slate-800 text-sm"
            />
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
