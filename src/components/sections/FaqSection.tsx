"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you only provide solar maintenance, or do you install as well?",
    answer: "We are an end-to-end solar solutions provider. We handle everything from the initial site audit and system design to the complete installation and ongoing lifetime maintenance of your solar asset."
  },
  {
    question: "Are your solar vendors and technicians verified?",
    answer: "Yes, absolutely. We operate a 5-point verified network of certified solar professionals. Every technician and vendor is rigorously vetted for quality, reliability, and technical expertise."
  },
  {
    question: "How much can I save on my electricity bills with Solvire?",
    answer: "Savings depend on your current consumption, roof space, and system size. On average, our residential and commercial clients see up to a 70-90% reduction in their monthly electricity bills."
  },
  {
    question: "Do you assist with net metering and government subsidies?",
    answer: "Yes. We handle all the paperwork for you, including net metering applications and ensuring you receive applicable government subsidies for your solar installation."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-32 md:py-48 bg-transparent border-t border-border overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column: Floating Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 hidden lg:block sticky top-32"
          >
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border border-border shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=600&h=800&fit=crop" 
                alt="Solar professional checking panels" 
                className="w-full h-full object-cover" 
              />
            </div>
          </motion.div>

          {/* Right Column: FAQ Accordion */}
          <div className="w-full lg:w-2/3">
            <div className="text-left mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-semibold text-slate-900 mb-4"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-slate-600 text-lg"
              >
                Everything you need to know about our solar solutions.
              </motion.p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-border rounded-2xl bg-white/60 backdrop-blur-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-lg font-medium text-slate-900">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-solar" : ""}`} />
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
