"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, X, MapPin, HardHat, ShieldCheck, Film } from "lucide-react";
import { aknOnsiteVideos, OnsiteVideo } from "@/lib/aknGalleryData";

export default function OnsiteVideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<OnsiteVideo | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoPlayerRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Lock scroll & mute video by default when video modal is active
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
      if (videoPlayerRef.current) {
        videoPlayerRef.current.muted = true;
      }
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedVideo]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedVideo(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-background py-24 md:py-32 overflow-hidden border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Heading */}
        <div
          className={`mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="accent-line" />
              <span className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">Site Documentation</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Live On-Site <span className="text-teal">Engineering Footage</span>
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted-foreground">
              Watch our engineers, machinery, and certified artisans in action across real project locations in Dharmapuri & Krishnagiri.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2 text-xs font-semibold text-muted-foreground shadow-sm">
            <Film className="size-4 text-gold" />
            <span>{aknOnsiteVideos.length} Direct Construction Recordings</span>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aknOnsiteVideos.map((vid, idx) => (
            <div
              key={vid.id}
              data-cursor="view"
              data-cursor-label="PLAY"
              onClick={() => setSelectedVideo(vid)}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/10 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Thumbnail Container */}
              <div className="relative h-60 w-full overflow-hidden bg-muted">
                <Image
                  src={vid.posterImage}
                  alt={vid.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108 brightness-95 group-hover:brightness-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Phase Pill */}
                <div className="absolute left-4 top-4 rounded-lg bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-bold text-teal border border-teal/30 shadow-md">
                  {vid.phase}
                </div>

                {/* Play Button Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-14 rounded-full border-2 border-gold bg-gold/90 text-[oklch(0.15_0_0)] shadow-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold">
                    <Play className="size-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Location indicator */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-gold">
                    <MapPin className="size-3.5" />
                    <span>{vid.location}</span>
                  </div>
                  <h3 className="mt-1 font-heading text-base font-bold leading-snug line-clamp-1">
                    {vid.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {vid.description}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs font-semibold text-teal group-hover:text-gold transition-colors">
                  <span>Watch Site Clip</span>
                  <HardHat className="size-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── High Definition Video Player Modal ── */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-lg animate-in fade-in duration-300"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative max-h-[95vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-gold/40 bg-card p-4 sm:p-6 shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute right-4 top-4 z-20 rounded-full bg-black/70 p-2 text-white shadow-lg backdrop-blur-md transition-all hover:bg-black hover:scale-110"
              aria-label="Close video"
            >
              <X className="size-5" />
            </button>

            {/* Video Player */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
              <video
                ref={videoPlayerRef}
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                muted
                playsInline
                className="h-full w-full object-contain"
              />
            </div>

            {/* Video Meta info */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-border pt-4">
              <div>
                <div className="inline-block rounded-md bg-teal/15 px-2.5 py-0.5 text-xs font-bold text-teal border border-teal/30 mb-1">
                  {selectedVideo.phase}
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                  {selectedVideo.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{selectedVideo.description}</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-gold shrink-0">
                <MapPin className="size-4" />
                <span>{selectedVideo.location}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
