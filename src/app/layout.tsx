import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { GridBackground } from "@/components/ui/grid-background";
import { Navbar } from "@/components/layout/Navbar";
import { ChatWidget } from "@/components/ChatWidget";

export const metadata: Metadata = {
  metadataBase: new URL("https://solvire.in"), // Replace with actual domain
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
          
          <ChatWidget />
        </GridBackground>
      </body>
    </html>
  );
}
