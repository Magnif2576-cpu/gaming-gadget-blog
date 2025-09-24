"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "@/lib/gtag";

export default function Analytics() {
  const pathname = usePathname();
  const search = useSearchParams()?.toString();
  useEffect(() => {
    if (!pathname) return;
    pageview(search ? `${pathname}?${search}` : pathname);
  }, [pathname, search]);
  return null;
}
