import type { Metadata } from "next";
import Script from "next/script";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ServicesScopeMatrix from "@/components/services/ServicesScopeMatrix";
import ServicesCTA from "@/components/services/ServicesCTA";
import { env } from "@/app/env";

export const metadata: Metadata = {
  title: `Civil Engineering & Turnkey Construction Services | ${env.NEXT_PUBLIC_BUSINESS_NAME}`,
  description: `Explore AKN Construction's comprehensive civil engineering services: Turnkey Residential Villas, Commercial Complexes, Hospital Infrastructure, Industrial PEB Warehouses, 2D/3D Vastu Architecture, and Modular Interiors across ${env.NEXT_PUBLIC_LOCATION_PRIMARY} & ${env.NEXT_PUBLIC_LOCATION_SECONDARY}.`,
  keywords: [
    "turnkey house construction Dharmapuri",
    "civil contractor Krishnagiri",
    "commercial building construction",
    "hospital infrastructure builder Tamil Nadu",
    "PEB industrial warehouse builder",
    "2D Vastu floor plan designer",
    "3D elevation design",
    "modular interior joinery Dharmapuri",
  ],
  openGraph: {
    title: `Construction & Engineering Services | ${env.NEXT_PUBLIC_BUSINESS_NAME}`,
    description: `Complete turnkey residential, commercial, healthcare & industrial construction services led by ${env.NEXT_PUBLIC_ENGINEER_NAME}, ${env.NEXT_PUBLIC_ENGINEER_DEGREE}.`,
    url: `${env.NEXT_PUBLIC_SITE_URL}/services`,
    type: "website",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Civil Engineering & Turnkey Building Construction",
  provider: {
    "@type": "GeneralContractor",
    name: env.NEXT_PUBLIC_BUSINESS_NAME,
    telephone: env.NEXT_PUBLIC_PHONE_PRIMARY,
    address: {
      "@type": "PostalAddress",
      addressLocality: env.NEXT_PUBLIC_LOCATION_PRIMARY,
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  },
  areaServed: [
    { "@type": "City", name: env.NEXT_PUBLIC_LOCATION_PRIMARY },
    { "@type": "City", name: env.NEXT_PUBLIC_LOCATION_SECONDARY },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AKN Engineering Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Turnkey Residential Villa Construction",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial & Retail Building Construction",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hospital & Healthcare Infrastructure",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Industrial PEB Steel Warehouses",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "2D Vastu Floor Planning & 3D Elevations",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Modular Interiors & Turnkey Renovation",
        },
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <main className="min-h-screen">
        <ServicesHero />
        <ServicesList />
        <ServicesScopeMatrix />
        <ServicesCTA />
      </main>
    </>
  );
}
