"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, X, CheckCircle2, PhoneCall, Sparkles, ArrowRight } from "lucide-react";
import { aknGalleryProjects, GalleryProject } from "@/lib/aknGalleryData";
import { env } from "@/app/env";

const categories = [
  "All Projects",
  "Ongoing Sites",
  "Residential Villas",
  "Commercial & Retail",
  "Healthcare",
  "Industrial PEB",
  "Interiors & 3D",
] as const;

type CategoryFilter = (typeof categories)[number];

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All Projects");
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All Projects") return aknGalleryProjects;
    if (activeCategory === "Ongoing Sites") {
      return aknGalleryProjects.filter((p) => p.category === "Ongoing Sites");
    }
    if (activeCategory === "Residential Villas") {
      return aknGalleryProjects.filter((p) => p.category === "Residential");
    }
    if (activeCategory === "Commercial & Retail") {
      return aknGalleryProjects.filter((p) => p.category === "Commercial");
    }
    if (activeCategory === "Healthcare") {
      return aknGalleryProjects.filter((p) => p.category === "Hospital");
    }
    if (activeCategory === "Industrial PEB") {
      return aknGalleryProjects.filter((p) => p.category === "Industrial");
    }
    if (activeCategory === "Interiors & 3D") {
      return aknGalleryProjects.filter(
        (p) => p.category === "Interiors" || p.category === "3D Elevations"
      );
    }
    return aknGalleryProjects;
  }, [activeCategory]);

  return (
    <section id="gallery" className="relative bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-teal text-white shadow-md shadow-teal/20 scale-105 font-bold"
                    : "border border-border bg-card text-muted-foreground hover:border-teal/40 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              data-cursor="image"
              data-cursor-label="VIEW"
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-teal/50 hover:shadow-xl hover:shadow-teal/10 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                  {/* Category Pill */}
                  <div className="absolute left-4 top-4 rounded-lg bg-black/60 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-white border border-white/10">
                    {project.category}
                  </div>

                  {/* Year Tag */}
                  <div className="absolute right-4 top-4 rounded-lg bg-teal/90 px-3 py-1 text-xs font-bold text-white shadow-sm">
                    {project.year}
                  </div>

                  {/* Area Tag */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-semibold text-gold tracking-wide">
                      {project.tag}
                    </span>
                    <h3 className="mt-1 font-heading text-lg sm:text-xl font-bold leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-3">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.highlights.slice(0, 2).map((hl, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 rounded-md bg-muted/80 px-2.5 py-1 text-[11px] font-medium text-foreground/80 border border-border/50"
                      >
                        <CheckCircle2 className="size-3 text-teal shrink-0" />
                        <span className="truncate max-w-[200px]">{hl}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Bar */}
              <div className="px-6 pb-6 pt-3 border-t border-border/60 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-teal font-semibold">
                  <MapPin className="size-3.5" />
                  <span>{project.location}</span>
                </div>
                <span className="flex items-center gap-1 font-bold text-foreground group-hover:text-teal transition-colors">
                  Inspect Project Specs →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer Banner */}
        <div className="mt-16 rounded-3xl border border-teal/30 bg-gradient-to-r from-teal/10 via-card to-gold/10 p-8 text-center sm:p-12 shadow-sm">
          <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Want to See Live On-Site Progress for Your Plot?
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            Schedule a site visit with Chief Civil Engineer {env.NEXT_PUBLIC_ENGINEER_NAME} in {env.NEXT_PUBLIC_LOCATION_PRIMARY} or {env.NEXT_PUBLIC_LOCATION_SECONDARY}.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-teal px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-teal/90"
            >
              Request Onsite Consultation
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={`tel:${env.NEXT_PUBLIC_PHONE_PRIMARY.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-bold text-foreground hover:bg-muted"
            >
              <PhoneCall className="size-4 text-gold" />
              Call Engineer {env.NEXT_PUBLIC_PHONE_PRIMARY}
            </a>
          </div>
        </div>
      </div>

      {/* ── High-Definition Project Inspection Modal ── */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-border bg-card p-6 shadow-2xl animate-in zoom-in-95 duration-300 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 text-foreground shadow-md backdrop-blur-md transition-all hover:bg-muted hover:scale-110"
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>

            {/* Modal Hero Image */}
            <div className="relative h-64 sm:h-96 w-full overflow-hidden rounded-2xl bg-muted shadow-inner">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="rounded-full bg-teal px-3.5 py-1 text-xs font-bold text-white shadow-md">
                  {selectedProject.category}
                </span>
                <span className="rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-gold shadow-md">
                  {selectedProject.tag}
                </span>
              </div>
            </div>

            {/* Project Gallery Thumbnails */}
            {selectedProject.gallery && selectedProject.gallery.length > 0 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {selectedProject.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative h-20 w-full overflow-hidden rounded-xl bg-muted border border-border/60 hover:border-teal transition-all"
                  >
                    <Image
                      src={img}
                      alt={`${selectedProject.title} detail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Details */}
            <div className="mt-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-4">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    {selectedProject.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-sm text-teal font-medium">
                    <MapPin className="size-4" />
                    <span>{selectedProject.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-gold bg-gold/10 px-3 py-1.5 rounded-lg border border-gold/30 self-start sm:self-auto">
                  <Sparkles className="size-4" />
                  <span>AKN Verified Site Landmark</span>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                <div className="sm:col-span-2 space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Project Description & Details
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/85">
                      {selectedProject.description}
                    </p>
                  </div>

                  {selectedProject.scope && (
                    <div className="rounded-xl bg-muted/50 p-3 border border-border/60 text-xs">
                      <strong className="text-foreground">Scope of Engineering:</strong>{" "}
                      <span className="text-muted-foreground">{selectedProject.scope}</span>
                    </div>
                  )}

                  {selectedProject.highlights && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        Key Structural & Engineering Highlights
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedProject.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-foreground/90">
                            <CheckCircle2 className="size-4 text-teal shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="rounded-2xl border border-border/80 bg-card p-5 flex flex-col justify-between space-y-4 shadow-sm">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Project Feasibility Quick Check
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      Planning a similar residential villa, commercial arcade, or structural elevation in Tamil Nadu?
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Link
                      href="/contact"
                      onClick={() => setSelectedProject(null)}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-teal/90"
                    >
                      <Calendar className="size-4" />
                      Get Free BOQ Estimate
                    </Link>
                    <a
                      href={`tel:${env.NEXT_PUBLIC_PHONE_PRIMARY.replace(/\s/g, "")}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-teal/40 bg-teal/10 px-4 py-2 text-xs font-bold text-teal hover:bg-teal hover:text-white"
                    >
                      <PhoneCall className="size-3.5" />
                      Call {env.NEXT_PUBLIC_PHONE_PRIMARY}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
