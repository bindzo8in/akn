"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, ExternalLink, ShieldCheck, Compass } from "lucide-react";
import { env } from "@/app/env";

export default function ContactMapDirectory() {
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
    <section ref={sectionRef} className="relative bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Heading */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="accent-line" />
            <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">Office Directory & Location</span>
            <div className="accent-line" />
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Visit Our Headquarters & <span className="text-teal">Design Studio</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Drop by our Dharmapuri design studio for an architectural floor plan review or connect with our regional branch operations in Krishnagiri.
          </p>
        </div>

        {/* Grid: Map + Directory Details */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left Column — Google Map Integration */}
          <div
            className={`lg:col-span-7 transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative h-[420px] sm:h-[500px] w-full overflow-hidden rounded-3xl border border-border bg-muted shadow-xl">
              {/* Google Maps Embed iframe */}
              <iframe
                title="AKN Construction Dharmapuri Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62402.13840702598!2d78.1256923486328!3d12.131976000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac16f1c4e7f3ef%3A0x6b772b7a8d56b010!2sDharmapuri%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[20%] contrast-[1.05]"
              />

              {/* Floating Map Pin Badge */}
              <div className="absolute top-4 left-4 rounded-2xl bg-card/95 backdrop-blur-md p-4 border border-border shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-teal animate-ping" />
                  <span className="font-heading text-sm font-bold text-foreground">{env.NEXT_PUBLIC_BUSINESS_NAME}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{env.NEXT_PUBLIC_LOCATION_PRIMARY}, Tamil Nadu</p>
                <a
                  href="https://maps.google.com/?q=Dharmapuri,Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-teal hover:underline"
                >
                  Open in Google Maps
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column — Directory Cards */}
          <div
            className={`lg:col-span-5 space-y-6 transition-all duration-700 delay-150 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Dharmapuri HQ */}
            <div className="rounded-3xl border border-teal/40 bg-card p-6 shadow-md space-y-4">
              <div className="flex items-center justify-between border-b border-border/80 pb-3">
                <div className="flex items-center gap-2 text-teal">
                  <MapPin className="size-5" />
                  <h3 className="font-heading text-lg font-bold text-foreground">Dharmapuri Head Office</h3>
                </div>
                <span className="rounded-full bg-teal/10 px-2.5 py-0.5 text-[11px] font-bold text-teal">
                  Main Studio
                </span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                <p className="text-foreground font-medium">
                  {env.NEXT_PUBLIC_BUSINESS_NAME}, Design & Engineering Center
                </p>
                <p>{env.NEXT_PUBLIC_LOCATION_PRIMARY}, {env.NEXT_PUBLIC_LOCATION_STATE} – 636701</p>
                
                <div className="pt-2 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Phone className="size-4 text-teal shrink-0" />
                    <a href={`tel:${env.NEXT_PUBLIC_PHONE_PRIMARY.replace(/\s/g, "")}`} className="font-semibold text-foreground hover:text-teal">
                      {env.NEXT_PUBLIC_PHONE_PRIMARY}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="size-4 text-teal shrink-0" />
                    <a href={`mailto:${env.NEXT_PUBLIC_EMAIL}`} className="hover:text-teal">
                      {env.NEXT_PUBLIC_EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Krishnagiri Branch */}
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-border/80 pb-3">
                <div className="flex items-center gap-2 text-gold">
                  <Compass className="size-5" />
                  <h3 className="font-heading text-lg font-bold text-foreground">Krishnagiri Operations</h3>
                </div>
                <span className="rounded-full bg-gold/10 px-2.5 py-0.5 text-[11px] font-bold text-gold">
                  Branch Hub
                </span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                <p className="text-foreground font-medium">
                  Site Engineering & Mobilization Center
                </p>
                <p>{env.NEXT_PUBLIC_LOCATION_SECONDARY} & Hosur Industrial Belt, Tamil Nadu</p>
                
                <div className="pt-2">
                  <div className="flex items-center gap-2">
                    <Phone className="size-4 text-gold shrink-0" />
                    <a href={`tel:${env.NEXT_PUBLIC_PHONE_SECONDARY.replace(/\s/g, "")}`} className="font-semibold text-foreground hover:text-teal">
                      {env.NEXT_PUBLIC_PHONE_SECONDARY}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="rounded-3xl border border-border bg-muted/60 p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                <Clock className="size-4 text-teal" />
                <span>Operating Hours</span>
              </div>

              <div className="space-y-1 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday – Saturday:</span>
                  <span className="font-semibold text-foreground">9:00 AM – 7:30 PM</span>
                </div>
                <div className="flex justify-between border-t border-border/40 pt-1">
                  <span>Sunday:</span>
                  <span className="font-semibold text-teal">By Prior Appointment (Site Visits)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
