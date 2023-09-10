import React from "react";
import Image from "next/image";
import PenIcon from "@/public/icons/icon-pen.svg";

export default function InputBar() {
  return (
    <div className="flex justify-between pl-2 rounded-lg bg-zinc-100 shadow-md shadow-zinc-400/50">
      <input
        className="mx-2 w-full outline-none text-zinc-700 bg-zinc-100 placeholder:text-zinc-900/30"
        type="text"
        placeholder="What do you want to create?"
      />
      <button className="bg-accent px-3 py-1.5 rounded-lg flex items-center justify-center">
        <Image src={PenIcon} width={36} alt="pen icon" />
      </button>
    </div>
  );
}
