import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`bg-[#0D1117] ${font.className}`}>{children}</body>
    </html>
  );
}
