"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function ServiceAreasSection() {
  return (
    <section className="py-16 bg-white border-t border-border">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Proudly Powering Our Region
          </h2>
          <p className="text-textSecondary leading-relaxed mb-8">
            As the premier verified solar network, Solvire is committed to accelerating the transition to clean, reliable energy across our core operational zones. We deliver end-to-end solar infrastructure and uncompromising maintenance to homes, businesses, and industrial facilities in <strong>Bihar</strong>, <strong>Patna</strong>, <strong>Gaya</strong>, and <strong>Muzaffarpur</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
