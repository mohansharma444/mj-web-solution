import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MJ Web Solution | Web & Mobile App Development Company",
    template: "%s | MJ Web Solution",
  },
  description:
    "MJ Web Solution is a premier full-service IT agency providing website development, e-commerce, custom web apps, mobile apps, SEO, and business software solutions.",
  keywords: [
    "Web Development",
    "E-commerce Website",
    "Mobile App Development",
    "School Management System",
    "Hospital Management System",
    "SEO Services",
    "Digital Marketing",
    "ERP CRM Systems",
    "MJ Web Solution",
  ],
  authors: [{ name: "MJ Web Solution" }],
  creator: "MJ Web Solution",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.mjwebsolution.com",
    title: "MJ Web Solution - Complete Digital & Software Solutions",
    description:
      "Full-service agency specializing in custom websites, Android/iOS apps, SEO, school/hospital management software, and inventory/POS platforms.",
    siteName: "MJ Web Solution",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        <Navbar />
        {/* pt-[80px] pushes the page content below the fixed header */}
        <main className="flex-grow pt-[76px] lg:pt-[82px] relative">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
