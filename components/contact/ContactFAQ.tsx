"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is included in the complimentary plot site visit?",
    answer: "Our Lead Civil Engineer personally inspects your site to evaluate soil conditions, plot orientation for Vastu Shastra, access road width for material transport, and municipal setback requirements. We then provide a preliminary 2D layout concept and itemized cost estimation free of charge.",
  },
  {
    question: "How do you guarantee zero cost escalations during construction?",
    answer: "Before any construction begins, we prepare a 100% itemized Bill of Quantities (BOQ) detailing every material brand (e.g. Tata Tiscon steel, UltraTech cement, Dr. Fixit waterproofing), unit rate, and quantity. This BOQ is contractually locked, guaranteeing you will never face surprise mid-project price spikes.",
  },
  {
    question: "Do you handle DTCP, LPA, and local body sanction approvals?",
    answer: "Yes. Our in-house architectural drafting wing prepares all necessary structural blueprints, layout maps, and documentation required for DTCP (Directorate of Town and Country Planning), LPA, and local Panchayat approvals across Dharmapuri and Krishnagiri districts.",
  },
  {
    question: "How is the payment structure organized?",
    answer: "Payments are strictly linked to verified physical engineering milestones — including Foundation Footing, Plinth Beam Completion, RCC Roof Casting, Masonry & Plastering, Joinery/Flooring, and Final Handover. You only pay after each milestone is physically inspected and approved.",
  },
  {
    question: "Can we request revisions on the 3D elevation and Vastu floor plan?",
    answer: "Absolutely. We provide iterative 3D photorealistic exterior elevations and 2D floor plans until you are 100% satisfied with the aesthetics, room proportions, daylighting, and Vastu alignment.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="accent-line" />
            <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">Got Questions?</span>
            <div className="accent-line" />
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked <span className="text-teal">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-colors hover:border-teal/30"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-foreground transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="size-4 text-teal shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`size-4 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-teal" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
