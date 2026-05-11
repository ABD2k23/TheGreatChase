import Dish from "./Dish";
import BigClick from "./BigClick";
import { Reveal } from "./motion/Reveal";

const Menu = () => {
  return (
    <div className="px-8 bg-main! text-black!">
      <Reveal amount={0.35}>
        <h1>Popular Dishes</h1>
      </Reveal>
      <Dish
        title={
          <>
            Grilled <br /> Mackerel
          </>
        }
        price="£13.00"
        images={[
          { src: "/heroo.png", alt: "Halal dish" },
          { src: "/halal.png", alt: "Halal dish" },
          { src: "/halal.png", alt: "Halal dish" },
          { src: "/heroo.png", alt: "Halal dish" },
        ]}
      />
      <Dish
        title={
          <>
            Scorched <br /> Leeks
          </>
        }
        price="£11.00"
        images={[
          { src: "/heroo.png", alt: "Halal dish" },
          { src: "/halal.png", alt: "Halal dish" },
          { src: "/halal.png", alt: "Halal dish" },
          { src: "/heroo.png", alt: "Halal dish" },
        ]}
      />
      <Dish
        title={
          <>
            Pan-Seared <br /> Cod
          </>
        }
        price="£26.00"
        images={[
          { src: "/heroo.png", alt: "Halal dish" },
          { src: "/halal.png", alt: "Halal dish" },
          { src: "/halal.png", alt: "Halal dish" },
          { src: "/heroo.png", alt: "Halal dish" },
        ]}
      />
      <Reveal
        className="flex items-center justify-center gap-4 py-16 pb-32"
        delay={0.05}
        amount={0.15}
      >
        <BigClick content="View Full Menu" fer="/" status={true} />
        <BigClick content="Reservations" fer="/" status={false} />
      </Reveal>
    </div>
  );
};

export default Menu;
