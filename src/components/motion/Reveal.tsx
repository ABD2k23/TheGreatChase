"use client";

import {
  motion,
  type HTMLMotionProps,
  useScroll,
  useTransform,
  type MotionStyle,
} from "framer-motion";
import { type ReactNode, useRef } from "react";

const eased = [0.25, 0.46, 0.45, 0.94] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  parallaxStart?: number;
  parallaxEnd?: number;
} & Omit<HTMLMotionProps<"div">, "children">;

export function Reveal({
  children,
  className,
  parallaxStart = -10,
  parallaxEnd = 10,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yMotion = useTransform(
    scrollYProgress,
    [0, 1],
    [parallaxStart, parallaxEnd],
  );

  const motionStyle: MotionStyle = {
    y: yMotion,
  };

  return (
    <motion.div ref={ref} className={className} {...rest} style={motionStyle}>
      {children}
    </motion.div>
  );
}

export { eased as motionEase };
