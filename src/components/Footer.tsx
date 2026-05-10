"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./motion/Reveal";

const linkSpring = { type: "spring" as const, stiffness: 400, damping: 28 };

export default function Footer() {
  return (
    <div>
      <Reveal className="w-full" amount={0.25} delay={0.02}>
        <div className="h-[256px] relative -translate-y-8 overflow-hidden">
          <Image src="/bg.png" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute z-10 w-full h-full flex items-center justify-center gap-32 px-8 pointer-events-none">
            <div className="pointer-events-auto flex items-start justify-center gap-2 flex-col">
              <h6 className="font-bold!">Navigate To</h6>
              <div className="flex items-center justify-center gap-4">
                <Link href="/" className="inline-block rounded-sm outline-none">
                  <motion.h5
                    initial={{ y: 0 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    transition={linkSpring}
                  >
                    Menu
                  </motion.h5>
                </Link>
                <Link href="/" className="inline-block rounded-sm outline-none">
                  <motion.h5
                    initial={{ y: 0 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    transition={linkSpring}
                  >
                    Reservations
                  </motion.h5>
                </Link>
              </div>
            </div>
            <div className="pointer-events-auto flex items-start justify-center gap-2 flex-col">
              <h6 className="font-bold!">Follow or Contact on</h6>
              <div className="flex items-center justify-center gap-4">
                <Link href="/" className="inline-block rounded-sm outline-none">
                  <motion.h5
                    initial={{ y: 0 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    transition={linkSpring}
                  >
                    Instagram
                  </motion.h5>
                </Link>
                <Link href="/" className="inline-block rounded-sm outline-none">
                  <motion.h5
                    initial={{ y: 0 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.94 }}
                    transition={linkSpring}
                  >
                    Youtube
                  </motion.h5>
                </Link>
              </div>
            </div>
            <div className="pointer-events-auto flex items-start justify-center gap-2 flex-col">
              <h6 className="font-bold!">2026 © all rights reserved</h6>
              <div className="flex items-center justify-center gap-4">
                <h5>Website By Muhammad Abdullah</h5>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal className="flex justify-center" amount={0.45} delay={0.06}>
        <h3 className="font-medium! text-center my-8 mb-16">The Great Chase</h3>
      </Reveal>
    </div>
  );
}
