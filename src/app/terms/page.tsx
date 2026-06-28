import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen bg-background py-32 px-6 md:px-12 overflow-hidden">
      {/* Editorial Background Title */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <h2 className="font-display font-bold text-[18vw] leading-[0.8] tracking-tight text-editorial/5 whitespace-nowrap text-center">
          TERMS
        </h2>
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
            <h2 className="text-xl font-medium text-white mb-4">3. Network Verification</h2>
            <p>
              While Solvire vets and verifies technicians within our network, we act as a bridge and intelligence layer. Any contracts for physical repair or maintenance are ultimately executed between the system owner and the chosen service provider.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">4. System Limitations</h2>
            <p>
              Our diagnostic algorithms are designed to predict and alert users of potential hardware failures. However, solar infrastructure is complex, and Solvire cannot guarantee that 100% of physical or electrical faults will be detected before they occur.
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
