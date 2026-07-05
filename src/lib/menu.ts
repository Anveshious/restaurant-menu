import { createClient } from "@/lib/supabase/server";
import { MenuItem } from "@/types";

interface MenuItemRow {
  id: string;
  name: string;
  description: string | null;
  price: number;
  category: string;
  image_url: string | null;
  is_veg: boolean;
  is_available: boolean;
  source: "manual" | "scanned";
}

function toMenuItem(row: MenuItemRow): MenuItem {
  return {
    id: row.id,
    name: row.name,
    description: row.description ?? "",
    price: row.price,
    category: row.category,
    imageUrl: row.image_url ?? undefined,
    isVeg: row.is_veg,
    isAvailable: row.is_available,
    source: row.source,
  };
}

/** Items visible to customers — used on the home page and order pages. */
export async function getAvailableMenuItems(): Promise<MenuItem[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("menu_items")
    .select("*")
    .eq("is_available", true)
    .order("category")
    .order("name");

  if (error) {
    console.error("Failed to load menu items:", error.message);
    return [];
  }

  return (data as MenuItemRow[]).map(toMenuItem);
}

/** Every item, including hidden/draft ones — used in the admin menu editor. */
export async function getAllMenuItems(): Promise<MenuItem[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("menu_items")
    .select("*")
    .order("category")
    .order("name");

  if (error) {
    console.error("Failed to load menu items:", error.message);
    return [];
  }

  return (data as MenuItemRow[]).map(toMenuItem);
}
