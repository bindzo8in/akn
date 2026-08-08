"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck, Clock, Award, CheckCircle } from "lucide-react";
import { env } from "@/app/env";

export default function AboutCTA() {
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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
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
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background: "linear-gradient(170deg, oklch(0.18 0.04 172) 0%, oklch(0.11 0.02 172) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
        {/* Top Credentials Pill */}
        <div
          className={`mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold backdrop-blur-md transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <Award className="size-4 text-gold" />
          <span>18+ Years of Engineering & Interior Excellence • 200+ Landmarks Handover</span>
        </div>

        {/* Heading */}
        <h2
          className={`mx-auto max-w-3xl font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl transition-all duration-700 delay-100 leading-tight`}
        >
          Build Your Landmark with <span className="text-gradient-gold">Uncompromising Engineering</span>
        </h2>

        <p
          className={`mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg transition-all duration-700 delay-200 leading-relaxed`}
        >
          Schedule a direct one-on-one consultation with Lead Civil Engineer <strong className="text-white">{env.NEXT_PUBLIC_ENGINEER_NAME}, {env.NEXT_PUBLIC_ENGINEER_DEGREE}</strong> for a complimentary plot soil assessment, 2D Vastu layout, and itemized transparent estimation.
        </p>

        {/* Action Buttons */}
        <div
          className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <a
            href={`tel:${env.NEXT_PUBLIC_PHONE_PRIMARY.replace(/\s/g, "")}`}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gold px-8 py-4 text-base font-bold text-[oklch(0.15_0_0)] shadow-xl shadow-gold/20 transition-all hover:bg-[oklch(0.84_0.15_86)] hover:shadow-2xl hover:scale-105 sm:w-auto"
          >
            <Phone className="size-5" />
            Direct Call: {env.NEXT_PUBLIC_PHONE_PRIMARY}
          </a>

          <Link
            href="/#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/20 hover:scale-105 sm:w-auto"
          >
            Request Free Site Estimation
            <ArrowRight className="size-5" />
          </Link>
        </div>

        {/* Guarantees row */}
        <div
          className={`mt-16 flex flex-wrap items-center justify-center gap-6 border-t border-white/15 pt-8 text-xs text-white/70 sm:gap-12 transition-all duration-700 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-teal" />
            <span>100% Tested Certified Materials</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-4 text-gold" />
            <span>Guaranteed Handover Dates</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="size-4 text-teal" />
            <span>Single-Point Turnkey Accountability</span>
          </div>
        </div>
      </div>
    </section>
  );
}
