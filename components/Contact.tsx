"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { env } from "@/app/env";

const projectTypes = [
  "Turnkey Residential Villa",
  "Commercial Complex / Arcade",
  "Hospital / Clinic Infrastructure",
  "Industrial PEB Warehouse",
  "Renovation & Retrofitting",
  "2D/3D Vastu Architectural Planning",
  "Luxury Modular Interiors",
] as const;

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    projectType: "",
    message: "",
  });

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to send inquiry email.");
      }

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err: unknown) {
      console.error("Contact submit error:", err);
      setErrorMessage(
        err instanceof Error ? err.message : "Submission failed. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="relative bg-muted/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-3 flex items-center gap-3">
            <div className="accent-line" />
            <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">Get In Touch</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Let&apos;s Build <span className="text-teal">Together</span>
          </h2>
          <p className="mt-3 max-w-xl text-base text-muted-foreground">
            Schedule a free on-site consultation with {env.NEXT_PUBLIC_ENGINEER_NAME}. We provide transparent itemized estimates with zero obligations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column — Contact Info Cards */}
          <div
            className={`space-y-6 lg:col-span-5 transition-all duration-700 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Phone Card */}
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <Phone className="size-5" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold text-foreground">Direct Engineering Hotlines</h3>
                <div className="mt-2 space-y-1">
                  <a
                    href={`tel:${env.NEXT_PUBLIC_PHONE_PRIMARY.replace(/\s/g, "")}`}
                    className="block text-sm font-semibold text-teal hover:underline"
                  >
                    {env.NEXT_PUBLIC_PHONE_PRIMARY}
                  </a>
                  <a
                    href={`tel:${env.NEXT_PUBLIC_PHONE_SECONDARY.replace(/\s/g, "")}`}
                    className="block text-sm font-semibold text-teal hover:underline"
                  >
                    {env.NEXT_PUBLIC_PHONE_SECONDARY}
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <Mail className="size-5" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold text-foreground">Official Email</h3>
                <a
                  href={`mailto:${env.NEXT_PUBLIC_EMAIL}`}
                  className="mt-2 block text-sm font-semibold text-teal hover:underline"
                >
                  {env.NEXT_PUBLIC_EMAIL}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <MapPin className="size-5" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold text-foreground">Headquarters Office Address</h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-foreground font-medium">
                  {env.NEXT_PUBLIC_ADDRESS_FULL}
                </p>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  Serving {env.NEXT_PUBLIC_LOCATION_PRIMARY}, {env.NEXT_PUBLIC_LOCATION_SECONDARY} & surrounding districts.
                </p>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <Clock className="size-5" strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold text-foreground">Working Hours</h3>
                <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                  {env.NEXT_PUBLIC_WORKING_HOURS_WEEKDAY}
                </p>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  {env.NEXT_PUBLIC_WORKING_HOURS_SUNDAY}
                </p>
              </div>
            </div>

            {/* Social Media Link Badges */}
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={env.NEXT_PUBLIC_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-border bg-card p-4 transition-all hover:border-teal/40 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-pink-500/10 text-pink-600 shrink-0">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] text-muted-foreground">Instagram Feed</div>
                    <div className="text-xs font-bold text-foreground truncate max-w-[120px]">{env.NEXT_PUBLIC_INSTAGRAM_HANDLE}</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-teal">Follow →</span>
              </a>

              <a
                href={env.NEXT_PUBLIC_YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-border bg-card p-4 transition-all hover:border-red-500/40 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-red-500/10 text-red-600 shrink-0">
                    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[11px] text-muted-foreground">YouTube Channel</div>
                    <div className="text-xs font-bold text-foreground truncate max-w-[120px]">{env.NEXT_PUBLIC_YOUTUBE_HANDLE}</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-red-500">Watch →</span>
              </a>
            </div>
          </div>

          {/* Right Column — Project Estimation Request Form */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-10"
            >
              <h3 className="font-heading text-xl font-bold text-foreground">
                Request Free Consultation & Estimation
              </h3>
              <p className="mt-1 mb-8 text-xs text-muted-foreground sm:text-sm">
                Fill in your details below. Our civil engineer will call you within 24 hours.
              </p>

              {errorMessage && (
                <div className="mb-6 rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-xs font-semibold text-destructive">
                  {errorMessage}
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-xs font-semibold text-foreground">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="mb-2 block text-xs font-semibold text-foreground">
                    Phone Number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                    placeholder="+91 99435 40336"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-xs font-semibold text-foreground">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                    placeholder="name@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-location" className="mb-2 block text-xs font-semibold text-foreground">
                    Plot / Project Location *
                  </label>
                  <input
                    id="contact-location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                    placeholder="e.g. Dharmapuri Town, Krishnagiri"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="contact-type" className="mb-2 block text-xs font-semibold text-foreground">
                  Project Type
                </label>
                <select
                  id="contact-type"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                >
                  <option value="">Select your required service</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className="mt-5">
                <label htmlFor="contact-message" className="mb-2 block text-xs font-semibold text-foreground">
                  Project Requirements / Plot Dimensions
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20"
                  placeholder="Share details like built-up area (sq.ft), number of floors, timeline, or specific Vastu requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-teal/20 transition-all hover:bg-teal/90 hover:shadow-lg hover:shadow-teal/30 disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? (
                  <span>Sending Inquiry...</span>
                ) : submitted ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="size-4" />
                    Consultation Request Received!
                  </span>
                ) : (
                  <>
                    Submit Project Inquiry
                    <Send className="size-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
