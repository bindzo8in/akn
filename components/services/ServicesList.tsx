"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Building2,
  HeartPulse,
  Factory,
  Compass,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { env } from "@/app/env";

const services = [
  {
    id: "residential",
    icon: Home,
    badge: "Residential Domain",
    title: "Turnkey Residential Construction",
    subtitle: "Custom Luxury Villas, Duplexes & Independent Residences",
    desc: "We construct generational homes with complete turnkey responsibility — managing everything from geotechnical soil analysis and column footing to RCC framing, multi-layer waterproofing, and final luxury finishing.",
    image: "/images/completed_projects/completed-project-01.jpeg",
    features: [
      "100% Scientific Vastu Alignment (Sunlight & Wind Flow)",
      "IS 456 Structural RCC Design with Fe-550D Steel",
      "5-Layer Dr. Fixit Polymeric Waterproofing on Slabs & Sumps",
      "Termite-Proof Foundation Treatment with 10-Year Warranty",
      "Itemized Bill of Quantities (BOQ) with Zero Hidden Charges",
      "Weekly Milestone Tracking via Project Engineer Reports",
    ],
    materials: "Tata Tiscon Fe-550D • UltraTech Super Cement • Dr. Fixit • Saint-Gobain Glass",
  },
  {
    id: "commercial",
    icon: Building2,
    badge: "Commercial Domain",
    title: "Commercial & Retail Infrastructure",
    subtitle: "Multi-Storey Arcades, Shopping Complexes & Office Buildings",
    desc: "Engineered for maximum commercial rental yield, heavy foot traffic durability, and striking street presence with modern ACP cladding, structural glazing facades, and fire safety systems.",
    image: "/images/completed_projects/completed-project-05.jpeg",
    features: [
      "High-Traffic Load-Bearing RCC Columns & Beams",
      "Contemporary ACP & Spider-Fitting Structural Glazing Facades",
      "Integrated Commercial Fire Hydrant & Sprinkler Routing",
      "High-Capacity Elevator Shaft & Basement Car Parking Layouts",
      "Dedicated High-Voltage Transformer & Generator Substations",
      "Complete DTCP & Local Body Commercial Sanction Approvals",
    ],
    materials: "Aludecor ACP • Saint-Gobain Low-E Glass • Jindal Steel • Schindler/Kone Provisions",
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    badge: "Healthcare Domain",
    title: "Hospital & Healthcare Infrastructure",
    subtitle: "Multi-Specialty Clinics, Diagnostic Centers & Nursing Homes",
    desc: "Specialized healthcare facilities built in strict compliance with medical infrastructure standards, featuring anti-microbial surfaces, medical gas pipeline systems (MGPS), and vibration-free imaging wings.",
    image: "/images/completed_projects/completed-project-06.jpeg",
    features: [
      "Anti-Bacterial Vinyl & Seamless Epoxy Flooring",
      "Centralized Medical Gas Pipeline System (MGPS) Ducts",
      "Radiation-Shielded Lead-Lined Walls for X-Ray / CT Scanning",
      "HEPA-Filtered Cleanroom HVAC Routing for Operation Theatres",
      "Emergency Stretcher Ramps & 2-Hour Fire-Rated Doors",
      "Bio-Medical Waste Segregation Infrastructure",
    ],
    materials: "Armstrong Cleanroom Ceilings • Lead Shielding • Polyflor Medical Vinyl • Honeywell Safety",
  },
  {
    id: "industrial",
    icon: Factory,
    badge: "Industrial Domain",
    title: "Industrial PEB Warehouses & Factories",
    subtitle: "Pre-Engineered Steel Structures, Logistics Hubs & Manufacturing Units",
    desc: "Fast-track industrial engineering utilizing heavy-duty Pre-Engineered Steel (PEB) frameworks with large column-free spans, heavy machine-load concrete flooring (FM2/FM3), and industrial ventilation.",
    image: "/images/completed_projects/completed-project-07.jpeg",
    features: [
      "Clear-Span PEB Steel Trusses up to 40+ Meters without Center Pillars",
      "High-Load Laser-Screeded Concrete Flooring (5-Ton/sq.m)",
      "High-Tensile Galvalume Standing-Seam Roofing Sheets",
      "Turbo-Ventilator Air Exchange & Natural Polycarbonate Skylights",
      "Heavy Heavy-Vehicle Ingress & Loading Dock Levellers",
      "Fire Safety & Industrial Pollution Control Board Compliance",
    ],
    materials: "Tata BlueScope Steel • JSW Coloron+ • Fosroc Floor Hardeners • Jindal Rebar",
  },
  {
    id: "architecture",
    icon: Compass,
    badge: "Design & Approvals",
    title: "2D Vastu Planning & 3D Elevation Design",
    subtitle: "Scientific Floor Plans, 360° Photorealistic Walkthroughs & Approvals",
    desc: "Visualize your project before laying a single brick. We produce scientific 2D floor plans harmonized with Vastu Shastra principles, photorealistic 3D architectural elevations, and municipal sanction drawings.",
    image: "/images/completed_projects/completed-project-04.jpeg",
    features: [
      "Scientific 2D Floor Layouts (100% Vastu Shastra Compliant)",
      "Photorealistic Day & Night 3D Architectural Exterior Elevations",
      "Detailed Structural Working Blueprints & Bar Bending Schedules (BBS)",
      "Electrical, Plumbing & HVAC Coordination Schematics",
      "DTCP, LPA & Local Panchayat Municipal Sanction Approvals",
      "360-Degree Virtual Walkthrough Animations",
    ],
    materials: "AutoCAD • Revit BIM • Lumion 3D • 3ds Max Architectural Rendering",
  },
  {
    id: "interiors",
    icon: Layers,
    badge: "Interiors & Remodeling",
    title: "Modular Interiors & Turnkey Renovation",
    subtitle: "Bespoke Modular Kitchens, False Ceilings & Structural Retrofitting",
    desc: "Transform bare concrete into bespoke luxury spaces. We provide custom factory-finished modular joinery, German-hardware kitchens, designer acoustic false ceilings, and structural remodeling.",
    image: "/images/completed_projects/completed-project-03.jpeg",
    features: [
      "Factory-Made Acrylic & PU Finish Modular Kitchens with German Hardware",
      "Custom Floor-to-Ceiling Wardrobes with Soft-Close Fittings",
      "Designer Gypsum & POP False Ceilings with Indirect LED Strip Lighting",
      "Italian Marble & Large-Format Vitrified Tile Installation",
      "Structural Wall Removal, Beam Retrofitting & Floor Expansions",
      "Weatherproof Exterior Texture Wall Painting & Cladding",
    ],
    materials: "Hettich / Hafele Hardware • Century Ply BWP 710 • Asian Paints Royale • Saint-Gobain Gyproc",
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isEven = index % 2 === 0;

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    const timer = setTimeout(() => setIsVisible(true), 1000 + index * 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [index]);

  return (
    <div
      id={service.id}
      ref={cardRef}
      className={`scroll-mt-28 rounded-3xl border border-border bg-card p-6 shadow-md transition-all duration-700 sm:p-8 lg:p-10 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      <div className={`grid gap-8 lg:grid-cols-12 lg:gap-12 items-center`}>
        {/* Visual Column */}
        <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
          <div className="group relative h-80 sm:h-96 w-full overflow-hidden rounded-2xl bg-muted shadow-lg">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal px-3 py-1 text-xs font-bold text-white shadow-md">
                <service.icon className="size-3.5" />
                {service.badge}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs text-gold font-semibold uppercase tracking-wider">{service.subtitle}</p>
              <h3 className="font-heading text-xl sm:text-2xl font-bold">{service.title}</h3>
            </div>
          </div>
        </div>

        {/* Narrative & Checklist Column */}
        <div className={`lg:col-span-6 space-y-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
          <div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-teal/10 px-3 py-1 text-xs font-bold text-teal">
              <ShieldCheck className="size-3.5" />
              Institutional Grade Execution
            </div>
            <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {service.desc}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-2.5 pt-2">
            <h4 className="text-xs font-bold tracking-wider text-foreground uppercase">Key Technical Deliverables:</h4>
            <div className="grid gap-2 sm:grid-cols-2">
              {service.features.map((feat) => (
                <div key={feat} className="flex items-start gap-2 text-xs text-foreground sm:text-sm">
                  <CheckCircle2 className="size-4 shrink-0 text-teal mt-0.5" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Materials Tag */}
          <div className="rounded-xl bg-muted/60 p-3.5 border border-border/60 text-xs">
            <span className="font-bold text-foreground">Certified Brand Partners: </span>
            <span className="text-muted-foreground">{service.materials}</span>
          </div>

          {/* Action Link */}
          <div className="pt-2">
            <Link
              href={`/contact?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-xs font-bold text-[oklch(0.15_0_0)] shadow-sm transition-all hover:bg-[oklch(0.84_0.15_86)] hover:gap-3"
            >
              Consult for {service.title}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesList() {
  return (
    <section id="services-breakdown" className="relative bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-12">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
