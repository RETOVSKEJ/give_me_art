import React from "react";
import Image from "next/image";
import Timeline from "@/components/Timeline";
import InputBar from "@/components/InputBar";
import Categories from "@/components/Categories";
import StyleChoice from "@/components/StyleChoice";
import Card from "@/components/Card";
import stepsArr from "@/lib/steps.json";
import Logo from "@/public/icons/logo.svg";

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <Image src={Logo} alt="logo" className="m-auto mb-6" />
        <div className="subheader">
          <strong className="font-normal leading-6 text-xl flex flex-col text-center">
            Generate your ART <br /> by typing in field below any words that
            comes to your mind!
          </strong>
        </div>
      </header>
      <Timeline steps={stepsArr} />
      <InputBar />
      <Categories />
      <StyleChoice />
      <Card />
    </div>
  );
}
