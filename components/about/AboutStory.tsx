"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckCircle2, XCircle, HardHat, Compass, FileCheck, ShieldCheck } from "lucide-react";
import { env } from "@/app/env";

const comparisons = [
  {
    feature: "Pricing & Billing",
    conventional: "Vague handwritten lumpsum quotes with frequent surprise costs and hidden charges mid-project.",
    akn: "100% Itemized Bill of Quantities (BOQ) with guaranteed unit rates and stage-wise payment milestones.",
  },
  {
    feature: "Site Oversight",
    conventional: "Unsupervised sub-contractors and masons making arbitrary structural decisions.",
    akn: "Direct, daily civil engineer site supervision and laser-level precision alignment.",
  },
  {
    feature: "Materials & Steel",
    conventional: "Local unbranded rebar, adulterated river sand, uncertified cement bags.",
    akn: "Primary steel brands (Tata Tiscon / JSW Fe-550D) with batch test certificates and M20/M25 concrete cube tests.",
  },
  {
    feature: "Vastu & Architecture",
    conventional: "Basic hand sketches without solar orientation or structural load calculations.",
    akn: "Scientific 2D Vastu floor plans, 3D photorealistic elevations & complete DTCP sanction drawings.",
  },
];

const stages = [
  {
    num: "01",
    title: "Geotechnical & Soil Testing",
    specs: "Safe Bearing Capacity (SBC) Calculation",
    desc: "Scientific soil penetration testing to design the exact column footing depth and prevent settlement cracks.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  },
  {
    num: "02",
    title: "RCC Structural Framing",
    specs: "IS 456 & IS 1893 Seismic Standards",
    desc: "Heavy-duty steel reinforcement cages, machine-mixed vibrated concrete, and continuous 21-day water curing.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    num: "03",
    title: "Multi-Barrier Waterproofing",
    specs: "Dr. Fixit Polymeric Membranes",
    desc: "100% leak-proof sunken slabs, underground sumps, exterior weatherproofing, and terrace thermal tile insulation.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
  },
  {
    num: "04",
    title: "Turnkey Finishing & Handover",
    specs: "50-Point Pre-Handover Civil Audit",
    desc: "Precision tile leveling, designer modular interior joinery, fire-safe electricals, and final key handover.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
];

export default function AboutStory() {
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
    <section ref={sectionRef} className="relative bg-muted/40 py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Narrative & Quote Section */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left Column — Detailed Origin Story */}
          <div
            className={`space-y-6 lg:col-span-7 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="accent-line" />
              <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">Our Origins & Purpose</span>
            </div>

            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight">
              Revolutionizing Regional Construction Through <span className="text-teal">Engineering Integrity</span>
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                In 2016, <strong className="text-foreground">{env.NEXT_PUBLIC_ENGINEER_NAME}, {env.NEXT_PUBLIC_ENGINEER_DEGREE}</strong> founded <strong>{env.NEXT_PUBLIC_BUSINESS_NAME}</strong> with a clear objective: to replace unorganized contractor guesswork with institutional-grade civil engineering, transparent unit-rate estimates, and guaranteed structural longevity.
              </p>
              <p>
                For decades, homeowners in Dharmapuri and Krishnagiri faced recurring construction nightmares: unexplained budget inflation, unverified cement and rebar, delayed handovers, and costly structural flaws like wall dampness and foundation cracks.
              </p>
              <p>
                AKN eliminated these risks by providing an end-to-end turnkey ecosystem — integrating structural calculations, DTCP sanction approvals, 2D/3D Vastu architecture, and bespoke modular interiors under a single accountable contract.
              </p>
            </div>

            {/* Quick Badges */}
            <div className="grid gap-4 pt-2 sm:grid-cols-2">
              <div className="flex items-center gap-3.5 rounded-2xl border border-border bg-card p-4 shadow-sm transition-transform hover:-translate-y-1">
                <div className="flex size-10 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <HardHat className="size-5" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-foreground">Engineer-Supervised</h4>
                  <p className="text-xs text-muted-foreground">Daily on-site concrete batch monitoring</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 rounded-2xl border border-border bg-card p-4 shadow-sm transition-transform hover:-translate-y-1">
                <div className="flex size-10 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Compass className="size-5" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-foreground">Scientific Vastu</h4>
                  <p className="text-xs text-muted-foreground">Solar alignment & natural ventilation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Large Editorial Pullout Card */}
          <div
            className={`lg:col-span-5 transition-all duration-700 delay-150 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-xl">
              <div className="text-6xl font-serif text-gold/30">&ldquo;</div>
              <blockquote className="-mt-6 text-lg font-medium leading-relaxed text-foreground sm:text-xl">
                A home represents a family&apos;s lifelong savings and emotional aspirations. We build every foundation with the same unyielding precision and certified quality as if it were our own.
              </blockquote>

              <div className="mt-6 flex items-center gap-4 border-t border-border/80 pt-6">
                <div className="size-14 overflow-hidden rounded-full border-2 border-teal bg-muted">
                  <Image
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&q=80"
                    alt={env.NEXT_PUBLIC_ENGINEER_NAME}
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-foreground">{env.NEXT_PUBLIC_ENGINEER_NAME}</h4>
                  <p className="text-xs text-teal font-medium">{env.NEXT_PUBLIC_ENGINEER_DEGREE} • Founder & Lead Civil Engineer</p>
                  <p className="text-[11px] text-muted-foreground">{env.NEXT_PUBLIC_LOCATION_PRIMARY}, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Conventional Contractors vs AKN Engineering Comparison ── */}
        <div className="mt-28">
          <div
            className={`mb-12 text-center transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-3 flex items-center justify-center gap-3">
              <div className="accent-line" />
              <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">The Engineering Advantage</span>
              <div className="accent-line" />
            </div>
            <h3 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Conventional Contractors vs. <span className="text-teal">AKN Civil Engineering</span>
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
              Why 200+ property owners chose AKN for their landmark projects.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {comparisons.map((item, idx) => (
              <div
                key={item.feature}
                className={`overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:shadow-md ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="mb-4 flex items-center justify-between border-b border-border/60 pb-3">
                  <span className="font-heading text-base font-bold text-foreground">{item.feature}</span>
                  <ShieldCheck className="size-4 text-teal" />
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="rounded-xl bg-destructive/5 p-3.5 border border-destructive/20 text-muted-foreground">
                    <div className="flex items-center gap-2 font-bold text-destructive mb-1 text-xs">
                      <XCircle className="size-4 shrink-0" />
                      <span>Conventional Contractors</span>
                    </div>
                    <p className="leading-relaxed">{item.conventional}</p>
                  </div>

                  <div className="rounded-xl bg-teal/5 p-3.5 border border-teal/20 text-foreground">
                    <div className="flex items-center gap-2 font-bold text-teal mb-1 text-xs">
                      <CheckCircle2 className="size-4 shrink-0" />
                      <span>AKN Civil Engineering</span>
                    </div>
                    <p className="leading-relaxed text-muted-foreground">{item.akn}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 4-Stage Construction Progression ── */}
        <div className="mt-28">
          <div
            className={`mb-12 text-center transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-3 flex items-center justify-center gap-3">
              <div className="accent-line" />
              <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">Execution Standards</span>
              <div className="accent-line" />
            </div>
            <h3 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our 4-Phase <span className="text-teal">Construction Lifecycle</span>
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage, i) => (
              <div
                key={stage.num}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-teal/50 hover:shadow-xl hover:shadow-teal/10 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  <Image
                    src={stage.image}
                    alt={stage.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-md bg-gold px-2 py-0.5 text-[10px] font-black text-black">
                      PHASE {stage.num}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h4 className="font-heading text-sm font-bold leading-snug">{stage.title}</h4>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-4 space-y-3">
                  <div>
                    <span className="text-[11px] font-bold text-teal">{stage.specs}</span>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{stage.desc}</p>
                  </div>
                  <div className="h-0.5 w-6 bg-gold/40 transition-all duration-300 group-hover:w-full group-hover:bg-teal" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
