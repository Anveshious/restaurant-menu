"use client";

import { useState } from "react";
import { DeliveryDetails } from "@/types";
import WhatsAppButton from "./WhatsAppButton";

export default function DeliveryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  function getDetails(): DeliveryDetails | null {
    if (!name || !phone || !address) return null;
    return { type: "delivery", name, phone, address };
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-charcoal/60">
        Double-check your address — our team will confirm an estimated
        arrival time over WhatsApp.
      </p>
      <div>
        <label className="text-sm font-medium block mb-1">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-charcoal/20 rounded-md px-3 py-2"
        />
      </div>
      <div>
        <label className="text-sm font-medium block mb-1">Phone number</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border border-charcoal/20 rounded-md px-3 py-2"
          placeholder="98765 43210"
        />
      </div>
      <div>
        <label className="text-sm font-medium block mb-1">Delivery address</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows={3}
          className="w-full border border-charcoal/20 rounded-md px-3 py-2"
        />
      </div>
      <WhatsAppButton getDetails={getDetails} />
    </div>
  );
}
