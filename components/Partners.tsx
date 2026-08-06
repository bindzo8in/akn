"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Sparkles, Check, Building2, Wrench, Zap, Droplets, Paintbrush, Grid } from "lucide-react";

interface BrandItem {
  name: string;
  category: string;
  badge: string;
  color: string; // color used on hover
  svgLogo: React.ReactNode;
}

const partnerBrands: BrandItem[] = [
  {
    name: "UltraTech Cement",
    category: "Cement & Concrete",
    badge: "53 Grade OPC / PPC",
    color: "#EAB308", // Yellow / Black
    svgLogo: (
      <svg viewBox="0 0 160 40" className="h-8 w-auto">
        <rect x="2" y="5" width="30" height="30" rx="4" fill="#FACC15" />
        <path d="M10 28V12h5v12h7V12h5v16H10z" fill="#000000" />
        <text x="40" y="24" fontFamily="sans-serif" fontSize="16" fontWeight="900" fill="currentColor">UltraTech</text>
        <text x="40" y="34" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#EAB308" letterSpacing="1">CEMENT</text>
      </svg>
    ),
  },
  {
    name: "Tata Tiscon",
    category: "Structural TMT Steel",
    badge: "Fe-550D Super Ductile",
    color: "#0284C7", // Tata Blue
    svgLogo: (
      <svg viewBox="0 0 160 40" className="h-8 w-auto">
        <circle cx="18" cy="20" r="14" fill="#0284C7" />
        <path d="M10 15h16M18 15v10" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
        <text x="40" y="22" fontFamily="sans-serif" fontSize="16" fontWeight="900" fill="currentColor">TATA</text>
        <text x="88" y="22" fontFamily="sans-serif" fontSize="15" fontWeight="700" fill="#EA580C">TISCON</text>
        <text x="40" y="33" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="#64748B">550D TMT BARS</text>
      </svg>
    ),
  },
  {
    name: "JSW Steel",
    category: "Structural TMT Steel",
    badge: "Fe-500D Grade TMT",
    color: "#DC2626", // JSW Red / Navy
    svgLogo: (
      <svg viewBox="0 0 160 40" className="h-8 w-auto">
        <path d="M4 10l12-5v30l-12-5z" fill="#DC2626" />
        <path d="M18 5l12 5v20l-12 5z" fill="#1E3A8A" />
        <text x="38" y="24" fontFamily="sans-serif" fontSize="18" fontWeight="900" fill="currentColor">JSW</text>
        <text x="80" y="24" fontFamily="sans-serif" fontSize="15" fontWeight="700" fill="#DC2626">Steel</text>
        <text x="38" y="34" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="#64748B">Better Everyday</text>
      </svg>
    ),
  },
  {
    name: "Jaquar",
    category: "Sanitaryware & Fittings",
    badge: "10-Year Warranty Fixtures",
    color: "#DC2626", // Jaquar Red
    svgLogo: (
      <svg viewBox="0 0 160 40" className="h-8 w-auto">
        <rect x="4" y="8" width="24" height="24" rx="6" fill="#DC2626" />
        <path d="M12 24c3 0 5-2 5-6V12h3" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <text x="36" y="25" fontFamily="sans-serif" fontSize="19" fontWeight="800" fill="currentColor">jaquar</text>
        <text x="37" y="34" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="#DC2626" letterSpacing="1.5">BATH + LIGHT</text>
      </svg>
    ),
  },
  {
    name: "Asian Paints",
    category: "Paints & Waterproofing",
    badge: "Royale & Apex Weatherproof",
    color: "#E11D48", // Asian Paints Red / Yellow
    svgLogo: (
      <svg viewBox="0 0 160 40" className="h-8 w-auto">
        <circle cx="12" cy="16" r="6" fill="#DC2626" />
        <circle cx="24" cy="16" r="6" fill="#F59E0B" />
        <circle cx="18" cy="26" r="6" fill="#7C3AED" />
        <text x="38" y="21" fontFamily="sans-serif" fontSize="14" fontWeight="900" fill="currentColor">asian</text>
        <text x="76" y="21" fontFamily="sans-serif" fontSize="14" fontWeight="900" fill="#DC2626">paints</text>
        <text x="38" y="32" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="#64748B">ROYALE EMULSIONS</text>
      </svg>
    ),
  },
  {
    name: "Havells",
    category: "Electricals & Cabling",
    badge: "FR-Grade ISI Copper Wires",
    color: "#EF4444", // Havells Red
    svgLogo: (
      <svg viewBox="0 0 160 40" className="h-8 w-auto">
        <path d="M6 10h8v8H6zm12 0h8v8h-8zm0 12h8v8h-8z" fill="#EF4444" />
        <text x="38" y="24" fontFamily="sans-serif" fontSize="17" fontWeight="900" fill="currentColor">HAVELLS</text>
        <text x="38" y="34" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="#EF4444">WIRES & SWITCHES</text>
      </svg>
    ),
  },
  {
    name: "CERA",
    category: "Sanitaryware & Tiles",
    badge: "Ceramics & Concealed Tanks",
    color: "#2563EB", // CERA Blue
    svgLogo: (
      <svg viewBox="0 0 160 40" className="h-8 w-auto">
        <rect x="4" y="6" width="28" height="28" rx="8" fill="#2563EB" />
        <text x="9" y="26" fontFamily="sans-serif" fontSize="14" fontWeight="900" fill="#FFFFFF">C</text>
        <text x="38" y="25" fontFamily="sans-serif" fontSize="20" fontWeight="900" fill="currentColor" letterSpacing="1">CERA</text>
        <text x="39" y="34" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="#2563EB">SANITARYWARE</text>
      </svg>
    ),
  },
  {
    name: "Kajaria Tiles",
    category: "Vitrified Tiles",
    badge: "Anti-Skid & Nano Polish",
    color: "#B91C1C", // Kajaria Maroon
    svgLogo: (
      <svg viewBox="0 0 160 40" className="h-8 w-auto">
        <path d="M4 8h12v12H4zm14 0h12v12H18zm0 14h12v12H18z" fill="#B91C1C" />
        <text x="38" y="24" fontFamily="sans-serif" fontSize="18" fontWeight="900" fill="currentColor">Kajaria</text>
        <text x="38" y="34" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="#B91C1C" letterSpacing="1">TILES & SLABS</text>
      </svg>
    ),
  },
  {
    name: "Dalmia Cement",
    category: "Cement & Foundation",
    badge: "Future Today OPC 53",
    color: "#2563EB", // Dalmia Blue / Red
    svgLogo: (
      <svg viewBox="0 0 160 40" className="h-8 w-auto">
        <circle cx="16" cy="20" r="12" fill="#2563EB" />
        <path d="M12 14l8 6-8 6z" fill="#EF4444" />
        <text x="36" y="22" fontFamily="sans-serif" fontSize="16" fontWeight="900" fill="currentColor">Dalmia</text>
        <text x="36" y="33" fontFamily="sans-serif" fontSize="9" fontWeight="700" fill="#EF4444">CEMENT</text>
      </svg>
    ),
  },
  {
    name: "Finolex Cables",
    category: "Electricals & Piping",
    badge: "100% Electrolytic Copper",
    color: "#DC2626", // Finolex Red / Navy
    svgLogo: (
      <svg viewBox="0 0 160 40" className="h-8 w-auto">
        <circle cx="16" cy="20" r="13" fill="#DC2626" />
        <path d="M8 20h16" stroke="#FFFFFF" strokeWidth="3" />
        <text x="36" y="23" fontFamily="sans-serif" fontSize="16" fontWeight="900" fill="currentColor">Finolex</text>
        <text x="36" y="33" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="#2563EB">WIRES & CABLES</text>
      </svg>
    ),
  },
  {
    name: "Supreme Pipes",
    category: "Plumbing & Drainage",
    badge: "CPVC & SWR Leakproof",
    color: "#EF4444", // Supreme Red
    svgLogo: (
      <svg viewBox="0 0 160 40" className="h-8 w-auto">
        <rect x="4" y="10" width="24" height="20" rx="4" fill="#EF4444" />
        <text x="8" y="25" fontFamily="sans-serif" fontSize="13" fontWeight="900" fill="#FFFFFF">S</text>
        <text x="34" y="24" fontFamily="sans-serif" fontSize="16" fontWeight="900" fill="currentColor">Supreme</text>
        <text x="34" y="34" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="#EF4444">PIPING SYSTEMS</text>
      </svg>
    ),
  },
  {
    name: "Nippon Paint",
    category: "Specialized Coatings",
    badge: "Eco-Friendly Weatherbond",
    color: "#E11D48", // Nippon Red
    svgLogo: (
      <svg viewBox="0 0 160 40" className="h-8 w-auto">
        <circle cx="10" cy="18" r="7" fill="#E11D48" />
        <circle cx="22" cy="18" r="7" fill="#E11D48" />
        <text x="36" y="22" fontFamily="sans-serif" fontSize="15" fontWeight="900" fill="currentColor">NIPPON</text>
        <text x="94" y="22" fontFamily="sans-serif" fontSize="15" fontWeight="700" fill="#E11D48">PAINT</text>
        <text x="36" y="33" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="#64748B">INSPIRED BY YOU</text>
      </svg>
    ),
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
            <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">Material Excellence</span>
            <div className="accent-line" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Strategic <span className="text-teal">Material Partners</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            We partner exclusively with India&apos;s most reputable manufacturers to ensure every foundation, wall, fitting, and finish delivers superior longevity.
          </p>
        </div>

        {/* Continuous Logo Marquee (B&W default -> Color on hover) */}
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
                {/* Logo with B&W filter -> Color on hover */}
                <div className="grayscale contrast-75 opacity-60 transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100">
                  {brand.svgLogo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 12-Brand Logo & Specification Grid (B&W to Color on hover) */}
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

              {/* Center: Brand Logo (B&W default -> Full color on hover) */}
              <div className="my-3 flex h-14 items-center justify-start">
                <div className="grayscale contrast-75 opacity-60 transition-all duration-400 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100 group-hover:opacity-100">
                  {brand.svgLogo}
                </div>
              </div>

              {/* Bottom: Quality Indicator */}
              <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs">
                <span className="font-semibold text-foreground group-hover:text-teal transition-colors">
                  {brand.name}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Check className="size-3 text-teal" />
                  IS Tested
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
                Direct mill test certificates (MTC) & manufacturer batch test reports provided for all structural cement and TMT steel pours.
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
