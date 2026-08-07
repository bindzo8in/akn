"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2, ShieldCheck, PhoneCall } from "lucide-react";
import { env } from "@/app/env";
import { contactFormSchema, ContactFormData } from "@/lib/schemas/contact";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const projectTypes = [
  "Turnkey Residential Villa",
  "Commercial & Retail Arcade",
  "Hospital / Clinic Infrastructure",
  "Industrial PEB Warehouse",
  "2D Vastu & 3D Elevation Design",
  "Modular Interiors & Joinery",
  "Structural Renovation",
];

const locations = [
  "Dharmapuri Town",
  "Krishnagiri Town",
  "Hosur Belt",
  "Harur",
  "Palacode",
  "Pennagaram",
  "Karimangalam",
  "Other Tamil Nadu Region",
];

const timelines = [
  "Immediate (Within 30 Days)",
  "1 – 3 Months",
  "3 – 6 Months",
  "Planning / Feasibility Stage",
];

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [submittedValues, setSubmittedValues] = useState<ContactFormData | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      projectType: "Turnkey Residential Villa",
      location: "Dharmapuri Town",
      area: "",
      timeline: "Immediate (Within 30 Days)",
      budget: "",
      message: "",
    },
  });

  const { isSubmitting } = form.formState;

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

  const onSubmit = async (values: ContactFormData) => {
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to send inquiry email.");
      }

      setSubmittedValues(values);
      setIsSubmitted(true);
      form.reset();
    } catch (err: unknown) {
      console.error("Form submit error:", err);
      setErrorMessage(
        err instanceof Error ? err.message : "Submission failed. Please try again or call us directly."
      );
    }
  };

  return (
    <section ref={sectionRef} className="relative bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section Heading */}
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="accent-line" />
            <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
              Get a Free Estimate
            </span>
            <div className="accent-line" />
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Project Feasibility & <span className="text-teal">BOQ Quotation</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Fill out your project parameters below. Our engineering desk will review your details and prepare an itemized estimate within 24 hours.
          </p>
        </div>

        {/* Form Container */}
        <div
          className={`rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-10 transition-all duration-700 delay-150 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {isSubmitted && submittedValues ? (
            <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in duration-500">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-teal/15 text-teal">
                <CheckCircle2 className="size-10" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground">
                Inquiry Successfully Received!
              </h3>
              <p className="mx-auto max-w-md text-sm text-muted-foreground leading-relaxed">
                Thank you, <strong className="text-foreground">{submittedValues.name}</strong>. Chief Civil Engineer{" "}
                <strong className="text-teal">{env.NEXT_PUBLIC_ENGINEER_NAME}</strong> has received your project details for{" "}
                <span className="text-foreground font-semibold">{submittedValues.projectType}</span> in{" "}
                <span className="text-foreground font-semibold">{submittedValues.location}</span>. We will contact you at{" "}
                <strong className="text-foreground">{submittedValues.phone}</strong> shortly.
              </p>
              <div className="pt-4 flex justify-center gap-4">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="rounded-xl border border-border bg-muted px-6 py-2.5 text-xs font-bold text-foreground hover:bg-card"
                >
                  Submit Another Inquiry
                </button>
                <a
                  href={`tel:${env.NEXT_PUBLIC_PHONE_PRIMARY.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-2.5 text-xs font-bold text-[oklch(0.15_0_0)] shadow-md"
                >
                  <PhoneCall className="size-3.5" />
                  Call Directly Now
                </a>
              </div>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {errorMessage && (
                  <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-xs font-semibold text-destructive">
                    {errorMessage}
                  </div>
                )}

                {/* Row 1: Project Type & Location */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Classification *</FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm text-foreground focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                          >
                            {projectTypes.map((pt) => (
                              <option key={pt} value={pt}>
                                {pt}
                              </option>
                            ))}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Plot / Site Location *</FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm text-foreground focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                          >
                            {locations.map((loc) => (
                              <option key={loc} value={loc}>
                                {loc}
                              </option>
                            ))}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Row 2: Built-Up Area & Timeline */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="area"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Approx Built-Up Area (sq.ft)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. 2,400 sq.ft or 30x40 site"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="timeline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Target Execution Timeline *</FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm text-foreground focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                          >
                            {timelines.map((tl) => (
                              <option key={tl} value={tl}>
                                {tl}
                              </option>
                            ))}
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Row 3: Name, Phone & Email */}
                <div className="grid gap-6 sm:grid-cols-3">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number *</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+91 98765 43210" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="name@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Row 4: Message / Requirements */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Notes or Specific Requirements</FormLabel>
                      <FormControl>
                        <textarea
                          rows={4}
                          placeholder="Tell us about your plot dimensions, Vastu preferences, number of floors, or interior style..."
                          className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <ShieldCheck className="size-4 text-teal" />
                    <span>100% Privacy Protected • Free & Non-Obligatory</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gold px-8 py-3.5 text-sm font-bold text-[oklch(0.15_0_0)] shadow-lg shadow-gold/20 transition-all hover:bg-[oklch(0.84_0.15_86)] hover:scale-105 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Processing Calculation...</span>
                    ) : (
                      <>
                        <Send className="size-4" />
                        <span>Submit for Detailed BOQ Estimate</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
}
