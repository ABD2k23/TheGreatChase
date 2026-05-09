"use client";

import Image from "next/image";
import * as React from "react";
import { motion } from "framer-motion";

export type DishImage = {
  src: string;
  alt: string;
};

export type DishProps = {
  title: React.ReactNode;
  price: React.ReactNode;
  images: DishImage[];
};

const Dish = ({ title, price, images }: DishProps) => {
  const viewportRef = React.useRef<HTMLDivElement | null>(null);
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const [dragBounds, setDragBounds] = React.useState({ left: 0, right: 0 });

  React.useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const update = () => {
      const viewportWidth = viewport.getBoundingClientRect().width;
      const trackWidth = track.getBoundingClientRect().width;
      const overflow = Math.max(0, trackWidth - viewportWidth);
      setDragBounds({ left: -overflow, right: 0 });
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(viewport);
    ro.observe(track);
    return () => ro.disconnect();
  }, [images, title, price]);

  return (
    <div
      ref={viewportRef}
      className="h-dvh w-full py-16 overflow-hidden flex items-start justify-start"
    >
      <motion.div
        ref={trackRef}
        className="flex items-start gap-8 w-fit h-full cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={dragBounds}
        dragElastic={0.06}
        dragMomentum
        whileTap={{ scale: 0.995 }}
      >
        <motion.div
          className="h-full w-[50vw] bg-main rounded-[16px] p-8 flex items-start justify-end flex-col gap-8 shrink-0"
          style={{ ["cornerShape" as keyof React.CSSProperties]: "squircle" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <h2>{title}</h2>
          <div className="flex items-center justify-between w-full">
            <h3 className="font-bold!">{price}</h3>
            <p>Drag to see more</p>
          </div>
        </motion.div>

        {images.map((img, idx) => (
          <motion.div
            key={`${img.src}-${idx}`}
            className="relative min-w-[280px] h-full shrink-0 overflow-hidden rounded-[16px] bg-black/5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
              delay: Math.min(0.2, idx * 0.03),
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="280px"
              className="object-cover pointer-events-none"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Dish;
