"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface Translations {
  [key: string]: string | number | Translations | string[];
}

type TranslationValue = string | number | Translations | string[];

export function useTranslation() {
  const pathname = usePathname();
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState(true);

  const getCurrentLocale = () => {
    const segments = pathname.split("/").filter(Boolean);
    // If first segment is 'en', use English, otherwise default to Arabic
    return segments[0] === "en" ? "en" : "ar";
  };

  const locale = getCurrentLocale();

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/locales/${locale}/common.json`);
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error("Failed to load translations:", error);
        // Fallback to Arabic if English fails
        if (locale === "en") {
          try {
            const fallbackResponse = await fetch("/locales/ar/common.json");
            const fallbackData = await fallbackResponse.json();
            setTranslations(fallbackData);
          } catch (fallbackError) {
            console.error(
              "Failed to load fallback translations:",
              fallbackError,
            );
          }
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [locale]);

  const t = (
    key: string,
    params?: { [key: string]: string | number },
  ): string => {
    const keys = key.split(".");
    let value: TranslationValue = translations;

    for (const k of keys) {
      if (
        value &&
        typeof value === "object" &&
        !Array.isArray(value) &&
        k in value
      ) {
        value = (value as Translations)[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    if (typeof value === "string" && params) {
      return value.replace(
        /\{\{(\w+)\}\}/g,
        (match: string, paramKey: string) => {
          return params[paramKey]?.toString() || match;
        },
      );
    }

    return typeof value === "string" ? value : key;
  };

  const getArray = (key: string): string[] => {
    const keys = key.split(".");
    let value: TranslationValue = translations;

    for (const k of keys) {
      if (
        value &&
        typeof value === "object" &&
        !Array.isArray(value) &&
        k in value
      ) {
        value = (value as Translations)[k];
      } else {
        return [];
      }
    }

    return Array.isArray(value) ? value : [];
  };

  return { t, getArray, locale, isLoading };
}
