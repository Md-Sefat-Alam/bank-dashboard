import { ThemeProviderComp } from "@/contexts/ThemeContext";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DOER Dashboard",
  description: "DOER Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className={inter.className}>
        <AntdRegistry>
          <ThemeProviderComp>{children}</ThemeProviderComp>
        </AntdRegistry>
      </body>
    </html>
  );
}
