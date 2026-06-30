import { create } from "zustand";
import { CartItem, MenuItem } from "@/types";

interface CartState {
  items: CartItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((ci) => ci.item.id === item.id);
      if (existing) {
        return {
          items: state.items.map((ci) =>
            ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
          ),
        };
      }
      return { items: [...state.items, { item, quantity: 1 }] };
    }),

  removeItem: (itemId) =>
    set((state) => ({
      items: state.items.filter((ci) => ci.item.id !== itemId),
    })),

  updateQuantity: (itemId, quantity) =>
    set((state) => {
      if (quantity <= 0) {
        return { items: state.items.filter((ci) => ci.item.id !== itemId) };
      }
      return {
        items: state.items.map((ci) =>
          ci.item.id === itemId ? { ...ci, quantity } : ci
        ),
      };
    }),

  clearCart: () => set({ items: [] }),

  total: () =>
    get().items.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0),
}));
