"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Maximize2, ShieldCheck, X, ArrowRight } from "lucide-react";
import { env } from "@/app/env";

const categories = [
  "All Projects",
  "Residential Villas",
  "Commercial & Retail",
  "Healthcare",
  "Industrial PEB",
  "3D & Interiors",
];

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  area: string;
  year: string;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  client: string;
}

const projects: Project[] = [
  {
    id: "p1",
    title: "Sri Lakshmi Grand Duplex Villa",
    category: "Residential Villas",
    location: "Dharmapuri Town",
    area: "3,850 sq.ft",
    year: "2024",
    image: "/images/projects/residential-luxury-villa.jpg",
    gallery: [
      "/images/projects/residential-luxury-villa.jpg",
      "/images/projects/akn-project-02.jpg",
      "/images/projects/akn-project-03.jpg",
      "/images/projects/akn-project-04.jpg",
    ],
    description: "A contemporary multi-generational luxury duplex villa harmonized with 100% scientific Vastu principles, double-height living foyer, Italian marble flooring, and German-hardware modular kitchen.",
    highlights: [
      "Fe-550D primary steel with M25 machine-mixed RCC",
      "5-layer Dr. Fixit subterranean & roof waterproofing",
      "Solar rooftop integration and rainwater harvesting recharge pit",
      "Double-glazed soundproof UPVC sliding windows",
    ],
    client: "Dr. K. Venkatesh & Family",
  },
  {
    id: "p2",
    title: "Metro City Commercial Arcade",
    category: "Commercial & Retail",
    location: "Krishnagiri Main Road",
    area: "14,200 sq.ft (G+3 Floors)",
    year: "2023",
    image: "/images/projects/commercial-complex.jpg",
    gallery: [
      "/images/projects/commercial-complex.jpg",
      "/images/projects/akn-project-06.jpg",
      "/images/projects/akn-project-07.jpg",
      "/images/projects/akn-project-08.jpg",
    ],
    description: "A premier commercial landmark featuring high-performance ACP cladding, structural spider-glazed facade, multi-level retail units, dedicated lift core, and underground customer car parking.",
    highlights: [
      "Heavy load-bearing column framework engineered for commercial retail weight",
      "Integrated fire sprinkler piping & emergency fire stairwells",
      "Transformer yard and automatic diesel generator backup infrastructure",
      "100% DTCP commercial building sanction approval",
    ],
    client: "Metro Retail Ventures",
  },
  {
    id: "p3",
    title: "Aanandham Multi-Specialty Hospital",
    category: "Healthcare",
    location: "Harur Bypass Road",
    area: "9,600 sq.ft (50-Bed Wing)",
    year: "2023",
    image: "/images/projects/hospital-building.jpg",
    gallery: [
      "/images/projects/hospital-building.jpg",
      "/images/projects/akn-project-14.jpg",
      "/images/projects/akn-project-15.jpg",
      "/images/projects/akn-project-16.jpg",
    ],
    description: "State-of-the-art healthcare infrastructure featuring cleanroom modular operation theatres, centralized medical gas pipeline ducts, anti-bacterial vinyl flooring, and radiation-shielded diagnostic wings.",
    highlights: [
      "Modular cleanroom Operation Theatre (OT) with HEPA filtration routing",
      "Lead-shielded walls for X-ray & CT diagnostic chambers",
      "Anti-microbial seamless flooring and stretcher ramp access",
      "Uninterrupted medical grade UPS power conduit networks",
    ],
    client: "Aanandham Medical Foundation",
  },
  {
    id: "p4",
    title: "Apex Logistics Heavy PEB Warehouse",
    category: "Industrial PEB",
    location: "Hosur Industrial Corridor",
    area: "24,000 sq.ft (Clear-Span)",
    year: "2024",
    image: "/images/projects/industrial-warehouse.jpg",
    gallery: [
      "/images/projects/industrial-warehouse.jpg",
      "/images/projects/akn-project-18.jpg",
      "/images/projects/akn-project-19.jpg",
      "/images/projects/akn-project-20.jpg",
    ],
    description: "Industrial warehouse featuring clear-span Pre-Engineered Steel (PEB) portal frames with zero interior columns, laser-screeded heavy forklift flooring, standing-seam Galvalume roofing, and loading docks.",
    highlights: [
      "36-meter column-free clear span engineered for maximum pallet volume",
      "5-ton/sq.m load-bearing laser-screeded vacuum dewatered flooring (VDF)",
      "High-tensile Galvalume roofing with natural daylight polycarbonate skylights",
      "Integrated turbo ventilators and rainwater collection tanks",
    ],
    client: "Apex Logistics India Pvt Ltd",
  },
  {
    id: "p5",
    title: "Ananya Contemporary Residence",
    category: "Residential Villas",
    location: "Palacode",
    area: "2,950 sq.ft",
    year: "2024",
    image: "/images/projects/residential-duplex.jpg",
    gallery: [
      "/images/projects/residential-duplex.jpg",
      "/images/projects/akn-project-10.jpg",
      "/images/projects/akn-project-11.jpg",
      "/images/projects/akn-project-12.jpg",
    ],
    description: "Modern bioclimatic residential villa designed for maximum cross-ventilation, expansive terrace garden, teak wood interior accents, and cantilevered sunshade projections.",
    highlights: [
      "Scientific solar orientation reducing indoor temperatures by 3-4°C",
      "Concealed copper electrical distribution with Legrand modular switches",
      "Custom 1st quality Burma teak main doorway with digital lock",
      "Zero-dampness sunken bathroom waterproofing guarantee",
    ],
    client: "R. Muralidharan",
  },
  {
    id: "p6",
    title: "Royale Heights Modular Joinery & Interiors",
    category: "3D & Interiors",
    location: "Dharmapuri City Center",
    area: "3,200 sq.ft",
    year: "2025",
    image: "/images/projects/interior-luxury-fitout.jpg",
    gallery: [
      "/images/projects/interior-luxury-fitout.jpg",
      "/images/projects/akn-project-22.jpg",
      "/images/projects/akn-project-23.jpg",
      "/images/projects/akn-project-24.jpg",
    ],
    description: "Full turnkey interior transformation including German-hardware acrylic modular kitchen, cove-lit gypsum false ceilings, custom master bedroom wardrobes, and wall paneling.",
    highlights: [
      "Hafele soft-close kitchen tandem boxes & pull-out pantry",
      "BWP 710 marine-grade plywood with zero-bubble laminate pressing",
      "Dimmable warm ambient LED cove lighting throughout",
      "Italian marble TV console backdrop with fluted acoustic panelling",
    ],
    client: "S. Jagadeesh Kumar",
  },
];

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
    if (activeCategory === "All Projects") return projects;
    return projects.filter((p) => p.category === activeCategory);
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
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="rounded-full bg-teal/90 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white shadow-md">
                    {project.category}
                  </span>
                </div>

                {/* Enlarge Icon */}
                <div className="absolute top-3.5 right-3.5 size-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Maximize2 className="size-4" />
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                  <h3 className="font-heading text-lg font-bold leading-snug group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Meta & Specs */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5 font-medium text-foreground">
                      <MapPin className="size-3.5 text-teal" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="size-3.5 text-gold" />
                      Handover: {project.year}
                    </span>
                  </div>

                  <div className="rounded-xl bg-muted/60 p-2.5 text-xs text-muted-foreground">
                    <span className="font-bold text-foreground">Built-up Area: </span>
                    <span>{project.area}</span>
                  </div>

                  <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-border/60 pt-3 text-xs font-semibold text-teal group-hover:text-gold transition-colors">
                  <span>View Case Study</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Case Study Lightbox Modal with Backdrop Dismiss & Escape Key ── */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 size-9 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-destructive hover:text-white transition-colors"
            >
              <X className="size-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-72 sm:h-80 w-full overflow-hidden rounded-2xl bg-muted">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="rounded-md bg-gold px-2.5 py-0.5 text-xs font-bold text-black uppercase">
                  {selectedProject.category}
                </span>
                <h3 className="mt-1 font-heading text-2xl font-bold">{selectedProject.title}</h3>
                <p className="text-xs text-white/80">{selectedProject.location} • Handover {selectedProject.year}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-heading text-base font-bold text-foreground">Project Overview</h4>
                <p className="mt-1 text-muted-foreground leading-relaxed">{selectedProject.description}</p>
              </div>

              <div>
                <h4 className="font-heading text-base font-bold text-foreground">Structural & Engineering Highlights</h4>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {selectedProject.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2 text-xs sm:text-sm text-foreground">
                      <ShieldCheck className="size-4 shrink-0 text-teal mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4 text-xs">
                <div>
                  <span className="text-muted-foreground">Client: </span>
                  <span className="font-bold text-foreground">{selectedProject.client}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Total Scale: </span>
                  <span className="font-bold text-teal">{selectedProject.area}</span>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="flex justify-end gap-3 pt-2">
              <Link
                href={`/contact?project=${encodeURIComponent(selectedProject.title)}`}
                className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-xs font-bold text-[oklch(0.15_0_0)] shadow-md hover:bg-[oklch(0.84_0.15_86)]"
              >
                Inquire About Similar Project
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
