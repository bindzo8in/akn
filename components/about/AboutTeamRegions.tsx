"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MapPin, CheckCircle2, Building2, Users, Compass, Layers } from "lucide-react";
import { env } from "@/app/env";

const teamRoles = [
  {
    title: "Senior Civil & Site Engineers",
    specs: "B.E. Civil & Structural Certified",
    desc: "Qualified site engineers managing daily workforce deployment, concrete batch monitoring, shuttering alignment, and safety protocols.",
    icon: Building2,
    image: "/images/about/er-kumar-owner.jpg",
  },
  {
    title: "2D/3D Vastu Architectural Team",
    specs: "Traditional Vastu & BIM Modeling",
    desc: "Architects specializing in traditional Vastu Shastra orientation, photorealistic 3D elevations, and DTCP municipal sanction drawings.",
    icon: Compass,
    image: "/images/projects/architectural-3d-elevation.jpg",
  },
  {
    title: "Modular Interior Joinery Craftsmen",
    specs: "German Hardware & CNC Finish",
    desc: "Specialized craftsmen handling German-hardware modular kitchens, designer POP false ceilings, and custom veneer wardrobes.",
    icon: Layers,
    image: "/images/interiors/interior-project-03.jpeg",
  },
  {
    title: "Commercial & Healthcare Specialists",
    specs: "PEB Steel & Hospital Protocols",
    desc: "Engineers experienced in structural glazing, medical gas piping, cleanroom HVAC, and heavy-duty PEB industrial warehouse construction.",
    icon: Users,
    image: "/images/interiors/interior-project-07.jpeg",
  },
];

const locations = [
  { name: "Dharmapuri Town", badge: "HQ & Design Studio" },
  { name: "Krishnagiri Town", badge: "Branch Operations" },
  { name: "Hosur Industrial Belt", badge: "PEB & Warehousing" },
  { name: "Harur", badge: "Residential Projects" },
  { name: "Palacode", badge: "Turnkey Villas" },
  { name: "Pennagaram", badge: "Vastu Architecture" },
  { name: "Karimangalam", badge: "Commercial Complexes" },
  { name: "Pappireddipatti", badge: "Residential & Renovation" },
  { name: "Bargur", badge: "Industrial & Retail" },
  { name: "Kaveripattinam", badge: "Turnkey Construction" },
  { name: "Pochampalli", badge: "Commercial Hub" },
  { name: "Uthangarai", badge: "Villa Architecture" },
];

export default function AboutTeamRegions() {
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
            <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">Multidisciplinary Team</span>
            <div className="accent-line" />
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Our Disciplines & <span className="text-teal">Regional Reach</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Behind every AKN structure is a specialized team of civil engineers, draftsmen, and master craftsmen serving key districts across Tamil Nadu.
          </p>
        </div>

        {/* 4 Team Disciplines with Images */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamRoles.map((role, i) => (
            <div
              key={role.title}
              className={`group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-teal/50 hover:shadow-xl hover:shadow-teal/10 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Image
                  src={role.image}
                  alt={role.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="rounded-md bg-teal px-2 py-0.5 text-[10px] font-bold text-white">
                    {role.specs}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-heading text-sm font-bold leading-snug">
                    {role.title}
                  </h3>
                </div>
              </div>
              <div className="flex-1 p-5">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {role.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Regional District Coverage Matrix */}
        <div
          className={`mt-16 rounded-3xl border border-border bg-card p-6 shadow-md sm:p-8 transition-all duration-700 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col justify-between gap-4 border-b border-border/60 pb-6 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2 text-teal">
                <MapPin className="size-5" />
                <span className="font-heading text-base font-bold text-foreground sm:text-lg">
                  Primary Coverage Districts: {env.NEXT_PUBLIC_LOCATION_PRIMARY} & {env.NEXT_PUBLIC_LOCATION_SECONDARY}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Centralized material mobilization, DTCP sanction approvals, and daily on-site engineer deployment.
              </p>
            </div>

            <span className="inline-flex w-max rounded-full bg-teal/10 px-4 py-1.5 text-xs font-bold text-teal">
              12+ Regional Town Hubs
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {locations.map((loc, i) => (
              <div
                key={loc.name}
                className={`flex flex-col justify-between rounded-2xl bg-muted/60 p-3.5 transition-all duration-300 hover:bg-teal/10 hover:border-teal/30 border border-transparent ${
                  isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
                style={{ transitionDelay: `${350 + i * 35}ms` }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 shrink-0 text-teal" />
                  <span className="text-xs font-bold text-foreground">{loc.name}</span>
                </div>
                <span className="mt-1.5 text-[10px] text-muted-foreground font-medium">{loc.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
