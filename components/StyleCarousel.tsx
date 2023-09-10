"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollIcon from "@/public/icons/scrolling.svg";
import StylesArr from "@/lib/styles.json";
import PadLockIcon from "@/public/icons/padlock.svg";

type Style = {
  id: number;
  name: string;
};

export default function StyleCarousel() {
  const [active, setActive] = useState(2);

  return (
    <div className=" bg-zinc-200 py-1 flex w-full items-center gap-0.5 pr-4">
      <Image src={ScrollIcon} alt="Scrolling icon" width={38} />
      <div id="style-carousel" className="w-full flex flex-col">
        {StylesArr.map((style: Style, index: number) => (
          <button
            onClick={() => setActive(style.id)}
            className={`uppercase w-full flex gap-1 items-center justify-center text-center rounded-lg ${
              active === style.id
                ? "bg-accent py-2 text-white font-normal shadow-custom drop-shadow-[0_5px_5px_rgba(0,0,0,0.4)]"
                : "text-sm py-2.5 text-black font-bold"
            }`}
            key={style.id}
          >
            {index === 2 && <Image src={PadLockIcon} alt="padlock icon" />}
            <span className={index === 2 ? "text-stroke" : ""}>
              {style.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
