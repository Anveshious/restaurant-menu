import DineInForm from "@/components/order/DineInForm";
import MenuGrid from "@/components/menu/MenuGrid";
import CartDrawer from "@/components/menu/CartDrawer";

export default function DineInPage() {
  return (
    <section className="max-w-5xl mx-auto px-5 py-12">
      <h1 className="text-2xl font-semibold mb-8">Dine-in pre-order</h1>
      <div className="grid lg:grid-cols-[1fr_320px] gap-8">
        <div className="space-y-10">
          <div>
            <h2 className="font-semibold mb-4">Add items to your table</h2>
            <MenuGrid />
          </div>
          <DineInForm />
        </div>
        <CartDrawer />
      </div>
    </section>
  );
}
