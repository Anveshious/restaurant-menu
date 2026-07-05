import { getAllMenuItems } from "@/lib/menu";
import ItemForm from "@/components/admin/ItemForm";
import MenuItemRow from "@/components/admin/MenuItemRow";

export default async function AdminMenuPage() {
  const items = await getAllMenuItems();

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-semibold mb-4">Add a menu item</h1>
        <ItemForm />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">
          Current menu ({items.length})
        </h2>
        {items.length === 0 ? (
          <p className="text-sm text-charcoal/50">
            No items yet — add your first one above.
          </p>
        ) : (
          <div className="space-y-3">
            {items.map((item) => (
              <MenuItemRow key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
