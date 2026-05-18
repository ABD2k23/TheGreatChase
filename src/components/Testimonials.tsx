import Image from "next/image";
import type { CSSProperties } from "react";
import BigClick from "./BigClick";
import { Reveal } from "./motion/Reveal";

const Testimonials = () => {
  return (
    <div className="flex flex-col w-full py-16 md:py-32 bg-[#ECE4D5] px-4 md:px-8 gap-16">
      <div className="flex items-center justify-center flex-col w-full gap-8">
        <Reveal parallaxStart={-10} parallaxEnd={10}>
          <h1 className="text-center w-full max-w-5xl">
            Customers love dining at our restaurant.
          </h1>
        </Reveal>
        <Reveal parallaxStart={-10} parallaxEnd={10}>
          <p className="text-center">
            2000+ Google Reviews, Overall Rating 4.5
          </p>
        </Reveal>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-8">
        <Reveal
          parallaxStart={10}
          parallaxEnd={-10}
          className="w-full md:w-1/2 bg-white border border-black/32 rounded-2xl md:rounded-4xl p-6 md:p-8 flex items-start justify-start gap-4 flex-col"
          style={{ ["cornerShape" as keyof CSSProperties]: "squircle" }}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-8 md:w-12 md:h-12  relative">
              <Image
                src="/WasimFarook.png"
                alt=""
                fill
                className="object-cover rounded-full w-16 h-16 shrink-0"
              />
            </div>
            <h3>Wasim Farook</h3>
          </div>
          <p className="text-sm">
            Absolutely amazing service.
            <br />
            Amaan sorted out table our for the group and Fahmid looked after us
            very well with a smile.
            <br />
            We all ordered off the Sunday roast menu. The seasoning was amazing
            for the lamb, aged beef and the chicken. (Didn&apos;t try the
            wellington).
            <br />
            However I didn&apos;t find it exceptional to say it&apos;s on my
            list to go back again soon like some others on my list. I&apos;d
            surely recommend it if you&apos;re looking for a good halal Sunday
            roast as those are rare to come by, especially in a fully halal
            setting.
          </p>
        </Reveal>
        <Reveal
          className="w-full md:w-1/2 bg-white border border-black/32 p-6 md:p-8 flex items-start justify-start gap-4 flex-col rounded-2xl md:rounded-4xl"
          style={{ ["cornerShape" as keyof CSSProperties]: "squircle" }}
          parallaxStart={10}
          parallaxEnd={-10}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-8 md:w-12 md:h-12  relative">
              <Image
                src="/WaleedAlAmin.png"
                alt=""
                fill
                className="rounded-full w-16 h-16 shrink-0"
              />
            </div>
            <h3>Waleed Al-Amin</h3>
          </div>
          <p className="text-sm">
            We went there for my wife&apos;s birthday and had the Ramadan
            seven-course tasting menu. Everything tasted absolutely amazing and
            the service was excellent. The waiters were always coming around to
            check if everything was okay and asking if we wanted our drinks
            topped up, which made the experience feel very attentive.
            <br />
            There was also a prayer area outside which was really important for
            us and something we really appreciated.
            <br />I do understand the price point. For the two of us it came to
            around £230, which reflects the premium quality of the food and the
            location. However, because of the cost, it&apos;s not somewhere we
            would visit regularly. Still, it was a lovely experience for a
            special occasion.
          </p>
        </Reveal>
      </div>
      <Reveal
        className="flex items-center justify-center w-full"
        parallaxStart={-10}
        parallaxEnd={10}
      >
        <BigClick
          content="Read More Reviews on Google"
          target="_blank"
          fer="https://www.google.com/search?sca_esv=afd9099b0d2d3532&sxsrf=ANbL-n6V6rf7qLWCeF03TZ6HCVJAfGsrvA:1778649693495&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOUmPprRHT6QLc5YQ7Za6mSYlrL2YQNqXvXpRw6wWv3n-j-iGwBZerExAbpRXu8G1ISDJvJ0W5cyC6I8ag3zcnJ7kICnY&q=The+Great+Chase+Reviews&sa=X&ved=2ahUKEwjvnKS5wrWUAxXSSEEAHZKxIY8Q0bkNegQIMhAI&biw=1536&bih=738&dpr=1.25"
          status={false}
        />
      </Reveal>
    </div>
  );
};

export default Testimonials;
