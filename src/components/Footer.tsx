import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-[256px] relative -translate-y-8">
        <div className="absolute z-10 w-full h-full flex items-center justify-center gap-32 px-8">
          <div className="flex items-start justify-center gap-2 flex-col">
            <h6 className="font-bold!">Navigate To</h6>
            <div className="flex items-center justify-center gap-4">
              <Link href={"/"}>
                <h5>Menu</h5>
              </Link>
              <Link href={"/"}>
                <h5>Reservations</h5>
              </Link>
            </div>
          </div>
          <div className="flex items-start justify-center gap-2 flex-col">
            <h6 className="font-bold!">Follow or Contact on</h6>
            <div className="flex items-center justify-center gap-4">
              <Link href={"/"}>
                <h5>Instagram</h5>
              </Link>
              <Link href={"/"}>
                <h5>Youtube</h5>
              </Link>
            </div>
          </div>
          <div className="flex items-start justify-center gap-2 flex-col">
            <h6 className="font-bold!">2026 © all rights reserved</h6>
            <div className="flex items-center justify-center gap-4">
              <h5>Website By Muhammad Abdullah</h5>
            </div>
          </div>
        </div>
        <Image src={"/bg.png"} alt="" fill />
      </div>
      <h3 className="font-medium! text-center my-8 mb-16">The Great Chase</h3>
    </div>
  );
};

export default Footer;
