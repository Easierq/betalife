import "./globals.css";

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
const inter = Open_Sans({ subsets: ["latin"] });

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Betalife",
  description: "Digital Marketing Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "bg-brand-pink")}>{children}</body>
    </html>
  );
}
