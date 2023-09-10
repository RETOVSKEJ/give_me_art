import React from "react";

export default function Hamburger() {
  return (
    <div className="relative inline-flex w-[25px] pointer-events-auto -z-10 xs:hidden">
      <input className="absolute w-full appearance-none" />
      <label
        className="flex w-full align-start flex-col gap-[5px] cursor-pointer z-50"
        htmlFor="menuButton"
      >
        <span className="h-1 w-full bg-blue-950 pointer-events-none"></span>
        <span className="h-1 w-full bg-blue-950 pointer-events-none"></span>
        <span className="h-1 w-full bg-blue-950 pointer-events-none"></span>
      </label>
    </div>
  );
}
