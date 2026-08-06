import type { Metadata } from "next";
import Script from "next/script";
import ContactHero from "@/components/contact/ContactHero";
import ContactMapDirectory from "@/components/contact/ContactMapDirectory";
import ContactForm from "@/components/contact/ContactForm";
import ContactFAQ from "@/components/contact/ContactFAQ";
import { env } from "@/app/env";

export const metadata: Metadata = {
  title: `Contact Us & Site Feasibility Consultation | ${env.NEXT_PUBLIC_BUSINESS_NAME}`,
  description: `Contact AKN Construction & Interiors. Visit our design headquarters in ${env.NEXT_PUBLIC_LOCATION_PRIMARY} or branch in ${env.NEXT_PUBLIC_LOCATION_SECONDARY}. Call ${env.NEXT_PUBLIC_PHONE_PRIMARY} for a complimentary plot soil study, 2D Vastu concept, and itemized estimate.`,
  keywords: [
    "Contact AKN Construction",
    "civil engineer office Dharmapuri",
    "building contractor phone number Krishnagiri",
    "free house estimate Tamil Nadu",
    "Dharmapuri construction company address",
    "Er. Kumar civil engineer contact",
  ],
  openGraph: {
    title: `Contact & Office Directory | ${env.NEXT_PUBLIC_BUSINESS_NAME}`,
    description: `Connect with Chief Civil Engineer ${env.NEXT_PUBLIC_ENGINEER_NAME}, ${env.NEXT_PUBLIC_ENGINEER_DEGREE}. Office location, map directions, phone, and project inquiry form.`,
    url: `${env.NEXT_PUBLIC_SITE_URL}/contact`,
    type: "website",
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "GeneralContractor",
    name: env.NEXT_PUBLIC_BUSINESS_NAME,
    telephone: env.NEXT_PUBLIC_PHONE_PRIMARY,
    email: env.NEXT_PUBLIC_EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: env.NEXT_PUBLIC_LOCATION_PRIMARY,
      addressRegion: "Tamil Nadu",
      postalCode: "636701",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.131976",
      longitude: "78.125692",
    },
    openingHours: "Mo-Sa 09:00-19:30",
  },
};

export default function ContactPage() {
  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <main className="min-h-screen">
        <ContactHero />
        <ContactMapDirectory />
        <ContactForm />
        <ContactFAQ />
      </main>
    </>
  );
}
