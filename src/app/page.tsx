import Link from "next/link";
import { menuData } from "@/data/menuData";
import MenuCard from "@/components/menu/MenuCard";
import RestaurantSlideshow from "@/components/RestaurantSlideshow";
import fs from "fs";
import path from "path";

export default function HomePage() {
  const featured = menuData.slice(0, 3);
  const imagesDirectory = path.join(process.cwd(), "public", "restaurant-images");
  const imageFiles = fs.existsSync(imagesDirectory)
    ? fs
        .readdirSync(imagesDirectory)
        .filter((file) => /\.(png|jpe?g|webp|avif)$/i.test(file))
        .sort()
        .map((file) => `/restaurant-images/${file}`)
    : [];

  return (
    <>
      <section className="max-w-5xl mx-auto px-5 pt-16 pb-12 text-center">
        <RestaurantSlideshow images={imageFiles} />

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

      <section id="menu" className="max-w-5xl mx-auto px-5 py-12 scroll-mt-24">
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

      <section id="contact" className="max-w-5xl mx-auto px-5 py-12 scroll-mt-24">
        <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
        <div className="rounded-2xl border border-charcoal/10 bg-cream/80 p-8">
          <p className="text-charcoal/70 max-w-2xl">
            Whether you’re planning a quick lunch, a family dinner, or a large
            takeaway order, our team is ready to help.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Link href="/order" className="text-spice font-medium hover:underline">
              Start your order
            </Link>
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noreferrer"
              className="text-spice font-medium hover:underline"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
