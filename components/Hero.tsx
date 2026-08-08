"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";
import { env } from "@/app/env";

const slides = [
  {
    headline: "WE CONSTRUCT FINEST BUILDINGS",
    sub: "End-to-end engineering, contracting, and interior design solutions delivered with uncompromised quality and structural perfection across Dharmapuri & Krishnagiri.",
    cta1: { label: "Get Free Quote", href: "#contact" },
    cta2: { label: "Explore Our Services", href: "#services" },
    image: "/images/projects/turnkey-masterpiece-after.png",
  },
  {
    headline: "VISUALIZE YOUR DREAM SPACE BEFORE WE BUILD",
    sub: "Realistic 3D exterior elevations, Vastu-compliant 2D floor plans, and modern interior concepts tailored to your budget.",
    cta1: { label: "View Portfolio", href: "#portfolio" },
    cta2: { label: "Contact Lead Engineer", href: "#contact" },
    image: "/images/projects/architectural-3d-elevation.jpg",
  },
  {
    headline: "RESIDENTIAL, COMMERCIAL & INDUSTRIAL SPECIALISTS",
    sub: "Complete project execution under qualified civil engineering direction, utilizing high-grade materials and ensuring on-time handover.",
    cta1: { label: "Schedule Site Visit", href: "#contact" },
    cta2: { label: "Call Now", href: "tel:+919943540336" },
    image: "/images/interiors/interior-project-07.jpeg",
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  /* ── Initial load animation ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });

      tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" })
        .from(".hero-word", { y: 80, opacity: 0, stagger: 0.04, duration: 0.8, ease: "power3.out" }, "-=0.3")
        .from(".hero-sub", { y: 30, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.4")
        .from(".hero-cta", { y: 25, opacity: 0, stagger: 0.12, duration: 0.6, ease: "power3.out" }, "-=0.3")
        .from(".hero-scroll", { opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.2");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ── Auto-rotate slides ── */
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((p) => (p + 1) % slides.length);
        setIsTransitioning(false);
      }, 400);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* ── Background images (rich, crisp, cross-fade) ── */}
      {slides.map((s, i) => (
        <div
          key={s.image}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={s.image}
            alt={`Construction project ${i + 1}`}
            fill
            className="object-cover brightness-105 contrast-[1.05]"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* ── Softened, cinematic ambient overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/65" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)]" />

      {/* ── Decorative subtle grid ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute left-[20%] top-0 bottom-0 w-px bg-white" />
          <div className="absolute left-[40%] top-0 bottom-0 w-px bg-white" />
          <div className="absolute left-[60%] top-0 bottom-0 w-px bg-white" />
          <div className="absolute left-[80%] top-0 bottom-0 w-px bg-white" />
        </div>
        <div className="absolute right-[8%] top-[15%] select-none font-heading text-[18rem] font-bold leading-none text-white/[0.04]">
          {String(current + 1).padStart(2, "0")}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/35 px-4 py-1.5 text-xs font-semibold tracking-widest text-white/90 uppercase backdrop-blur-md shadow-lg">
          <span className="size-2 rounded-full bg-gold shadow-[0_0_8px_rgba(226,179,64,0.8)]" />
          {env.NEXT_PUBLIC_ENGINEER_NAME}, {env.NEXT_PUBLIC_ENGINEER_DEGREE}
        </div>

        {/* Headline */}
        <div
          className={`transition-all duration-400 ${isTransitioning ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"}`}
        >
          <h1 className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] sm:text-5xl md:text-6xl lg:text-7xl">
            {slide.headline.split(" ").map((word, i) => (
              <span key={`${current}-${i}`} className="hero-word mr-[0.22em] inline-block">
                {word === "&" || word === "FINEST" || word === "DREAM" || word === "SPECIALISTS" ? (
                  <span className="text-gold drop-shadow-[0_2px_10px_rgba(226,179,64,0.4)]">{word}</span>
                ) : (
                  word
                )}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="hero-sub mx-auto mb-10 max-w-2xl text-base font-medium leading-relaxed text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)] sm:text-lg">
            {slide.sub}
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={slide.cta1.href}
              className="hero-cta inline-flex items-center rounded-xl bg-gold px-8 py-3.5 text-sm font-bold text-[oklch(0.15_0_0)] shadow-xl shadow-gold/25 transition-all hover:bg-[oklch(0.84_0.15_86)] hover:scale-105"
            >
              {slide.cta1.label}
            </a>
            <a
              href={slide.cta2.href}
              className="hero-cta inline-flex items-center rounded-xl border border-white/30 bg-black/35 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-white/60 hover:bg-black/50 hover:text-white hover:scale-105"
            >
              {slide.cta2.label}
            </a>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="mt-14 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrent(i);
                  setIsTransitioning(false);
                }, 400);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-10 bg-gold shadow-md" : "w-3 bg-white/40 hover:bg-white/70"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="hero-scroll absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70">
        <span className="text-[10px] font-bold tracking-[0.25em] uppercase drop-shadow">Scroll</span>
        <ChevronDown className="size-4 animate-float" />
      </div>
    </section>
  );
}
