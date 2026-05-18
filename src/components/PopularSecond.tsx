"use client";

import Image from "next/image";
import BigClick from "./BigClick";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import {
  useMemo,
  useRef,
  useState,
  useEffect,
  type CSSProperties,
} from "react";

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
        name: "Homemade Warm Bread, Coconut Date Butter",
        price: "£6",
        imageSrc: "/HomemadeWarmBread.png",
        imageAlt: "Homemade warm bread",
      },
      {
        name: "Harissa Slow-Cooked Lamb (Harissa Gravy)",
        price: "£30",
        imageSrc: "/HarissaSlowCookedLamb.png",
        imageAlt: "Harissa slow cooked lamb",
      },
      {
        name: "30-Day Aged Ribeye",
        price: "£38",
        imageSrc: "/30DayAgedRibeye.png",
        imageAlt: "30-day aged ribeye",
        category: "Steaks",
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
  const [isMobile, setIsMobile] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.min(
      dishes.length - 1,
      Math.max(0, Math.floor(latest * dishes.length)),
    );
    setActiveIndex((prev) => (prev === next ? prev : next));
  });

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const activeDish = dishes[activeIndex];
  const scrollHeight = isMobile ? dishes.length * 120 : dishes.length * 100;

  return (
    <div className="text-black!">
      {/* <Reveal>
        <h1 className="px-4 md:px-8 pb-8 md:pb-16">Popular Dishes</h1>
      </Reveal> */}
      {/* Menu */}
      <div
        ref={sectionRef}
        className="w-full relative"
        style={{ height: `${scrollHeight}vh` }}
      >
        <div className="sticky top-0 h-dvh flex items-center px-4 sm:px-6 md:px-8">
          <h3 className="absolute top-8 left-0 w-full text-center px-4 ">
            Popular Dishes
          </h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center">
            {/* Name */}
            <div className="min-w-0 order-2 md:order-1">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={activeDish.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="leading-tight text-lg sm:text-2xl md:text-4xl"
                >
                  {activeDish.name}
                </motion.h3>
              </AnimatePresence>

              <div className="mt-2 md:mt-4 text-xs sm:text-sm opacity-70 max-h-50 overflow-y-auto">
                {dishes.map((d, i) => (
                  <motion.div
                    key={d.name}
                    className="flex items-center gap-2 py-1"
                    animate={{ opacity: i === activeIndex ? 1 : 0.35 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="inline-block w-4 tabular-nums shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate">{d.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative flex justify-center order-1 md:order-2 mb-4 md:mb-0">
              <div
                className="relative overflow-clip rounded-xl md:rounded-2xl w-[min(220px,70vw)] md:w-[min(280px,80vw)] h-[min(320px,50vh)] md:h-[min(480px,55vh)]"
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
            <div className="md:text-right order-3">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={activeDish.price}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="leading-tight text-lg sm:text-2xl md:text-4xl tabular-nums"
                >
                  {activeDish.price}
                </motion.h3>
              </AnimatePresence>

              <div className="mt-2 md:mt-4 text-xs sm:text-sm opacity-70 max-h-50 overflow-y-auto">
                {dishes.map((d, i) => (
                  <motion.div
                    key={d.name}
                    className="flex items-center justify-end gap-2 py-1"
                    animate={{ opacity: i === activeIndex ? 1 : 0.35 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="text-right tabular-nums font-medium">
                      {d.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Menu */}

      <div
        className="flex flex-row items-center justify-center gap-4 py-8 md:py-16 px-4 md:px-8 pb-16 md:pb-32"
        // delay={0.05}
        // amount={0.15}
      >
        <BigClick content="View Full Menu" fer="/Menu" status={true} />
        <BigClick content="Reservations" fer="/" status={false} />
      </div>
    </div>
  );
};

export default PopularSecond;
