"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ArrowUpRight,
  X,
  CheckCircle2,
  PhoneCall,
  Calendar,
  Sparkles,
} from "lucide-react";
import { aknGalleryProjects, GalleryProject } from "@/lib/aknGalleryData";
import { env } from "@/app/env";

const filters = ["All", "Ongoing Sites", "Residential", "Commercial", "Hospital", "Industrial", "Interiors"] as const;

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);

  const filtered = active === "All"
    ? aknGalleryProjects
    : aknGalleryProjects.filter((p) => p.category === active);

  const displayedProjects = filtered.slice(0, 3);

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
    <section ref={sectionRef} id="portfolio" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div
          className={`mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="accent-line" />
              <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
                Proven Track Record
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Featured Engineering <span className="text-teal">Landmarks</span>
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted-foreground">
              Inspected and executed under chief civil engineer {env.NEXT_PUBLIC_ENGINEER_NAME} in {env.NEXT_PUBLIC_LOCATION_PRIMARY} & {env.NEXT_PUBLIC_LOCATION_SECONDARY}.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                  active === f
                    ? "bg-teal text-white shadow-md shadow-teal/20 scale-105 font-bold"
                    : "border border-border bg-card text-muted-foreground hover:border-teal/40 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((proj, i) => (
            <div
              key={proj.id}
              data-cursor="view"
              data-cursor-label="VIEW"
              onClick={() => setSelectedProject(proj)}
              className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-teal/50 hover:shadow-xl hover:shadow-teal/10 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${i * 90}ms`,
              }}
            >
              {/* Project image */}
              <div className="relative h-64 w-full overflow-hidden bg-muted">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Category tag */}
                <div className="absolute left-4 top-4 rounded-md bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md border border-white/10">
                  {proj.category}
                </div>

                {/* Tag pill bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold text-gold">{proj.tag}</div>
                  <h3 className="mt-1 font-heading text-lg font-bold leading-snug">
                    {proj.title}
                  </h3>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <p className="text-xs leading-relaxed text-muted-foreground line-clamp-3">
                  {proj.description}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs font-medium text-muted-foreground">
                  <div className="flex items-center gap-1.5 text-teal font-medium">
                    <MapPin className="size-3.5" />
                    <span>{proj.location}</span>
                  </div>
                  <span className="flex items-center gap-1 font-bold text-foreground group-hover:text-teal transition-colors">
                    View Specs
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 'Show More' Redirect to Portfolio Page */}
        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal/20 transition-all hover:bg-teal/90 hover:scale-105 hover:shadow-xl hover:shadow-teal/30"
          >
            <span>Show More Projects</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>

      {/* Modal View for Project Specs */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-border bg-card p-6 shadow-2xl animate-in zoom-in-95 duration-300 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 rounded-full bg-background/80 p-2 text-foreground shadow-md backdrop-blur-md transition-all hover:bg-muted"
            >
              <X className="size-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl bg-muted">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="rounded-full bg-teal px-3 py-1 text-xs font-bold text-white shadow-md">
                  {selectedProject.category}
                </span>
                <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-semibold text-gold">
                  {selectedProject.tag}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="mt-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-4">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    {selectedProject.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-xs text-teal font-semibold">
                    <MapPin className="size-3.5" />
                    <span>{selectedProject.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-gold bg-gold/10 px-3 py-1 rounded-lg border border-gold/30">
                  <Sparkles className="size-3.5" />
                  <span>AKN Verified Landmark</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Engineering Overview &amp; Specifications
                </h4>
                <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                  {selectedProject.description}
                </p>

                {selectedProject.scope && (
                  <div className="rounded-xl bg-muted/60 p-3 text-xs border border-border/60">
                    <strong className="text-foreground">Scope of Engineering:</strong>{" "}
                    <span className="text-muted-foreground">{selectedProject.scope}</span>
                  </div>
                )}

                {selectedProject.highlights && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                      Key Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.highlights.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-foreground/90">
                          <CheckCircle2 className="size-3.5 text-teal shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Bar */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border pt-4">
                <a
                  href={`tel:${env.NEXT_PUBLIC_PHONE_PRIMARY.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-teal hover:underline"
                >
                  <PhoneCall className="size-3.5" />
                  Call Engineer {env.NEXT_PUBLIC_PHONE_PRIMARY}
                </a>
                <Link
                  href="/contact"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-2 text-xs font-bold text-[oklch(0.15_0_0)] shadow-md"
                >
                  <Calendar className="size-3.5" />
                  Schedule Onsite Estimate
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
