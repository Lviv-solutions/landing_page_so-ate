"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Hook that syncs locale state with the URL pathname.
 * Listens for popstate events to keep locale in sync on browser back/forward.
 */
export function useLocaleSync() {
  const router = useRouter();
  const [locale, setLocale] = useState(
    typeof window !== "undefined"
      ? window.location.pathname.split("/")[1]
      : "ar"
  );

  useEffect(() => {
    const handleRouteChange = () => {
      const newLocale = window.location.pathname.split("/")[1];
      if (newLocale !== locale) {
        setLocale(newLocale);
      }
    };

    window.addEventListener("popstate", handleRouteChange);
    handleRouteChange();

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [router, locale]);

  const isArabic = locale === "ar";

  return { locale, isArabic, router };
}
