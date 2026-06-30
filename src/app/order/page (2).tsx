import OrderTypeCard from "@/components/order/OrderTypeCard";

export default function OrderPage() {
  return (
    <section className="max-w-3xl mx-auto px-5 py-16 text-center">
      <h1 className="text-2xl font-semibold mb-2">How would you like to order?</h1>
      <p className="text-charcoal/60 mb-10">Pick one to continue</p>
      <div className="grid sm:grid-cols-3 gap-5">
        <OrderTypeCard
          href="/order/dine-in"
          title="Dine-in"
          description="For a table already booked with us"
        />
        <OrderTypeCard
          href="/order/takeaway"
          title="Take away"
          description="Collect your order at the counter"
        />
        <OrderTypeCard
          href="/order/delivery"
          title="Home delivery"
          description="Delivered straight to your door"
        />
      </div>
    </section>
  );
}
