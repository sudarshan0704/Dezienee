/* eslint-disable @next/next/no-css-tags -- these legacy template stylesheets are served from public/style. */
import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LegacyScripts from "@/components/common/LegacyScripts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dezinee | Interior Design Studio",
  description: "Thoughtful interior design for beautiful, functional spaces.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={hankenGrotesk.variable}>
      <head>
        <link rel="stylesheet" href="/style/slicknav.min.css" />
        <link rel="stylesheet" href="/style/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/style/all.min.css" />
        <link rel="stylesheet" href="/style/animate.css" />
        <link rel="stylesheet" href="/style/magnific-popup.css" />
        <link rel="stylesheet" href="/style/mousecursor.css" />
        <link rel="stylesheet" href="/style/custom.css" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <LegacyScripts />
      </body>
    </html>
  );
}
