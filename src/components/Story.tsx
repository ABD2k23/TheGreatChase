import Image from "next/image";
import type { CSSProperties } from "react";
import { Reveal } from "./motion/Reveal";

const Story = () => {
  return (
    <div className="bg-[#ECE4D5] py-16 md:py-32 px-4 md:px-8 flex flex-col gap-16">
      <div className="flex flex-col md:flex-row items-start justify-start gap-8 md:gap-16 w-full">
        <Reveal
          className="text-left w-full md:w-1/2"
          parallaxStart={-20}
          parallaxEnd={20}
        >
          <h1 className="text-left w-full">
            Our Great <br /> Story
          </h1>
        </Reveal>
        <Reveal
          className="flex items-start justify-start gap-2 flex-col w-full md:w-1/2"
          parallaxStart={-20}
          parallaxEnd={20}
        >
          <p>
            At The Great Chase, we set out to prove that exceptional dining
            doesn&apos;t need alcohol to feel complete. Founded in London, our
            vision was to create a refined space where great food and meaningful
            experiences take center stage.
          </p>
          <p>
            Our menu brings together modern British cuisine with 100% halal,
            responsibly sourced ingredients, without compromising on quality or
            creativity. Every dish reflects our commitment to transparency,
            animal welfare, and thoughtful sourcing.
          </p>
          <p>
            More than just a restaurant, The Great Chase is a place where people
            from all backgrounds feel welcome. It&apos;s about inclusivity,
            shared moments, and raising the standard for what halal dining can
            be.
          </p>
        </Reveal>
      </div>
      <Reveal
        className="relative aspect-video md:aspect-2/1 overflow-hidden w-full"
        parallaxStart={20}
        parallaxEnd={-20}
      >
        <Image
          src="/story.png"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 92vw"
          className="rounded-2xl md:rounded-4xl object-cover"
          style={{ ["cornerShape" as keyof CSSProperties]: "squircle" }}
        />
      </Reveal>
    </div>
  );
};

export default Story;
