"use client";

import Image from "next/image";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useMemo, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import Click from "@/components/Click";

type Dish = {
  name: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  category: Category;
};

type Category =
  | "Starters"
  | "Signature Roasts"
  | "Main Courses"
  | "Steaks"
  | "Sides"
  | "Sauces"
  | "Specials";

const categories: Category[] = [
  "Starters",
  "Signature Roasts",
  "Main Courses",
  "Steaks",
  "Sides",
  "Sauces",
  "Specials",
];

const PopularSecond = () => {
  const dishes = useMemo<Dish[]>(
    () => [
      {
        name: "Homemade Warm Bread, Coconut Date Butter",
        price: "£6",
        imageSrc: "/HomemadeWarmBread.png",
        imageAlt: "Homemade warm bread",
        category: "Starters",
      },
      {
        name: "Lamb Bon Bons, Harissa Yogurt, Pickled Shallots",
        price: "£14",
        imageSrc: "/LambBonBons.png",
        imageAlt: "Lamb bon bons",
        category: "Starters",
      },
      {
        name: "BBQ Marrow Bone, Chimichurri, Lemon Zest, Crispy Sage",
        price: "£15",
        imageSrc: "/BBQMarrowBone.png",
        imageAlt: "BBQ marrow bone",
        category: "Starters",
      },
      {
        name: "Charred Asparagus, Grated Cheese, Chimichurri",
        price: "£11",
        imageSrc: "/CharredAsparagus.png",
        imageAlt: "Charred asparagus",
        category: "Starters",
      },
      {
        name: "Black Garlic Mushroom Soup, Croutons",
        price: "£10",
        imageSrc: "/BlackGarlicMushroomSoup.png",
        imageAlt: "Black garlic mushroom soup",
        category: "Starters",
      },
      {
        name: "Grilled Squid, Padron Pepper, Spicy Sauce",
        price: "£12",
        imageSrc: "/GrilledSquid.png",
        imageAlt: "Grilled squid",
        category: "Starters",
      },
      {
        name: "Chicken Momo, Himalayan Spice, Sesame Chutney",
        price: "£12",
        imageSrc: "/ChickenMomo.png",
        imageAlt: "Chicken momo",
        category: "Starters",
      },
      {
        name: "Aged Roast Beef (Served Medium)",
        price: "£29",
        imageSrc: "/AgedRoastBeef.png",
        imageAlt: "Aged roast beef",
        category: "Signature Roasts",
      },
      {
        name: "Harissa Slow-Cooked Lamb (Harissa Gravy)",
        price: "£30",
        imageSrc: "/HarissaSlowCookedLamb.png",
        imageAlt: "Harissa slow cooked lamb",
        category: "Signature Roasts",
      },
      {
        name: "Rosemary Confit Chicken Leg",
        price: "£25",
        imageSrc: "/RosemaryConfitChickenLeg.png",
        imageAlt: "Rosemary confit chicken leg",
        category: "Signature Roasts",
      },
      {
        name: "Char-Grilled Monkfish, Smoked Tomato Sauce, Duchess Potato",
        price: "£32",
        imageSrc: "/CharGrilledMonkfish.png",
        imageAlt: "Char-grilled monkfish",
        category: "Main Courses",
      },
      {
        name: "Vegan Haggis Wellington, Roast Trimmings",
        price: "£27",
        imageSrc: "/VeganHaggisWellington.png",
        imageAlt: "Vegan haggis wellington",
        category: "Main Courses",
      },
      {
        name: "Beef Wellington, Vine Tomatoes, Mash, Sauce",
        price: "£54",
        imageSrc: "/BeefWellington.png",
        imageAlt: "Beef wellington",
        category: "Main Courses",
      },
      {
        name: "Binchotan Grilled Beef Fillet, Carrot Purée, Pomme Anna",
        price: "£42",
        imageSrc: "/BinchotanGrilledBeefFillet.png",
        imageAlt: "Binchotan grilled beef fillet",
        category: "Main Courses",
      },
      {
        name: "30-Day Aged Ribeye",
        price: "£38",
        imageSrc: "/30DayAgedRibeye.png",
        imageAlt: "30-day aged ribeye",
        category: "Steaks",
      },
      {
        name: "30-Day Aged Sirloin",
        price: "£36",
        imageSrc: "/30DayAgedSirloin.png",
        imageAlt: "30-day aged sirloin",
        category: "Steaks",
      },
      {
        name: "Full-Blood Wagyu Ribeye (BMS 9+)",
        price: "£88",
        imageSrc: "/WagyuRibeye.png",
        imageAlt: "Full-blood wagyu ribeye",
        category: "Steaks",
      },
      {
        name: "Beef Dripping Mash, Crispy Shallots",
        price: "£9",
        imageSrc: "/BeefDrippingMash.png",
        imageAlt: "Beef dripping mash",
        category: "Sides",
      },
      {
        name: "Cauliflower Cheese, Pecorino, Breadcrumbs",
        price: "£9",
        imageSrc: "/CauliflowerCheese.png",
        imageAlt: "Cauliflower cheese",
        category: "Sides",
      },
      {
        name: "Koffmann Chips",
        price: "£6",
        imageSrc: "/KoffmannChips.png",
        imageAlt: "Koffmann chips",
        category: "Sides",
      },
      {
        name: "Gravy",
        price: "£4",
        imageSrc: "/GravySauce.png",
        imageAlt: "Gravy sauce",
        category: "Sauces",
      },
      {
        name: "Peppercorn Sauce",
        price: "£5",
        imageSrc: "/PeppercornSauce.png",
        imageAlt: "Peppercorn sauce",
        category: "Sauces",
      },
      {
        name: "Mushroom Sauce",
        price: "£5",
        imageSrc: "/MushroomSauce.png",
        imageAlt: "Mushroom sauce",
        category: "Sauces",
      },
      {
        name: "Chimichurri",
        price: "£5",
        imageSrc: "/Chimichurri.png",
        imageAlt: "Chimichurri sauce",
        category: "Sauces",
      },
      {
        name: "Limited availability - please ask your server",
        price: "£00",
        imageSrc: "/Specials.png",
        imageAlt: "Specials",
        category: "Specials",
      },
    ],
    [],
  );

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [selectedCategory, setSelectedCategory] =
    useState<Category>("Starters");
  const filteredDishes = useMemo(
    () => dishes.filter((dish) => dish.category === selectedCategory),
    [dishes, selectedCategory],
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.min(
      filteredDishes.length - 1,
      Math.max(0, Math.floor(latest * filteredDishes.length)),
    );
    setActiveIndex((prev) => (prev === next ? prev : next));
  });

  const currentIndex = Math.max(
    0,
    Math.min(activeIndex, filteredDishes.length - 1),
  );
  const activeDish =
    filteredDishes[currentIndex] ?? filteredDishes[0] ?? dishes[0];

  const scrollToDish = (index: number) => {
    if (!sectionRef.current) return;

    const sectionTop = sectionRef.current.offsetTop;
    window.scrollTo({
      top: sectionTop + index * window.innerHeight,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const Nav = (
    <>
      <div className="flex items-center justify-between px-4 md:px-8 py-4 fixed top-0 left-0 w-full z-10 bg-white border-b border-black/10">
        <Link
          href="/"
          className="opacity-70 hover:opacity-100 transition-opacity relative flex items-center justify-center h-fit"
        >
          <h5>← Back</h5>
        </Link>
        <h6 className="font-medium! tracking-[-0.02em]! leading-[1.1]! hidden md:block">
          The Great Chase
        </h6>
        <Click content="Reservations" fer="/booking" status={true} />
      </div>
    </>
  );
  const Footer = (
    <>
      <div
        className="flex flex-col sm:flex-row items-center justify-between border border-black/32 p-2 md:p-4 fixed bottom-0 left-1/2 -translate-x-1/2 z-10 rounded-t-3xl md:rounded-t-4xl gap-2 md:gap-4 bg-white w-[calc(100%-16px)] w-auto"
        style={{ ["cornerShape" as keyof CSSProperties]: "squircle" }}
      >
        {/* Counter */}
        <h5 className="font-bold! text-nowrap text-xs md:text-base">
          {String(currentIndex + 1).padStart(2, "0")}/{filteredDishes.length}
        </h5>
        {/* Menu Division */}
        <div
          className="flex items-start sm:items-center justify-start gap-1 md:gap-4 flex-nowrap overflow-x-auto max-w-[calc(100vw-32px)]"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            const baseClasses =
              "px-2 md:px-4 py-1 md:py-2 rounded-xl md:rounded-2xl cursor-pointer w-fit text-nowrap border transition-all";
            const activeClasses =
              isActive && category !== "Specials"
                ? "bg-black text-white border-black"
                : isActive
                  ? "bg-black text-white border-black"
                  : category === "Specials"
                    ? "bg-main text-black border-black"
                    : "bg-white text-black border-black";

            return (
              <div
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setActiveIndex(0);
                  sectionRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={`w-fit ${baseClasses} ${activeClasses}`}
                style={{ ["cornerShape" as keyof CSSProperties]: "squircle" }}
              >
                <h5 className="font-bold! w-fit">
                  {category === "Signature Roasts"
                    ? "Signature Roasts"
                    : category === "Main Courses"
                      ? "Mains"
                      : category}
                </h5>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
  return (
    <div className="text-black! relative">
      {/* Menu */}
      <div
        ref={sectionRef}
        className="w-full relative bg-white"
        style={{ height: `${Math.max(1, filteredDishes.length) * 100}vh` }}
      >
        {Nav}
        <div className="sticky top-0 h-dvh flex items-start px-4 sm:px-6 md:px-8 pt-16 md:pt-20">
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

              <div className="mt-2 md:mt-4 opacity-70 block md:overflow-y-visible flex items-start justify-start gap-1 flex-col">
                {filteredDishes.map((d, i) => (
                  <motion.div
                    key={d.name}
                    // type="button"
                    onClick={() => scrollToDish(i)}
                    className="flex items-start justify-start gap-2 w-full text-left py-1 hover:opacity-100 transition-opacity"
                    animate={{ opacity: i === currentIndex ? 1 : 0.35 }}
                    transition={{ duration: 0.25 }}
                  >
                    <span className="inline-block w-4 tabular-nums flex-shrink-0">
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
                className="relative overflow-clip rounded-[12px] md:rounded-2xl w-[min(180px,60vw)] md:w-[min(280px,80vw)] h-[min(260px,45vh)] md:h-[min(480px,55vh)]"
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
                      sizes="(max-width: 768px) 60vw, 80vw"
                      loading="eager"
                      priority
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
            </div>
          </div>
        </div>
        {Footer}
      </div>
      {/* Menu */}
    </div>
  );
};

export default PopularSecond;
