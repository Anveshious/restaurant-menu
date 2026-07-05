"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export interface MenuItemInput {
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl?: string;
  isVeg: boolean;
  isAvailable: boolean;
}

function toRow(input: MenuItemInput) {
  return {
    name: input.name,
    description: input.description,
    price: input.price,
    category: input.category,
    image_url: input.imageUrl || null,
    is_veg: input.isVeg,
    is_available: input.isAvailable,
  };
}

export async function addMenuItem(input: MenuItemInput) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("menu_items")
    .insert({ ...toRow(input), source: "manual" });

  if (error) {
    return { success: false, message: error.message };
  }

  revalidatePath("/admin/menu");
  revalidatePath("/");
  revalidatePath("/order");
  return { success: true };
}

export async function updateMenuItem(id: string, input: MenuItemInput) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("menu_items")
    .update(toRow(input))
    .eq("id", id);

  if (error) {
    return { success: false, message: error.message };
  }

  revalidatePath("/admin/menu");
  revalidatePath("/");
  revalidatePath("/order");
  return { success: true };
}

export async function deleteMenuItem(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from("menu_items").delete().eq("id", id);

  if (error) {
    return { success: false, message: error.message };
  }

  revalidatePath("/admin/menu");
  revalidatePath("/");
  revalidatePath("/order");
  return { success: true };
}
