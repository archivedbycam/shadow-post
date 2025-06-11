"use client";

import { usePathname } from "next/navigation";
import NavigationHeader from "@/components/navigation-header";

export default function ConditionalNavigationHeader() {
  const pathname = usePathname();

  // Check if current path is an auth page
  const isAuthPage = pathname.startsWith("/signin") || pathname.startsWith("/signup");

  if (isAuthPage) {
    return null; // Don't render NavigationHeader on auth pages
  }

  return <NavigationHeader />;
} 