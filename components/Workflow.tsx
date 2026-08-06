"use client";

import { useEffect, useRef, useState } from "react";
import { ClipboardList, Layout, CheckCircle, Construction, PaintBucket, KeyRound } from "lucide-react";

const steps = [
  {
    num: "01",
    phase: "Initial Consultation & Site Study",
    desc: "Understanding your vision, family or business requirements, soil testing, site orientation, and establishing realistic budget parameters.",
    icon: ClipboardList,
    detail: "Site Analysis & Requirements",
  },
  {
    num: "02",
    phase: "2D Vastu & 3D Architectural Design",
    desc: "Drafting scientific Vastu-compliant 2D floor plans, creating 3D photorealistic exterior elevations, and producing structural engineering blueprints.",
    icon: Layout,
    detail: "Vastu Plans & 3D Renders",
  },
  {
    num: "03",
    phase: "Plan Sanction & Itemized Estimation",
    desc: "Securing municipal approvals and DTCP sanctions, accompanied by 100% transparent, itemized Bill of Quantities (BOQ) with zero hidden fees.",
    icon: CheckCircle,
    detail: "Government Sanction & BOQ",
  },
  {
    num: "04",
    phase: "Civil & Structural Construction",
    desc: "Excavation, certified foundation laying, column & beam RCC framing, brick masonry, and roof slab casting under strict on-site engineer supervision.",
    icon: Construction,
    detail: "Engineer-Led Execution",
  },
  {
    num: "05",
    phase: "Finishing & Interior Fitouts",
    desc: "Plumbing, electrical wiring, flooring & tiles, weatherproof painting, custom modular kitchens, false ceilings, and premium sanitary fittings.",
    icon: PaintBucket,
    detail: "Materials & Joinery",
  },
  {
    num: "06",
    phase: "Final Quality Audit & Key Handover",
    desc: "Comprehensive 50-point quality audit, deep cleaning, client walkthrough inspection, and celebration of timely key handover.",
    icon: KeyRound,
    detail: "Ready to Move In",
  },
];

function WorkflowStep({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const stepRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -50px 0px" }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={stepRef}
      className={`relative mb-12 last:mb-0 transition-all duration-700 md:flex ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } ${inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-30"}`}
    >
      {/* Timeline Node Icon in center */}
      <div className="absolute left-6 top-6 z-10 flex size-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-gold bg-[oklch(0.18_0.04_172)] text-gold shadow-lg transition-transform duration-500 md:left-1/2 md:top-8">
        <step.icon className="size-5" />
      </div>

      {/* Content Box */}
      <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? "md:pr-14 md:text-right" : "md:pl-14"}`}>
        <div
          className={`group rounded-2xl border p-6 backdrop-blur-md transition-all duration-500 ${
            inView
              ? "border-gold/40 bg-white/[0.08] shadow-xl shadow-gold/5"
              : "border-white/10 bg-white/5 opacity-60"
          } hover:border-gold hover:bg-white/[0.12]`}
        >
          <div className="flex items-center justify-between gap-4">
            <span className="font-heading text-3xl font-extrabold text-gold">
              {step.num}
            </span>
            <span className="rounded-full bg-gold/20 px-3 py-0.5 text-xs font-semibold text-gold">
              {step.detail}
            </span>
          </div>
          <h3 className="mt-3 font-heading text-lg font-bold text-white sm:text-xl">
            {step.phase}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            {step.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Workflow() {
  const sectionRef = useRef<HTMLElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background: "linear-gradient(170deg, oklch(0.18 0.04 172) 0%, oklch(0.12 0.02 172) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div
          className={`mb-20 text-center transition-all duration-700 ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="accent-line" />
            <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Step-by-Step Execution</span>
            <div className="accent-line" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            How We <span className="text-gold">Build</span> Your Vision
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            A systematic, engineer-supervised 6-step lifecycle ensuring zero errors, complete cost control, and on-time handover.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mx-auto max-w-4xl">
          {/* Continuous Center Glowing Timeline Line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-gold via-teal to-gold opacity-40 md:left-1/2 md:-translate-x-px" />

          {/* Each Step */}
          {steps.map((step, i) => (
            <WorkflowStep key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
