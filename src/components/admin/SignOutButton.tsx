"use client";

import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();

  function handleSignOut() {
    router.push("/admin/logout");
  }

  return (
    <button
      onClick={handleSignOut}
      className="text-sm text-charcoal/60 hover:text-charcoal transition-colors"
    >
      Sign out
    </button>
  );
}
