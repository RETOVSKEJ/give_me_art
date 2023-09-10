import Image from "next/image";
import CheckMarkIcon from "@/public/icons/icon-check-1.svg";

export default function ButtonBuy() {
  return (
    <button className="bg-accent relative text-center mt-5 mb-6 w-1/2 pt-2.5 pb-1.5 uppercase rounded-lg">
      <Image
        src={CheckMarkIcon}
        alt="CheckMark icon"
        className="absolute left-[11%] top-1.5"
      />
      <span className="text-white text-xl">BUY</span>
    </button>
  );
}
