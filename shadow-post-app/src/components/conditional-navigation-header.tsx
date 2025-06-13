"use client";

import { usePathname } from "next/navigation";
import NavigationHeader from "@/components/navigation-header";

export default function ConditionalNavigationHeader() {
  const pathname = usePathname();

  // Check if current path is an auth page, feedback page, or FAQ page
  const isAuthPage = pathname.startsWith("/signin") || pathname.startsWith("/signup");
  const isFeedbackPage = pathname.startsWith("/feedback");
  const isFAQPage = pathname.startsWith("/faq");

  if (isAuthPage || isFeedbackPage || isFAQPage) {
    return null; // Don't render NavigationHeader on auth pages, feedback page, or FAQ page
  }

  return <NavigationHeader />;
} 