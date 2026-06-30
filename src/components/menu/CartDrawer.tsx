"use client";

import { useCartStore } from "@/store/cartStore";

export default function CartDrawer() {
  const { items, updateQuantity, total } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="border border-charcoal/10 rounded-lg p-5 text-sm text-charcoal/50">
        Your cart is empty. Add items from the menu to get started.
      </div>
    );
  }

  return (
    <div className="border border-charcoal/10 rounded-lg p-5 sticky top-5">
      <h3 className="font-semibold mb-4">Your order</h3>
      <ul className="space-y-3 mb-4">
        {items.map((ci) => (
          <li key={ci.item.id} className="flex items-center justify-between text-sm">
            <span>{ci.item.name}</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(ci.item.id, ci.quantity - 1)}
                className="w-6 h-6 rounded border border-charcoal/20 hover:bg-charcoal/5"
                aria-label={`Remove one ${ci.item.name}`}
              >
                −
              </button>
              <span className="w-4 text-center">{ci.quantity}</span>
              <button
                onClick={() => updateQuantity(ci.item.id, ci.quantity + 1)}
                className="w-6 h-6 rounded border border-charcoal/20 hover:bg-charcoal/5"
                aria-label={`Add one more ${ci.item.name}`}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between font-semibold border-t border-charcoal/10 pt-3">
        <span>Total</span>
        <span>₹{total()}</span>
      </div>
    </div>
  );
}
