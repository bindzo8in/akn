"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Flag, Building, Sparkles, HeartPulse, Award } from "lucide-react";

const milestones = [
  {
    year: "2008",
    title: "Inception of AKN Construction & Interiors",
    badge: "Foundation Year",
    icon: Flag,
    desc: "Er. Kumar Arjun, B.E. establishes AKN Construction & Interiors in Krishnagiri, pioneering scientific civil engineering oversight, structural integrity, soil SBC analysis, and transparent turnkey execution.",
    image: "/images/about/timeline-2008-inception.png",
  },
  {
    year: "2018",
    title: "Commercial & Retail Complexes",
    badge: "Commercial Expansion",
    icon: Building,
    desc: "Expanded into high-traffic retail complexes and multi-storey commercial buildings with modern ACP cladding and structural glazing facades.",
    image: "/images/about/timeline-2018-commercial.png",
  },
  {
    year: "2020",
    title: "Dedicated 3D Architectural Studio",
    badge: "Design Innovation",
    icon: Sparkles,
    desc: "Launched in-house architectural studio for 3D photorealistic elevations, solar daylight analysis, and DTCP municipal sanction approvals.",
    image: "/images/about/timeline-2020-studio.png",
  },
  {
    year: "2022",
    title: "Healthcare & PEB Warehouses",
    badge: "Specialized Infrastructure",
    icon: HeartPulse,
    desc: "Delivered multi-specialty hospital infrastructure with oxygen pipeline compliance, alongside heavy-duty pre-engineered steel (PEB) industrial buildings in Krishnagiri.",
    image: "/images/about/timeline-2022-healthcare.png",
  },
  {
    year: "2024–2026",
    title: "200+ Landmarks & Luxury Turnkey",
    badge: "Market Leadership",
    icon: Award,
    desc: "Crossed 200+ completed landmarks across Dharmapuri and Krishnagiri with integrated modular interior joinery, smart home automation, and 100% on-time delivery.",
    image: "/images/about/timeline-2024-landmarks.png",
  },
];

function TimelineItem({ milestone, index }: { milestone: (typeof milestones)[0]; index: number }) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    const timer = setTimeout(() => setIsVisible(true), 1200 + index * 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [index]);

  return (
    <div
      ref={itemRef}
      className={`relative flex flex-col md:flex-row ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Center Node Icon with Glow */}
      <div
        className={`absolute left-6 top-8 z-10 flex size-12 -translate-x-1/2 items-center justify-center rounded-full border-2 bg-card shadow-lg transition-all duration-700 md:left-1/2 ${
          isVisible
            ? "border-teal text-teal scale-100 shadow-teal/30 ring-4 ring-teal/20"
            : "border-border text-muted-foreground scale-90 opacity-60"
        }`}
      >
        <milestone.icon className="size-5" />
      </div>

      {/* Milestone Card */}
      <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? "md:pr-14 md:text-right" : "md:pl-14"}`}>
        <div
          className={`group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-700 hover:-translate-y-1 hover:border-teal/50 hover:shadow-xl ${
            isVisible
              ? "translate-x-0 opacity-100"
              : isEven
              ? "md:-translate-x-12 translate-x-8 opacity-0"
              : "md:translate-x-12 translate-x-8 opacity-0"
          }`}
        >
          {/* Milestone Thumbnail */}
          <div className="relative h-40 w-full overflow-hidden bg-muted">
            <Image
              src={milestone.image}
              alt={milestone.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="rounded-md bg-gold px-2.5 py-0.5 text-xs font-black text-black">
                {milestone.year}
              </span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-white text-left">
              <span className="text-[10px] font-bold text-teal uppercase tracking-wider">{milestone.badge}</span>
              <h4 className="font-heading text-base font-bold">{milestone.title}</h4>
            </div>
          </div>

          <div className="p-5 text-left">
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              {milestone.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const timer = setTimeout(() => setIsHeaderVisible(true), 1200);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Heading */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isHeaderVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="accent-line" />
            <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">Evolution & Growth</span>
            <div className="accent-line" />
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            A Decade of <span className="text-teal">Engineering Milestones</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            From our founding in Dharmapuri to 200+ prestigious commercial, residential, healthcare, and industrial landmarks across Tamil Nadu.
          </p>
        </div>

        {/* Timeline Roadmap */}
        <div className="relative mx-auto max-w-4xl">
          {/* Glowing Center Guideline */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-teal via-gold to-teal opacity-40 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <TimelineItem key={m.year} milestone={m} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
