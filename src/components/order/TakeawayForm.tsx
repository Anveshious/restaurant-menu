"use client";

import { useState } from "react";
import { TakeawayDetails } from "@/types";
import WhatsAppButton from "./WhatsAppButton";

export default function TakeawayForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  function getDetails(): TakeawayDetails | null {
    if (!name || !phone || !pickupTime) return null;
    return { type: "takeaway", name, phone, pickupTime };
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-charcoal/60">
        Pick a time that works for you — we'll have it packed and ready at
        the counter.
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
        <label className="text-sm font-medium block mb-1">Pickup time</label>
        <input
          type="time"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
          className="w-full border border-charcoal/20 rounded-md px-3 py-2"
        />
      </div>
      <WhatsAppButton getDetails={getDetails} />
    </div>
  );
}
