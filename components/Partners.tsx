"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Shield, Sparkles, Check } from "lucide-react";

interface BrandItem {
  name: string;
  category: string;
  badge: string;
  color: string;
  logoPath: string;
}

const partnerBrands: BrandItem[] = [
  {
    name: "UltraTech Cement",
    category: "Cement & Concrete",
    badge: "53 Grade OPC / PPC",
    color: "#EAB308",
    logoPath: "/logos/images.png",
  },
  {
    name: "Tata Tiscon",
    category: "Structural TMT Steel",
    badge: "Fe-550D Super Ductile",
    color: "#0284C7",
    logoPath: "/logos/tiscon-logo.jpg",
  },
  {
    name: "JSW Steel",
    category: "Structural TMT Steel",
    badge: "Fe-500D Grade TMT",
    color: "#DC2626",
    logoPath: "/logos/1666307a7069a356e2a5b97d1bb9903e.jpg",
  },
  {
    name: "Jaquar",
    category: "Sanitaryware & Fittings",
    badge: "10-Year Warranty Fixtures",
    color: "#DC2626",
    logoPath: "/logos/jaquar_612.webp",
  },
  {
    name: "Asian Paints",
    category: "Paints & Waterproofing",
    badge: "Royale & Apex Weatherproof",
    color: "#E11D48",
    logoPath: "/logos/75b978a23898bf4b303b9b400259c4f0.png",
  },
  {
    name: "Havells",
    category: "Electricals & Cabling",
    badge: "FR-Grade ISI Copper Wires",
    color: "#EF4444",
    logoPath: "/logos/Havells_logo_PNG5.png",
  },
  {
    name: "CERA",
    category: "Sanitaryware & Tiles",
    badge: "Ceramics & Concealed Tanks",
    color: "#2563EB",
    logoPath: "/logos/cera.jpg",
  },
  {
    name: "Kajaria Tiles",
    category: "Vitrified Tiles",
    badge: "Anti-Skid & Nano Polish",
    color: "#B91C1C",
    logoPath: "/logos/Kajaria-Tiles-Logo-Vector.svg-.png",
  },
  {
    name: "Dalmia Cement",
    category: "Cement & Foundation",
    badge: "Future Today OPC 53",
    color: "#2563EB",
    logoPath: "/logos/logo-dalmia-cement-bharat-limited-dalmia-group-ocl-india-ltd-hornbill-logo-152cc8b80c8a069086a65b94887d3b17.png",
  },
  {
    name: "Finolex Cables",
    category: "Electricals & Piping",
    badge: "100% Electrolytic Copper",
    color: "#DC2626",
    logoPath: "/logos/Finolex-Logo.jpg",
  },
  {
    name: "Supreme Pipes",
    category: "Plumbing & Drainage",
    badge: "CPVC & SWR Leakproof",
    color: "#EF4444",
    logoPath: "/logos/Supreme_Logo.svg.webp",
  },
  {
    name: "Nippon Paint",
    category: "Specialized Coatings",
    badge: "Eco-Friendly Weatherbond",
    color: "#E11D48",
    logoPath: "/logos/nippon-paint-logo-png_seeklogo-484086.png",
  },
];

export default function Partners() {
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
          className={`mb-14 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="accent-line" />
            <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
              Material Excellence
            </span>
            <div className="accent-line" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Strategic <span className="text-teal">Material Partners</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            We partner exclusively with India&apos;s most reputable manufacturers to ensure every foundation, wall, fitting, and finish delivers superior longevity.
          </p>
        </div>

        {/* Continuous Logo Marquee (Original Logos from public/logos) */}
        <div
          className={`relative mb-14 overflow-hidden rounded-2xl border border-border bg-card py-6 shadow-sm transition-all duration-700 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Gradient edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-card to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-card to-transparent" />

          <div className="animate-marquee flex w-max items-center gap-12 whitespace-nowrap px-4">
            {[...partnerBrands, ...partnerBrands].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="group flex cursor-pointer items-center gap-3 rounded-xl border border-transparent px-4 py-2 transition-all duration-300 hover:border-border hover:bg-muted/80"
              >
                {/* Original Brand Image Logo */}
                <div className="relative h-12 w-40 overflow-hidden rounded-lg bg-white/90 p-1.5 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-white">
                  <Image
                    src={brand.logoPath}
                    alt={`${brand.name} Logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 12-Brand Original Logo & Specification Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {partnerBrands.map((brand, i) => (
            <div
              key={brand.name}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-teal/50 hover:shadow-xl hover:shadow-teal/5 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${i * 50}ms`,
              }}
            >
              {/* Top: Category and Tag */}
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                  {brand.category}
                </span>
                <span className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-foreground transition-colors group-hover:bg-teal/10 group-hover:text-teal">
                  {brand.badge}
                </span>
              </div>

              {/* Center: Original Brand Image Logo */}
              <div className="my-3 flex h-16 items-center justify-center rounded-xl bg-white/95 p-3 shadow-inner border border-border/40 transition-all group-hover:bg-white">
                <div className="relative h-12 w-full transition-transform duration-400 ease-out group-hover:scale-105">
                  <Image
                    src={brand.logoPath}
                    alt={`${brand.name} Official Logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Bottom: Quality Indicator */}
              <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs">
                <span className="font-semibold text-foreground group-hover:text-teal transition-colors">
                  {brand.name}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Check className="size-3 text-teal" />
                  IS Certified
                </span>
              </div>

              {/* Subtle top color bar on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ backgroundColor: brand.color }}
              />
            </div>
          ))}
        </div>

        {/* Quality Seal Guarantee Banner */}
        <div
          className={`mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border border-gold/30 bg-gradient-to-r from-card via-gold/5 to-card p-6 shadow-sm sm:flex-row sm:p-8 transition-all duration-700 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gold/20 text-gold shadow-inner">
              <Sparkles className="size-7" />
            </div>
            <div>
              <h4 className="font-heading text-base font-bold text-foreground">
                100% Genuine Certified Materials Guaranteed
              </h4>
              <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
                Direct mill test certificates (MTC) &amp; manufacturer batch test reports provided for all structural cement and TMT steel pours.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2 rounded-xl bg-teal/10 px-4 py-2.5 text-xs font-bold text-teal">
            <Shield className="size-4" />
            <span>Anti-Adulteration Promise</span>
          </div>
        </div>
      </div>
    </section>
  );
}
