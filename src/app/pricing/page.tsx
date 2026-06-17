import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Packages",
  description: "Transparent, affordable development and SEO pricing packages from MJ Web Solution. Find the perfect package for your startup or enterprise.",
};

const plans = [
  {
    name: "Starter Business Web",
    price: "₹14,999",
    billing: "One-Time",
    desc: "Perfect for local businesses, startups, single portfolios, and landing pages.",
    features: [
      "Custom UI Design (5-7 Pages)",
      "100% Mobile Responsive Layout",
      "Dynamic Contact Form & Validation",
      "On-page SEO Optimization",
      "Google Search Console Setup",
      "WhatsApp Chat Button Integration",
      "1 Year Domain & Hosting Support",
    ],
    cta: "Start Starter Plan",
    popular: false,
    color: "slate",
  },
  {
    name: "E-commerce Standard",
    price: "₹29,999",
    billing: "One-Time",
    desc: "Advanced storefronts for merchants looking to automate orders and secure checkouts.",
    features: [
      "Unlimited Products Showcase",
      "Shopping Cart & Payment Gateways",
      "Discount Code & Coupon Engines",
      "Inventory Management Panel",
      "Order Confirmation Email Alerts",
      "SEO Friendly Product URLs",
      "3 Months Post-Launch Maintenance",
    ],
    cta: "Start E-commerce Plan",
    popular: true,
    color: "blue",
  },
  {
    name: "Enterprise ERP & Apps",
    price: "₹59,999+",
    billing: "Project-Based",
    desc: "Tailored databases for Schools, Hospitals, CRM, custom ERP software, and Mobile Apps.",
    features: [
      "Custom Database Models",
      "Multi-role Authentication Login",
      "Interactive Dashboard Reports",
      "Third-party API & SMS Integrations",
      "Android & iOS App Builds (optional)",
      "High-security Firewalls",
      "6 Months Priority Support",
    ],
    cta: "Request Feasibility Call",
    popular: false,
    color: "indigo",
  },
  {
    name: "Platform Maintenance",
    price: "₹4,999",
    billing: "Monthly Subscription",
    desc: "Continuous updates, security checks, database optimization, and visual edits.",
    features: [
      "Daily Cloud Database Backups",
      "Core Framework Security Patches",
      "2 Hours Design/Copy Updates",
      "Server Uptime Monitoring (24/7)",
      "Speed Optimization Checks",
      "Broken Links Fixes",
      "Priority Tech Helpdesk Support",
    ],
    cta: "Subscribe Maintenance",
    popular: false,
    color: "emerald",
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col gap-16 pb-12">
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col gap-4">
          <span className="text-blue-400 font-bold uppercase text-xs sm:text-sm tracking-widest">Pricing Matrix</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Affordable Packages
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mt-2">
            Transparent pricing models for website development, e-commerce networks, database ERP software, and monthly maintenance plans.
          </p>
        </div>
      </section>

      {/* 2. Pricing Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white border rounded-2xl p-7 flex flex-col justify-between shadow-sm relative transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-blue-600 ring-2 ring-blue-600/10 scale-102 z-10"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
              )}
              
              <div className="mb-6">
                <h3 className="text-lg font-extrabold text-slate-900 mb-1">{plan.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-5">{plan.desc}</p>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-3xl font-black text-slate-900">{plan.price}</span>
                  <span className="text-slate-400 text-xs">/ {plan.billing}</span>
                </div>
                <hr className="border-slate-100 mb-6" />
                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-655">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-blue-600 font-bold flex-shrink-0">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className={`w-full block text-center font-bold text-xs py-3.5 rounded-xl transition-all ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Pricing Disclaimer Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 text-center max-w-3xl mx-auto flex flex-col gap-4">
          <h3 className="text-lg font-bold text-slate-900">Custom Features Required?</h3>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Our pricing is a standard benchmark. We also work on dedicated milestones with hourly schedules or contract-based deliverables for custom SaaS integrations. Contact us for a precise quote.
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-6 py-3 rounded-xl transition-colors">
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
