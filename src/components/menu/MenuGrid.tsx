"use client";

import { useState } from "react";
import { menuData, categories } from "@/data/menuData";
import MenuCard from "./MenuCard";
import CategoryFilter from "./CategoryFilter";

export default function MenuGrid() {
  const [active, setActive] = useState("All");
  const [groupByCategory, setGroupByCategory] = useState(true);

  const items =
    active === "All" ? menuData : menuData.filter((item) => item.category === active);
  const shouldGroup = groupByCategory && active === "All";

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <CategoryFilter categories={categories} active={active} onChange={setActive} />
        <button
          type="button"
          onClick={() => setGroupByCategory((prev) => !prev)}
          className="text-sm px-3 py-1.5 rounded-full border border-charcoal/20 text-charcoal/70 hover:border-charcoal/40 transition-colors"
        >
          {shouldGroup ? "Show flat list" : "Group by section"}
        </button>
      </div>

      {shouldGroup ? (
        <div className="space-y-8">
          {categories.map((category) => {
            const categoryItems = menuData.filter((item) => item.category === category);

            return (
              <section key={category}>
                <h3 className="text-lg font-semibold mb-3 text-charcoal">{category}</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {categoryItems.map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
