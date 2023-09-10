import React from "react";
import PreviewCarousel from "@/components/PreviewCarousel";
import StyleCarousel from "@/components/StyleCarousel";

export default function StyleChoice() {
  return (
    <div
      id="style-choice"
      className="shadow-lg shadow-zinc-500 overflow-hidden flex justify-center rounded-xl"
    >
      <PreviewCarousel />
      <StyleCarousel />
    </div>
  );
}
