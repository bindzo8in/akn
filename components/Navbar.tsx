"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { env } from "@/app/env";
import ThemeToggle from "@/components/ThemeToggle";

/* Inline SVG social icon */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const navLinks = [
  { label: "Home", href: "/", anchor: "#home" },
  { label: "About Us", href: "/about", anchor: "" },
  { label: "Services", href: "/services", anchor: "" },
  { label: "Portfolio", href: "/portfolio", anchor: "" },
  { label: "Contact Us", href: "/contact", anchor: "" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(isHomePage ? "#home" : pathname);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    
    // Scrolled state triggers after 30px
    setIsScrolled(currentY > 30);

    // Hide/show logic based on scroll direction
    if (currentY > 200) {
      if (currentY > lastScrollY && currentY - lastScrollY > 6) {
        setIsHidden(true); // scrolling down
      } else if (lastScrollY - currentY > 6) {
        setIsHidden(false); // scrolling up
      }
    } else {
      setIsHidden(false);
    }
    
    setLastScrollY(currentY);

    // Active section tracking on home page
    if (isHomePage) {
      for (const link of [...navLinks].reverse()) {
        if (link.anchor) {
          const el = document.querySelector(link.anchor);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 160) {
              setActiveSection(link.anchor);
              break;
            }
          }
        }
      }
    }
  }, [isHomePage, lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Reset scroll and menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setIsHidden(false);
    if (pathname.startsWith("/about")) {
      setActiveSection("/about");
    } else if (pathname.startsWith("/services")) {
      setActiveSection("/services");
    } else if (pathname.startsWith("/portfolio")) {
      setActiveSection("/portfolio");
    } else if (pathname.startsWith("/contact")) {
      setActiveSection("/contact");
    } else if (pathname === "/") {
      setActiveSection("#home");
    }
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = (link: (typeof navLinks)[0]) => {
    setIsMobileOpen(false);

    // If dedicated page link
    if (link.href.startsWith("/") && !link.href.includes("#")) {
      if (pathname === link.href) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push(link.href);
      }
      return;
    }

    // Anchor on Home page
    if (isHomePage && link.anchor) {
      const el = document.querySelector(link.anchor);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(link.href);
    }
  };

  const isTransparentNav = isHomePage && !isScrolled;
  const navTextColor = isTransparentNav ? "text-white" : "text-foreground";
  const navMutedColor = isTransparentNav ? "text-white/90" : "text-muted-foreground";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* ── Top Contact Bar ── */}
        <div
          className={`bg-teal text-white text-xs transition-all duration-300 overflow-hidden ${
            isScrolled ? "h-0 opacity-0" : "h-8 opacity-100"
          }`}
        >
          <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 sm:px-6">
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href={`tel:${env.NEXT_PUBLIC_PHONE_PRIMARY.replace(/\s/g, "")}`}
                className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
                aria-label={`Call engineer ${env.NEXT_PUBLIC_PHONE_PRIMARY}`}
              >
                <Phone className="size-3" />
                <span className="hidden sm:inline">{env.NEXT_PUBLIC_PHONE_PRIMARY}</span>
              </a>
              <a
                href={`mailto:${env.NEXT_PUBLIC_EMAIL}`}
                className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
                aria-label={`Send email to ${env.NEXT_PUBLIC_EMAIL}`}
              >
                <Mail className="size-3" />
                <span className="hidden sm:inline">{env.NEXT_PUBLIC_EMAIL}</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <MapPin className="size-3" />
                {env.NEXT_PUBLIC_LOCATION_PRIMARY} | {env.NEXT_PUBLIC_LOCATION_SECONDARY}
              </span>
              <a
                href={env.NEXT_PUBLIC_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
                aria-label="Instagram"
              >
                <InstagramIcon className="size-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* ── Main Navigation Bar ── */}
        <nav
          className={`transition-all duration-300 ${
            isTransparentNav
              ? "bg-black/40 backdrop-blur-md border-b border-white/10 py-3.5"
              : "border-b border-border/50 bg-background/95 shadow-md backdrop-blur-xl py-3"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 sm:gap-4"
              onClick={() => setIsMobileOpen(false)}
            >
              <div className="relative size-10 md:size-14 lg:size-16 shrink-0 overflow-hidden rounded-2xl bg-white/95 p-1.5 shadow-md border border-white/30 transition-transform group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="AKN Construction Logo"
                  fill
                  sizes="(max-width: 768px) 40px, (max-width: 1024px) 56px, 64px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center leading-none">
                <span className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight">
                  <span className="text-gold">A</span>
                  <span className={isTransparentNav ? "text-white" : "text-teal"}>K</span>
                  <span className="text-gold">N</span>
                  <span className={`ml-1.5 text-xs sm:text-sm md:text-base font-bold tracking-tight ${isTransparentNav ? "text-white" : "text-foreground"}`}>
                    Construction & Interiors
                  </span>
                </span>
                <span className={`text-[10px] sm:text-xs md:text-xs font-extrabold tracking-widest uppercase mt-1 ${isTransparentNav ? "text-gold" : "text-teal"}`}>
                  Engineer / Contractors
                </span>
              </div>
            </Link>

            {/* Desktop Links */}
            <ul className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => {
                const isDedicatedRouteActive =
                  !link.href.includes("#") &&
                  ((link.href === "/" && pathname === "/") ||
                    (link.href !== "/" && pathname.startsWith(link.href)));

                const isHomeAnchorActive =
                  isHomePage && link.anchor && activeSection === link.anchor;

                const isActive = isDedicatedRouteActive || isHomeAnchorActive;

                return (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link)}
                      className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors ${
                        isActive
                          ? isTransparentNav
                            ? "text-gold font-bold"
                            : "text-teal font-bold"
                          : `${navMutedColor} ${isTransparentNav ? "hover:text-gold" : "hover:text-teal"}`
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span
                          className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full ${
                            isTransparentNav ? "bg-gold" : "bg-teal"
                          }`}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Right Controls: Theme Toggle & Desktop CTA */}
            <div className="flex items-center gap-3">
              <ThemeToggle isScrolled={!isTransparentNav} />

              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-gold px-3.5 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-extrabold text-slate-950 shadow-sm transition-all hover:bg-gold/90 hover:shadow-md"
              >
                Get Free Quote
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className={`inline-flex items-center justify-center rounded-xl p-2 md:hidden ${
                  isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
                }`}
                aria-label="Toggle navigation menu"
              >
                {isMobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-50 bg-background/98 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-border/50">
          <div className="flex items-center gap-2.5">
            <div className="relative size-9 overflow-hidden rounded-xl bg-muted p-1 border border-border">
              <Image
                src="/images/logo.png"
                alt="AKN Construction Logo"
                fill
                sizes="36px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center leading-none">
              <span className="font-heading text-base font-bold text-foreground">
                <span className="text-gold">A</span>
                <span className="text-teal">K</span>
                <span className="text-gold">N</span>{" "}
                <span className="text-xs font-semibold text-foreground">Construction & Interiors</span>
              </span>
              <span className="text-[10px] font-bold tracking-wider text-teal uppercase mt-0.5">
                Engineer / Contractors
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle isScrolled={true} />
            <button
              onClick={() => setIsMobileOpen(false)}
              className="rounded-xl p-2 text-foreground hover:bg-muted"
              aria-label="Close navigation menu"
            >
              <X className="size-6" />
            </button>
          </div>
        </div>

        <div className="flex h-[calc(100vh-80px)] flex-col items-center justify-center gap-6 px-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className="text-2xl font-heading font-bold tracking-tight text-foreground transition-colors hover:text-teal"
            >
              {link.label}
            </button>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMobileOpen(false)}
            className="mt-6 w-full max-w-xs rounded-xl bg-gold py-4 text-center text-base font-extrabold text-slate-950 shadow-md transition-all hover:bg-gold/90"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </>
  );
}
