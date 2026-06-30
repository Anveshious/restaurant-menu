"use client";

import { useState } from "react";
import { menuData, categories } from "@/data/menuData";
import MenuCard from "./MenuCard";
import CategoryFilter from "./CategoryFilter";

export default function MenuGrid() {
  const [active, setActive] = useState("All");

  const items =
    active === "All" ? menuData : menuData.filter((i) => i.category === active);

  return (
    <div>
      <CategoryFilter categories={categories} active={active} onChange={setActive} />
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
