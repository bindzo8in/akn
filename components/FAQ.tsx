"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { env } from "@/app/env";

const faqs = [
  {
    q: "Which regions and districts do you serve?",
    a: `We provide complete civil construction, architectural design, and interior turnkey services across ${env.NEXT_PUBLIC_LOCATION_PRIMARY}, ${env.NEXT_PUBLIC_LOCATION_SECONDARY}, and surrounding districts in ${env.NEXT_PUBLIC_LOCATION_STATE}.`,
  },
  {
    q: "Do you handle both civil building construction and interior design?",
    a: "Yes, we offer single-point turnkey execution covering soil testing, 2D/3D architectural planning, municipal sanction approvals, RCC structural construction, and bespoke modular interior joinery.",
  },
  {
    q: "Are all your architectural floor plans Vastu-compliant?",
    a: "Yes. Every 2D floor plan is custom-crafted to strictly adhere to scientific Vastu Shastra principles while optimizing ventilation, natural lighting, and modern spatial utility.",
  },
  {
    q: "How can I request a quote or schedule a site visit?",
    a: `You can reach out directly to ${env.NEXT_PUBLIC_ENGINEER_NAME} via phone at ${env.NEXT_PUBLIC_PHONE_PRIMARY} or ${env.NEXT_PUBLIC_PHONE_SECONDARY}, or email ${env.NEXT_PUBLIC_EMAIL}. We offer free initial consultations and site evaluations.`,
  },
  {
    q: "What certified material brands do you use in construction?",
    a: "We never compromise on materials. We standardize on Fe-500D/550D TMT steel (Tata Tiscon / JSW), 53-Grade OPC cement (UltraTech / Dalmia), Havells FR electricals, Jaquar/CERA sanitaryware, and Asian Paints Royale finishes.",
  },
  {
    q: "Do you provide 3D elevations and visual renders before construction starts?",
    a: "Absolutely. Before construction begins, we deliver photorealistic 3D exterior elevations, 360-degree walkthroughs, and 3D interior renders so you can visualize your dream space with zero guesswork.",
  },
];

function FaqItem({ faq, isOpen, onToggle }: { faq: (typeof faqs)[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border/80 last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-teal"
        aria-expanded={isOpen}
      >
        <span className="pr-4 font-heading text-sm font-semibold sm:text-base text-foreground">
          {faq.q}
        </span>
        <div
          className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen ? "rotate-180 bg-teal text-white" : "bg-muted text-muted-foreground"
          }`}
        >
          <ChevronDown className="size-4" />
        </div>
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
    <section ref={sectionRef} id="faq" className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Heading */}
        <div
          className={`mb-14 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="accent-line" />
            <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">Help & Guidance</span>
            <div className="accent-line" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Frequently Asked <span className="text-teal">Questions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Everything you need to know about our turnkey construction process, pricing, material standards, and Vastu planning.
          </p>
        </div>

        {/* Accordion Card */}
        <div
          className={`rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 transition-all duration-700 delay-150 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.q}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Additional help footer */}
        <div className="mt-8 text-center text-xs text-muted-foreground">
          Have more questions? Call our lead engineer directly at{" "}
          <a
            href={`tel:${env.NEXT_PUBLIC_PHONE_PRIMARY.replace(/\s/g, "")}`}
            className="font-semibold text-teal hover:underline"
          >
            {env.NEXT_PUBLIC_PHONE_PRIMARY}
          </a>
        </div>
      </div>
    </section>
  );
}
