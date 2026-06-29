import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import logo from "../../../public/logo.png";
import Image from "next/image";

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen bg-background py-32 px-6 md:px-12 overflow-hidden">
      {/* Giant Background Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h2 className="font-sans font-black text-[15vw] leading-[0.8] tracking-tighter text-editorial/5 whitespace-nowrap text-center select-none">
          TERMS
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

        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-12">Terms of Service</h1>
        
        <div className="space-y-8 text-textSecondary leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-white mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using the Solvire platform, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily access the materials (information or software) on Solvire's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">3. Service Provision</h2>
            <p>
              Solvire provides solar installation, maintenance, and consulting services. All physical repair, installation, and maintenance are executed by our certified professional team or authorized partners in accordance with local regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">4. System Performance</h2>
            <p>
              While our maintenance and monitoring services are designed to optimize your solar infrastructure, energy production depends on various environmental factors. Solvire cannot guarantee specific financial returns or energy yields beyond standard equipment warranties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">5. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
