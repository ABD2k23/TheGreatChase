"use client";

import * as React from "react";
import { animate, motion, useMotionValue } from "framer-motion";

type MarqueeProps = {
  one: string;
  two: string;
  three: string;
  rotation?: number; // degrees
  speed?: number; // px/sec
};

const chipClassName = "bg-[#ECE4D5] p-2 rounded-[8px] w-fit";

const ChipRow = ({
  one,
  two,
  three,
}: Pick<MarqueeProps, "one" | "two" | "three">) => {
  const [isHoverSupported, setIsHoverSupported] = React.useState(true);

  React.useEffect(() => {
    // Check if device supports hover (not a touch device)
    const mediaQuery = window.matchMedia("(hover: hover)");
    setIsHoverSupported(mediaQuery.matches);

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
  const segmentRef = React.useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const [segmentWidth, setSegmentWidth] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
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

  React.useEffect(() => {
    if (!segmentWidth) return;

    // Direction is derived from rotation sign.
    // rotation >= 0 -> move left, rotation < 0 -> move right
    const dir = rotation >= 0 ? -1 : 1;
    const from = dir === -1 ? 0 : -segmentWidth;
    const to = dir === -1 ? -segmentWidth : 0;

    x.set(from);

    const controls = animate(x, [from, to], {
      ease: "linear",
      duration: Math.max(0.2, segmentWidth / Math.max(10, speed)),
      repeat: Infinity,
      repeatType: "loop",
    });

    return () => controls.stop();
  }, [rotation, segmentWidth, speed, x]);

  // Reduce rotation on mobile for better readability
  const mobileRotation = isMobile ? 0 : rotation;

  return (
    <div
      className="w-full overflow-hidden py-16 md:py-32"
      style={{ transform: `rotate(${mobileRotation}deg)` }}
    >
      <motion.div className="flex will-change-transform" style={{ x }}>
        {/* Segment A (measured) */}
        <div ref={segmentRef} className="flex gap-2 md:gap-4 shrink-0">
          <ChipRow one={one} two={two} three={three} />
          <ChipRow one={one} two={two} three={three} />
          <ChipRow one={one} two={two} three={three} />
          {/* spacer: prevents seam collisions and is included in width measurement */}
          {/* <div aria-hidden className="shrink-0" /> */}
        </div>

        {/* Segment B (duplicate) */}
        <div aria-hidden className="flex gap-2 md:gap-4 shrink-0">
          <ChipRow one={one} two={two} three={three} />
          <ChipRow one={one} two={two} three={three} />
          <ChipRow one={one} two={two} three={three} />
          <div aria-hidden className="w-8 shrink-0" />
        </div>
      </motion.div>
    </div>
  );
};

export default Marquee;
