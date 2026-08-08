import type { Metadata } from "next";
import Script from "next/script";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutStandards from "@/components/about/AboutStandards";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutTeamRegions from "@/components/about/AboutTeamRegions";
import AboutCTA from "@/components/about/AboutCTA";
import { env } from "@/app/env";

export const metadata: Metadata = {
  title: `About Us | ${env.NEXT_PUBLIC_BUSINESS_NAME} — Civil Engineering & Turnkey Contracting`,
  description: `Learn about AKN Construction & Interiors, founded in 2008 by ${env.NEXT_PUBLIC_ENGINEER_NAME}, ${env.NEXT_PUBLIC_ENGINEER_DEGREE}. 18+ years of engineering excellence, Vastu architecture, and turnkey construction & modular interiors across ${env.NEXT_PUBLIC_LOCATION_PRIMARY} & ${env.NEXT_PUBLIC_LOCATION_SECONDARY}.`,
  keywords: [
    "About AKN Construction",
    "Er. Kumar Arjun Civil Engineer Dharmapuri",
    "Turnkey Civil Contractors Krishnagiri",
    "Vastu Building Planners Tamil Nadu",
    "AKN Construction History",
    "Commercial Building Contractors Dharmapuri",
  ],
  openGraph: {
    title: `About Us | ${env.NEXT_PUBLIC_BUSINESS_NAME}`,
    description: `Directed by ${env.NEXT_PUBLIC_ENGINEER_NAME}, ${env.NEXT_PUBLIC_ENGINEER_DEGREE}. Over 200 residential, commercial, healthcare, and industrial landmarks constructed across Tamil Nadu.`,
    url: `${env.NEXT_PUBLIC_SITE_URL}/about`,
    type: "website",
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "GeneralContractor",
    name: env.NEXT_PUBLIC_BUSINESS_NAME,
    founder: {
      "@type": "Person",
      name: env.NEXT_PUBLIC_ENGINEER_NAME,
      jobTitle: "Chief Civil Engineer",
      honorificSuffix: env.NEXT_PUBLIC_ENGINEER_DEGREE,
    },
    foundingDate: env.NEXT_PUBLIC_FOUNDED_YEAR,
    telephone: [env.NEXT_PUBLIC_PHONE_PRIMARY, env.NEXT_PUBLIC_PHONE_SECONDARY],
    email: env.NEXT_PUBLIC_EMAIL,
    areaServed: [
      { "@type": "City", name: env.NEXT_PUBLIC_LOCATION_PRIMARY },
      { "@type": "City", name: env.NEXT_PUBLIC_LOCATION_SECONDARY },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <main className="min-h-screen">
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutStandards />
        <AboutTimeline />
        <AboutTeamRegions />
        <AboutCTA />
      </main>
    </>
  );
}
