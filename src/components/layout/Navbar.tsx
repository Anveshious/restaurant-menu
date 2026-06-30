import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-charcoal/10">
      <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Restaurant Name
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/#menu" className="hover:text-spice transition-colors">
            Menu
          </Link>
          <Link href="/#contact" className="hover:text-spice transition-colors">
            Contact
          </Link>
          <Link
            href="/order"
            className="bg-spice text-cream px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Order Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
