import Image from "next/image";

const Story = () => {
  return (
    <div className="bg-[#ECE4D5] py-32 px-8  flex flex-col gap-16">
      <div className="flex items-start justify-start gap-16 w-full">
        <h1 className="text-left w-1/2">
          Our Great <br /> Story
        </h1>
        <div className="flex items-start justify-start gap-2 flex-col w-1/2">
          <p>
            At The Great Chase, we set out to prove that exceptional dining
            doesn’t need alcohol to feel complete. Founded in London, our vision
            was to create a refined space where great food and meaningful
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
            from all backgrounds feel welcome. It’s about inclusivity, shared
            moments, and raising the standard for what halal dining can be.
          </p>
        </div>
      </div>
      {/* Img */}
      <div className="relative aspect-16/8 overflow-clip w-full">
        <Image
          src={"/story.png"}
          alt=""
          fill
          className="rounded-[32px] object-cover"
          style={{ ["cornerShape" as keyof React.CSSProperties]: "squircle" }}
        />
      </div>
    </div>
  );
};

export default Story;
