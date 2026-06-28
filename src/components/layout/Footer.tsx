import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <Image
              src="/logo.svg"
              alt="Solvire"
              width={120}
              height={30}
              className="mb-6 opacity-90 invert brightness-0"
            />
            <p className="text-background/60 text-sm">
              Reliable solar care. <br /> Zero guesswork.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li><Link href="#services" className="hover:text-background transition-colors">Services</Link></li>
              <li><Link href="#trust-layer" className="hover:text-background transition-colors">Trust & Verification</Link></li>
              <li><Link href="#protection" className="hover:text-background transition-colors">Protection</Link></li>
              <li><Link href="#technology" className="hover:text-background transition-colors">Technology</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li><Link href="#purpose" className="hover:text-background transition-colors">Why Solvire</Link></li>
              <li><Link href="#roadmap" className="hover:text-background transition-colors">Roadmap</Link></li>
              <li><Link href="#founder" className="hover:text-background transition-colors">Founder Story</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li><Link href="#" className="hover:text-background transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-background transition-colors">Trust & Safety</Link></li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-background/40">
          <p>© {new Date().getFullYear()} Solvire. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {/* Social Links Placeholders */}
            <a href="#" className="hover:text-background transition-colors">Instagram</a>
            <a href="#" className="hover:text-background transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-background transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
