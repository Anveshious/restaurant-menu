import Link from "next/link";

interface OrderTypeCardProps {
  href: string;
  title: string;
  description: string;
}

export default function OrderTypeCard({ href, title, description }: OrderTypeCardProps) {
  return (
    <Link
      href={href}
      className="border border-charcoal/10 rounded-lg p-6 text-center hover:border-spice hover:shadow-sm transition-all"
    >
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-charcoal/60">{description}</p>
    </Link>
  );
}
