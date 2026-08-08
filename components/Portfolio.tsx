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
  Video,
  Layers,
  Cpu,
} from "lucide-react";
import { aknGalleryProjects, GalleryProject } from "@/lib/aknGalleryData";
import { env } from "@/app/env";

const filters = [
  "All",
  "Ongoing Sites",
  "Residential",
  "Commercial",
  "Hospital",
  "Industrial",
  "Interiors",
] as const;

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);
  const [activeMedia, setActiveMedia] = useState<{ type: "image" | "video"; url: string } | null>(null);

  const filtered =
    active === "All"
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

  const openProjectModal = (proj: GalleryProject) => {
    setSelectedProject(proj);
    if (proj.videos && proj.videos.length > 0) {
      setActiveMedia({ type: "video", url: proj.videos[0] });
    } else {
      setActiveMedia({ type: "image", url: proj.image });
    }
  };

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
                Proven Track Record &amp; AI Vision Verified
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Featured Engineering <span className="text-teal">Landmarks</span>
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted-foreground">
              Inspected and executed under chief civil engineer {env.NEXT_PUBLIC_ENGINEER_NAME} in{" "}
              {env.NEXT_PUBLIC_LOCATION_PRIMARY} &amp; {env.NEXT_PUBLIC_LOCATION_SECONDARY}.
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
              onClick={() => openProjectModal(proj)}
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
                <div className="absolute left-4 top-4 rounded-md bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white border border-white/10 flex items-center gap-1.5">
                  <span>{proj.category}</span>
                </div>

                {/* Media Indicators */}
                <div className="absolute right-4 top-4 flex gap-1.5">
                  {proj.videos && proj.videos.length > 0 && (
                    <span className="flex items-center gap-1 rounded-md bg-teal px-2.5 py-1 text-[11px] font-bold text-white shadow-md">
                      <Video className="size-3" />
                      <span>Video Demo</span>
                    </span>
                  )}
                  {proj.gallery && proj.gallery.length > 1 && (
                    <span className="flex items-center gap-1 rounded-md bg-black/60 backdrop-blur-md px-2 py-1 text-[11px] font-semibold text-gold border border-gold/30">
                      <Layers className="size-3" />
                      <span>{proj.gallery.length} Photos</span>
                    </span>
                  )}
                </div>

                {/* Tag pill bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-semibold text-gold">{proj.tag}</div>
                  <h3 className="mt-1 font-heading text-lg font-bold leading-snug line-clamp-2">
                    {proj.title}
                  </h3>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
                <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                  {proj.shortDescription || proj.description}
                </p>

                {/* Verified Tech Badges */}
                {proj.technologies && proj.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1 rounded-md bg-teal/10 px-2 py-0.5 text-[10px] font-semibold text-teal border border-teal/20"
                      >
                        <Cpu className="size-2.5" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between border-t border-border/60 pt-3 text-xs font-medium text-muted-foreground">
                  <div className="flex items-center gap-1.5 text-teal font-medium">
                    <MapPin className="size-3.5" />
                    <span>{proj.location}</span>
                  </div>
                  <span className="flex items-center gap-1 font-bold text-foreground group-hover:text-teal transition-colors">
                    Inspect Specs
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
            <span>Explore All Identified Landmarks</span>
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
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-border bg-card p-6 shadow-2xl animate-in zoom-in-95 duration-300 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-20 rounded-full bg-background/80 p-2 text-foreground shadow-md backdrop-blur-md transition-all hover:bg-muted"
            >
              <X className="size-5" />
            </button>

            {/* Modal Active Media View */}
            <div className="relative h-64 sm:h-96 w-full overflow-hidden rounded-2xl bg-black">
              {activeMedia?.type === "video" ? (
                <video
                  src={activeMedia.url}
                  controls
                  playsInline
                  preload="metadata"
                  poster={selectedProject.image}
                  className="h-full w-full object-contain"
                />
              ) : (
                <Image
                  src={activeMedia?.url || selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 900px"
                />
              )}

              <div className="absolute top-4 left-4 flex gap-2">
                <span className="rounded-full bg-teal px-3 py-1 text-xs font-bold text-white shadow-md">
                  {selectedProject.category}
                </span>
                <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-semibold text-gold">
                  {selectedProject.tag}
                </span>
              </div>
            </div>

            {/* Media Selector Strip */}
            {(selectedProject.gallery.length > 0 || (selectedProject.videos && selectedProject.videos.length > 0)) && (
              <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-2">
                {selectedProject.videos?.map((vid, vIdx) => (
                  <button
                    key={`v-${vIdx}`}
                    onClick={() => setActiveMedia({ type: "video", url: vid })}
                    className={`relative flex items-center gap-1.5 shrink-0 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                      activeMedia?.type === "video" && activeMedia.url === vid
                        ? "bg-teal text-white shadow-md"
                        : "border border-border bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Video className="size-3.5" />
                    <span>Watch Video {vIdx + 1}</span>
                  </button>
                ))}
                {selectedProject.gallery.map((img, gIdx) => (
                  <button
                    key={`g-${gIdx}`}
                    onClick={() => setActiveMedia({ type: "image", url: img })}
                    className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                      activeMedia?.type === "image" && activeMedia.url === img
                        ? "border-teal scale-105 shadow-md"
                        : "border-border opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${selectedProject.title} detail ${gIdx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

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
                <div className="flex items-center gap-1.5 text-xs font-bold text-gold bg-gold/10 px-3 py-1.5 rounded-lg border border-gold/30">
                  <Sparkles className="size-3.5" />
                  <span>AKN AI Vision Verified Landmark</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Engineering Overview &amp; Specifications
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-foreground/85 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                      Verified Technical Architecture
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((t, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-teal/10 px-3 py-1 text-xs font-bold text-teal border border-teal/30"
                        >
                          <Cpu className="size-3" />
                          <span>{t}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.scope && (
                  <div className="rounded-xl bg-muted/60 p-3.5 text-xs border border-border/60">
                    <strong className="text-foreground">Scope of Engineering &amp; Execution:</strong>{" "}
                    <span className="text-muted-foreground">{selectedProject.scope}</span>
                  </div>
                )}

                {selectedProject.highlights && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                      Key Highlights &amp; Features
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
                  className="inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-xs font-extrabold text-slate-950 shadow-md hover:bg-gold/90"
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
