import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "GOENCONNORTRUCKING — Active Interstate Motor Carrier · USDOT 4358052 · MC-1704918",
  description:
    "Straight box truck freight logistics by GOENCONNORTRUCKING. USDOT 4358052 · MC-1704918 · Austin, TX 78704 · GOENCONNORTRUCKING@GMAIL.COM.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0b1120] text-slate-100 antialiased font-sans">{children}</body>
    </html>
  );
}
