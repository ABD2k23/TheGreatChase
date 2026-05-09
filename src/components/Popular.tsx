import React from "react";
import Dish from "./Dish";
import BigClick from "./BigClick";

const Menu = () => {
  return (
    <div className="px-8">
      <h1>Popular Dishes</h1>
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
      <div className="flex items-center justify-center gap-4 py-16">
        <BigClick content="View Full Menu" fer="/" status={true} />
        <BigClick content="Reservations" fer="/" status={false} />
      </div>
    </div>
  );
};

export default Menu;
