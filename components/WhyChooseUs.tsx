"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck, BadgeDollarSign, Handshake, Clock, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { env } from "@/app/env";

const advantages = [
  {
    icon: ShieldCheck,
    title: "Qualified Civil Engineering Leadership",
    desc: `Directly spearheaded by ${env.NEXT_PUBLIC_ENGINEER_NAME}, ${env.NEXT_PUBLIC_ENGINEER_DEGREE}. We eliminate structural risks, design errors, and contractor shortcuts with scientific engineering oversight.`,
    badge: "Er. Kumar, B.E.",
  },
  {
    icon: BadgeDollarSign,
    title: "100% Transparent & Itemized Pricing",
    desc: "Detailed Bill of Quantities (BOQ) with material specs and clear stage-wise payment schedules. Absolutely zero hidden fees or surprise escalations.",
    badge: "Zero Hidden Costs",
  },
  {
    icon: Handshake,
    title: "Complete Single-Point Turnkey Delivery",
    desc: "One trusted partner from land soil testing, plan sanctioning, RCC construction, to modular interior joinery and key handover.",
    badge: "All-in-One",
  },
  {
    icon: Clock,
    title: "Guaranteed Completion Timelines",
    desc: "Rigorous milestone tracking and dedicated workforce scheduling to ensure your building is handed over on the agreed calendar date.",
    badge: "On-Time Handover",
  },
  {
    icon: Award,
    title: "Certified Brand-Name Materials",
    desc: "Standardized usage of 500D TMT steel (Tata Tiscon / JSW), 53-grade OPC cement (UltraTech / Dalmia), Havells wiring, and Jaquar fittings.",
    badge: "Tier-1 Brands",
  },
];

export default function WhyChooseUs() {
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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-muted/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column — Heading, Overview & Engineer Assurance Card */}
          <div
            className={`space-y-8 lg:col-span-5 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="accent-line" />
                <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">Why Choose Us</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Why Clients <span className="text-teal">Trust</span> AKN
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We combine qualified civil engineering precision with uncompromising material standards to deliver residential, commercial, and industrial landmarks that stand the test of time.
              </p>
            </div>

            {/* Quality Assurance Card */}
            <div className="rounded-2xl border border-teal/20 bg-gradient-to-br from-teal/10 via-card to-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-teal text-white shadow-sm">
                  <Award className="size-5" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground">AKN Quality Guarantee</h3>
                  <p className="text-xs text-muted-foreground">100% Tested Structural Concrete & TMT Steel</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-teal" />
                  <span>Standardized Cube Testing for Concrete Strength</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-teal" />
                  <span>On-site Daily Engineer Supervised Pouring</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-teal" />
                  <span>Strict Adherence to Indian Standard (IS) Codes</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-teal px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-teal/90 shadow-sm"
              >
                Schedule Site Consultation
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column — 5 Comprehensive Advantage Cards */}
          <div className="space-y-4 lg:col-span-7">
            {advantages.map((adv, i) => (
              <div
                key={adv.title}
                className={`group flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-teal/50 hover:shadow-lg sm:flex-row sm:items-start sm:gap-5 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white shadow-sm">
                  <adv.icon className="size-6" strokeWidth={1.8} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-heading text-base font-bold text-foreground group-hover:text-teal transition-colors">
                      {adv.title}
                    </h3>
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground">
                      {adv.badge}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
