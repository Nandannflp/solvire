"use client";
import { motion } from "framer-motion";

import { Linkedin, Award } from "lucide-react";

const team = [
  {
    name: "Rajesh Kumar",
    role: "Technical Operator",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&h=800&fit=crop",
    linkedin: "#",
    certification: "Certified Solar Engineer"
  },
  {
    name: "Anita Desai",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&h=800&fit=crop",
    linkedin: "#",
    certification: "MNRE Empanelled Expert"
  }
];

export function TeamSection() {
  return (
    <section className="py-24 md:py-32 bg-transparent border-t border-border">
      <div className="container max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-4">
            Operations Team
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto">
            The leadership driving our rigorous verification standards and operational excellence.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="w-full max-w-sm"
            >
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-border mb-6 relative group">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <span className="text-white text-xs font-medium border border-white/20 px-3 py-1.5 rounded-full bg-black/50">Replace with real headshot</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                <a href={member.linkedin} className="text-[#0A66C2] hover:text-[#084e96] transition-colors"><Linkedin className="w-5 h-5 fill-current" /></a>
              </div>
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">{member.role}</p>
              <div className="flex items-center justify-center gap-1 text-textSecondary text-xs">
                <Award className="w-4 h-4 text-primary" />
                <span>{member.certification}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
