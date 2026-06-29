import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import longLogo from "../../../public/solvire-long-logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent border-t border-white/5 py-16 relative z-10">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6 relative w-48 h-12">
              <Image 
                src={longLogo}
                alt="Solvire Logo"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-textSecondary text-sm max-w-sm leading-relaxed">
              Your trusted partner for complete solar solutions, from professional installation to lifetime maintenance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/#services" className="text-textSecondary text-sm hover:text-energy transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-textSecondary text-sm hover:text-energy transition-colors">How It Works</Link>
              </li>
              <li>
                <Link href="/#industries" className="text-textSecondary text-sm hover:text-energy transition-colors">Industries</Link>
              </li>
              <li>
                <Link href="/#trust" className="text-textSecondary text-sm hover:text-energy transition-colors">Why Us</Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-white font-medium mb-6 text-sm">Legal & Connect</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="text-textSecondary text-sm hover:text-energy transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-textSecondary text-sm hover:text-energy transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/contact" className="text-textSecondary text-sm hover:text-energy transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-textSecondary text-xs">
            © {currentYear} Solvire. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-textSecondary hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="#" className="text-textSecondary hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
