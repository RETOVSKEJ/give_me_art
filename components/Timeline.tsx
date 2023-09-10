import React from "react";
import Timestep from "@/components/Timestep";
import { Step } from "@/lib/types";

export default function Timeline({ steps }: { steps: Step[] }) {
  return (
    <>
      <div id="timeline" className="flex">
        {steps.map((step: Step, index: number) => (
          <Timestep step={step} key={step.nr} index={index} />
        ))}
      </div>
    </>
  );
}
