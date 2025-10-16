import type { Metadata } from "next";
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import { clashDisplay, theYearOfHandicrafts } from "./fonts";
import DocumentHead from "./components/DocumentHead";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "So-Eat - Restaurant Management Platform",
  description: "An integrated platform for restaurant management and electronic orders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} ${clashDisplay.variable} ${theYearOfHandicrafts.variable} antialiased`}
      >
        <DocumentHead />
        {children}
      </body>
    </html>
  );
}
