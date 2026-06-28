'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { Facebook, Instagram, Sparkles, BrainCircuit } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [introPlaying, setIntroPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Initialize smooth scroll & animations
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.5, smoothWheel: true, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Setup Morph Animations
  useEffect(() => {
    if (introPlaying) return;

    // Morph up elements
    const morphUps = gsap.utils.toArray<HTMLElement>('.morph-up');
    morphUps.forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    // Morph down elements
    const morphDowns = gsap.utils.toArray<HTMLElement>('.morph-down');
    morphDowns.forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    // Background Morphing
    ScrollTrigger.create({
      trigger: '#founder-section',
      start: 'top center',
      end: 'bottom center',
      onEnter: () => gsap.to(containerRef.current, { backgroundColor: '#040D17', duration: 1.5 }),
      onLeaveBack: () => gsap.to(containerRef.current, { backgroundColor: '#0B1F33', duration: 1.5 }),
    });

    // Line-by-line reveal for Founder text
    const founderLines = gsap.utils.toArray<HTMLElement>('.founder-line');
    founderLines.forEach((line, i) => {
      gsap.fromTo(line, 
        { opacity: 0, y: 30, filter: 'blur(4px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.founder-text-container',
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.15
        }
      );
    });

  }, [introPlaying]);

  const handleVideoEnded = () => {
    gsap.to('.intro-overlay', {
      opacity: 0,
      duration: 1.5,
      ease: 'power2.inOut',
      onComplete: () => setIntroPlaying(false)
    });
  };

  const skipIntro = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    handleVideoEnded();
  };

  return (
    <div ref={containerRef} className="bg-navy-light min-h-screen text-white overflow-hidden bg-morph transition-colors duration-1000">
      
      {/* ═══════ INTRO VIDEO SEQUENCE ═══════ */}
      {introPlaying && (
        <div className="intro-overlay fixed inset-0 z-50 bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src="/INTRO.mp4"
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            className="w-full h-full object-cover"
          />
          <button 
            onClick={skipIntro}
            className="absolute bottom-10 text-white/50 hover:text-white text-sm tracking-widest uppercase transition-colors"
          >
            Skip Intro
          </button>
        </div>
      )}

      <main className={`${introPlaying ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'} transition-opacity duration-1000`}>
        
        {/* ═══════ HERO / THE IDEA ═══════ */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-solar/10 via-navy-light to-navy-light pointer-events-none" />
          
          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <div className="morph-down inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <Sparkles className="text-solar" size={16} />
              <span className="text-white/80 text-sm font-medium tracking-wide uppercase">The Revolution Begins</span>
            </div>
            
            <h1 className="morph-up heading-display text-[4rem] sm:text-[6rem] md:text-[8rem] leading-[0.9] tracking-tighter mb-8">
              Distance is <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar to-cyan-400">No Barrier.</span>
            </h1>
            
            <p className="morph-up body-clean text-lg md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-16">
              Solvire is the platform connecting you to the ultimate solvers. 
              Mental health and care, delivered instantly across the country. 
              No waiting rooms. No distances. Just solutions.
            </p>

            <div className="morph-up flex justify-center">
              <div className="w-16 h-24 rounded-full border border-white/20 flex items-start justify-center p-2 relative group cursor-pointer overflow-hidden backdrop-blur-sm bg-white/5">
                <div className="w-2 h-2 rounded-full bg-solar animate-bounce mt-2" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ THE PLATFORM REVOLUTION ═══════ */}
        <section className="py-32 px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <BrainCircuit className="morph-up text-solar w-16 h-16" strokeWidth={1} />
                <h2 className="morph-up heading-editorial text-4xl md:text-5xl lg:text-6xl leading-tight">
                  A network of care, <br />
                  <span className="text-white/40">engineered for humanity.</span>
                </h2>
                <p className="morph-up body-clean text-lg text-white/60 leading-relaxed">
                  We built Solvire because the old system is broken. Finding the right mentor, the right solver for your mental well-being shouldn't depend on your zip code. We are uniting the best minds to solve the hardest personal challenges, no matter where you are.
                </p>
              </div>
              <div className="morph-down relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-xl p-8 flex items-center justify-center group">
                <div className="absolute inset-0 bg-solar/5 group-hover:bg-solar/10 transition-colors duration-700" />
                <div className="w-48 h-48 rounded-full border border-solar/30 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border border-solar/50 animate-ping" style={{ animationDuration: '3s' }} />
                  <span className="heading-display text-3xl text-solar text-center">Seamless<br/>Connection</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ FOUNDER's MEET ═══════ */}
        <section id="founder-section" className="py-40 px-6 relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Founder Image (Left) */}
            <div className="lg:col-span-5 morph-up relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent z-10" />
                {/* Placeholder for Founder Image */}
                <div className="w-full h-full bg-white/5 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-white/10 mb-6 flex items-center justify-center border border-white/20">
                     <span className="text-white/40">Photo</span>
                  </div>
                  <h3 className="heading-editorial text-2xl mb-2">The Founder</h3>
                  <p className="text-white/50 text-sm">Visionary & Architect of Solvire</p>
                </div>
                {/* Image tag ready for actual photo */}
                {/* <Image src="/founder.jpg" alt="Founder" fill className="object-cover transition-transform duration-700 group-hover:scale-105" /> */}
              </div>
            </div>

            {/* Founder Text (Right) */}
            <div className="lg:col-span-7 founder-text-container">
              <p className="text-solar tracking-widest text-sm font-medium uppercase mb-8 morph-up">A Note from the Founder</p>
              
              <div className="heading-editorial text-3xl md:text-4xl lg:text-5xl leading-tight space-y-4">
                <div className="founder-line overflow-hidden">
                  <span className="block">"I envisioned a world</span>
                </div>
                <div className="founder-line overflow-hidden">
                  <span className="block text-white/70">where distance does not dictate</span>
                </div>
                <div className="founder-line overflow-hidden">
                  <span className="block text-white/50">the quality of care you receive.</span>
                </div>
                <div className="founder-line overflow-hidden mt-8">
                  <span className="block text-solar">Solvire is that world."</span>
                </div>
              </div>

              <div className="mt-16 space-y-6 text-lg text-white/60 body-clean max-w-2xl">
                <p className="founder-line">When we started building this platform, the goal was simple: democratize access to mental health solvers. It shouldn't be a privilege bound by geography.</p>
                <p className="founder-line">This is more than a platform. It is a movement. A revolution in how we care for ourselves and each other across the nation.</p>
              </div>
            </div>
            
          </div>
        </section>

        {/* ═══════ SOCIAL CONNECT (FOOTER) ═══════ */}
        <section className="py-32 px-6 border-t border-white/10 bg-navy-dark relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="morph-up heading-display text-4xl md:text-6xl mb-16">Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar to-cyan-400">Revolution.</span></h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              
              <a href="#" className="morph-up group flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full border border-white/20 bg-white/5 flex items-center justify-center group-hover:bg-solar group-hover:border-solar group-hover:text-navy-dark transition-all duration-300">
                  <Instagram size={24} />
                </div>
                <span className="text-sm text-white/60 group-hover:text-white transition-colors">Founder Instagram</span>
              </a>

              <a href="#" className="morph-up group flex flex-col items-center gap-4" style={{ transitionDelay: '100ms' }}>
                <div className="w-16 h-16 rounded-full border border-white/20 bg-white/5 flex items-center justify-center group-hover:bg-[#1877F2] group-hover:border-[#1877F2] transition-all duration-300">
                  <Facebook size={24} />
                </div>
                <span className="text-sm text-white/60 group-hover:text-white transition-colors">Founder Facebook</span>
              </a>

              <a href="#" className="morph-up group flex flex-col items-center gap-4" style={{ transitionDelay: '200ms' }}>
                <div className="w-16 h-16 rounded-full border border-white/20 bg-white/5 flex items-center justify-center group-hover:bg-solar group-hover:border-solar group-hover:text-navy-dark transition-all duration-300">
                  <Instagram size={24} />
                </div>
                <span className="text-sm text-white/60 group-hover:text-white transition-colors">Solvire Brand</span>
              </a>

            </div>

            <div className="mt-32 pt-8 border-t border-white/10 text-white/40 text-sm body-clean morph-up">
              &copy; {new Date().getFullYear()} Solvire. The Distance Barrier is Broken.
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}