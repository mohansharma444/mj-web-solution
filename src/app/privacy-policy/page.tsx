import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Privacy Policy of MJ Web Solution regarding data collections, cookies tracking, and project brief security.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col gap-3">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm">
            Last Updated: June 16, 2026
          </p>
        </div>
      </section>

      {/* Policy Details */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 w-full text-slate-700 leading-relaxed text-sm sm:text-base space-y-8">
        <p>
          At MJ Web Solution, accessible from our official website, one of our main priorities is the privacy of our visitors and clients. This Privacy Policy document contains types of information that is collected and recorded by MJ Web Solution and how we use it.
        </p>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            1. Information We Collect
          </h2>
          <p>
            When you interact with our website, use our contact form, or request a quote, we may collect the following personal information:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Your name and contact details (email address, phone number).</li>
            <li>Your business details and project requirements.</li>
            <li>Any specific documentation or brief you upload to us.</li>
            <li>Automatic cookies metadata (IP address, browser type, visit durations).</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            2. How We Use Your Information
          </h2>
          <p>
            We use the collected information in various ways, including to:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Provide, operate, and maintain our web capabilities.</li>
            <li>Improve, personalize, and expand our services.</li>
            <li>Understand and analyze how you use our website.</li>
            <li>Communicate with you regarding project quotes, code schedules, and updates.</li>
            <li>Send you technical notices, newsletters, and security updates.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            3. Data Protection & Security
          </h2>
          <p>
            We employ industry-standard security firewalls and database access controls to safeguard your personal details and project briefs. However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            4. Third-Party Services & Cookies
          </h2>
          <p>
            We utilize standard cookies to optimize web experience. MJ Web Solution does not share or sell your personal details with third-party advertising companies. Any analytics data is used strictly for internal traffic analysis.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            5. Contact Information
          </h2>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us by email at <a href="mailto:ms110vms@gmail.com" className="text-blue-600 hover:underline">ms110vms@gmail.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
