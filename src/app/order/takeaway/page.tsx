import TakeawayForm from "@/components/order/TakeawayForm";
import MenuGrid from "@/components/menu/MenuGrid";
import CartDrawer from "@/components/menu/CartDrawer";

export default function TakeawayPage() {
  return (
    <section className="max-w-5xl mx-auto px-5 py-12">
      <h1 className="text-2xl font-semibold mb-8">Take away order</h1>
      <div className="grid lg:grid-cols-[1fr_320px] gap-8">
        <div className="space-y-10">
          <div>
            <h2 className="font-semibold mb-4">Choose your items</h2>
            <MenuGrid />
          </div>
          <TakeawayForm />
        </div>
        <CartDrawer />
      </div>
    </section>
  );
}
