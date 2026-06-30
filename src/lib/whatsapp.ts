import { CartItem, OrderDetails, OrderType } from "@/types";

// One WhatsApp number per order type, set in .env.local.
// Numbers must be in international format, digits only (e.g. 919876543210).
const WHATSAPP_NUMBERS: Record<OrderType, string | undefined> = {
  "dine-in": process.env.NEXT_PUBLIC_WA_DINE_IN,
  takeaway: process.env.NEXT_PUBLIC_WA_TAKEAWAY,
  delivery: process.env.NEXT_PUBLIC_WA_DELIVERY,
};

function formatCartLines(cart: CartItem[]): string {
  return cart
    .map((ci) => `• ${ci.item.name} x${ci.quantity} — ₹${ci.item.price * ci.quantity}`)
    .join("\n");
}

function formatTotal(cart: CartItem[]): number {
  return cart.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);
}

function buildMessage(cart: CartItem[], details: OrderDetails): string {
  const lines: string[] = [];

  if (details.type === "dine-in") {
    lines.push("New dine-in pre-order");
    lines.push(`Booking ref: ${details.bookingRef}`);
    lines.push(`Name: ${details.name}`);
    lines.push(`Date & time: ${details.date} ${details.time}`);
  } else if (details.type === "takeaway") {
    lines.push("New takeaway order");
    lines.push(`Name: ${details.name}`);
    lines.push(`Phone: ${details.phone}`);
    lines.push(`Pickup time: ${details.pickupTime}`);
  } else {
    lines.push("New home delivery order");
    lines.push(`Name: ${details.name}`);
    lines.push(`Phone: ${details.phone}`);
    lines.push(`Address: ${details.address}`);
  }

  lines.push("");
  lines.push("Order:");
  lines.push(formatCartLines(cart));
  lines.push("");
  lines.push(`Total: ₹${formatTotal(cart)}`);

  return lines.join("\n");
}

/**
 * Builds a wa.me deep link pre-filled with the order summary,
 * pointed at the WhatsApp number registered for that order type.
 */
export function buildWhatsAppLink(cart: CartItem[], details: OrderDetails): string {
  const number = WHATSAPP_NUMBERS[details.type];

  if (!number) {
    throw new Error(
      `No WhatsApp number configured for order type "${details.type}". Check .env.local.`
    );
  }

  const message = buildMessage(cart, details);
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
