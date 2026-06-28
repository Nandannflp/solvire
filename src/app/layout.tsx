import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solvire — Reliable Solar Care. Zero Guesswork.",
  description:
    "Solvire is the trusted bridge between solar customers and verified service. Maintenance, inspection, protection — everything that happens after installation.",
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
  icons: {
    icon: "/logo.png",
  },
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}