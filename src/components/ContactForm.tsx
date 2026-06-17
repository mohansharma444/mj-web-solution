"use client";

import React, { useState } from "react";

const servicesList = [
  "Business Website Development",
  "E-commerce Website Development",
  "Custom Web Applications",
  "Mobile App Development (Android & iOS)",
  "School Management System",
  "Hospital Management System",
  "CRM / ERP Development",
  "SEO & Digital Marketing",
  "Website Maintenance & Support",
  "Other Services",
];

interface FormFields {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export default function ContactForm() {
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Name Validation
    if (!fields.name.trim()) {
      newErrors.name = "Name is required";
    } else if (fields.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!fields.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(fields.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone Validation (at least 10 digits)
    const phoneRegex = /^[+]?[0-9\s-]{10,15}$/;
    if (!fields.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(fields.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number (min 10 digits)";
    }

    // Service Selection Validation
    if (!fields.service) {
      newErrors.service = "Please select a service";
    }

    // Message Validation
    if (!fields.message.trim()) {
      newErrors.message = "Message is required";
    } else if (fields.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Mock API call to simulate form submission
   try {
  const whatsappMessage = `
*New Inquiry - MJ Web Solution*

Name: ${fields.name}
Phone: ${fields.phone}
Email: ${fields.email}
Service: ${fields.service}

Message:
${fields.message}
`;

  const whatsappUrl = `https://wa.me/916378695789?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappUrl, "_blank");

  setShowSuccess(true);

  setFields({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  setErrors({});
} catch (err) {
  console.error("Submission failed", err);
} finally {
  setIsSubmitting(false);
}
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-100 shadow-xl p-8 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

      {showSuccess ? (
        <div className="flex flex-col items-center justify-center text-center py-10 animate-fade-in">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-md shadow-emerald-100/50">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
          <p className="text-slate-500 text-sm max-w-sm mb-8">
            Thank you for contacting MJ Web Solution. Our experts will review your request and get back to you within 24 hours.
          </p>
          <button
            onClick={() => setShowSuccess(false)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors shadow-lg shadow-blue-500/20"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={fields.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className={`w-full px-4 py-3 rounded-xl border text-slate-800 text-sm font-medium bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all duration-200 ${
                  errors.name ? "border-red-500 ring-2 ring-red-500/10" : "border-slate-200 focus:border-blue-600"
                }`}
              />
              {errors.name && <p className="text-red-500 text-xs font-semibold mt-1.5">{errors.name}</p>}
            </div>

            {/* Phone Input */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={fields.phone}
                onChange={handleChange}
                placeholder="e.g. +91 6378695789"
                className={`w-full px-4 py-3 rounded-xl border text-slate-800 text-sm font-medium bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all duration-200 ${
                  errors.phone ? "border-red-500 ring-2 ring-red-500/10" : "border-slate-200 focus:border-blue-600"
                }`}
              />
              {errors.phone && <p className="text-red-500 text-xs font-semibold mt-1.5">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                placeholder="e.g. john@example.com"
                className={`w-full px-4 py-3 rounded-xl border text-slate-800 text-sm font-medium bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all duration-200 ${
                  errors.email ? "border-red-500 ring-2 ring-red-500/10" : "border-slate-200 focus:border-blue-600"
                }`}
              />
              {errors.email && <p className="text-red-500 text-xs font-semibold mt-1.5">{errors.email}</p>}
            </div>

            {/* Service Dropdown */}
            <div>
              <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Service Required
              </label>
              <select
                id="service"
                name="service"
                value={fields.service}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border text-slate-800 text-sm font-medium bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all duration-200 appearance-none ${
                  errors.service ? "border-red-500 ring-2 ring-red-500/10" : "border-slate-200 focus:border-blue-600"
                }`}
              >
                <option value="">Select a service</option>
                {servicesList.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && <p className="text-red-500 text-xs font-semibold mt-1.5">{errors.service}</p>}
            </div>
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Project Brief / Message
            </label>
            <textarea
              id="message"
              name="message"
              value={fields.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your project requirements, goals, and timeline..."
              className={`w-full px-4 py-3 rounded-xl border text-slate-800 text-sm font-medium bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all duration-200 resize-none ${
                errors.message ? "border-red-500 ring-2 ring-red-500/10" : "border-slate-200 focus:border-blue-600"
              }`}
            />
            {errors.message && <p className="text-red-500 text-xs font-semibold mt-1.5">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-4 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer disabled:bg-blue-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing...
              </>
            ) : (
              <>
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
