import React from "react";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import {
  FaPhone, FaEnvelope, FaInstagram, FaWhatsapp, FaMapMarkerAlt,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact MJ Web Solution. Get a free project quote or technical consultation. Phone: +91 6378695789, Email: ms110vms@gmail.com.",
};

const INSTAGRAM_URL = "https://www.instagram.com/mj_web_solutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-16 pb-12">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col gap-4">
          <span className="text-blue-400 font-bold uppercase text-xs sm:text-sm tracking-widest">Connect With Us</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Contact MJ Web Solution
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mt-2">
            Have a project in mind or need technical support? Send us a message or contact our help desk directly.
          </p>
        </div>
      </section>

      {/* Form & Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-900">Get In Touch Directly</h2>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              We look forward to partnering with you. Use the quick links below to trigger direct calls, chats, or profile visits.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {/* Call */}
              <div className="border border-slate-200/60 rounded-2xl p-5 bg-white flex items-center gap-4 hover:border-blue-200 transition-colors">
                <div className="w-11 h-11 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaPhone className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">Call Support</span>
                  <a href="tel:+916378695789" className="text-sm sm:text-base font-bold text-slate-800 hover:text-blue-600 transition-colors">+91 6378695789</a>
                </div>
                <a href="tel:+916378695789" className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                  Call Now
                </a>
              </div>

              {/* WhatsApp */}
              <div className="border border-slate-200/60 rounded-2xl p-5 bg-white flex items-center gap-4 hover:border-emerald-200 transition-colors">
                <div className="w-11 h-11 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">WhatsApp Support</span>
                  <a href="https://wa.me/916378695789" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-bold text-slate-800 hover:text-emerald-600 transition-colors">+91 6378695789</a>
                </div>
                <a href="https://wa.me/916378695789" target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                  Chat Now
                </a>
              </div>

              {/* Email */}
              <div className="border border-slate-200/60 rounded-2xl p-5 bg-white flex items-center gap-4 hover:border-blue-200 transition-colors">
                <div className="w-11 h-11 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">Direct Email</span>
                  <a href="mailto:ms110vms@gmail.com" className="text-sm sm:text-base font-bold text-slate-800 hover:text-blue-600 transition-colors">ms110vms@gmail.com</a>
                </div>
              </div>

              {/* Instagram */}
              <div className="border border-slate-200/60 rounded-2xl p-5 bg-white flex items-center gap-4 hover:border-pink-200 transition-colors">
                <div className="w-11 h-11 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaInstagram className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">Instagram Profile</span>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-bold text-slate-800 hover:text-pink-600 transition-colors">
                    @mj_web_solutions
                  </a>
                </div>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                  Follow
                </a>
              </div>

              {/* Location */}
              <div className="border border-slate-200/60 rounded-2xl p-5 bg-white flex items-center gap-4">
                <div className="w-11 h-11 bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div className="flex-grow">
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">Office Location</span>
                  <span className="text-sm font-bold text-slate-800">Jaipur, Rajasthan, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="w-full mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-md h-[400px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.677934444588!2d75.78727085!3d26.9124336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db414e091c0e3%3A0xe5a1b32d201e5df0!2sJaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sin!4v1718525000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MJ Web Solution Office Map"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
