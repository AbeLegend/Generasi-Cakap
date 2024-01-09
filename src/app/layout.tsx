// lib
import type { Metadata } from "next";
import Head from "next/head";
// local
import "./globals.css";
import { figtree } from "@/lib";
import Script from "next/script";

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
      <Head>
        {/* Google tag (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`}
        </Script>
      </Head>
      <body className={figtree.className}>{children}</body>
    </html>
  );
}
