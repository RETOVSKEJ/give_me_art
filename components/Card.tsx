import React from "react";
import Image from "next/image";
import serce from "@/public/icons/serce.svg";
import ArrowRight from "@/public/icons/right-arrow-1.svg";
import ButtonBuy from "./ButtonBuy";
import FakeInputBar from "./FakeInputBar";

export default function Card() {
  return (
    <div className="bg-zinc-100 text-center rounded-xl">
      <div className="font-bold text-xl/6 mt-2">
        <span className="text-red-500">GET INSPIRED!</span>
        <br />
        <span className="font-medium">BEST USERS DESIGNS</span>
        <a className="flex justify-center gap-2" href="#">
          <span className="text-zinc-700 font-bold text-lg">See More</span>{" "}
          <Image src={ArrowRight} alt="arrow right" className="self-end" />
        </a>
      </div>
      <Image src={serce} alt="Picture of Heart" className="m-auto" />
      <div className="mt-2">
        <FakeInputBar />
      </div>
      <ButtonBuy />
    </div>
  );
}
