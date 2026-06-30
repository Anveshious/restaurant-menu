import Link from "next/link";
import { menuData } from "@/data/menuData";
import MenuCard from "@/components/menu/MenuCard";

export default function HomePage() {
  const featured = menuData.slice(0, 3);

  return (
    <>
      <section className="max-w-5xl mx-auto px-5 pt-16 pb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
          Real flavour, made fresh daily
        </h1>
        <p className="text-charcoal/70 max-w-xl mx-auto mb-8">
          Dine in, pick up, or get it delivered — order in under a minute and
          confirm straight on WhatsApp.
        </p>
        <Link
          href="/order"
          className="inline-block bg-spice text-cream px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
        >
          Start an order
        </Link>
      </section>

      <section id="menu" className="max-w-5xl mx-auto px-5 py-12">
        <h2 className="text-2xl font-semibold mb-6">From the menu</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {featured.map((item) => (
            <MenuCard key={item.id} item={item} readOnly />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/order" className="text-spice font-medium hover:underline">
            See full menu and order →
          </Link>
        </div>
      </section>
    </>
  );
}
