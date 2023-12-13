import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import Contact from "@/sections/Contact";

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SKELDUS",
  description:
    "In today's complex and ever-evolving cyber threat landscape, SKELDUS was established with a mission to empower businesses to become compliant with frameworks and regulations, fortify security postures, and build trust with their customers, without compromising their core business. Our compliance solutions are designed to help businesses meet the requirements of a wide range of industry frameworks and regulations, including iso 27001, SOC 2, HIPAA, and more.",
  keywords: [
    "Cybersecurity",
    "Software",
    "Compliance",
    "ISO27001",
    "HIPAA",
    "SOC2",
    "Trust",
    "Security",
    "Vulnerability Management",
    "Consultancy",
    "Risk Management",
    "Asset Management",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-serif`}>
        <Header />
        <main>{children}</main>
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
