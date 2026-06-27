'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Search,
  ShieldCheck,
  Wrench,
  Shield,
  FileText,
  Sun,
  CloudRain,
  AlertTriangle,
  HelpCircle,
  Menu,
  X,
  CheckCircle2,
  Eye,
  BarChart3,
  Bell,
  BrainCircuit,
  Lock,
  Zap,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─── Data ─────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Trust', href: '#trust' },
  { label: 'Protection', href: '#protection' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = [
  {
    icon: Sparkles,
    title: 'Solvire Cleaning & Maintenance',
    desc: 'Professional panel cleaning and performance restoration to keep your system generating at full capacity.',
  },
  {
    icon: Search,
    title: 'Solvire Inspection & Diagnostics',
    desc: 'Comprehensive health checks and detailed diagnostic reports so you always know your system\'s condition.',
  },
  {
    icon: ShieldCheck,
    title: 'Solvire AMC',
    desc: 'Annual maintenance contracts that make solar ownership completely worry-free, year after year.',
  },
  {
    icon: Wrench,
    title: 'Solvire Fault Diagnosis & Repair',
    desc: 'Rapid troubleshooting and expert repairs that get your system back online with minimal downtime.',
  },
  {
    icon: Shield,
    title: 'Solvire Protection & Insurance',
    desc: 'Comprehensive coverage for panels, inverters, batteries, and more — real peace of mind.',
  },
  {
    icon: FileText,
    title: 'Solvire Care Records',
    desc: 'Complete service history in one place. Every visit, every fix, every inspection — always accessible.',
  },
];

const TRUST_SIGNALS = [
  { icon: ShieldCheck, title: 'Verified Service Partners', desc: 'Every partner is vetted, verified, and held to Solvire standards.' },
  { icon: Eye, title: 'Transparent Pricing', desc: 'Know exactly what you pay before any work begins. No surprises.' },
  { icon: FileText, title: 'Complete Service History', desc: 'Every interaction documented. Your solar story, always available.' },
  { icon: BarChart3, title: 'Before & After Evidence', desc: 'Visual proof of work done. See the difference, measured and real.' },
  { icon: CheckCircle2, title: 'Quality Checks at Every Step', desc: 'Multi-point inspections ensure nothing is overlooked, ever.' },
  { icon: Eye, title: 'Real Ratings and Reviews', desc: 'Genuine feedback from real solar owners. Trust built on transparency.' },
];

const HOW_IT_WORKS = [
  { num: '01', title: 'Search', desc: 'Find the exact solar care service you need.', icon: Search },
  { num: '02', title: 'Compare', desc: 'Review verified options with transparent details.', icon: Eye },
  { num: '03', title: 'Book', desc: 'Schedule with confidence. Clear pricing, no guesswork.', icon: CheckCircle2 },
  { num: '04', title: 'Track', desc: 'Monitor every step from booking to completion.', icon: BarChart3 },
];

const ROADMAP_ITEMS = [
  { label: 'Maintenance', status: 'current' as const },
  { label: 'Inspection', status: 'current' as const },
  { label: 'AMC', status: 'current' as const },
  { label: 'Diagnostics', status: 'soon' as const },
  { label: 'Protection', status: 'coming' as const },
  { label: 'Monitoring', status: 'planned' as const },
  { label: 'Performance Tracking', status: 'vision' as const },
  { label: 'Solar Ownership OS', status: 'vision' as const },
];

const COVERAGE_ITEMS = [
  'Solar Panels', 'Inverter', 'Battery Storage', 'Wiring & Connections',
  'Theft Protection', 'Storm Damage', 'Fire Coverage', 'Flood Protection',
];

const TECH_FEATURES = [
  {
    icon: BrainCircuit,
    title: 'Smart Matching',
    desc: 'AI connects you with the right service based on your system, location, and needs.',
  },
  {
    icon: Bell,
    title: 'Maintenance Reminders',
    desc: 'Never miss a service window. Timely alerts keep your system performing at its best.',
  },
  {
    icon: BarChart3,
    title: 'Performance Tracking',
    desc: 'Know your system\'s health in real time. Data-driven insights, not guesswork.',
  },
  {
    icon: FileText,
    title: 'Service History',
    desc: 'Complete visibility into every service event. Your solar timeline, always accessible.',
  },
];

/* ─── Component ────────────────────────────────────────── */

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);

  /* ── Loading Screen + Lenis + GSAP ── */
  useEffect(() => {
    // Dismiss loading screen after 2.5s
    const timer = setTimeout(() => {
      if (loadingRef.current) {
        gsap.to(loadingRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: 'power2.inOut',
          onComplete: () => setLoading(false),
        });
      }
    }, 2500);

    // Lenis smooth scroll
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  /* ── Nav background on scroll ── */
  useEffect(() => {
    if (!navRef.current) return;
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: 'bottom top',
      onUpdate: (self) => {
        if (self.progress > 0.05) {
          navRef.current?.classList.add('nav-scrolled');
        } else {
          navRef.current?.classList.remove('nav-scrolled');
        }
      },
    });
  }, []);

  /* ── Section reveals ── */
  useEffect(() => {
    // Generic section reveals
    const sections = gsap.utils.toArray<HTMLElement>('.section-reveal');
    sections.forEach((section) => {
      gsap.to(section, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Staggered card reveals
    const cardGroups = gsap.utils.toArray<HTMLElement>('.card-group');
    cardGroups.forEach((group) => {
      const cards = group.querySelectorAll<HTMLElement>('.card-stagger');
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: group,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Hero stagger
    if (heroRef.current) {
      const heroTl = gsap.timeline({ delay: 0.3 });
      heroTl
        .fromTo(
          heroRef.current.querySelectorAll('.hero-word'),
          { opacity: 0, y: 30, filter: 'blur(6px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7, stagger: 0.08, ease: 'power3.out' }
        )
        .fromTo(
          heroRef.current.querySelector('.hero-sub'),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo(
          heroRef.current.querySelectorAll('.hero-cta'),
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' },
          '-=0.2'
        );
    }

    // Problem pain points stagger
    const painPoints = gsap.utils.toArray<HTMLElement>('.pain-point');
    painPoints.forEach((point) => {
      gsap.to(point, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: point,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      });
    });

    // How it works steps
    const steps = gsap.utils.toArray<HTMLElement>('.step-item');
    steps.forEach((step, i) => {
      gsap.to(step, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: i * 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: step,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Roadmap progress
    const roadmapTrack = document.querySelector('.roadmap-track-fill');
    if (roadmapTrack) {
      gsap.to(roadmapTrack, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.roadmap-container',
          start: 'top 70%',
          end: 'bottom 70%',
          scrub: 1,
        },
      });
    }

    // Roadmap items
    const roadmapItems = gsap.utils.toArray<HTMLElement>('.roadmap-item');
    roadmapItems.forEach((item) => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      });
    });

    // Stats counter animation
    const statNumbers = gsap.utils.toArray<HTMLElement>('.stat-number');
    statNumbers.forEach((stat) => {
      const target = parseInt(stat.dataset.value || '0', 10);
      const suffix = stat.dataset.suffix || '';
      gsap.to({ val: 0 }, {
        val: target,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: stat,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate: function () {
          stat.textContent = Math.round(this.targets()[0].val) + suffix;
        },
      });
    });

    // Protection score circle
    const scoreCircle = document.querySelector('.protection-score-ring');
    if (scoreCircle) {
      gsap.to(scoreCircle, {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: scoreCircle,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Founder reveal
    const founderLeft = document.querySelector('.founder-left');
    const founderRight = document.querySelector('.founder-right');
    if (founderLeft && founderRight) {
      gsap.fromTo(founderLeft, { opacity: 0, x: -40 }, {
        opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: founderLeft, start: 'top 80%', toggleActions: 'play none none none' },
      });
      gsap.fromTo(founderRight, { opacity: 0, x: 40 }, {
        opacity: 1, x: 0, duration: 0.8, delay: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: founderRight, start: 'top 80%', toggleActions: 'play none none none' },
      });
    }
  }, []);

  /* ── Helpers ── */
  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /* ── Render ── */
  return (
    <div ref={containerRef} className="bg-white">
      {/* ═══════ LOADING SCREEN ═══════ */}
      <AnimatePresence>
        {loading && (
          <div
            ref={loadingRef}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy"
          >
            <div className="solar-grid absolute inset-0 grid-fade" />
            <div className="relative z-10 flex flex-col items-center gap-8">
              <div className="logo-reveal">
                <Image
                  src="/solvire-long-logo.png"
                  alt="Solvire"
                  width={200}
                  height={48}
                  priority
                  className="h-12 w-auto md:h-14"
                />
              </div>
              <div className="light-beam w-48 md:w-64 h-[2px] bg-gradient-to-r from-transparent via-solar to-transparent rounded-full" />
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* ═══════ NAVIGATION ═══════ */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-bar"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-18 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative z-10 flex items-center" aria-label="Solvire Home">
            <Image
              src="/logo.png"
              alt="Solvire"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10 text-white p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden bg-navy/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-base text-white/80 hover:text-white py-3 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* ═══════ HERO ═══════ */}
        <section
          ref={heroRef}
          id="hero"
          className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden"
          aria-label="Hero"
        >
          <div className="solar-grid absolute inset-0" />
          {/* Glow behind headline */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-solar/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 text-center pt-24 pb-20">
            <h1 className="heading-display text-white text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] leading-[1.05] mb-6">
              <span className="hero-word inline-block">Solar </span>
              <span className="hero-word inline-block">care, </span>
              <span className="hero-word inline-block">made </span>
              <span className="hero-word inline-block text-gradient-solar">simple.</span>
            </h1>
            <p className="hero-sub body-clean text-white/60 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ opacity: 0 }}>
              The trusted platform for solar maintenance, inspection, and protection — everything that happens after installation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => scrollToSection('#services')}
                className="hero-cta btn-glow bg-solar text-white font-semibold px-8 py-3.5 rounded-full text-sm md:text-base transition-all"
                style={{ opacity: 0 }}
              >
                Explore Solvire
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="hero-cta border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-medium px-8 py-3.5 rounded-full text-sm md:text-base transition-all"
                style={{ opacity: 0 }}
              >
                Connect with Us
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
            <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </section>

        {/* ═══════ THE PROBLEM ═══════ */}
        <section className="bg-white py-24 md:py-32 lg:py-40" aria-label="The problem">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="section-reveal max-w-3xl mx-auto text-center mb-16 md:mb-20">
              <p className="body-clean text-solar font-medium text-sm tracking-widest uppercase mb-4">The Problem</p>
              <h2 className="heading-editorial text-navy text-2xl sm:text-3xl md:text-[2.75rem] lg:text-[3.25rem] mb-6">
                Solar ownership doesn&apos;t end at installation.
              </h2>
              <p className="body-clean text-muted-foreground text-base md:text-lg leading-relaxed">
                Solar panels are installed with excitement and big promises. Then months pass. Dust accumulates. Performance drops. And when something goes wrong, most owners don&apos;t know who to call, when to service, or how to protect their investment.
              </p>
            </div>

            {/* Pain points timeline */}
            <div className="section-reveal max-w-3xl mx-auto">
              <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-6">
                {[
                  { icon: Sun, label: 'Installation Day', desc: 'Everything works perfectly. Promises are made.', color: 'text-sun' },
                  { icon: CloudRain, label: 'Months Pass', desc: 'Dust, weather, and wear take their toll silently.', color: 'text-muted-foreground' },
                  { icon: AlertTriangle, label: 'Reality Hits', desc: 'Performance drops. No clear path to help.', color: 'text-red-400' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="pain-point text-center md:text-left p-6 rounded-2xl bg-muted/50 border border-cool-gray/60"
                    style={{ opacity: 0, transform: 'translateY(20px)' }}
                  >
                    <item.icon className={`${item.color} mx-auto md:mx-0 mb-3`} size={28} strokeWidth={1.5} />
                    <h3 className="font-heading font-bold text-navy text-base mb-1">{item.label}</h3>
                    <p className="body-clean text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <div className="pain-point inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy/5" style={{ opacity: 0, transform: 'translateY(20px)' }}>
                  <HelpCircle className="text-navy/40" size={16} />
                  <span className="text-navy/50 text-sm font-medium">70% of solar owners don&apos;t have a maintenance plan</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ WHY SOLVIRE EXISTS ═══════ */}
        <section className="bg-navy relative overflow-hidden py-24 md:py-32 lg:py-40" aria-label="Why Solvire exists">
          <div className="solar-grid absolute inset-0 opacity-50" />
          <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 text-center">
            <div className="section-reveal">
              <p className="body-clean text-solar font-medium text-sm tracking-widest uppercase mb-4">Why Solvire</p>
              <h2 className="heading-editorial text-white text-2xl sm:text-3xl md:text-[2.75rem] lg:text-[3.25rem] max-w-3xl mx-auto mb-8">
                Solvire was created to simplify everything that happens after installation.
              </h2>
              <p className="body-clean text-white/50 text-base md:text-lg max-w-2xl mx-auto mb-14 leading-relaxed">
                We noticed a gap no one was addressing. Solar owners needed a single, trusted place for care — not a fragmented directory of unknown providers. Solvire is that place.
              </p>
            </div>

            {/* Stats */}
            <div className="section-reveal grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto">
              {[
                { value: '70', suffix: '%', label: 'Owners lack a maintenance plan' },
                { value: '40', suffix: '%', label: 'Potential energy lost to poor care' },
                { value: '1', suffix: '', label: 'Platform built to solve it' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="stat-number heading-display text-sun text-4xl md:text-5xl mb-2"
                    data-value={stat.value}
                    data-suffix={stat.suffix}
                  >
                    0{stat.suffix}
                  </div>
                  <p className="body-clean text-white/40 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ SERVICES ═══════ */}
        <section id="services" className="bg-white py-24 md:py-32 lg:py-40" aria-label="Services">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="section-reveal text-center mb-14 md:mb-18">
              <p className="body-clean text-solar font-medium text-sm tracking-widest uppercase mb-4">Services</p>
              <h2 className="heading-editorial text-navy text-2xl sm:text-3xl md:text-[2.75rem] max-w-3xl mx-auto">
                Everything your solar system needs. One trusted brand.
              </h2>
            </div>

            <div className="card-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="card-stagger card-hover bg-white rounded-2xl p-6 md:p-7 border border-cool-gray/80 shadow-sm"
                  style={{ opacity: 0, transform: 'translateY(20px)' }}
                >
                  <div className="w-11 h-11 rounded-xl bg-soft-blue flex items-center justify-center mb-5">
                    <service.icon className="text-navy" size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-base md:text-[1.05rem] mb-2">{service.title}</h3>
                  <p className="body-clean text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ HOW IT WORKS ═══════ */}
        <section id="how-it-works" className="bg-navy relative overflow-hidden py-24 md:py-32 lg:py-40" aria-label="How it works">
          <div className="solar-grid absolute inset-0 opacity-30" />
          <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8">
            <div className="section-reveal text-center mb-14 md:mb-18">
              <p className="body-clean text-solar font-medium text-sm tracking-widest uppercase mb-4">How It Works</p>
              <h2 className="heading-editorial text-white text-2xl sm:text-3xl md:text-[2.75rem] max-w-3xl mx-auto">
                Simple steps to reliable solar care.
              </h2>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5 relative">
              {/* Connecting line (desktop) */}
              <div className="hidden lg:block absolute top-[2.25rem] left-[12.5%] right-[12.5%] h-px">
                <div className="roadmap-track-fill w-full h-full bg-gradient-to-r from-solar/40 via-solar to-solar/40 origin-left scale-x-0" />
              </div>

              {HOW_IT_WORKS.map((step) => (
                <div
                  key={step.num}
                  className="step-item text-center relative"
                  style={{ opacity: 0, transform: 'translateY(20px)' }}
                >
                  <div className="w-12 h-12 rounded-full bg-solar/10 border border-solar/30 flex items-center justify-center mx-auto mb-5 relative z-10">
                    <span className="heading-display text-solar text-lg">{step.num}</span>
                  </div>
                  <h3 className="font-heading font-bold text-white text-base mb-2">{step.title}</h3>
                  <p className="body-clean text-white/45 text-sm leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ TRUST & VERIFICATION ═══════ */}
        <section id="trust" className="bg-soft-blue py-24 md:py-32 lg:py-40" aria-label="Trust and verification">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="section-reveal text-center mb-14 md:mb-18">
              <p className="body-clean text-solar font-medium text-sm tracking-widest uppercase mb-4">Trust</p>
              <h2 className="heading-editorial text-navy text-2xl sm:text-3xl md:text-[2.75rem] max-w-3xl mx-auto">
                Trust is not a feature. It&apos;s the foundation.
              </h2>
            </div>

            <div className="card-group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {TRUST_SIGNALS.map((item) => (
                <div
                  key={item.title}
                  className="card-stagger card-hover bg-white rounded-2xl p-6 md:p-7 border border-cool-gray/60 shadow-sm"
                  style={{ opacity: 0, transform: 'translateY(20px)' }}
                >
                  <div className="w-10 h-10 rounded-full bg-solar/10 badge-pulse flex items-center justify-center mb-4">
                    <item.icon className="text-solar" size={18} strokeWidth={2} />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-[0.95rem] mb-1.5">{item.title}</h3>
                  <p className="body-clean text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ PROTECTION & INSURANCE ═══════ */}
        <section id="protection" className="bg-navy relative overflow-hidden py-24 md:py-32 lg:py-40" aria-label="Protection and insurance">
          <div className="solar-grid absolute inset-0 opacity-30" />
          <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
            <div className="section-reveal text-center mb-14 md:mb-18">
              <p className="body-clean text-solar font-medium text-sm tracking-widest uppercase mb-4">Protection</p>
              <h2 className="heading-editorial text-white text-2xl sm:text-3xl md:text-[2.75rem] max-w-3xl mx-auto">
                Protect your solar investment beyond maintenance.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Score circle */}
              <div className="section-reveal flex flex-col items-center lg:items-start">
                <div className="relative w-48 h-48 md:w-56 md:h-56 mb-8">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
                    <circle
                      className="protection-score-ring"
                      cx="60" cy="60" r="52"
                      fill="none"
                      stroke="url(#scoreGradient)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 52}
                      strokeDashoffset={2 * Math.PI * 52}
                    />
                    <defs>
                      <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2DBE60" />
                        <stop offset="100%" stopColor="#F5C542" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="heading-display text-white text-3xl md:text-4xl">92</span>
                    <span className="body-clean text-white/40 text-xs mt-1">Protection Score</span>
                  </div>
                </div>
                <p className="body-clean text-white/50 text-sm text-center lg:text-left max-w-xs">
                  Your Solar Protection Score assesses risk across every component — giving you a clear picture of your system&apos;s security.
                </p>
              </div>

              {/* Right: Coverage grid */}
              <div className="section-reveal">
                <h3 className="font-heading font-bold text-white text-lg mb-6">Comprehensive Coverage</h3>
                <div className="grid grid-cols-2 gap-3">
                  {COVERAGE_ITEMS.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.06]"
                    >
                      <ShieldCheck className="text-solar flex-shrink-0" size={16} strokeWidth={2} />
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-solar/10 border border-solar/20">
                  <Lock className="text-solar flex-shrink-0" size={18} strokeWidth={1.5} />
                  <div>
                    <p className="text-white text-sm font-medium">Policy Vault</p>
                    <p className="text-white/50 text-xs mt-0.5">All your documents, records, and claims in one secure place.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ TECHNOLOGY & INTELLIGENCE ═══════ */}
        <section className="bg-white py-24 md:py-32 lg:py-40" aria-label="Technology">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="section-reveal text-center mb-14 md:mb-18">
              <p className="body-clean text-solar font-medium text-sm tracking-widest uppercase mb-4">Technology</p>
              <h2 className="heading-editorial text-navy text-2xl sm:text-3xl md:text-[2.75rem] max-w-3xl mx-auto">
                Built for the future of solar ownership.
              </h2>
            </div>

            <div className="card-group grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {TECH_FEATURES.map((feat) => (
                <div
                  key={feat.title}
                  className="card-stagger card-hover flex gap-5 p-6 md:p-7 rounded-2xl bg-muted/40 border border-cool-gray/60"
                  style={{ opacity: 0, transform: 'translateY(20px)' }}
                >
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <feat.icon className="text-navy" size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy text-[0.95rem] mb-1.5">{feat.title}</h3>
                    <p className="body-clean text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ ROADMAP ═══════ */}
        <section id="roadmap" className="bg-navy relative overflow-hidden py-24 md:py-32 lg:py-40" aria-label="Roadmap">
          <div className="solar-grid absolute inset-0 opacity-30" />
          <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8">
            <div className="section-reveal text-center mb-14 md:mb-18">
              <p className="body-clean text-solar font-medium text-sm tracking-widest uppercase mb-4">Roadmap</p>
              <h2 className="heading-editorial text-white text-2xl sm:text-3xl md:text-[2.75rem] max-w-3xl mx-auto">
                From maintenance to a complete solar operating system.
              </h2>
            </div>

            {/* Timeline */}
            <div className="roadmap-container relative">
              {/* Horizontal track */}
              <div className="hidden sm:block absolute top-4 left-0 right-0 h-px bg-white/10">
                <div className="roadmap-track-fill h-full bg-gradient-to-r from-solar via-solar to-solar/30 origin-left scale-x-0" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-3">
                {ROADMAP_ITEMS.map((item, i) => {
                  const isActive = item.status === 'current';
                  const isMuted = item.status === 'planned' || item.status === 'vision';
                  return (
                    <div
                      key={item.label}
                      className="roadmap-item flex flex-col items-center text-center"
                      style={{ opacity: 0, transform: 'translateY(15px)' }}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mb-3 relative z-10 ${
                          isActive
                            ? 'bg-solar badge-pulse'
                            : item.status === 'soon'
                              ? 'bg-sun/20 border border-sun/40'
                              : 'bg-white/5 border border-white/10'
                        }`}
                      >
                        {isActive && <CheckCircle2 className="text-white" size={14} />}
                        {item.status === 'soon' && <Zap className="text-sun" size={12} />}
                      </div>
                      <span
                        className={`text-xs leading-tight max-w-[80px] ${
                          isMuted ? 'text-white/25' : 'text-white/70'
                        }`}
                      >
                        {item.label}
                      </span>
                      {item.status !== 'current' && (
                        <span
                          className={`text-[10px] mt-1.5 uppercase tracking-wider font-medium ${
                            item.status === 'soon'
                              ? 'text-sun/60'
                              : item.status === 'coming'
                                ? 'text-white/20'
                                : 'text-white/10'
                          }`}
                        >
                          {item.status}
                        </span>
                      )}
                      {isActive && (
                        <span className="text-[10px] mt-1.5 uppercase tracking-wider font-medium text-solar/70">
                          Available
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ FOUNDER STORY ═══════ */}
        <section className="bg-soft-blue py-24 md:py-32 lg:py-40" aria-label="Founder story">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Founder placeholder */}
              <div className="founder-left flex justify-center lg:justify-start" style={{ opacity: 0 }}>
                <div className="w-56 h-72 md:w-64 md:h-80 rounded-2xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center shadow-2xl">
                  <span className="heading-display text-white/20 text-6xl md:text-7xl select-none">SF</span>
                </div>
              </div>

              {/* Founder text */}
              <div className="founder-right" style={{ opacity: 0 }}>
                <p className="body-clean text-solar font-medium text-sm tracking-widest uppercase mb-4">Why Solvire Exists</p>
                <h2 className="heading-editorial text-navy text-2xl sm:text-3xl md:text-[2.25rem] mb-6">
                  Built for long-term solar care.
                </h2>
                <div className="space-y-4 body-clean text-muted-foreground text-[0.95rem] md:text-base leading-relaxed">
                  <p>
                    After years in the solar industry, one thing became clear: the conversation always stopped at installation. Panels went up, contracts were signed, and then — silence. No guidance. No follow-up. No clear path for the years ahead.
                  </p>
                  <p>
                    Solvire was started to fill that void. Not as another marketplace, but as a single, trusted brand that solar owners can rely on for every stage of ownership.
                  </p>
                </div>
                <blockquote className="mt-8 pl-5 border-l-2 border-solar/40">
                  <p className="font-heading font-bold text-navy text-base md:text-lg italic leading-relaxed">
                    &ldquo;Solar panels are installed with big promises. The real journey begins afterwards.&rdquo;
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ FINAL CTA ═══════ */}
        <section id="contact" className="bg-navy relative overflow-hidden py-24 md:py-32 lg:py-40" aria-label="Get started">
          <div className="solar-grid absolute inset-0 opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-solar/5 rounded-full blur-[150px] pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 text-center">
            <div className="section-reveal">
              <h2 className="heading-display text-white text-3xl sm:text-4xl md:text-[3.5rem] lg:text-5xl mb-6">
                Start with Solvire.
              </h2>
              <p className="body-clean text-white/50 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Join the movement toward trusted, transparent solar care. Your system deserves better than guesswork.
              </p>
              <button
                className="btn-glow inline-flex items-center gap-2 bg-solar text-white font-semibold px-10 py-4 rounded-full text-sm md:text-base transition-all"
              >
                Connect with Solvire
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="bg-navy-dark border-t border-white/5" role="contentinfo">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <Image
                src="/logo.png"
                alt="Solvire"
                width={28}
                height={28}
                className="h-7 w-auto mb-4 brightness-0 invert"
              />
              <p className="body-clean text-white/30 text-sm leading-relaxed max-w-[200px]">
                Reliable solar care. Transparent choice. Simple booking.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">Services</h4>
              <ul className="space-y-2.5">
                {['Cleaning & Maintenance', 'Inspection & Diagnostics', 'AMC', 'Fault Diagnosis & Repair', 'Protection & Insurance', 'Care Records'].map((item) => (
                  <li key={item}>
                    <span className="text-white/30 hover:text-white/60 text-sm transition-colors cursor-default">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">Company</h4>
              <ul className="space-y-2.5">
                {['About', 'Roadmap', 'Trust & Verification', 'Technology', 'Careers'].map((item) => (
                  <li key={item}>
                    <span className="text-white/30 hover:text-white/60 text-sm transition-colors cursor-default">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">Connect</h4>
              <ul className="space-y-2.5">
                {['Contact Us', 'Support', 'Partnerships', 'Press'].map((item) => (
                  <li key={item}>
                    <span className="text-white/30 hover:text-white/60 text-sm transition-colors cursor-default">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/20 text-xs">
              &copy; {new Date().getFullYear()} Solvire. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-white/20 hover:text-white/40 text-xs transition-colors cursor-default">Privacy</span>
              <span className="text-white/20 hover:text-white/40 text-xs transition-colors cursor-default">Terms</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ═══════ NAV SCROLL STYLES ═══════ */}
      <style jsx global>{`
        .nav-bar {
          background: transparent;
          backdrop-filter: none;
        }
        .nav-scrolled {
          background: rgba(11, 31, 51, 0.92) !important;
          backdrop-filter: blur(16px) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>
    </div>
  );
}