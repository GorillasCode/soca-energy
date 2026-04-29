import type { Metadata } from "next";
import { Geist, Geist_Mono, Kantumruy_Pro } from "next/font/google";
import Script from "next/script";

import { EnvironmentBadge } from "@/components/ui/environment-badge";
import { GANTRY_ORIGIN } from "@/lib/gantry";
import "./globals.css";

/** Gantry modal bundle — same host as checkout; `lazyOnload` ≈ `defer`. */
const GANTRY_EMBED_MODAL_SCRIPT = `${GANTRY_ORIGIN}/gantry-embed-modal.js`;

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
        <Script src={GANTRY_EMBED_MODAL_SCRIPT} strategy="lazyOnload" />
        <EnvironmentBadge />
        {children}
      </body>
    </html>
  );
}
