import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { GridBackground } from "@/components/ui/grid-background";
import { Navbar } from "@/components/layout/Navbar";

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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Solvire - Complete Solar Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solvire — Reliable Solar Care. Zero Guesswork.",
    description:
      "The trusted bridge between solar customers and verified service.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistSans.className} antialiased bg-background text-foreground selection:bg-energy/30 font-sans`}
      >
        <GridBackground>
          <SmoothScroll>
            <Navbar />
            {children}
          </SmoothScroll>
          <Toaster />
          
          {/* [REPLACE_ME: AI Agent Chat Widget Integration] */}
          <div className="fixed bottom-6 right-6 z-50">
            <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-full text-foreground hover:bg-white/20 transition-all duration-300">
              <div className="w-2 h-2 rounded-full bg-solar animate-pulse" />
              <span className="text-sm font-medium">Chat with Solvire AI</span>
            </button>
          </div>
        </GridBackground>
      </body>
    </html>
  );
}
