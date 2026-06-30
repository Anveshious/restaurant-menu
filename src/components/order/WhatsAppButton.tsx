"use client";

import { useCartStore } from "@/store/cartStore";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { OrderDetails } from "@/types";

interface WhatsAppButtonProps {
  // Returns the filled-in order details, or null if the form is invalid.
  getDetails: () => OrderDetails | null;
}

export default function WhatsAppButton({ getDetails }: WhatsAppButtonProps) {
  const { items, clearCart } = useCartStore();

  function handleSend() {
    if (items.length === 0) {
      alert("Add at least one item to your order before continuing.");
      return;
    }

    const details = getDetails();
    if (!details) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const link = buildWhatsAppLink(items, details);
      window.open(link, "_blank");
      clearCart();
    } catch (err) {
      console.error(err);
      alert("Something went wrong building your order. Please try again.");
    }
  }

  return (
    <button
      onClick={handleSend}
      className="w-full bg-sage text-cream py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
    >
      Send order on WhatsApp
    </button>
  );
}
