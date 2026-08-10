"use client";

import { useEffect, useRef, useState } from "react";
import {
  User,
  MapPin,
  CheckCircle2,
  Clock,
  Search,
  Building2,
  Sparkles,
  ShieldCheck,
  Briefcase,
  LayoutGrid,
  ListFilter,
} from "lucide-react";
import { existingCustomers, Customer } from "@/lib/customersData";

export default function ExistingCustomers() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "Completed Project" | "Ongoing Project">("All");
  const [locationFilter, setLocationFilter] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

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

  // Filtered customer list
  const filteredCustomers = existingCustomers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.projectType.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ? true : customer.status === statusFilter;

    const matchesLocation =
      locationFilter === "All"
        ? true
        : customer.location.toLowerCase().includes(locationFilter.toLowerCase());

    return matchesSearch && matchesStatus && matchesLocation;
  });

  const completedCount = existingCustomers.filter(
    (c) => c.status === "Completed Project"
  ).length;
  const ongoingCount = existingCustomers.filter(
    (c) => c.status === "Ongoing Project"
  ).length;

  return (
    <section
      ref={sectionRef}
      id="customers"
      className="relative bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Heading */}
        <div
          className={`mb-14 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="accent-line" />
            <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
              Verified Client Registry
            </span>
            <div className="accent-line" />
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Existing <span className="text-teal">Customer List</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Official project directory of property owners, medical practitioners, and commercial entities building with AKN Construction across Hosur, Krishnagiri &amp; Dharmapuri.
          </p>
        </div>

        {/* Top Summary Metrics Banner */}
        <div
          className={`mb-12 grid grid-cols-2 gap-4 md:grid-cols-4 transition-all duration-700 delay-100 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <User className="size-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {existingCustomers.length}
                </p>
                <p className="text-xs text-muted-foreground">Total Listed Clients</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                <CheckCircle2 className="size-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {completedCount}
                </p>
                <p className="text-xs text-muted-foreground">Completed Handovers</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                <Clock className="size-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{ongoingCount}</p>
                <p className="text-xs text-muted-foreground">Ongoing Active Sites</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-teal/10 text-teal">
                <MapPin className="size-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-xs text-muted-foreground">Key Regional Belts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div
          className={`mb-8 flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm md:flex-row md:items-center md:justify-between transition-all duration-700 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by customer name, location, or project type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-4 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal"
            />
          </div>

          {/* Status Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {(["All", "Completed Project", "Ongoing Project"] as const).map(
              (status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                    statusFilter === status
                      ? "bg-teal text-white shadow-sm shadow-teal/20"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  {status === "All"
                    ? `All (${existingCustomers.length})`
                    : status === "Completed Project"
                    ? `Completed (${completedCount})`
                    : `Ongoing (${ongoingCount})`}
                </button>
              )
            )}
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-1 rounded-xl bg-muted p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`rounded-lg p-1.5 transition-colors ${
                viewMode === "grid"
                  ? "bg-card text-teal shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              title="Grid View"
            >
              <LayoutGrid className="size-4" />
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`rounded-lg p-1.5 transition-colors ${
                viewMode === "table"
                  ? "bg-card text-teal shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              title="Table View"
            >
              <ListFilter className="size-4" />
            </button>
          </div>
        </div>

        {/* Customer Content Display */}
        {filteredCustomers.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-card/50 p-12 text-center">
            <User className="mx-auto size-10 text-muted-foreground/50" />
            <h3 className="mt-3 text-sm font-semibold text-foreground">
              No customers found
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Try adjusting your search query or filter selection.
            </p>
          </div>
        ) : viewMode === "grid" ? (
          /* Grid View Cards */
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCustomers.map((customer, i) => (
              <div
                key={customer.id}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-teal/50 hover:shadow-xl hover:shadow-teal/5 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Header Badge & S.No */}
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex size-7 items-center justify-center rounded-lg bg-teal/10 text-xs font-bold text-teal">
                      #{customer.sNo}
                    </span>

                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                        customer.status === "Completed Project"
                          ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                      }`}
                    >
                      {customer.status === "Completed Project" ? (
                        <CheckCircle2 className="size-3" />
                      ) : (
                        <Clock className="size-3 animate-pulse" />
                      )}
                      {customer.status}
                    </span>
                  </div>

                  {/* Customer Name */}
                  <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-teal transition-colors">
                    {customer.name}
                  </h3>

                  {/* Location Tag */}
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                    <MapPin className="size-3.5 text-teal shrink-0" />
                    <span>{customer.location}</span>
                  </div>

                  {/* Project Type */}
                  <div className="mt-4 rounded-xl bg-muted/60 p-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5 font-medium text-foreground mb-1">
                      <Building2 className="size-3.5 text-teal" />
                      <span>Scope &amp; Details</span>
                    </div>
                    <p className="line-clamp-2">{customer.projectType}</p>
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-5 border-t border-border/80 pt-3 flex items-center justify-between text-[11px]">
                  <span className="text-muted-foreground font-medium">
                    District: {customer.district}
                  </span>
                  <span className="font-semibold text-teal">
                    {customer.badgeText}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Table View */
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="border-b border-border bg-muted/50 text-muted-foreground font-semibold">
                  <tr>
                    <th className="px-4 py-3.5 text-center">S.No</th>
                    <th className="px-4 py-3.5">Customer Name</th>
                    <th className="px-4 py-3.5">Location</th>
                    <th className="px-4 py-3.5">Project Scope</th>
                    <th className="px-4 py-3.5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 text-foreground">
                  {filteredCustomers.map((customer) => (
                    <tr
                      key={customer.id}
                      className="hover:bg-muted/30 transition-colors"
                    >
                      <td className="px-4 py-3.5 text-center font-bold text-teal">
                        #{customer.sNo}
                      </td>
                      <td className="px-4 py-3.5 font-bold text-foreground">
                        {customer.name}
                      </td>
                      <td className="px-4 py-3.5 text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="size-3.5 text-teal shrink-0" />
                          <span>{customer.location}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-muted-foreground">
                        {customer.projectType}
                      </td>
                      <td className="px-4 py-3.5">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                            customer.status === "Completed Project"
                              ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                              : "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                          }`}
                        >
                          {customer.status === "Completed Project" ? (
                            <CheckCircle2 className="size-3" />
                          ) : (
                            <Clock className="size-3" />
                          )}
                          {customer.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Footer Guarantee / Trust Banner */}
        <div
          className={`mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl border border-teal/20 bg-teal/5 p-6 sm:flex-row sm:p-8 transition-all duration-700 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="size-8 text-teal shrink-0" />
            <div>
              <h4 className="font-heading text-sm font-bold text-foreground sm:text-base">
                Transparent Civil Operations &amp; Site Progress
              </h4>
              <p className="text-xs text-muted-foreground">
                All completed and active construction sites are logged with verified material test reports, structural audit certificates, and direct site engineer updates.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 rounded-xl bg-teal px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-teal/90 transition-all"
          >
            Inquire About Your Site
          </a>
        </div>
      </div>
    </section>
  );
}
