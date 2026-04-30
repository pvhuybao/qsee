"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactSticky from "@/components/ContactSticky";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <div className="isolate">
            <Header />
            {children}
            <Footer />
          </div>
          <div className="fixed right-3 bottom-4 z-[99] flex flex-col items-center gap-4 md:right-8 md:bottom-10">
            <ContactSticky />
            <ScrollToTop />
          </div>
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
