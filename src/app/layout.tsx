import type { Metadata } from "next";
import { Geist, Geist_Mono, Kantumruy_Pro } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const GANTRY_EMBED_MODAL_SCRIPT =
  "https://uat.gantrypay.com/gantry-embed-modal.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanturmuy = Kantumruy_Pro({
  variable: "--font-aero-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Soca Energy — Sustainable solutions",
  description:
    "Clean energy solutions for businesses and communities in a low-carbon world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${kanturmuy.variable} dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Script
          src={GANTRY_EMBED_MODAL_SCRIPT}
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
