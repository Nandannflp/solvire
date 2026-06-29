import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import logo from "../../../public/logo.png";
import Image from "next/image";

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-background py-32 px-6 md:px-12 overflow-hidden">
      {/* Giant Background Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h2 className="font-sans font-black text-[15vw] leading-[0.8] tracking-tighter text-editorial/5 whitespace-nowrap text-center select-none">
          PRIVACY
        </h2>
      </div>

      {/* Background Watermark */}
      <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none mix-blend-overlay">
        <Image 
          src={logo} 
          alt="Solvire"
          fill
          className="object-contain"
        />
      </div>

      <div className="container max-w-3xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center text-textSecondary hover:text-white transition-colors mb-16 text-sm font-medium group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-12">Privacy Policy</h1>
        
        <div className="space-y-8 text-textSecondary leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-white mb-4">1. Introduction</h2>
            <p>
              At Solvire, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our solar ecosystem services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">2. Data Collection</h2>
            <p className="mb-4">We collect information that you provide directly to us when you:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Register for an account or join our waitlist</li>
              <li>Connect your solar hardware to our platform</li>
              <li>Request service from our verified technician network</li>
              <li>Communicate with our customer support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">3. Data Usage</h2>
            <p>
              Your data is primarily used to provide, maintain, and improve our services. Information collected during site visits, installations, and monitoring is used strictly to ensure your solar infrastructure operates at peak efficiency. We do not sell your personal energy data to third-party data brokers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">4. Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">5. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:privacy@solvire.com" className="text-energy hover:underline">privacy@solvire.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
