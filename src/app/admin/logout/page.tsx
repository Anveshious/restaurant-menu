"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();

    async function signOut() {
      await supabase.auth.signOut();
      router.replace("/admin/login");
    }

    signOut();
  }, [router]);

  return (
    <section className="max-w-sm mx-auto px-5 py-24 text-center">
      <h1 className="text-2xl font-semibold mb-3">Signing out…</h1>
      <p className="text-sm text-charcoal/60">You are being redirected to the admin login page.</p>
    </section>
  );
}
