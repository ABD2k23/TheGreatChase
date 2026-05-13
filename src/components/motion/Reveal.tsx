"use client";

import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";

const eased = [0.25, 0.46, 0.45, 0.94] as const;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  margin?: string;
  y?: number;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView">;

export function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.2,
  margin = "0px 0px -10% 0px",
  y = 16,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        reduce
          ? { opacity: 1, y: 0 }
          : {
              opacity: 0.6,
              y,
              filter: "blur(4px)",
            }
      }
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount, margin }}
      transition={{
        duration: reduce ? 0 : 0.62,
        delay: reduce ? 0 : delay,
        ease: eased,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export { eased as motionEase };
