"use client";

import { useEffect, useRef, useState } from "react";
import { Eye, ArrowUpRight, MoveHorizontal } from "lucide-react";

type CursorType = "default" | "button" | "view" | "heading" | "drag" | "input";

interface CursorState {
  type: CursorType;
  label?: string;
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [isPointerFine, setIsPointerFine] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>({ type: "default" });
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Strictly verify if device has fine mouse pointer and is NOT a touch device
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(hover: none)").matches;

    if (!hasFinePointer || isTouchDevice) {
      return; // Zero initialization on mobile/tablet/touch screens
    }

    setIsPointerFine(true);

    // Mouse positions
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Direct immediate transform for center dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Smooth lerp loop for the outer trailing magnetic ring (60-120fps GPU accelerated)
    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animFrameId = requestAnimationFrame(render);
    };

    animFrameId = requestAnimationFrame(render);

    // Component-aware dynamic context detector
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // 1. Explicit data-cursor attribute
      const explicitCursor = target.closest("[data-cursor]") as HTMLElement | null;
      if (explicitCursor) {
        const rawType = explicitCursor.getAttribute("data-cursor") as string;
        const customType = (rawType === "image" ? "view" : rawType) as CursorType;
        const customLabel = explicitCursor.getAttribute("data-cursor-label") || (customType === "view" ? "VIEW" : undefined);
        setCursorState({
          type: customType || "view",
          label: customLabel,
        });
        return;
      }

      // 2. Drag / Slider detection
      if (
        target.closest("[data-slider]") ||
        target.closest(".before-after-slider") ||
        target.getAttribute("type") === "range"
      ) {
        setCursorState({ type: "drag", label: "DRAG" });
        return;
      }

      // 3. Modal trigger elements specifically (e.g. gallery item, modal card)
      const isModalTrigger =
        target.closest("[data-modal-trigger]") ||
        target.closest(".portfolio-card") ||
        target.closest("[data-gallery-item]");

      if (isModalTrigger) {
        setCursorState({ type: "view", label: "VIEW" });
        return;
      }

      // 4. Buttons, Links & Clickables
      const isButtonOrLink =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']") ||
        target.classList.contains("cursor-pointer");

      if (isButtonOrLink) {
        setCursorState({ type: "button" });
        return;
      }

      // 5. Headings (h1, h2, h3)
      if (
        target.tagName === "H1" ||
        target.tagName === "H2" ||
        target.tagName === "H3" ||
        target.closest("h1") ||
        target.closest("h2") ||
        target.closest("h3")
      ) {
        setCursorState({ type: "heading" });
        return;
      }

      // 6. Text Inputs
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT"
      ) {
        setCursorState({ type: "input" });
        return;
      }

      // Default (clean state for static images/body)
      setCursorState({ type: "default" });
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animFrameId);
    };
  }, [isVisible]);

  if (!isPointerFine) {
    return null; // Zero DOM and zero CPU overhead on touch devices
  }

  const { type, label } = cursorState;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* ── Dynamic Trailing Badge & Ring ── */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 will-change-transform"
        style={{
          transform: "translate3d(-100px, -100px, 0)",
        }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-300 ease-out select-none ${
            type === "view"
              ? "size-20 border-2 border-gold/80 bg-black/80 text-white backdrop-blur-md shadow-[0_0_25px_rgba(226,179,64,0.4)] scale-100"
              : type === "drag"
              ? "size-20 border-2 border-teal bg-teal/85 text-white backdrop-blur-md shadow-xl scale-100"
              : type === "button"
              ? "size-12 border-2 border-gold bg-gold/20 backdrop-blur-[2px] shadow-[0_0_18px_rgba(226,179,64,0.4)] scale-110"
              : type === "heading"
              ? "size-14 border border-teal/60 bg-teal/10 backdrop-blur-[1px] shadow-[0_0_12px_rgba(26,122,109,0.3)] scale-100"
              : type === "input"
              ? "size-8 border border-muted-foreground/40 bg-background/50 scale-75"
              : isClicking
              ? "size-6 border border-teal bg-teal/30 scale-90"
              : "size-9 border border-teal/70 bg-teal/5 scale-100"
          }`}
        >
          {/* Modal View Badge */}
          {type === "view" && (
            <div className="flex flex-col items-center justify-center animate-in fade-in zoom-in duration-200">
              <Eye className="size-4 text-gold mb-0.5" />
              <span className="text-[10px] font-extrabold tracking-widest text-gold uppercase">
                {label || "VIEW"}
              </span>
            </div>
          )}

          {/* Drag Slider Badge */}
          {type === "drag" && (
            <div className="flex flex-col items-center justify-center animate-in fade-in zoom-in duration-200">
              <MoveHorizontal className="size-4 text-white mb-0.5" />
              <span className="text-[10px] font-black tracking-wider text-white uppercase">
                {label || "DRAG"}
              </span>
            </div>
          )}

          {/* Button Interactive Arrow */}
          {type === "button" && (
            <div className="animate-in fade-in duration-200">
              <ArrowUpRight className="size-4 text-gold" />
            </div>
          )}
        </div>
      </div>

      {/* ── Center Pinpoint Precision Dot ── */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 will-change-transform"
        style={{
          transform: "translate3d(-100px, -100px, 0)",
        }}
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ease-out ${
            type === "view" || type === "drag" || type === "button"
              ? "size-0 opacity-0 scale-0"
              : type === "heading"
              ? "size-2 bg-teal shadow-[0_0_8px_rgba(26,122,109,0.8)]"
              : isClicking
              ? "size-1.5 bg-teal scale-75"
              : "size-1.5 bg-teal"
          }`}
        />
      </div>
    </div>
  );
}
