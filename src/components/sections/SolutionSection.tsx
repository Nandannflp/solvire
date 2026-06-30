"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link, Zap, ShieldCheck, Cpu } from "lucide-react";

export function SolutionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  // 3D Parallax Mouse Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { damping: 30, stiffness: 100 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { damping: 30, stiffness: 100 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen py-32 flex flex-col items-center justify-center overflow-hidden bg-background [perspective:1000px]"
    >
      {/* Editorial Background Title */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <h2 className="font-display font-bold text-[14vw] leading-[0.8] tracking-tight text-editorial/5 whitespace-nowrap text-center">
          OUR SOLUTION
        </h2>
      </motion.div>

      <div className="container max-w-5xl mx-auto z-10 relative px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-32 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="text-energy uppercase tracking-widest text-sm font-medium">The Solvire Ecosystem</span>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-foreground max-w-3xl leading-[1.1]"
          >
            A unified network connecting the entire solar lifecycle.
          </motion.h3>
        </div>

        {/* Crazy 3D Animated Ecosystem Visual */}
        <motion.div 
          style={{ rotateX, rotateY }}
          className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-video flex items-center justify-center transform-gpu"
        >
          {/* Background Grid Mesh */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(45,190,96,0.15)_0%,transparent_70%)] pointer-events-none" />

          {/* Rotating Orbital Rings */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[120%] aspect-square md:w-[80%] rounded-full border border-dashed border-foreground/5 z-0"
          />
          <motion.div 
            animate={{ rotate: -360 }} 
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute w-[90%] aspect-square md:w-[60%] rounded-full border border-foreground/5 z-0 flex items-center justify-center"
          >
            {/* Orbital Particles */}
            <div className="absolute top-0 w-2 h-2 rounded-full bg-energy shadow-[0_0_10px_#2DBE60]" />
            <div className="absolute bottom-0 w-2 h-2 rounded-full bg-solar shadow-[0_0_10px_#F5C542]" />
          </motion.div>

          {/* Central Hub Core */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-30 w-40 h-40 md:w-48 md:h-48 rounded-full bg-surface/80 backdrop-blur-xl border border-foreground/20 flex flex-col items-center justify-center shadow-[0_0_80px_rgba(45,190,96,0.2)]"
          >
            <div className="absolute inset-0 rounded-full border border-energy/40 animate-[ping_2s_ease-out_infinite]" />
            <div className="absolute inset-0 rounded-full border border-energy/20 animate-[ping_3s_ease-out_infinite_1s]" />
            <span className="font-display font-bold text-3xl tracking-widest text-foreground z-10">SOLVIRE</span>
            <span className="text-[10px] uppercase tracking-widest text-energy mt-2 z-10">Intelligence Core</span>
          </motion.div>

          {/* Data Streams (SVG Lines) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ filter: "drop-shadow(0 0 8px rgba(45,190,96,0.5))" }}>
            <motion.path 
              animate={{ 
                strokeDashoffset: [1000, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              d="M 25% 15% Q 50% 50% 50% 50% M 75% 15% Q 50% 50% 50% 50% M 25% 85% Q 50% 50% 50% 50% M 75% 85% Q 50% 50% 50% 50%"
              fill="none" 
              stroke="#2DBE60" 
              strokeWidth="1.5" 
              strokeDasharray="10 20"
              className="opacity-50"
            />
          </svg>

          {/* Floating Nodes */}
          {[
            { icon: <Cpu className="w-6 h-6 text-energy" />, label: "Technicians", pos: "top-[10%] left-[10%] md:top-[15%] md:left-[20%]", delay: 0 },
            { icon: <ShieldCheck className="w-6 h-6 text-energy" />, label: "Insurers", pos: "top-[10%] right-[10%] md:top-[15%] md:right-[20%]", delay: 0.2 },
            { icon: <Link className="w-6 h-6 text-energy" />, label: "Owners", pos: "bottom-[10%] left-[10%] md:bottom-[15%] md:left-[20%]", delay: 0.4 },
            { icon: <Zap className="w-6 h-6 text-energy" />, label: "Installers", pos: "bottom-[10%] right-[10%] md:bottom-[15%] md:right-[20%]", delay: 0.6 },
          ].map((node, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              animate={{ y: [-15, 15, -15] }}
              viewport={{ once: true }}
              transition={{ 
                scale: { duration: 0.5, delay: node.delay, type: "spring" },
                opacity: { duration: 0.5, delay: node.delay },
                y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" }
              }}
              className={`absolute ${node.pos} z-20 flex flex-col items-center gap-4`}
            >
              <div className="relative group cursor-pointer">
                {/* Green Ambient Light (Outer) */}
                <div className="absolute inset-0 bg-energy/20 rounded-full blur-2xl group-hover:bg-energy/40 transition-colors duration-500" />
                
                {/* Glass Object */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 backdrop-blur-2xl border border-foreground/20 flex items-center justify-center shadow-[inset_0_0_20px_rgba(255,255,255,0.1),0_8px_32px_rgba(45,190,96,0.2)] relative z-10 group-hover:scale-110 group-hover:border-foreground/40 transition-all duration-500 overflow-hidden">
                  
                  {/* Specular Top Highlight */}
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
                  
                  {/* Moving Light Reflection (Sweeps on Hover) */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                  
                  <div className="relative z-20">
                    {node.icon}
                  </div>
                </div>
              </div>
              <span className="text-foreground text-sm md:text-base font-medium tracking-wide bg-background/50 px-3 py-1 rounded-full backdrop-blur-sm border border-foreground/5">
                {node.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
