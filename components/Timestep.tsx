import React from "react";
import { Step } from "@/lib/types";

export default function Timestep({
  step,
  index,
}: {
  step: Step;
  index: number;
}) {
  return (
    <div className="w-1/3">
      <div className="flex-col gap-1 flex items-center text-center relative my-4">
        <span
          className={`flex justify-center items-center w-6 h-6 rounded-[9px] text-center text-sm/tight ${
            index === 0
              ? "text-white bg-accent"
              : "font-semibold text-zinc-500 bg-zinc-200"
          }`}
        >
          {step.nr}
        </span>
        <span
          className={`top-2.5 absolute  right-0 -z-10 h-1.5 rounded-full ${
            index === 0 ? "bg-accent left-0" : "bg-zinc-200 -left-1"
          }`}
        ></span>
        <span
          className={`font-semibold text-sm/4 px-2 ${
            index === 0 ? "text-accent" : "text-zinc-300"
          }`}
        >
          {step.text}
        </span>
      </div>
    </div>
  );
}
