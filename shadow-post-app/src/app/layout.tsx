import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import ConditionalNavigationHeader from "@/components/conditional-navigation-header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShadowPost",
  description: "Your shadow posting platform",
  icons: {
    icon: "/favicon-32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ConditionalNavigationHeader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
