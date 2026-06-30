import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Client for use in Client Components and the browser.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// NOTE: once the menu_items table exists, replace src/data/menuData.ts
// reads with something like:
//
// const { data, error } = await supabase
//   .from("menu_items")
//   .select("*")
//   .eq("isAvailable", true);
