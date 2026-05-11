"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type LoaderProps = {
  children: React.ReactNode;
  minDurationMs?: number;
};

export default function Loader({
  children,
  minDurationMs = 2000,
}: LoaderProps) {
  const reduce = useReducedMotion();
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(
      () => setIsActive(false),
      reduce ? 0 : minDurationMs,
    );
    return () => window.clearTimeout(t);
  }, [minDurationMs, reduce]);

  return (
    <>
      {children}
      <AnimatePresence>
        {isActive ? (
          <motion.div
            className="fixed inset-0 z-9999 grid place-items-center bg-main"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reduce ? 0 : 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-hidden="true"
          >
            <motion.h5
              className="select-none text-black"
              initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              animate={reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -20 }}
              transition={{
                duration: reduce ? 0 : 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              The Great Chase
            </motion.h5>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
