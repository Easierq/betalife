import "./globals.css";

import type { Metadata } from "next";
// import { Open_Sans } from "next/font/google";
import { Poppins } from "next/font/google";

// const inter = Open_Sans({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "iBetalife",
  description: "Digital Marketing Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(poppins.className, "bg-white")}>{children}</body>
    </html>
  );
}
