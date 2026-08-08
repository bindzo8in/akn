"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";
import Link from "next/link";

const packages = [
  {
    name: "Classic Turnkey",
    tagline: "Essential Engineering & IS 456 Structural Integrity",
    structure: "Fe-500D Primary Rebar, M20 Concrete, Wire-Cut Red Bricks",
    flooring: "2x2 Double Charged Vitrified Tiles (Kajaria / Somany)",
    doors: "Teak Wood Main Door, Flush Internal Doors with Mortise Locks",
    electrical: "FR Copper Wiring (Havells / Anchor), Modular Switches",
    plumbing: "CPVC / PVC Pipes (Ashirvad), Premium Bath Fittings (Parryware)",
    painting: "Asian Paints Tractor Emulsion Internal, Apex Exterior",
    waterproofing: "3-Layer Polymeric Waterproofing on Bathrooms & Roof",
    warranty: "10-Year Structural RCC Warranty",
    badge: "Cost-Effective Excellence",
  },
  {
    name: "Premium Landmark",
    tagline: "Upgraded Finishes, Designer Elevation & Smart Electricals",
    structure: "Fe-550D Tata Tiscon, M25 Concrete, High-Density Red Bricks",
    flooring: "4x2 Large Format Glazed Vitrified Tiles (GVT) / Granite Slabs",
    doors: "1st Quality Teak Main Door with Carving, Waterproof Flush Doors",
    electrical: "Fire-Retardant Low Smoke (FRLS) Wiring, Legrand Smart Switches",
    plumbing: "Grohe / Jaquar Concealed Diverters, Wall-Hung EWC Closets",
    painting: "Asian Paints Royale Luxury Interior, Apex Ultima Weatherproof",
    waterproofing: "5-Layer Dr. Fixit Membrane System on Sumps, Slabs & Balconies",
    warranty: "15-Year Structural RCC Warranty + 5-Year Waterproofing",
    badge: "Most Popular",
    isPopular: true,
  },
  {
    name: "Luxury Estate",
    tagline: "Architectural Masterpiece with Full Modular Joinery & Automation",
    structure: "Heavy-Duty Seismic RCC, Integrated Retaining Walls, Waterproof Basements",
    flooring: "Italian Imported Marble / Quartz / Teak Wood Flooring",
    doors: "Full Height Engineered Solid Teak & Fingerprint Biometric Locks",
    electrical: "Schneider / Lutron Automation, Integrated Acoustic Wiring",
    plumbing: "Kohler / Toto Sensor Faucets, Thermostatic Shower Panels",
    painting: "Italian Stucco / PU Paint Finishes, Exterior Stone Cladding",
    waterproofing: "Full Polyurethane Tanking System & Terrace Thermal Insulation",
    warranty: "25-Year Structural RCC Warranty + Lifetime Civil Support",
    badge: "Bespoke Ultra-Luxury",
  },
];

export default function ServicesScopeMatrix() {
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
    <section ref={sectionRef} className="relative bg-muted/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Heading */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="accent-line" />
            <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">Radical Transparency</span>
            <div className="accent-line" />
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Turnkey Construction <span className="text-teal">Specification Matrix</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Clear, itemized specification tiers. Every material brand and quality grade is locked in your contract before groundbreaking.
          </p>
        </div>

        {/* Matrix Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-card p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-8 ${
                pkg.isPopular
                  ? "border-teal shadow-teal/10 ring-2 ring-teal/20"
                  : "border-border"
              } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 rounded-bl-2xl bg-teal px-4 py-1 text-xs font-bold text-white shadow-sm">
                  {pkg.badge}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  {!pkg.isPopular && (
                    <span className="inline-block rounded-md bg-muted px-2.5 py-0.5 text-[11px] font-bold text-muted-foreground mb-2">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="font-heading text-2xl font-bold text-foreground">{pkg.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{pkg.tagline}</p>
                </div>

                <div className="space-y-3.5 border-t border-border/80 pt-4 text-xs">
                  <div>
                    <span className="font-bold text-foreground">Structural RCC:</span>
                    <p className="text-muted-foreground mt-0.5">{pkg.structure}</p>
                  </div>
                  <div>
                    <span className="font-bold text-foreground">Flooring & Tiles:</span>
                    <p className="text-muted-foreground mt-0.5">{pkg.flooring}</p>
                  </div>
                  <div>
                    <span className="font-bold text-foreground">Main & Internal Doors:</span>
                    <p className="text-muted-foreground mt-0.5">{pkg.doors}</p>
                  </div>
                  <div>
                    <span className="font-bold text-foreground">Electrical & Switches:</span>
                    <p className="text-muted-foreground mt-0.5">{pkg.electrical}</p>
                  </div>
                  <div>
                    <span className="font-bold text-foreground">Sanitary & Plumbing:</span>
                    <p className="text-muted-foreground mt-0.5">{pkg.plumbing}</p>
                  </div>
                  <div>
                    <span className="font-bold text-foreground">Interior & Exterior Paint:</span>
                    <p className="text-muted-foreground mt-0.5">{pkg.painting}</p>
                  </div>
                  <div>
                    <span className="font-bold text-foreground">Waterproofing:</span>
                    <p className="text-muted-foreground mt-0.5">{pkg.waterproofing}</p>
                  </div>
                  <div className="rounded-xl bg-teal/10 p-2.5 text-teal font-semibold">
                    <span>{pkg.warranty}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border/60">
                <Link
                  href={`/contact?package=${encodeURIComponent(pkg.name)}`}
                  className={`flex w-full items-center justify-center rounded-xl py-3 text-xs font-bold transition-all ${
                    pkg.isPopular
                      ? "bg-gold text-slate-950 font-extrabold shadow-md hover:bg-gold/90 hover:shadow-lg"
                      : "border border-border bg-muted/80 text-foreground hover:bg-muted"
                  }`}
                >
                  Request Detailed BOQ for {pkg.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
