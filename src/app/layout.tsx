// lib
import type { Metadata } from "next";
// local
import "./globals.css";
import { figtree } from "@/lib";

export const metadata: Metadata = {
  title: "Generasi Cakap",
  description: "Website Generasi Cakap",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
