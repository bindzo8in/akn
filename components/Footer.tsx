import Link from "next/link";
import { env } from "@/app/env";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "Residential Turnkey Villas", href: "/services#residential" },
  { label: "Commercial & Retail Complexes", href: "/services#commercial" },
  { label: "Hospital & Healthcare", href: "/services#healthcare" },
  { label: "Industrial PEB Warehouses", href: "/services#industrial" },
  { label: "2D Vastu & 3D Elevations", href: "/services#architecture" },
  { label: "Modular Interiors & Renovation", href: "/services#interiors" },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-heading text-xl font-bold tracking-tight">
              <span className="text-teal">AKN</span>
              <span className="ml-1 text-xs font-normal tracking-wider text-muted-foreground uppercase">
                Construction
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Institutional-grade civil engineering, building contracting, 2D/3D Vastu architecture, and luxury modular interiors across {env.NEXT_PUBLIC_LOCATION_PRIMARY} and {env.NEXT_PUBLIC_LOCATION_SECONDARY}.
            </p>
            <a
              href={env.NEXT_PUBLIC_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-teal"
              aria-label="Instagram"
            >
              <InstagramIcon className="size-4" />
              {env.NEXT_PUBLIC_INSTAGRAM_HANDLE}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-wider text-foreground uppercase">Quick Links</h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-teal">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-wider text-foreground uppercase">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((svc) => (
                <li key={svc.label}>
                  <Link href={svc.href} className="text-sm text-muted-foreground transition-colors hover:text-teal">
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-wider text-foreground uppercase">Contact Directory</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <a href={`tel:${env.NEXT_PUBLIC_PHONE_PRIMARY.replace(/\s/g, "")}`} className="transition-colors hover:text-teal">
                  {env.NEXT_PUBLIC_PHONE_PRIMARY}
                </a>
              </li>
              <li>
                <a href={`tel:${env.NEXT_PUBLIC_PHONE_SECONDARY.replace(/\s/g, "")}`} className="transition-colors hover:text-teal">
                  {env.NEXT_PUBLIC_PHONE_SECONDARY}
                </a>
              </li>
              <li>
                <a href={`mailto:${env.NEXT_PUBLIC_EMAIL}`} className="transition-colors hover:text-teal">
                  {env.NEXT_PUBLIC_EMAIL}
                </a>
              </li>
              <li>{env.NEXT_PUBLIC_LOCATION_PRIMARY} & {env.NEXT_PUBLIC_LOCATION_SECONDARY}</li>
              <li>{env.NEXT_PUBLIC_LOCATION_STATE}, India</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>© {year} {env.NEXT_PUBLIC_BUSINESS_NAME}. All Rights Reserved.</p>
          <p>{env.NEXT_PUBLIC_TAGLINE}</p>
        </div>
      </div>
    </footer>
  );
}
