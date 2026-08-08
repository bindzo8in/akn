"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { env } from "@/app/env";

function CounterItem({
  target,
  suffix,
  label,
  startCount,
}: {
  target: number;
  suffix: string;
  label: string;
  startCount: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCount) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds smooth count
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
  }, [startCount, target]);

  return (
    <div className="rounded-xl border border-border/60 bg-card p-4 text-center shadow-sm transition-all duration-500 hover:border-teal/50 hover:shadow-md">
      <div className="font-heading text-2xl font-extrabold text-teal sm:text-3xl tabular-nums">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-[11px] font-medium text-muted-foreground sm:text-xs">{label}</div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    // Section entrance observer
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          sectionObserver.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    // Stats counter trigger observer (triggers specifically when stats are visited/visible)
    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          statsObserver.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -20px 0px" }
    );

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => {
      sectionObserver.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden bg-muted/50 py-24 md:py-32">
      {/* Decorative ambient background glow */}
      <div
        className="pointer-events-none absolute -right-20 top-20 h-96 w-96 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, oklch(0.49 0.08 172 / 0.2), transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Heading */}
        <div
          className={`mb-14 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-3 flex items-center gap-3">
            <div className="accent-line" />
            <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">About AKN Construction</span>
          </div>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Engineering Precision, <span className="text-teal">Architectural Elegance</span> & Lasting Trust
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column — 2-Image Photo Stack & Animated Stats */}
          <div
            className={`space-y-6 lg:col-span-6 transition-all duration-700 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Primary Construction Site Image */}
            <div className="relative h-72 overflow-hidden rounded-2xl sm:h-80 shadow-lg">
              <Image
                src="/images/about/site-engineering.jpg"
                alt="AKN Construction Site Engineering"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-gold">Serving Tamil Nadu</div>
                  <div className="font-heading text-base font-bold sm:text-lg">Krishnagiri & Dharmapuri</div>
                </div>
                <div className="rounded-xl bg-teal px-3.5 py-1.5 text-center text-xs font-bold uppercase tracking-wider">
                  Since {env.NEXT_PUBLIC_FOUNDED_YEAR}
                </div>
              </div>
            </div>

            {/* Live Animated Stats Counter — Dedicated Trigger on View */}
            <div
              ref={statsRef}
              className={`grid grid-cols-3 gap-3 sm:gap-4 transition-all duration-700 ${
                startCount ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <CounterItem target={18} suffix="+" label="Years Experience" startCount={startCount} />
              <CounterItem target={200} suffix="+" label="Landmarks Built" startCount={startCount} />
              <CounterItem target={100} suffix="%" label="Client Trust" startCount={startCount} />
            </div>
          </div>

          {/* Right Column — Narrative, Leadership & Link to /about */}
          <div
            className={`flex flex-col justify-between space-y-6 lg:col-span-6 transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                <strong className="text-foreground">{env.NEXT_PUBLIC_BUSINESS_NAME}</strong> is dedicated to the synthesis of structural integrity, aesthetic distinction, and functional utility. Under the expert guidance of <strong className="text-teal">{env.NEXT_PUBLIC_ENGINEER_NAME}, {env.NEXT_PUBLIC_ENGINEER_DEGREE}</strong>, our firm delivers end-to-end residential, commercial, and industrial infrastructure.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                From initial site soil testing and 2D/3D Vastu layout planning to RCC structural framework, luxury interior joinery, and government sanction approvals — we take complete responsibility for your project with full transparency.
              </p>

              {/* Core Promises */}
              <div className="grid gap-2.5 pt-2 sm:grid-cols-2">
                {[
                  "IS 456 Certified Structural Quality",
                  "Scientific 2D/3D Vastu Planning",
                  "Guaranteed Handover Timelines",
                  "100% Itemized Cost Breakdown",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs font-semibold text-foreground sm:text-sm">
                    <CheckCircle2 className="size-4 shrink-0 text-teal" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineer Quote Card & Learn More Button */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-full border-2 border-teal bg-muted shadow-md">
                    <Image
                      src="/images/about/er-kumar-owner.jpg"
                      alt={env.NEXT_PUBLIC_ENGINEER_NAME}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-foreground">{env.NEXT_PUBLIC_ENGINEER_NAME}</h3>
                    <p className="text-xs font-semibold tracking-wider text-teal uppercase">{env.NEXT_PUBLIC_ENGINEER_DEGREE}</p>
                    <p className="text-[11px] text-muted-foreground">Chief Civil Engineer & Managing Director</p>
                  </div>
                </div>
                <blockquote className="mt-3 border-l-2 border-gold pl-3 text-xs italic leading-relaxed text-muted-foreground">
                  &ldquo;A building is not merely concrete and steel; it is the realization of a lifelong dream. We ensure every foundation is unbreakable.&rdquo;
                </blockquote>
              </div>

              {/* Button to Dedicated About Page */}
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold text-teal transition-all hover:text-teal/80 hover:translate-x-1"
              >
                Read our full company story, engineering standards & milestones
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
