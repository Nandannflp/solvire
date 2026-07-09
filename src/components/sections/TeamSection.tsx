"use client";
import { motion } from "framer-motion";

const team = [
  {
    name: "Rajesh Kumar",
    role: "Technical Operator",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&h=800&fit=crop"
  },
  {
    name: "Anita Desai",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&h=800&fit=crop"
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
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-border mb-6 relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-energy font-medium text-sm uppercase tracking-wider">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
