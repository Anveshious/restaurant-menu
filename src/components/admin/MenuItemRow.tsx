"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MenuItem } from "@/types";
import { deleteMenuItem } from "@/app/admin/(protected)/menu/actions";
import ItemForm from "./ItemForm";

export default function MenuItemRow({ item }: { item: MenuItem }) {
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  async function handleDelete() {
    if (!confirm(`Remove "${item.name}" from the menu?`)) return;
    setDeleting(true);
    await deleteMenuItem(item.id);
    router.refresh();
  }

  if (editing) {
    return <ItemForm initial={item} onDone={() => setEditing(false)} />;
  }

  return (
    <div className="border border-charcoal/10 rounded-lg p-4 flex items-center justify-between gap-4">
      <div>
        <div className="flex items-center gap-2">
          <h3 className="font-medium">{item.name}</h3>
          {!item.isAvailable && (
            <span className="text-xs text-charcoal/50 border border-charcoal/20 rounded-full px-2 py-0.5">
              Hidden
            </span>
          )}
          {item.source === "scanned" && (
            <span className="text-xs text-sage border border-sage/40 rounded-full px-2 py-0.5">
              Scanned
            </span>
          )}
        </div>
        <p className="text-sm text-charcoal/60">
          {item.category} · ₹{item.price}
        </p>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={() => setEditing(true)}
          className="text-sm text-charcoal/70 hover:text-charcoal"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          disabled={deleting}
          className="text-sm text-red-600 hover:text-red-700 disabled:opacity-50"
        >
          {deleting ? "Removing…" : "Delete"}
        </button>
      </div>
    </div>
  );
}
