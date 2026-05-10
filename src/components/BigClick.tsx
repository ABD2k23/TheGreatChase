"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { CSSProperties } from "react";

const BigClick = ({
  content,
  fer,
  status,
}: {
  content: string;
  fer: string;
  status: boolean;
}) => {
  const baseStyles =
    "font-bold! inline-flex cursor-pointer px-8 py-4 rounded-[32px] select-none";

  const activeStyles = "bg-black text-white border-black";

  const inactiveStyles =
    "bg-transparent border border-black text-black hover:bg-black hover:text-white";

  return (
    <Link href={fer} className="inline-block outline-none rounded-[inherit]">
      <motion.span
        className={`${baseStyles} ${status ? activeStyles : inactiveStyles}`}
        style={{ ["cornerShape" as keyof CSSProperties]: "squircle" }}
        whileHover={{ y: -4, scale: 1.04 }}
        whileTap={{ y: 0, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 380, damping: 24 }}
      >
        <h6>{content}</h6>
      </motion.span>
    </Link>
  );
};

export default BigClick;
