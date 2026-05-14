// /components/Click.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

const Click = ({
  content,
  fer,
  status,
}: {
  content: string;
  fer: string;
  status: boolean;
}) => {
  const [isHoverSupported, setIsHoverSupported] = useState(true);

  useEffect(() => {
    // Check if device supports hover (not a touch device)
    const mediaQuery = window.matchMedia("(hover: hover)");
    setIsHoverSupported(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsHoverSupported(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const baseStyles =
    "font-bold! inline-flex cursor-pointer px-3 md:px-4 py-2 rounded-[16px] select-none transition-all text-sm md:text-base";

  const activeStyles = "bg-black text-white border-black";

  const inactiveStyles =
    "bg-transparent border border-black text-black hover:bg-black hover:text-white hover:border-black";

  return (
    <Link href={fer} className="inline-block outline-none rounded-[inherit]">
      <motion.span
        className={`${baseStyles} ${status ? activeStyles : inactiveStyles}`}
        style={{ ["cornerShape" as keyof CSSProperties]: "squircle" }}
        whileHover={isHoverSupported ? { y: -2, scale: 1.025 } : {}}
        whileTap={{ y: 0, scale: 0.96 }}
        transition={{ type: "spring", stiffness: 440, damping: 26 }}
      >
        <h5 className="font-bold!">{content}</h5>
      </motion.span>
    </Link>
  );
};

export default Click;
