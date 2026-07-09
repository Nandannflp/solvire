"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, Sun, Settings } from "lucide-react";

const articles = [
  {
    title: "Understanding Net Metering Policies in India",
    description: "A comprehensive guide to how you can sell excess power back to the grid and reduce your electricity bill to zero.",
    icon: BookOpen,
    category: "Policy & Economics",
    date: "July 2026",
    link: "#"
  },
  {
    title: "On-Grid vs Off-Grid vs Hybrid: Which System is Right For You?",
    description: "Compare the three major solar architectures to find the perfect fit for your residential or commercial energy needs.",
    icon: Sun,
    category: "Technical Guide",
    date: "June 2026",
    link: "#"
  },
  {
    title: "Essential Maintenance: How to Clean Your Solar Panels",
    description: "Maximize your solar yield by keeping your Tier-1 Mono PERC panels free from dust and debris with these simple steps.",
    icon: Settings,
    category: "Maintenance",
    date: "May 2026",
    link: "#"
  }
];

export default function ResourcesPage() {
  return (
    <div className="relative min-h-screen bg-background py-32 px-6 md:px-12 overflow-hidden">
      {/* Giant Background Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h2 className="font-sans font-black text-[15vw] leading-[0.8] tracking-tighter text-editorial/5 whitespace-nowrap text-center select-none">
          KNOWLEDGE
        </h2>
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center text-textSecondary hover:text-foreground transition-colors mb-16 text-sm font-medium group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="mb-16 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">Knowledge Center</h1>
          <p className="text-textSecondary leading-relaxed text-lg">
            Stay informed with the latest insights on solar technology, government policies, and best practices for maximizing your clean energy investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => {
            const Icon = article.icon;
            return (
              <Link key={idx} href={article.link} className="group block h-full">
                <div className="bg-white border border-border hover:border-primary/50 rounded-2xl p-8 h-full flex flex-col transition-all hover:shadow-xl hover:-translate-y-1 duration-300 shadow-sm">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-medium text-textSecondary px-3 py-1 rounded-full border border-border">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-textSecondary leading-relaxed text-sm mb-6 flex-grow">{article.description}</p>
                  <div className="text-xs text-textSecondary/50 font-medium tracking-wider uppercase">
                    {article.date}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-textSecondary">
            More guides and case studies coming soon. Check back later!
          </p>
        </div>
      </div>
    </div>
  );
}
