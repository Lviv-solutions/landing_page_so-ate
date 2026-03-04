"use client";
import React from "react";
import Navigation from "../../../components/Navigation";

interface BusinessStepLayoutProps {
  locale: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export default function BusinessStepLayout({
  locale,
  children,
  maxWidth = "max-w-6xl",
}: BusinessStepLayoutProps) {
  return (
    <div
      className="min-h-screen bg-white"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <Navigation locale={locale} />
      <main className={`${maxWidth} mx-auto px-6 pt-32 pb-12`}>
        {children}
      </main>
    </div>
  );
}
