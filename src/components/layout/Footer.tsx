import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Instagram, ArrowUpRight, PhoneCall, Mail, MapPin } from "lucide-react";
import longLogo from "../../../public/solvire-long-logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent border-t border-foreground/5 py-16 relative z-10">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-block mb-6 relative w-48 h-12">
              <Image 
                src={longLogo}
                alt="Solvire Logo"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-textSecondary text-sm max-w-sm leading-relaxed mb-6">
              Your trusted partner for complete solar solutions, from professional installation to lifetime maintenance.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-medium mb-6 text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:18002120000" className="flex items-start gap-3 text-textSecondary text-sm hover:text-primary transition-colors">
                  <PhoneCall className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                  <span>1800-212-SOLAR</span>
                </a>
              </li>
              <li>
                <a href="mailto:sales@solvire.in" className="flex items-start gap-3 text-textSecondary text-sm hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>sales@solvire.in</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-textSecondary text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Panaji, Goa 403001</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-medium mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/#services" className="text-textSecondary text-sm hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-textSecondary text-sm hover:text-primary transition-colors">How It Works</Link>
              </li>
              <li>
                <Link href="/#industries" className="text-textSecondary text-sm hover:text-primary transition-colors">Industries</Link>
              </li>
              <li>
                <Link href="/#trust" className="text-textSecondary text-sm hover:text-primary transition-colors">Why Us</Link>
              </li>
              <li>
                <Link href="/resources" className="text-textSecondary text-sm hover:text-primary transition-colors">Knowledge Center</Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-foreground font-medium mb-6 text-sm">Legal & Connect</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="text-textSecondary text-sm hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-textSecondary text-sm hover:text-primary transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/contact" className="text-textSecondary text-sm hover:text-primary transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/support" className="text-textSecondary text-sm hover:text-primary transition-colors">Support & Warranty</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Certifications */}
        <div className="flex flex-wrap items-center gap-6 mb-12 opacity-80">
          <div className="px-4 py-2 rounded border border-foreground/10 text-xs font-semibold text-textSecondary tracking-wider">ISO 9001:2015 CERTIFIED</div>
          <div className="px-4 py-2 rounded border border-foreground/10 text-xs font-semibold text-textSecondary tracking-wider">MNRE EMPANELLED</div>
          <div className="px-4 py-2 rounded border border-foreground/10 text-xs font-semibold text-textSecondary tracking-wider">MSME REGISTERED</div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-foreground/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-textSecondary text-xs">
            © {currentYear} Solvire. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="https://twitter.com/solvire" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-foreground transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="w-4 h-4" />
            </Link>
            <Link href="https://linkedin.com/company/solvire" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-foreground transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link href="https://instagram.com/solvire" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-foreground transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
