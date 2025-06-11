import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ShadowPost - Authentication",
  description: "Sign in or sign up to ShadowPost",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
} 