"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Dr. K. Venkatesh",
    role: "Chief Surgeon",
    location: "Dharmapuri Town",
    project: "Sri Lakshmi Grand Duplex Villa (3,850 sq.ft)",
    quote: "Building a home while running a hospital seemed impossible, but Er. Kumar Arjun and the AKN team took care of every single detail. The itemized billing had zero surprise escalations, and the concrete testing reports gave us 100% peace of mind.",
    rating: 5,
  },
  {
    name: "Mr. S. Jagadeesh Kumar",
    role: "Business Director",
    location: "Krishnagiri",
    project: "Metro City Commercial Arcade (14,200 sq.ft)",
    quote: "AKN's engineering precision with commercial structural glazing and fire safety was outstanding. They completed the G+3 commercial building 2 weeks ahead of our retail tenant handover date.",
    rating: 5,
  },
  {
    name: "Mrs. Revathi Muralidharan",
    role: "Homeowner",
    location: "Palacode",
    project: "Contemporary Vastu Residence (2,950 sq.ft)",
    quote: "The 3D elevation walkthrough was so realistic, and the final home matches it to the exact millimeter! The natural lighting and Vastu layout keep the entire house cool and welcoming all year round.",
    rating: 5,
  },
];

export default function PortfolioTestimonials() {
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
        {/* Section Heading */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="accent-line" />
            <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">Client Experiences</span>
            <div className="accent-line" />
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Trusted by Over <span className="text-teal">200+ Property Owners</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Hear from families and commercial developers across Tamil Nadu who built with AKN Construction.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-teal/50 hover:shadow-xl sm:p-8 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} className="size-4 fill-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm leading-relaxed text-muted-foreground italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Meta */}
              <div className="mt-6 border-t border-border/80 pt-4 space-y-1">
                <h4 className="font-heading text-base font-bold text-foreground">{t.name}</h4>
                <p className="text-xs text-teal font-medium">{t.role} • {t.location}</p>
                <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground pt-1">
                  <CheckCircle2 className="size-3 text-gold shrink-0" />
                  <span className="truncate">{t.project}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
