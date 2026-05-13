"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Click from "./Click";
import { motionEase } from "./motion/Reveal";

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: motionEase },
  }),
};

const Hero = () => {
  const reduce = useReducedMotion();
  const baseDelay = reduce ? 0 : 2.05;

  return (
    <div className="w-full h-dvh flex bg-main">
      <motion.div
        className="bg-main flex w-1/2 h-full p-8 flex-col justify-between items-start"
        initial={false}
      >
        <motion.h3
          className="font-medium!"
          variants={reduce ? undefined : item}
          initial={reduce ? false : "hidden"}
          animate={reduce ? undefined : "visible"}
          custom={baseDelay}
        >
          The Great Chase
        </motion.h3>
        <motion.div
          className="flex items-start justify-end gap-[32px] w-full max-w-[564px] flex-col"
          initial={false}
        >
          <motion.h3
            variants={reduce ? undefined : item}
            initial={reduce ? false : "hidden"}
            animate={reduce ? undefined : "visible"}
            custom={baseDelay + 0.08}
          >
            Elevating 100% halal dining through refined British cuisine,
            responsible sourcing, and unforgettable experiences in the heart of
            London.
          </motion.h3>
          <motion.div
            className="flex gap-4"
            variants={reduce ? undefined : item}
            initial={reduce ? false : "hidden"}
            animate={reduce ? undefined : "visible"}
            custom={baseDelay + 0.14}
          >
            <Click content="Explore Menu" fer="/Menu" status={true} />
            <Click content="Reservations" fer="/" status={false} />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex w-1/2 h-full relative overflow-hidden bg-main"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{
          duration: reduce ? 0 : 0.65,
          delay: reduce ? 0 : baseDelay + 0.05,
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
