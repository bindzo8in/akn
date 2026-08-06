"use client";

import { useEffect, useRef, useState } from "react";
import { Layers, Compass, Building2, Armchair } from "lucide-react";

const highlights = [
  {
    icon: Layers,
    title: "Turnkey Contracting",
    desc: "From foundation excavation to final key handover with complete engineering oversight.",
    tag: "End-to-End",
  },
  {
    icon: Compass,
    title: "Vastu & Architectural Planning",
    desc: "Optimized space planning, 2D floor plans & photorealistic 3D elevations.",
    tag: "100% Vastu",
  },
  {
    icon: Building2,
    title: "Special Infrastructure",
    desc: "Hospitals, industrial PEB sheds, commercial arcades & heavy-duty facilities.",
    tag: "Commercial & PEB",
  },
  {
    icon: Armchair,
    title: "Bespoke Interiors",
    desc: "Modular kitchens, false ceilings, luxury lighting & customized woodwork.",
    tag: "Modern Finish",
  },
];

export default function Highlights() {
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
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 -mt-10 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`group relative flex flex-col justify-between rounded-xl border border-border/80 bg-card p-7 shadow-sm transition-all duration-700 ease-out hover:-translate-y-1.5 hover:border-teal/40 hover:shadow-xl hover:shadow-teal/10 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <div className="inline-flex rounded-lg bg-teal/10 p-3 text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                    <item.icon className="size-6" strokeWidth={1.8} />
                  </div>
                  <span className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-semibold text-muted-foreground transition-colors group-hover:bg-teal/10 group-hover:text-teal">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 h-0.5 w-8 rounded-full bg-gold/50 transition-all duration-300 group-hover:w-full group-hover:bg-teal" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
