"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Click from "./Click";
import { motionEase } from "./motion/Reveal";

const pageLoad = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.085,
      delayChildren: 0.08,
    },
  },
};

const fadePiece = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: motionEase },
  },
};

const bottomBlock = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.085,
      delayChildren: 0.02,
    },
  },
};

const Hero = () => {
  const reduce = useReducedMotion();

  return (
    <div className="w-full h-dvh flex">
      <motion.div
        className="bg-main flex w-1/2 h-full p-8 flex-col justify-between items-start"
        variants={reduce ? undefined : pageLoad}
        initial={reduce ? false : "hidden"}
        animate={reduce ? undefined : "visible"}
      >
        <motion.h2
          className="font-medium!"
          variants={reduce ? undefined : fadePiece}
        >
          The Great Chase
        </motion.h2>
        <motion.div
          className="flex items-start justify-end gap-[32px] w-full max-w-[564px] flex-col"
          variants={reduce ? undefined : bottomBlock}
        >
          <motion.h3 variants={reduce ? undefined : fadePiece}>
            Elevating 100% halal dining through refined British cuisine,
            responsible sourcing, and unforgettable experiences in the heart of
            London.
          </motion.h3>
          <motion.div className="flex gap-4" variants={reduce ? undefined : fadePiece}>
            <Click content="Explore Menu" fer="/" status={true} />
            <Click content="Reservations" fer="/" status={false} />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex w-1/2 h-full relative overflow-hidden"
        initial={reduce ? undefined : { opacity: 0, scale: 1.07 }}
        animate={reduce ? undefined : { opacity: 1, scale: 1 }}
        transition={{
          duration: reduce ? 0 : 0.85,
          delay: reduce ? 0 : 0.08,
          ease: motionEase,
        }}
      >
        <Image
          src="/heroo.png"
          alt="Hero Image"
          fill
          priority
          loading="eager"
          sizes="50vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
