"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Microscope, Flame, Droplets, Compass } from "lucide-react";

const standards = [
  {
    title: "IS 516 & IS 1199 Cube Testing",
    category: "Compressive Strength",
    specs: "7, 14 & 28-Day Curing Verification",
    desc: "Standardized compression testing of casting cubes to ensure exact M20/M25/M30 grade load-bearing strength before shuttering removal.",
    icon: Microscope,
    image: "/images/ongoing_projects/ongoing-site-03.jpeg",
  },
  {
    title: "IS 13920 Earthquake Rebar",
    category: "Seismic Ductility",
    specs: "Fe-500D & Fe-550D High Elongation",
    desc: "Certified primary steel from Tata Tiscon and JSW Steel engineered for superior tensile ductility during seismic vibrations.",
    icon: ShieldCheck,
    image: "/images/projects/raw-foundation-before.png",
  },
  {
    title: "5-Layer Polymeric Waterproofing",
    category: "Moisture Protection",
    specs: "Dr. Fixit Membrane Systems",
    desc: "100% leak-proof treatment across bathroom sunken slabs, basement retaining walls, underground water sumps, and terrace roof slabs.",
    icon: Droplets,
    image: "/images/ongoing_projects/ongoing-site-13.jpeg",
  },
  {
    title: "Scientific Vastu Bio-Climatic Design",
    category: "Architectural Harmony",
    specs: "Solar & Geomagnetic Orientation",
    desc: "Precision magnetic compass alignment for kitchen (Agni), master suite (Niruthi), and pooja room placement with maximum natural airflow.",
    icon: Compass,
    image: "/images/projects/architectural-3d-elevation.jpg",
  },
  {
    title: "Fire-Retardant Low Smoke Wiring",
    category: "Electrical Safety",
    specs: "ISI-Certified FR Copper & ELCBs",
    desc: "Concealed electrical distribution using Havells / Finolex fire-retardant cabling, individual MCB distribution boards, and earth pits.",
    icon: Flame,
    image: "/images/ongoing_projects/ongoing-site-29.jpeg",
  },
  {
    title: "50-Point Pre-Handover Civil Audit",
    category: "Quality Assurance",
    specs: "Lead Engineer Final Inspection",
    desc: "Comprehensive engineering inspection covering tile leveling, joinery alignment, water pressure checks, and flawless exterior paint finishes.",
    icon: CheckCircle2,
    image: "/images/interiors/interior-project-03.jpeg",
  },
];

export default function AboutStandards() {
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
    <section ref={sectionRef} className="relative bg-muted/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Heading */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="accent-line" />
            <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">Code Compliance & Lab Testing</span>
            <div className="accent-line" />
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Our Scientific <span className="text-teal">Engineering Protocols</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            How we eliminate structural defects and guarantee building longevity through rigid adherence to Bureau of Indian Standards (BIS) codes.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((std, i) => (
            <div
              key={std.title}
              className={`group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-teal/50 hover:shadow-xl hover:shadow-teal/10 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Photo Header */}
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Image
                  src={std.image}
                  alt={std.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="rounded-md bg-teal/90 px-2.5 py-1 text-[10px] font-bold text-white shadow-md">
                    {std.specs}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                  <h3 className="font-heading text-base font-bold leading-snug">
                    {std.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {std.desc}
                </p>

                <div className="flex items-center justify-between border-t border-border/60 pt-3 text-xs font-semibold">
                  <span className="text-muted-foreground">{std.category}</span>
                  <span className="flex items-center gap-1 text-teal">
                    <CheckCircle2 className="size-3.5" />
                    100% Certified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
