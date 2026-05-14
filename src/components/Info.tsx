import Marquee from "./Marquee";
import { Reveal } from "./motion/Reveal";

const Info = () => {
  return (
    <div className="py-32 overflow-clip bg-white px-4 md:px-0">
      <Reveal className="flex gap-4 flex-col w-full items-end ">
        <h2 className="w-full md:w-1/2 md:pr-8">Made For Everyone</h2>
        <h3 className="w-full md:w-1/2 md:pr-8">
          Halal means quality, ethical sourcing, and clean, carefully prepared
          food anyone can trust and enjoy.
        </h3>
      </Reveal>
      <Marquee
        one="Award-Winning Recognition"
        two="top-Tier Dining Destination"
        three="For Everyone"
      />
      <Reveal className="flex gap-4 flex-col w-full items-start " delay={0.04}>
        <h2 className="w-full md:w-1/2 md:pl-8">New Location</h2>
        <h3 className="w-full md:w-1/2 md:pl-8">
          6G Esther Anne Place, Islington Square, London N1 1WL
        </h3>
      </Reveal>

      <Marquee
        one="100% Halal"
        two="Alcohol-Free Pioneer"
        three="Ethical Sourcing"
        rotation={-2}
      />
      <Reveal className="flex gap-4 flex-col w-full items-end " delay={0.06}>
        <h2 className="w-full md:w-1/2 md:pr-8">Opening Hours</h2>
        <h3 className="w-full md:w-1/2 md:pr-8">
          Closed on Mondays <br />
          Tuesday: 5:30 PM - 9:00 PM <br />
          Wednesday to Friday: 5:30 PM - 10:30 PM <br />
          Saturday: 12:00 PM - 10:00 PM <br />
          Sunday: 12:00 PM - 9:00 PM (Roasts Only)
        </h3>
      </Reveal>
    </div>
  );
};

export default Info;
