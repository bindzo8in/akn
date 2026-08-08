import Image from "next/image";
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
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3.5 sm:gap-4 group">
              <div className="relative size-14 sm:size-16 shrink-0 overflow-hidden rounded-2xl bg-white p-2 border border-border shadow-md transition-transform group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="AKN Construction Logo"
                  fill
                  sizes="(max-width: 640px) 56px, 64px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  <span className="text-gold">A</span>
                  <span className="text-teal">K</span>
                  <span className="text-gold">N</span>
                </span>
                <span className="font-heading text-sm sm:text-base font-bold text-foreground leading-tight">
                  Construction & Interiors
                </span>
                <span className="text-[11px] font-extrabold tracking-widest text-teal uppercase mt-1">
                  ENGINEER / CONTRACTORS
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-md">
              Institutional-grade civil engineering, building contracting, 2D/3D Vastu architecture, and luxury modular interiors across {env.NEXT_PUBLIC_LOCATION_PRIMARY} and {env.NEXT_PUBLIC_LOCATION_SECONDARY}.
            </p>
            <a
              href={env.NEXT_PUBLIC_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-teal"
              aria-label={`Instagram ${env.NEXT_PUBLIC_INSTAGRAM_HANDLE}`}
            >
              <InstagramIcon className="size-4 text-teal" />
              <span>{env.NEXT_PUBLIC_INSTAGRAM_HANDLE}</span>
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
              <li className="pt-1 text-xs leading-relaxed">{env.NEXT_PUBLIC_ADDRESS_FULL}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>© {year} {env.NEXT_PUBLIC_BUSINESS_NAME}. All Rights Reserved.</p>
          <p className="flex items-center gap-1 font-medium">
            Designed & Developed by{" "}
            <a
              href="https://bindzo8.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-teal hover:text-gold transition-colors underline decoration-teal/40 underline-offset-4"
            >
              Bindzo 8 Private Limited
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
