import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <main className="flex flex-col min-h-screen relative w-full overflow-hidden bg-background">
      <Navbar />
      <section className="pt-48 pb-32">
        <div className="container max-w-4xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none text-textSecondary leading-relaxed space-y-8">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              <p>Solvire ("we", "our", or "us") collects information that you provide directly to us, including your name, property type, monthly electricity bill estimates, phone number, and email address when you fill out forms on our website. We also automatically collect certain technical data when you interact with our platform.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our solar solutions and services. This includes calculating potential energy savings, scheduling site visits, communicating with you about your installation, and complying with local regulatory requirements for net metering and subsidies.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Data Sharing and Disclosure</h2>
              <p>We do not sell your personal data. We may share your information with our verified network of certified solar professionals and vendors strictly for the purpose of fulfilling your installation and maintenance requests. We may also disclose information if required by law or to protect our rights and infrastructure.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
              <p>We implement robust technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our lead capture forms and webhook integrations are secured via industry-standard encryption protocols.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data held by us. To exercise these rights, please contact us at Solvire.in@gmail.com.</p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
