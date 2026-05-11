"use client";

import Image from "next/image";
import BigClick from "./BigClick";
import { Reveal } from "./motion/Reveal";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useMemo, useRef, useState, type CSSProperties } from "react";

type Dish = {
  name: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
};

const PopularSecond = () => {
  const dishes = useMemo<Dish[]>(
    () => [
      {
        name: "Grilled Mackerel",
        price: "£13.00",
        imageSrc: "/GrilledMackerel.png",
        imageAlt: "Grilled mackerel",
      },
      {
        name: "Scorched Leeks",
        price: "£11.00",
        imageSrc: "/ScorchedLeeks.png",
        imageAlt: "Scorched leeks",
      },
      {
        name: "Pan-Seared Cod",
        price: "£26.00",
        imageSrc: "/PanSearedCod.png",
        imageAlt: "Pan-seared cod",
      },
    ],
    [],
  );

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.min(
      dishes.length - 1,
      Math.max(0, Math.floor(latest * dishes.length)),
    );
    setActiveIndex((prev) => (prev === next ? prev : next));
  });

  const activeDish = dishes[activeIndex];

  return (
    <div className=" text-black!">
      <Reveal amount={0.35} className="bg-white">
        <h1 className="px-8 pb-16">Popular Dishes</h1>
      </Reveal>
      {/* Menu */}
      <div
        ref={sectionRef}
        className="w-full relative bg-main"
        style={{ height: `${dishes.length * 100}vh` }}
      >
        <div className="sticky top-0 h-dvh flex items-center px-6 sm:px-8">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Name */}
            <div className="min-w-0">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={activeDish.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="leading-tight text-2xl sm:text-3xl md:text-4xl"
                >
                  {activeDish.name}
                </motion.h3>
              </AnimatePresence>

              <div className="mt-4 text-sm opacity-70">
                {dishes.map((d, i) => (
                  <motion.div
                    key={d.name}
                    className="flex items-center gap-2"
                    animate={{ opacity: i === activeIndex ? 1 : 0.35 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="inline-block w-4 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate">{d.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative flex justify-center">
              <div
                className="relative overflow-clip rounded-[16px] w-[min(280px,80vw)] h-[min(480px,55vh)]"
                style={{ ["cornerShape" as keyof CSSProperties]: "squircle" }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDish.imageSrc + activeDish.name}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeDish.imageSrc}
                      alt={activeDish.imageAlt}
                      className="object-cover"
                      fill
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Price */}
            <div className="md:text-right">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={activeDish.price}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="leading-tight text-2xl sm:text-3xl md:text-4xl tabular-nums"
                >
                  {activeDish.price}
                </motion.h3>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      {/* Menu */}

      <Reveal
        className="flex items-center justify-center gap-4 py-16 px-8 pb-32 bg-[#ECE4D5]"
        delay={0.05}
        amount={0.15}
      >
        <BigClick content="View Full Menu" fer="/" status={true} />
        <BigClick content="Reservations" fer="/" status={false} />
      </Reveal>
    </div>
  );
};

export default PopularSecond;
