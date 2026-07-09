import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <main className="flex flex-col min-h-screen relative w-full overflow-hidden bg-background">
      <Navbar />
      <section className="pt-48 pb-32">
        <div className="container max-w-4xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Terms of Service</h1>
          <div className="prose prose-invert max-w-none text-textSecondary leading-relaxed space-y-8">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>By accessing or using the Solvire platform and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Services</h2>
              <p>Solvire provides an end-to-end solar solution ecosystem, including residential, commercial, and industrial solar installations, system design, hardware procurement, and long-term maintenance. All estimates regarding energy generation, savings, and timelines provided on our website are approximations based on typical parameters and do not constitute a binding guarantee until a formal contract is executed.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
              <p>You agree to provide accurate, current, and complete information when utilizing our lead capture forms and requesting site visits. You are responsible for ensuring that your property complies with local structural and legal requirements for solar installation, though our team will assist in site feasibility audits.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Service Liabilities and Warranties</h2>
              <p>While Solvire utilizes Tier-1 components (e.g., Mono PERC and TOPCon modules) backed by standard 25-year manufacturer performance warranties, Solvire itself is not liable for grid outages, extreme weather damage, or third-party tampering. Our operational specifications and maintenance SLAs are defined explicitly in the final deployment contract.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
              <p>All content, branding, UI designs, and proprietary text on this website are the intellectual property of Solvire. Unauthorized reproduction, scraping, or commercial use of our digital assets is strictly prohibited.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Modifications to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. We will notify users of any significant changes by updating the date at the top of this page. Continued use of our services following any changes constitutes acceptance of the revised Terms.</p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
