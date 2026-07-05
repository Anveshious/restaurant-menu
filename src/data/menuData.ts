import { MenuItem } from "@/types";

// Placeholder data — swap this for a Supabase query once the
// menu_items table exists (see lib/supabase.ts).
export const menuData: MenuItem[] = [
  {
    id: "1",
    name: "Paneer Tikka",
    description: "Char-grilled cottage cheese marinated in spiced yogurt.",
    price: 220,
    category: "Starters",
    isVeg: true,
    isAvailable: true,
    source: "manual",
  },
  {
    id: "2",
    name: "Chicken 65",
    description: "Deep-fried chicken tossed in curry leaves and chilli.",
    price: 260,
    category: "Starters",
    isVeg: false,
    isAvailable: true,
    source: "manual",
  },
  {
    id: "3",
    name: "Butter Chicken",
    description: "Tandoori chicken simmered in a creamy tomato gravy.",
    price: 320,
    category: "Main Course",
    isVeg: false,
    isAvailable: true,
    source: "manual",
  },
  {
    id: "4",
    name: "Dal Makhani",
    description: "Black lentils slow-cooked overnight with butter and cream.",
    price: 240,
    category: "Main Course",
    isVeg: true,
    isAvailable: true,
    source: "manual",
  },
  {
    id: "5",
    name: "Garlic Naan",
    description: "Tandoor-baked flatbread with roasted garlic and butter.",
    price: 70,
    category: "Breads",
    isVeg: true,
    isAvailable: true,
    source: "manual",
  },
  {
    id: "6",
    name: "Gulab Jamun",
    description: "Warm milk-solid dumplings soaked in cardamom syrup.",
    price: 110,
    category: "Desserts",
    isVeg: true,
    isAvailable: true,
    source: "manual",
  },
];

export const categories = Array.from(new Set(menuData.map((i) => i.category)));
