"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Phone, MessageSquare, MapPin, Clock } from "lucide-react";
import { env } from "@/app/env";

export default function ContactHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-background pt-36 pb-16 md:pt-44 md:pb-20 flex flex-col justify-center">
      {/* Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about/about-hero-bg.jpg"
          alt="AKN Construction Contact Headquarters"
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
          <span className="font-semibold text-foreground">Contact & Site Feasibility</span>
        </nav>

        {/* Badge */}
        <div
          className={`mb-6 inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-4 py-1.5 text-xs font-semibold text-teal backdrop-blur-md transition-all duration-700 delay-100 shadow-sm ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <MapPin className="size-4 text-teal" />
          <span>Headquarters: {env.NEXT_PUBLIC_LOCATION_PRIMARY}, Tamil Nadu • Branch: {env.NEXT_PUBLIC_LOCATION_SECONDARY}</span>
        </div>

        {/* Headline */}
        <div className="max-w-3xl space-y-6">
          <h1
            className={`font-heading text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl leading-[1.1] transition-all duration-700 delay-150 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Start Your Project with a <span className="text-teal">Complimentary</span>{" "}
            <span className="text-gradient-gold">Site Assessment</span>
          </h1>

          <p
            className={`text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl transition-all duration-700 delay-200 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Schedule a direct one-on-one consultation with Chief Civil Engineer <strong className="text-foreground">{env.NEXT_PUBLIC_ENGINEER_NAME}, {env.NEXT_PUBLIC_ENGINEER_DEGREE}</strong>. We visit your plot, conduct preliminary soil assessment, and prepare an itemized BOQ estimate.
          </p>

          <div
            className={`flex flex-wrap items-center gap-4 pt-2 transition-all duration-700 delay-300 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <a
              href={`tel:${env.NEXT_PUBLIC_PHONE_PRIMARY.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-gold/20 transition-all hover:bg-gold/90 hover:scale-105"
            >
              <Phone className="size-4" />
              Direct Call: {env.NEXT_PUBLIC_PHONE_PRIMARY}
            </a>

            <a
              href={`https://wa.me/91${env.NEXT_PUBLIC_PHONE_PRIMARY.replace(/[^0-9]/g, "")}?text=Hello%20AKN%20Construction,%20I%20would%20like%20to%20inquire%20about%20a%20construction%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-teal/40 bg-teal/10 px-6 py-3.5 text-sm font-bold text-teal backdrop-blur-md transition-all hover:bg-teal/20 hover:border-teal/60"
            >
              <MessageSquare className="size-4 text-teal" />
              Instant WhatsApp Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
