import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { GlobalBackground } from "@/components/layout/GlobalBackground";

export const metadata: Metadata = {
  title: "Solvire | Comprehensive Solar Maintenance Ecosystem",
  description:
    "Protect and optimize your solar asset with our 5-point verified network, deep diagnostics, and end-to-end management.",
  keywords: [
    "Solvire",
    "solar maintenance",
    "solar care",
    "solar service",
    "solar inspection",
    "solar AMC",
    "verified solar vendors",
  ],
  authors: [{ name: "Solvire" }],

  openGraph: {
    title: "Solvire — Reliable Solar Care. Zero Guesswork.",
    description:
      "The trusted bridge between solar customers and verified service. Maintenance, inspection, protection — everything after installation.",
    siteName: "Solvire",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solvire — Reliable Solar Care. Zero Guesswork.",
    description:
      "The trusted bridge between solar customers and verified service.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${GeistSans.variable} ${GeistSans.className} antialiased bg-background text-foreground selection:bg-energy/30 font-sans`}
      >
        <GlobalBackground />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Toaster />
      </body>
    </html>
  );
}