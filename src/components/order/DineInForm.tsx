"use client";

import { useState } from "react";
import { DineInDetails } from "@/types";
import WhatsAppButton from "./WhatsAppButton";

export default function DineInForm() {
  const [bookingRef, setBookingRef] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function getDetails(): DineInDetails | null {
    if (!bookingRef || !name || !date || !time) return null;
    return { type: "dine-in", bookingRef, name, date, time };
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-charcoal/60">
        This is for tables already booked with us. Enter your booking
        reference so the kitchen can match your pre-order.
      </p>
      <div>
        <label className="text-sm font-medium block mb-1">Booking reference</label>
        <input
          value={bookingRef}
          onChange={(e) => setBookingRef(e.target.value)}
          className="w-full border border-charcoal/20 rounded-md px-3 py-2"
          placeholder="e.g. BK-1042"
        />
      </div>
      <div>
        <label className="text-sm font-medium block mb-1">Name on booking</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-charcoal/20 rounded-md px-3 py-2"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-sm font-medium block mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-charcoal/20 rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full border border-charcoal/20 rounded-md px-3 py-2"
          />
        </div>
      </div>
      <WhatsAppButton getDetails={getDetails} />
    </div>
  );
}
