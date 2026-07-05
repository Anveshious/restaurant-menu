import Link from "next/link";
import SignOutButton from "@/components/admin/SignOutButton";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div className="border-b border-charcoal/10">
        <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6 text-sm">
            <Link href="/admin/dashboard" className="font-semibold">
              Admin
            </Link>
            <Link href="/admin/menu" className="text-charcoal/60 hover:text-charcoal">
              Menu
            </Link>
          </div>
          <SignOutButton />
        </div>
      </div>
      <main className="max-w-5xl mx-auto px-5 py-10">{children}</main>
    </div>
  );
}
