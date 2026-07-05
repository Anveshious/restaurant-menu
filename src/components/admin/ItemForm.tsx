"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MenuItem } from "@/types";
import { addMenuItem, updateMenuItem, MenuItemInput } from "@/app/admin/(protected)/menu/actions";

interface ItemFormProps {
  initial?: MenuItem;
  onDone?: () => void;
}

const emptyForm: MenuItemInput = {
  name: "",
  description: "",
  price: 0,
  category: "",
  imageUrl: "",
  isVeg: true,
  isAvailable: true,
};

export default function ItemForm({ initial, onDone }: ItemFormProps) {
  const [form, setForm] = useState<MenuItemInput>(
    initial
      ? {
          name: initial.name,
          description: initial.description,
          price: initial.price,
          category: initial.category,
          imageUrl: initial.imageUrl ?? "",
          isVeg: initial.isVeg,
          isAvailable: initial.isAvailable,
        }
      : emptyForm
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.name || !form.category || form.price < 0) {
      setError("Name, category, and a valid price are required.");
      return;
    }

    setSaving(true);
    setError("");

    const result = initial
      ? await updateMenuItem(initial.id, form)
      : await addMenuItem(form);

    setSaving(false);

    if (!result.success) {
      setError(result.message ?? "Something went wrong. Please try again.");
      return;
    }

    if (!initial) setForm(emptyForm);
    router.refresh();
    onDone?.();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 border border-charcoal/10 rounded-lg p-4">
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-sm font-medium block mb-1">Name</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-charcoal/20 rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">Category</label>
          <input
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            placeholder="e.g. Starters"
            className="w-full border border-charcoal/20 rounded-md px-3 py-2"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium block mb-1">Description</label>
        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          rows={2}
          className="w-full border border-charcoal/20 rounded-md px-3 py-2"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-sm font-medium block mb-1">Price (₹)</label>
          <input
            type="number"
            min={0}
            step="1"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
            className="w-full border border-charcoal/20 rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">Image URL (optional)</label>
          <input
            value={form.imageUrl}
            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
            placeholder="/images/menu/dish.jpg"
            className="w-full border border-charcoal/20 rounded-md px-3 py-2"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={form.isVeg}
            onChange={(e) => setForm({ ...form, isVeg: e.target.checked })}
          />
          Vegetarian
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={form.isAvailable}
            onChange={(e) => setForm({ ...form, isAvailable: e.target.checked })}
          />
          Visible on menu
        </label>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={saving}
          className="bg-charcoal text-cream px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {saving ? "Saving…" : initial ? "Save changes" : "Add item"}
        </button>
        {onDone && (
          <button
            type="button"
            onClick={onDone}
            className="text-sm text-charcoal/60 hover:text-charcoal"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
