import Link from "next/link";

const Click = ({
  content,
  fer,
  status,
}: {
  content: string;
  fer: string;
  status: boolean;
}) => {
  return (
    <div>
      <Link href={fer}>
        <button
          className={
            status
              ? "font-bold! cursor-pointer bg-black px-4 py-2 rounded-[16px] text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02]active:translate-y-0 active:scale-[0.99]"
              : "font-bold! cursor-pointer bg-transparent px-4 py-2 rounded-[16px] border border-black text-black transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-black hover:text-white active:translate-y-0 active:scale-[0.99]"
          }
          style={{ ["cornerShape" as keyof React.CSSProperties]: "squircle" }}
        >
          <h5 className="font-bold!">{content}</h5>
        </button>
      </Link>
    </div>
  );
};

export default Click;
