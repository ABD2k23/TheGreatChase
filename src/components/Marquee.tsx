"use client";

import * as React from "react";
import { motion, useMotionValue, animate } from "framer-motion";

type MarqueeProps = {
  one: string;
  two: string;
  three: string;
  rotation?: number;
  speed?: number;
};

const chipClassName = "bg-[#ECE4D5] p-2 rounded-[8px] w-fit";

const ChipRow = ({
  one,
  two,
  three,
}: Pick<MarqueeProps, "one" | "two" | "three">) => {
  const [isHoverSupported, setIsHoverSupported] = React.useState(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(hover: hover)").matches;
  });

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover)");
    const handleChange = (e: MediaQueryListEvent) => {
      setIsHoverSupported(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 md:gap-4 shrink-0">
      {[one, two, three].map((label) => (
        <motion.div
          key={label}
          className={`${chipClassName} text-xs md:text-base`}
          style={{ ["cornerShape" as keyof React.CSSProperties]: "squircle" }}
          whileHover={isHoverSupported ? { scale: 1.04, y: -2 } : {}}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 420, damping: 26 }}
        >
          <h5>{label}</h5>
        </motion.div>
      ))}
    </div>
  );
};

const Marquee = ({
  one,
  two,
  three,
  rotation = 2,
  speed = 32,
}: MarqueeProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const segmentRef = React.useRef<HTMLDivElement | null>(null);

  // Continuous marquee scroll position
  const x = useMotionValue(0);

  // Entry offset — direction mirrors the rotation sign.
  // Positive rotation → slides in from the right (+160).
  // Negative rotation → slides in from the left (−160).
  const entryX = useMotionValue(rotation >= 0 ? 160 : -160);

  const [segmentWidth, setSegmentWidth] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);
  const isInViewRef = React.useRef(false);
  const startX = rotation >= 0 ? 160 : -160;

  // Viewport detection — re-runs every time the element enters or leaves view.
  // Entering (top <= 80vh): spring animate to 0.
  // Leaving (top > 80vh): snap back to startX so it's ready for the next entry.
  React.useEffect(() => {
    const check = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const entering = rect.top <= window.innerHeight * 0.8;

      if (entering && !isInViewRef.current) {
        isInViewRef.current = true;
        animate(entryX, 0, { type: "spring", stiffness: 90, damping: 18 });
      } else if (!entering && isInViewRef.current) {
        isInViewRef.current = false;
        entryX.set(startX);
      }
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [entryX, startX]);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  React.useLayoutEffect(() => {
    const el = segmentRef.current;
    if (!el) return;
    const update = () => setSegmentWidth(el.getBoundingClientRect().width);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [one, two, three]);

  // Continuous marquee RAF loop
  React.useEffect(() => {
    if (!segmentWidth) return;

    const dir = rotation >= 0 ? -1 : 1;
    const range = segmentWidth;
    const state = { lastTime: 0, currentX: dir === -1 ? 0 : -range, rafId: 0 };

    x.set(state.currentX);

    const step = (time: number) => {
      if (!state.lastTime) state.lastTime = time;
      const delta = (time - state.lastTime) / 1000;
      state.lastTime = time;

      state.currentX += dir * speed * delta;

      if (dir === -1 && state.currentX <= -range) state.currentX += range;
      else if (dir === 1 && state.currentX >= 0) state.currentX -= range;

      x.set(state.currentX);
      state.rafId = window.requestAnimationFrame(step);
    };

    state.rafId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(state.rafId);
  }, [rotation, segmentWidth, speed, x]);

  const mobileRotation = isMobile ? 0 : rotation;

  return (
    // overflow-hidden sits outside entryX so the marquee clips during its slide-in
    <div
      ref={containerRef}
      className="w-full overflow-hidden py-32 md:16 md:py-32"
      style={{ transform: `rotate(${mobileRotation}deg)` }}
    >
      {/* Entry slide — moves from 160px right to 0 when hitting 80% viewport */}
      <motion.div style={{ x: entryX }}>
        {/* Continuous marquee scroll */}
        <motion.div className="flex will-change-transform" style={{ x }}>
          {/* Segment A (measured) */}
          <div ref={segmentRef} className="flex gap-2 md:gap-4 shrink-0">
            <ChipRow one={one} two={two} three={three} />
            <ChipRow one={one} two={two} three={three} />
            <ChipRow one={one} two={two} three={three} />
          </div>

          {/* Segment B (duplicate) */}
          <div aria-hidden className="flex gap-2 md:gap-4 shrink-0">
            <ChipRow one={one} two={two} three={three} />
            <ChipRow one={one} two={two} three={three} />
            <ChipRow one={one} two={two} three={three} />
            <div aria-hidden className="w-8 shrink-0" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Marquee;
