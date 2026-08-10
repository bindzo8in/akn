import type { Metadata } from "next";
import Script from "next/script";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioGallery from "@/components/portfolio/PortfolioGallery";
import PortfolioBeforeAfter from "@/components/portfolio/PortfolioBeforeAfter";
import ExistingCustomers from "@/components/ExistingCustomers";
import OnsiteVideoShowcase from "@/components/OnsiteVideoShowcase";
import PortfolioTestimonials from "@/components/portfolio/PortfolioTestimonials";
import ServicesCTA from "@/components/services/ServicesCTA";
import { env } from "@/app/env";

export const metadata: Metadata = {
  title: `Completed Construction Projects & Portfolio | ${env.NEXT_PUBLIC_BUSINESS_NAME}`,
  description: `Explore our portfolio of 200+ completed residential duplexes, luxury villas, commercial arcades, healthcare clinics, PEB warehouses, and modular interiors in ${env.NEXT_PUBLIC_LOCATION_PRIMARY}, ${env.NEXT_PUBLIC_LOCATION_SECONDARY} & Tamil Nadu.`,
  keywords: [
    "AKN construction portfolio",
    "completed house projects Dharmapuri",
    "commercial building photos Krishnagiri",
    "villa elevation designs",
    "3D floor plans Tamil Nadu",
    "hospital construction projects",
    "industrial PEB warehouse photos",
  ],
  openGraph: {
    title: `Construction Portfolio & Case Studies | ${env.NEXT_PUBLIC_BUSINESS_NAME}`,
    description: `200+ residential, commercial, healthcare and PEB landmarks constructed with engineering excellence.`,
    url: `${env.NEXT_PUBLIC_SITE_URL}/portfolio`,
    type: "website",
  },
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "AKN Construction Completed Projects Portfolio",
  description: "Showcase of over 200 completed turnkey construction projects in Tamil Nadu.",
  publisher: {
    "@type": "GeneralContractor",
    name: env.NEXT_PUBLIC_BUSINESS_NAME,
    telephone: env.NEXT_PUBLIC_PHONE_PRIMARY,
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <main className="min-h-screen">
        <PortfolioHero />
        <PortfolioGallery />
        <PortfolioBeforeAfter />
        <ExistingCustomers />
        <OnsiteVideoShowcase />
        <PortfolioTestimonials />
        <ServicesCTA />
      </main>
    </>
  );
}
