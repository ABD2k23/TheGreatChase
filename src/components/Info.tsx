import Marquee from "./Marquee";

const Info = () => {
  return (
    <div className="py-40 overflow-clip">
      {/* Made For Everyone */}
      <div className="flex gap-4 flex-col w-full items-end ">
        <h2 className="w-1/2 pr-8">Made For Everyone</h2>
        <h3 className="w-1/2 pr-8">
          Halal means quality, ethical sourcing, and clean, carefully prepared
          food anyone can trust and enjoy.
        </h3>
      </div>
      <Marquee
        one="Award-Winning Recognition"
        two="top-Tier Dining Destination"
        three="For Everyone"
      />
      {/* Location */}
      <div className="flex gap-4 flex-col w-full items-start ">
        <h2 className="w-1/2 pl-8">New Location</h2>
        <h3 className="w-1/2 pl-8">
          6G Esther Anne Place, Islington Square, London N1 1WL
        </h3>
      </div>

      <Marquee
        one="100% Halal"
        two="Alcohol-Free Pioneer"
        three="Ethical Sourcing"
        rotation={-2}
      />
      {/* Opening Hours */}
      <div className="flex gap-4 flex-col w-full items-end ">
        <h2 className="w-1/2 pr-8">Opening Hours</h2>
        <h3 className="w-1/2 pr-8">
          Closed on Mondays <br />
          Tuesday: 5:30 PM - 9:00 PM <br />
          Wednesday to Friday: 5:30 PM - 10:30 PM <br />
          Saturday: 12:00 PM - 10:00 PM <br />
          Sunday: 12:00 PM - 9:00 PM (Roasts Only)
        </h3>
      </div>
    </div>
  );
};

export default Info;
