"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ShieldCheck, Layers, Building2, CheckCircle } from "lucide-react";
import { env } from "@/app/env";

export default function ServicesHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-background pt-36 pb-20 md:pt-44 md:pb-24 flex flex-col justify-center">
      {/* Background Architectural Image & Gradients */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/completed_projects/completed-project-05.jpeg"
          alt="AKN Civil Engineering Services"
          fill
          priority
          className="object-cover opacity-55 scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--background)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 w-full">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className={`mb-6 flex items-center gap-2 text-xs text-muted-foreground sm:text-sm transition-all duration-700 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <Link href="/" className="transition-colors hover:text-gold">
            Home
          </Link>
          <ChevronRight className="size-3.5 text-muted-foreground/60" />
          <span className="font-semibold text-foreground">Engineering Services</span>
        </nav>

        {/* Badge */}
        <div
          className={`mb-6 inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-4 py-1.5 text-xs font-semibold text-teal backdrop-blur-md transition-all duration-700 delay-100 shadow-sm ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <ShieldCheck className="size-4 text-teal" />
          <span>Turnkey Civil Contracting • 2D/3D Vastu Architecture • Interior Joinery</span>
        </div>

        {/* Headline & Narrative */}
        <div className="max-w-3xl space-y-6">
          <h1
            className={`font-heading text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] transition-all duration-700 delay-150 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            End-to-End <span className="text-teal">Civil Engineering</span> &{" "}
            <span className="text-gradient-gold">Turnkey Execution</span>
          </h1>

          <p
            className={`text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl transition-all duration-700 delay-200 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            From geotechnical soil testing and DTCP sanction drawings to heavy-duty RCC frameworks, PEB steel warehouses, and luxury interior woodwork — we take full single-point responsibility for your project.
          </p>

          <div
            className={`flex flex-wrap items-center gap-4 pt-2 transition-all duration-700 delay-300 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <a
              href="#services-breakdown"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-gold/20 transition-all hover:bg-gold/90 hover:scale-105"
            >
              Explore 6 Core Services
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/80 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:bg-card hover:border-teal/50 shadow-sm"
            >
              Get Free Site Estimate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
