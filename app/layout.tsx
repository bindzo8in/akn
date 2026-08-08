import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Inter, Outfit } from "next/font/google";
import { cn } from "@/lib/utils";
import { env } from "@/app/env";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans-family",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading-family",
});

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title: {
    default: `${env.NEXT_PUBLIC_BUSINESS_NAME} — Engineer · Contractors | ${env.NEXT_PUBLIC_LOCATION_PRIMARY} & ${env.NEXT_PUBLIC_LOCATION_SECONDARY}`,
    template: `%s | ${env.NEXT_PUBLIC_BUSINESS_NAME}`,
  },
  description: `${env.NEXT_PUBLIC_BUSINESS_NAME} delivers end-to-end construction, architectural planning, and interior design services across ${env.NEXT_PUBLIC_LOCATION_PRIMARY}, ${env.NEXT_PUBLIC_LOCATION_SECONDARY} & surrounding regions in ${env.NEXT_PUBLIC_LOCATION_STATE}. Led by ${env.NEXT_PUBLIC_ENGINEER_NAME}, ${env.NEXT_PUBLIC_ENGINEER_DEGREE}.`,
  keywords: [
    "construction company Dharmapuri",
    "building contractor Krishnagiri",
    "interior design Tamil Nadu",
    "residential construction",
    "commercial construction",
    "hospital construction",
    "industrial construction",
    "Vastu house plans",
    "3D elevation design",
    "AKN Construction",
    "civil engineer Dharmapuri",
    "renovation contractor",
    "modular kitchen Dharmapuri",
    "PEB steel structure",
  ],
  authors: [{ name: env.NEXT_PUBLIC_ENGINEER_NAME }],
  creator: env.NEXT_PUBLIC_BUSINESS_NAME,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: env.NEXT_PUBLIC_SITE_URL,
    siteName: env.NEXT_PUBLIC_BUSINESS_NAME,
    title: `${env.NEXT_PUBLIC_BUSINESS_NAME} — ${env.NEXT_PUBLIC_TAGLINE}`,
    description: `End-to-end construction, architectural planning & interior design in ${env.NEXT_PUBLIC_LOCATION_PRIMARY} – ${env.NEXT_PUBLIC_LOCATION_SECONDARY}, ${env.NEXT_PUBLIC_LOCATION_STATE}.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${env.NEXT_PUBLIC_BUSINESS_NAME} — ${env.NEXT_PUBLIC_TAGLINE}`,
    description: `End-to-end construction, architectural planning & interior design in ${env.NEXT_PUBLIC_LOCATION_PRIMARY} – ${env.NEXT_PUBLIC_LOCATION_SECONDARY}.`,
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* JSON-LD structured data for local business SEO */
function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: env.NEXT_PUBLIC_BUSINESS_NAME,
    description: `End-to-end construction, architectural planning & interior design in ${env.NEXT_PUBLIC_LOCATION_PRIMARY} – ${env.NEXT_PUBLIC_LOCATION_SECONDARY}.`,
    url: env.NEXT_PUBLIC_SITE_URL,
    telephone: env.NEXT_PUBLIC_PHONE_PRIMARY,
    email: env.NEXT_PUBLIC_EMAIL,
    foundingDate: env.NEXT_PUBLIC_FOUNDED_YEAR,
    areaServed: [
      { "@type": "City", name: env.NEXT_PUBLIC_LOCATION_PRIMARY },
      { "@type": "City", name: env.NEXT_PUBLIC_LOCATION_SECONDARY },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: env.NEXT_PUBLIC_ADDRESS_STREET,
      addressLocality: env.NEXT_PUBLIC_LOCATION_PRIMARY,
      addressRegion: "Tamil Nadu",
      postalCode: "635001",
      addressCountry: "IN",
    },
    sameAs: [env.NEXT_PUBLIC_INSTAGRAM_URL, env.NEXT_PUBLIC_YOUTUBE_URL],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:30",
      },
    ],
  };

  return (
    <Script
      id="local-business-jsonld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(inter.variable, outfit.variable)}>
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          <CustomCursor />
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
