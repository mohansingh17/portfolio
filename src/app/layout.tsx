import type { Metadata } from "next";
import { Inter, Saira, Manrope, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Head from "next/head";
import Contact from "@/components/Contact";
import NextTopLoader from "nextjs-toploader";
import ParticleBackground from "@/components/ParticleBackground";
import { headers } from "next/headers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-saira",
});
const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Mohan Singh | Frontend Developer Portfolio",
  description:
    "Explore the portfolio of Mohan Singh, a Frontend Developer skilled in React.js, Next.js, and TypeScript — building modern, responsive, and high-performance web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userAgent = headers().get("user-agent") || "";

  // const isMobileOrTablet = /Mobi|Mobile|Android|iPhone|iPad|iPod|Tablet/i.test(
  //   userAgent
  // );

  const isMobileOrTablet =
    /iPhone|iPad|iPod|Android(?!.*Mobile)|Mobile|Tablet/i.test(userAgent);

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${saira.variable} ${inter.variable} ${manrope.variable} ${jost.variable} relative bg-[#0a0a0a] text-white overflow-x-hidden`}
      >
        <Header />
        <NextTopLoader color="#0F2167" showSpinner={false} />
        {!isMobileOrTablet && <ParticleBackground />}
        {children}
        <Contact />
        {userAgent}
      </body>
    </html>
  );
}
