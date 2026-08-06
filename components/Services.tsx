"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Home, Building2, HeartPulse, Factory, Hammer, Compass, Sparkles } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Home,
    title: "Residential & Layout Projects",
    headline: "Custom Villas, Duplexes & Gated Layouts",
    desc: "Turnkey residential contracting for individual homes, luxury villas, and apartments. Complete earthwork, foundation engineering, RCC framing, brick masonry, and DTCP layout planning.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    tags: ["Individual Homes", "Duplex Villas", "Layout Planning"],
  },
  {
    num: "02",
    icon: Building2,
    title: "Commercial Projects",
    headline: "Retail Complexes, Offices & Arcades",
    desc: "Multi-storey commercial buildings engineered for high footfall and durability. Featuring contemporary structural glazing, ACP facade cladding, and optimized internal commercial spaces.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    tags: ["Shopping Arcades", "Corporate Offices", "Showrooms"],
  },
  {
    num: "03",
    icon: HeartPulse,
    title: "Hospital Infrastructure",
    headline: "Healthcare Centers & Diagnostic Labs",
    desc: "Specialized hospital and clinic construction complying with healthcare workflow standards, medical gas pipeline provisions, hygienic finishes, and heavy diagnostic equipment load requirements.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    tags: ["Hospitals", "Clinics", "Diagnostic Labs"],
  },
  {
    num: "04",
    icon: Factory,
    title: "Industrial Projects",
    headline: "PEB Steel Buildings & Heavy Warehouses",
    desc: "Pre-Engineered Building (PEB) steel structures, industrial factories, and logistic warehouses built with heavy load-bearing concrete flooring and long-span roofing systems.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    tags: ["PEB Sheds", "Warehouses", "Factories"],
  },
  {
    num: "05",
    icon: Hammer,
    title: "Renovation Works",
    headline: "Structural Retrofitting & Modern Facelifts",
    desc: "Transforming existing properties through structural strengthening, additional floor additions, contemporary elevation modernization, and advanced leak-proof waterproofing.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    tags: ["Elevation Remodeling", "Floor Additions", "Waterproofing"],
  },
  {
    num: "06",
    icon: Compass,
    title: "2D & 3D Vastu Planning",
    headline: "Floor Plans, 3D Elevation & Sanctions",
    desc: "Scientific Vastu-compliant 2D architectural blueprints, photorealistic 3D exterior elevations, walkthroughs, and municipal approval sanction drawings.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    tags: ["Vastu Floor Plans", "3D Elevations", "Sanction Drawings"],
  },
  {
    num: "07",
    icon: Sparkles,
    title: "Interior Design & Fitouts",
    headline: "Modular Kitchens & Bespoke Spaces",
    desc: "Complete interior fitouts including German-hardware modular kitchens, designer POP/gypsum false ceilings, custom wardrobe joinery, TV units, and mood lighting.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    tags: ["Modular Kitchens", "False Ceilings", "Custom Wardrobes"],
  },
];

export default function Services() {
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
    <section ref={sectionRef} id="services" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section heading */}
        <div
          className={`mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-3">
              <div className="accent-line" />
              <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">Our Services</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Comprehensive <span className="text-teal">Construction</span> & Design Solutions
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              From architectural concept drawings to turnkey handover — engineering excellence in every square foot across Dharmapuri & Krishnagiri.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal/90 hover:shadow-lg hover:shadow-teal/20"
          >
            Request Free Estimation
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((svc, index) => (
            <div
              key={svc.num}
              className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-teal/50 hover:shadow-xl hover:shadow-teal/10 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              {/* Service image container */}
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Top Badge: Number & Icon */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="rounded-md bg-black/40 px-2.5 py-1 font-heading text-xs font-bold text-white backdrop-blur-md">
                    {svc.num}
                  </span>
                  <div className="rounded-md bg-teal/90 p-2 text-white shadow-md">
                    <svc.icon className="size-4" strokeWidth={2} />
                  </div>
                </div>

                {/* Bottom Title on Image */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-heading text-base font-bold text-white leading-snug">
                    {svc.title}
                  </h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <div className="mb-2 text-xs font-semibold text-teal">{svc.headline}</div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {svc.desc}
                  </p>
                </div>

                {/* Tag Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                  {svc.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground transition-colors group-hover:bg-teal/10 group-hover:text-teal"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
