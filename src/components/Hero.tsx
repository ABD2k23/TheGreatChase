import Image from "next/image";
import Click from "./Click";

const Hero = () => {
  return (
    <div className="w-full h-dvh flex">
      <div className="bg-main flex w-1/2 h-full p-8 flex-col justify-between items-start">
        <h2 className="font-medium!">The Great Chase</h2>
        <div className="flex items-start justify-end gap-[32px] w-full max-w-[564px] flex-col">
          <h3>
            Elevating 100% halal dining through refined British cuisine,
            responsible sourcing, and unforgettable experiences in the heart of
            London.
          </h3>
          <div className="flex gap-4">
            <Click content="Explore Menu" fer="/" status={true} />
            <Click content="Reservations" fer="/" status={false} />
          </div>
        </div>
      </div>
      <div className="flex w-1/2 h-full relative">
        <Image
          src={"/heroo.png"}
          alt="Hero Image"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
