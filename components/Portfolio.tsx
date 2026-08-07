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
  Layers,
  Sparkles,
} from "lucide-react";

const filters = ["All", "Ongoing Sites", "Residential", "Commercial", "Hospital", "Industrial", "Interiors"] as const;

interface Project {
  title: string;
  location: string;
  category: string;
  tag: string;
  desc: string;
  image: string;
  scope?: string;
  features?: string[];
}

const projects: Project[] = [
  {
    title: "Sri Lakshmi Contemporary Luxury Villa",
    location: "Dharmapuri Main Town",
    category: "Residential",
    tag: "3,850 Sq.Ft • Turnkey Duplex",
    desc: "Complete RCC framing, Italian marble flooring, landscaped courtyard, and custom 3D elevation.",
    image: "/images/completed_projects/completed-project-01.jpeg",
    scope: "End-to-End Architectural Planning, Structural Execution & Interior Design",
    features: ["100% Vastu Compliant", "Double Height Living Area", "Italian Marble Flooring", "Smart Home Automation"],
  },
  {
    title: "Grand Multi-Storey Commercial Complex",
    location: "Krishnagiri Junction",
    category: "Commercial",
    tag: "14,500 Sq.Ft • G+3 Commercial Hub",
    desc: "Engineered for high footfall with structural glazing facade, ACP cladding, and basement parking.",
    image: "/images/completed_projects/completed-project-05.jpeg",
    scope: "Commercial Complex Structural Framing & Modern Facade Glazing",
    features: ["Structural Glass Facade", "High Load RCC Columns", "Dedicated Basement Parking", "Fire Safety Integration"],
  },
  {
    title: "Multi-Specialty Care Hospital",
    location: "Dharmapuri Bypass",
    category: "Hospital",
    tag: "22,000 Sq.Ft • 50-Bed Facility",
    desc: "Medical gas pipeline integration, sterile OT suites, ICU infrastructure, and diagnostic wings.",
    image: "/images/completed_projects/completed-project-06.jpeg",
    scope: "NABH-Compliant Healthcare Facility Civil & MEP Execution",
    features: ["Sterile Modular OT Suite", "Medical Gas Pipeline (MGPS)", "Reinforced Radiography Rooms", "Emergency Ramp Access"],
  },
  {
    title: "Heavy Industrial PEB Warehouse",
    location: "Krishnagiri SIPCOT Corridor",
    category: "Industrial",
    tag: "32,000 Sq.Ft • High-Bay Storage",
    desc: "Heavy-duty laser-screed concrete flooring, long-span PEB steel trusses, and loading docks.",
    image: "/images/completed_projects/completed-project-07.jpeg",
    scope: "Pre-Engineered Steel Structural Shed & Laser Screed Flooring",
    features: ["Clear-Span PEB Steel Framing", "Laser-Screed Heavy Floor (FM2)", "Multiple Loading Bays", "Rainwater Harvesting Catchment"],
  },
  {
    title: "Bespoke Residence Luxury Interiors",
    location: "Dharmapuri",
    category: "Interiors",
    tag: "Turnkey Interior Fitout",
    desc: "German hardware modular kitchen, false ceilings with magnetic track lights, and custom veneer wardrobes.",
    image: "/images/completed_projects/completed-project-03.jpeg",
    scope: "Luxury Residential Interior Architecture & Custom Joinery",
    features: ["Anti-Fingerprint Acrylic Kitchen", "Magnetic Track Ambient Lighting", "Custom Teak Wood Joinery", "Acoustic Wall Paneling"],
  },
  {
    title: "Modern Minimalist Elevation Villa",
    location: "Harur Road, Dharmapuri",
    category: "Residential",
    tag: "2,600 Sq.Ft • Vastu Compliant",
    desc: "100% Vastu-oriented 2D layout with modern double-height living room and cantilevered balconies.",
    image: "/images/completed_projects/completed-project-02.jpeg",
    scope: "Turnkey Design, Plan Approval, Construction & Handover",
    features: ["East-Facing Vastu Layout", "Cantilever Floating Balcony", "Weatherproof Texture Paint", "Solar Rooftop Ready"],
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
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

    return () => {
      observer.disconnect();
    };
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section ref={sectionRef} id="portfolio" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div
          className={`mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="accent-line" />
              <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">Our Work</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Completed & <span className="text-teal">Ongoing Projects</span>
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted-foreground">
              A showcase of our structural construction and interior design achievements across Dharmapuri & Krishnagiri.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                  active === f
                    ? "bg-teal text-white shadow-md shadow-teal/20"
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
              key={proj.title}
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
                <div className="absolute left-4 top-4 rounded-md bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
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
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {proj.desc}
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

            {/* Modal Image */}
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

            {/* Project Details */}
            <div className="mt-6">
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
                  <span>AKN Signature Landmark</span>
                </div>
              </div>

              <div className="mt-4 grid gap-6 sm:grid-cols-3">
                <div className="sm:col-span-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Project Scope & Description
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/85">
                    {selectedProject.desc}
                  </p>
                  {selectedProject.scope && (
                    <p className="mt-2 text-xs font-medium text-muted-foreground bg-muted/50 p-2.5 rounded-xl border border-border/60">
                      <strong>Execution Scope:</strong> {selectedProject.scope}
                    </p>
                  )}

                  {selectedProject.features && (
                    <div className="mt-4">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Key Engineering Highlights
                      </h4>
                      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedProject.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-medium text-foreground/90">
                            <CheckCircle2 className="size-3.5 text-teal shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="rounded-2xl border border-border/80 bg-muted/40 p-4 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Interested in Similar Work?
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Get transparent BOQ estimate, architectural 3D elevation, and site feasibility survey.
                    </p>
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    <Link
                      href="/contact"
                      onClick={() => setSelectedProject(null)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-4 py-2.5 text-xs font-bold text-[oklch(0.15_0_0)] shadow-sm hover:bg-[oklch(0.84_0.15_86)]"
                    >
                      <Calendar className="size-4" />
                      Book Consultation
                    </Link>
                    <a
                      href="tel:+919943540336"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-teal/40 bg-teal/10 px-4 py-2 text-xs font-bold text-teal hover:bg-teal hover:text-white"
                    >
                      <PhoneCall className="size-3.5" />
                      +91 99435 40336
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
