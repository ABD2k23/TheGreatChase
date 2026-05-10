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
  return (
    <div className="flex items-center justify-center gap-4 shrink-0">
      <div
        className={chipClassName}
        style={{ ["cornerShape" as keyof React.CSSProperties]: "squircle" }}
      >
        <h5>{one}</h5>
      </div>
      <div
        className={chipClassName}
        style={{ ["cornerShape" as keyof React.CSSProperties]: "squircle" }}
      >
        <h5>{two}</h5>
      </div>
      <div
        className={chipClassName}
        style={{ ["cornerShape" as keyof React.CSSProperties]: "squircle" }}
      >
        <h5>{three}</h5>
      </div>
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

  return (
    <div
      className="w-full overflow-hidden py-32"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <motion.div className="flex will-change-transform" style={{ x }}>
        {/* Segment A (measured) */}
        <div ref={segmentRef} className="flex gap-4 shrink-0">
          <ChipRow one={one} two={two} three={three} />
          <ChipRow one={one} two={two} three={three} />
          <ChipRow one={one} two={two} three={three} />
          {/* spacer: prevents seam collisions and is included in width measurement */}
          {/* <div aria-hidden className="shrink-0" /> */}
        </div>

        {/* Segment B (duplicate) */}
        <div aria-hidden className="flex gap-4 shrink-0">
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
