"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const linkSpring = { type: "spring" as const, stiffness: 400, damping: 28 };

export default function Footer() {
  return (
    <div>
      <div className="h-48 md:h-64 relative -translate-y-8 overflow-hidden">
        <Image
          src="/bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute z-10 w-full h-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 md:gap-32 px-4 md:px-8 pointer-events-none">
          <div className="pointer-events-auto flex items-start justify-center gap-2 flex-col">
            <h6 className="font-bold! text-sm md:text-base">Navigate To</h6>
            <div className="flex items-center justify-center gap-3 md:gap-4">
              <Link href="/" className="inline-block rounded-sm outline-none">
                <motion.h5
                  className="text-xs md:text-base"
                  initial={{ y: 0 }}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.94 }}
                  transition={linkSpring}
                >
                  Menu
                </motion.h5>
              </Link>
              <Link href="/" className="inline-block rounded-sm outline-none">
                <motion.h5
                  className="text-xs md:text-base"
                  initial={{ y: 0 }}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.94 }}
                  transition={linkSpring}
                >
                  Reservations
                </motion.h5>
              </Link>
            </div>
          </div>
          <div className="pointer-events-auto flex items-start justify-center gap-2 flex-col">
            <h6 className="font-bold! text-sm md:text-base">
              Follow or Contact on
            </h6>
            <div className="flex items-center justify-center gap-3 md:gap-4">
              <Link href="/" className="inline-block rounded-sm outline-none">
                <motion.h5
                  className="text-xs md:text-base"
                  initial={{ y: 0 }}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.94 }}
                  transition={linkSpring}
                >
                  Instagram
                </motion.h5>
              </Link>
              <Link href="/" className="inline-block rounded-sm outline-none">
                <motion.h5
                  className="text-xs md:text-base"
                  initial={{ y: 0 }}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.94 }}
                  transition={linkSpring}
                >
                  Youtube
                </motion.h5>
              </Link>
            </div>
          </div>
          <div className="pointer-events-auto flex items-start justify-center gap-2 flex-col text-center md:text-left">
            <h6 className="font-bold! text-sm md:text-base">
              2026 © all rights reserved
            </h6>
            <div className="flex items-center justify-center gap-4">
              <h5 className="text-xs md:text-base">
                Website By Muhammad Abdullah
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center sticky bottom-0 -z-10">
        <h3 className="font-medium! text-center my-4 md:my-8 mb-8 md:mb-16 px-4">
          The Great Chase
        </h3>
      </div>
    </div>
  );
}
