export type OrderType = "dine-in" | "takeaway" | "delivery";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl?: string;
  isVeg: boolean;
  isAvailable: boolean;
  source: "manual" | "scanned";
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface DineInDetails {
  type: "dine-in";
  bookingRef: string;
  name: string;
  date: string;
  time: string;
}

export interface TakeawayDetails {
  type: "takeaway";
  name: string;
  phone: string;
  pickupTime: string;
}

export interface DeliveryDetails {
  type: "delivery";
  name: string;
  phone: string;
  address: string;
}

export type OrderDetails = DineInDetails | TakeawayDetails | DeliveryDetails;
