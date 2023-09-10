import React from "react";

export default function FakeInputBar() {
  return (
    <div className="relative -left-1.5 overflow-hidden items-center flex justify-between pl-2 rounded-xl bg-neutral-200">
      <p className="mx-2 text-black">punk heart, gothic</p>
      <button className="bg-gradient-to-b from-neutral-400/40 py-3 to-neutral-300/10 px-3 flex items-center justify-center">
        <span className="uppercase text-neutral-700">Artistic</span>
      </button>
    </div>
  );
}
