"use client";

import { MenuItem } from "@/types";
import { useCartStore } from "@/store/cartStore";

interface MenuCardProps {
  item: MenuItem;
  readOnly?: boolean;
}

export default function MenuCard({ item, readOnly = false }: MenuCardProps) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="border border-charcoal/10 rounded-lg p-4 flex flex-col gap-2">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-medium">{item.name}</h3>
        <span
          className={`mt-1 w-3 h-3 rounded-sm border shrink-0 ${
            item.isVeg ? "border-sage" : "border-spice"
          }`}
          aria-label={item.isVeg ? "Vegetarian" : "Non-vegetarian"}
        >
          <span
            className={`block w-1.5 h-1.5 m-auto mt-0.5 rounded-full ${
              item.isVeg ? "bg-sage" : "bg-spice"
            }`}
          />
        </span>
      </div>
      <p className="text-sm text-charcoal/60 flex-1">{item.description}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="font-semibold">₹{item.price}</span>
        {!readOnly && (
          <button
            onClick={() => addItem(item)}
            className="text-sm bg-charcoal text-cream px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}
