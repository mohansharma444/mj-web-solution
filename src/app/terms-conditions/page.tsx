import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Review the Terms and Conditions of MJ Web Solution regarding project contracts, code deliverables, and support SLAs.",
};

export default function TermsConditionsPage() {
  return (
    <div className="flex flex-col gap-12 pb-12">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col gap-3">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm">
            Last Updated: June 16, 2026
          </p>
        </div>
      </section>

      {/* Terms Details */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 w-full text-slate-700 leading-relaxed text-sm sm:text-base space-y-8">
        <p>
          Welcome to MJ Web Solution. These terms and conditions outline the rules and regulations for the use of MJ Web Solution's website and development services. By accessing this website or signing a project contract, we assume you accept these terms and conditions.
        </p>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            1. Scope of Services
          </h2>
          <p>
            MJ Web Solution offers website design, e-commerce development, mobile applications development, custom management ERP/CRM software, SEO auditing, and maintenance services. The precise deliverables, timeline schedules, and payment charts will be outlined in a separate Statement of Work (SOW) or quote sheet for each contract.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            2. Code & Design Ownership
          </h2>
          <p>
            Upon successful project clearance and final invoice payment:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>The Client gains full ownership of all custom visual assets, text copy, and website databases created specifically for the project.</li>
            <li>The custom source code (excluding standard frameworks, third-party libraries, and MJ Web Solution's pre-built logic) will be handed over to the client.</li>
            <li>MJ Web Solution retains the right to display the completed designs and site link in our agency portfolio.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            3. Client Deliverables & Delays
          </h2>
          <p>
            The Client agrees to provide necessary media assets (images, copy, logos), third-party database details, and server credentials on time. MJ Web Solution is not responsible for timeline delays or project freezes caused by a lack of client assets or credentials.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            4. Limitation of Liability
          </h2>
          <p>
            In no event shall MJ Web Solution, nor any of its officers, directors, and employees, be liable to you for anything arising out of or in any way connected with your use of our custom software or server configurations, whether such liability is under contract or tort. MJ Web Solution shall not be liable for any indirect, consequential, or special liability arising out of the use of our services or server hosting downtime.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
            5. Revisions & Support
          </h2>
          <p>
            Unless specified otherwise, our packages include up to 3 rounds of visual revisions prior to launch. Standard projects receive 30 days of free bug support post-deployment. Further support contracts require subscription to our Maintenance Package.
          </p>
        </div>
      </section>
    </div>
  );
}
