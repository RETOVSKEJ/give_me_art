import React from "react";
import Image from "next/image";
import ArrowLeft from "@/public/icons/arrow-left-sign-to-navigate.svg";

export default function PreviewCarousel() {
  return (
    <div className="relative bg-zinc-100 w-full py-1 flex flex-col items-center">
      <p className="font-semibold text-sm ">Style preview</p>
      <div id="preview-carousel">
        <Image
          src="/icons/postac.svg"
          width={103}
          height={108}
          alt="logo"
          className="m-auto"
        />
      </div>
      <Image
        className="absolute left-2 top-6"
        src={ArrowLeft}
        height={24}
        alt="arrow-left"
      />
    </div>
  );
}
