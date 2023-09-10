import React from "react";
import CategoriesArr from "@/lib/categories.json";

type Category = {
  id: number;
  name: string;
};

export default function Categories() {
  return (
    <div className="flex gap-4 font-bold justify-between w-full">
      {CategoriesArr.map((category: Category) => (
        <button
          key={category.id}
          className="w-full py-4 text-sm rounded-lg bg-zinc-100 flex justify-center items-center"
        >
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
}
