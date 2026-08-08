"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Eye, Target, Award, ShieldAlert, Sparkles, Scale } from "lucide-react";

const pillars = [
  {
    title: "1. Structural Longevity",
    specs: "IS 456 & IS 1893 Adherence",
    desc: "Rigid design protocols ensuring residential and commercial buildings withstand seismic tremors, soil expansion, and generational environmental exposure.",
    metric: "100-Year Structural Lifespan",
    image: "/images/projects/raw-foundation-before.png",
  },
  {
    title: "2. Absolute Cost Clarity",
    specs: "Zero Hidden Escalations",
    desc: "Every raw material brand, quantity, and labor rate is documented in an itemized BOQ before ground-breaking. No mid-project price spikes.",
    metric: "100% Guaranteed Pricing",
    image: "/images/projects/architectural-3d-elevation.jpg",
  },
  {
    title: "3. Milestone Precision",
    specs: "CPM Critical Path Scheduling",
    desc: "Weekly progress milestones tracked via project management software. Concrete casting, masonry, plastering, and interiors delivered on strict calendar deadlines.",
    metric: "On-Time Handover Guarantee",
    image: "/images/ongoing_projects/ongoing-site-29.jpeg",
  },
  {
    title: "4. Turnkey Single-Point Responsibility",
    specs: "Concept to Key Handover",
    desc: "From DTCP municipal approvals and structural blueprints to bespoke modular woodwork and exterior landscaping — one team handles everything.",
    metric: "Single Accountable Partner",
    image: "/images/projects/turnkey-masterpiece-after.png",
  },
];

export default function AboutValues() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const timer = setTimeout(() => setIsVisible(true), 1200);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Vision & Mission Manifestos */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Vision */}
          <div
            className={`group relative overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-card to-card/60 p-8 shadow-sm transition-all duration-700 hover:shadow-xl sm:p-10 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-xl bg-gold/15 px-3.5 py-1.5 text-xs font-bold tracking-widest text-gold uppercase">
                <Eye className="size-4" />
                Our Vision
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                Setting the Benchmark for Civil Excellence across Tamil Nadu
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                To be celebrated as South India&apos;s most trusted, engineering-driven construction brand — synonymous with structural innovation, radical pricing honesty, and timeless architectural beauty.
              </p>
            </div>
            <div className="pointer-events-none absolute -bottom-12 -right-12 size-60 rounded-full bg-gold/10 blur-3xl" />
          </div>

          {/* Mission */}
          <div
            className={`group relative overflow-hidden rounded-3xl border border-teal/40 bg-gradient-to-br from-card to-card/60 p-8 shadow-sm transition-all duration-700 delay-100 hover:shadow-xl sm:p-10 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-xl bg-teal/15 px-3.5 py-1.5 text-xs font-bold tracking-widest text-teal uppercase">
                <Target className="size-4" />
                Our Mission
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                Durable, Beautiful & Transparent Turnkey Execution
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                To deliver enduring, Vastu-harmonious, and climate-responsive spaces using certified primary materials, skilled engineering supervision, and a seamless client experience from plan to handover.
              </p>
            </div>
            <div className="pointer-events-none absolute -bottom-12 -right-12 size-60 rounded-full bg-teal/10 blur-3xl" />
          </div>
        </div>

        {/* 4 Pillars Section */}
        <div className="mt-28">
          <div
            className={`mb-14 text-center transition-all duration-700 delay-150 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-3 flex items-center justify-center gap-3">
              <div className="accent-line" />
              <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">Our Foundation</span>
              <div className="accent-line" />
            </div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              The 4 Pillars of <span className="text-teal">AKN Excellence</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              Non-negotiable engineering principles enforced on every square foot we build.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={`group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-teal/50 hover:shadow-xl hover:shadow-teal/10 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Photo Header */}
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  
                  <div className="absolute top-3 right-3">
                    <span className="rounded-md bg-teal/90 px-2.5 py-1 text-[10px] font-bold text-white shadow-md">
                      {p.metric}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-heading text-base font-bold leading-snug">
                      {p.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-5 space-y-3">
                  <div>
                    <span className="text-xs font-semibold text-teal">{p.specs}</span>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {p.desc}
                    </p>
                  </div>
                  <div className="h-0.5 w-8 bg-gold/40 transition-all duration-300 group-hover:w-full group-hover:bg-teal" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
