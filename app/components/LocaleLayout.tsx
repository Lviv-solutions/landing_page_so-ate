"use client";

import { useTranslation } from "../hooks/useTranslation";
import { useEffect } from "react";

interface LocaleLayoutProps {
  children: React.ReactNode;
}

export default function LocaleLayout({ children }: LocaleLayoutProps) {
  const { locale } = useTranslation();

  useEffect(() => {
    // Update document direction based on locale
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    
    // Update document title based on locale
    if (locale === "en") {
      document.title = "So-Eat - Restaurant Management Platform";
    } else {
      document.title = "So-Eat - منصة إدارة المطاعم";
    }
  }, [locale]);

  return (
    <div className={`locale-container ${locale === "ar" ? "rtl" : "ltr"}`}>
      {children}
    </div>
  );
}
