import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      <Link
        href="/admin/menu"
        className="inline-block border border-charcoal/10 rounded-lg p-5 hover:border-spice transition-colors"
      >
        <h2 className="font-medium mb-1">Manage menu</h2>
        <p className="text-sm text-charcoal/60">Add, edit, or remove menu items</p>
      </Link>
    </div>
  );
}
