"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ShieldCheck, Award, MapPin, CheckCircle, ArrowDown } from "lucide-react";
import { env } from "@/app/env";

const stats = [
  { value: 200, suffix: "+", label: "Completed Landmarks", sub: "Residential, Commercial & PEB" },
  { value: 8, suffix: "+", label: "Years of Engineering", sub: "Est. 2016 in Dharmapuri" },
  { value: 100, suffix: "%", label: "On-Time Handover", sub: "Milestone-Driven CPM Schedule" },
  { value: 50, suffix: "+", label: "Quality Checkpoints", sub: "IS 456 & BIS Compliant" },
];

function StatCounter({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    const duration = 1800;
    let animationFrameId: number;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, target]);

  return (
    <span className="font-heading text-3xl font-extrabold tracking-tight text-gold sm:text-4xl lg:text-5xl tabular-nums drop-shadow-sm">
      {count}
      {suffix}
    </span>
  );
}

export default function AboutHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setIsVisible(true);
    }, 100);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[85vh] overflow-hidden bg-background pt-36 pb-20 md:pt-44 md:pb-28 flex flex-col justify-between"
    >
      {/* Background Architectural Texture & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about/site-engineering.jpg"
          alt="AKN Civil Engineering Landmarks"
          fill
          priority
          className="object-cover opacity-60 scale-105 transition-transform duration-1000"
          sizes="100vw"
        />
        {/* Softened Light/Dark Adaptive Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--background)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className={`mb-6 flex items-center gap-2 text-xs text-muted-foreground sm:text-sm transition-all duration-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <Link href="/" className="transition-colors hover:text-gold">
            Home
          </Link>
          <ChevronRight className="size-3.5 text-muted-foreground/60" />
          <span className="font-semibold text-foreground">About Our Firm</span>
        </nav>

        {/* Credentials Pill */}
        <div
          className={`mb-6 inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-4 py-1.5 text-xs font-semibold text-teal backdrop-blur-md transition-all duration-700 delay-100 shadow-sm ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <ShieldCheck className="size-4 text-teal" />
          <span>Registered Civil Engineering Firm • Est. {env.NEXT_PUBLIC_FOUNDED_YEAR} • DTCP & Vastu Approved</span>
        </div>

        {/* Split Grid: Editorial Headline & Founder Credentials */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Column — Title & Vision */}
          <div className="lg:col-span-7 space-y-6">
            <h1
              className={`font-heading text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] transition-all duration-700 delay-150 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Where <span className="text-teal">Civil Engineering</span> Meets{" "}
              <span className="text-gradient-gold">Architectural Artistry</span>
            </h1>

            <p
              className={`max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl transition-all duration-700 delay-200 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              For over 8 years, <strong className="text-foreground">{env.NEXT_PUBLIC_BUSINESS_NAME}</strong> has set the gold standard in structural integrity, scientific Vastu architecture, and transparent turnkey execution across {env.NEXT_PUBLIC_LOCATION_PRIMARY} & {env.NEXT_PUBLIC_LOCATION_SECONDARY}.
            </p>

            <div
              className={`flex flex-wrap items-center gap-4 pt-2 transition-all duration-700 delay-300 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <a
                href={`tel:${env.NEXT_PUBLIC_PHONE_PRIMARY.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-[oklch(0.15_0_0)] shadow-lg shadow-gold/20 transition-all hover:bg-[oklch(0.84_0.15_86)] hover:scale-105"
              >
                Consult Chief Engineer
              </a>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/80 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:bg-card hover:border-teal/50 shadow-sm"
              >
                View 200+ Projects
              </Link>
            </div>
          </div>

          {/* Right Column — Chief Engineer Signature Card */}
          <div
            className={`lg:col-span-5 transition-all duration-700 delay-300 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card/90 p-6 backdrop-blur-xl shadow-2xl">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-muted">
                <Image
                  src="/images/about/quality-supervision.jpg"
                  alt="Er. Kumar Chief Civil Engineer"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 rounded bg-gold px-2.5 py-0.5 text-[11px] font-extrabold text-[oklch(0.15_0_0)] uppercase tracking-wider">
                    <Award className="size-3.5 text-[oklch(0.15_0_0)]" />
                    Managing Director
                  </div>
                  <h3 className="mt-1 font-heading text-2xl font-bold">
                    {env.NEXT_PUBLIC_ENGINEER_NAME}
                  </h3>
                  <p className="text-xs text-white/90">{env.NEXT_PUBLIC_ENGINEER_DEGREE} • Registered Civil Engineer</p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground border-b border-border pb-3">
                  <span>Experience:</span>
                  <span className="font-semibold text-foreground">8+ Years in Structural Execution</span>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground border-b border-border pb-3">
                  <span>Specialization:</span>
                  <span className="font-semibold text-foreground">IS 456 RCC & Scientific Vastu</span>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Headquarters:</span>
                  <span className="font-semibold text-teal">{env.NEXT_PUBLIC_LOCATION_PRIMARY}, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Animated Statistics Bar */}
        <div
          className={`mt-16 grid grid-cols-2 gap-4 rounded-3xl border border-border bg-card/90 p-6 backdrop-blur-2xl shadow-xl sm:grid-cols-4 sm:gap-6 sm:p-8 transition-all duration-700 delay-400 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {stats.map((st) => (
            <div key={st.label} className="text-center sm:text-left">
              <StatCounter target={st.value} suffix={st.suffix} isVisible={isVisible} />
              <h4 className="mt-1 text-sm font-bold text-foreground sm:text-base">{st.label}</h4>
              <p className="mt-0.5 text-xs text-muted-foreground">{st.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
