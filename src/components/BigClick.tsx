// /components/Click.tsx

import Link from "next/link";

const BigClick = ({
  content,
  fer,
  status,
}: {
  content: string;
  fer: string;
  status: boolean;
}) => {
  const baseStyles =
    "font-bold! cursor-pointer px-8 py-4 rounded-[32px]  transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-[1.04] active:translate-y-0 active:scale-[0.99]";

  const activeStyles = "bg-black text-white border-black";

  const inactiveStyles =
    "bg-transparent border border-black text-black hover:bg-black hover:text-white";

  return (
    <div>
      <Link href={fer}>
        <button
          className={`${baseStyles} ${status ? activeStyles : inactiveStyles}`}
          style={{ ["cornerShape" as keyof React.CSSProperties]: "squircle" }}
        >
          <h6>{content}</h6>
        </button>
      </Link>
    </div>
  );
};

export default BigClick;
