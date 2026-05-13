"use client";

import { usePathname } from "next/navigation";
import arTranslations from "../../public/locales/ar/common.json";
import enTranslations from "../../public/locales/en/common.json";

interface Translations {
  [key: string]: string | number | Translations | string[] | FAQItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

type TranslationValue = string | number | Translations | string[] | FAQItem[];

// Static translation map — no network request needed
const translationMap: Record<string, Translations> = {
  ar: arTranslations as unknown as Translations,
  en: enTranslations as unknown as Translations,
};

export function useTranslation() {
  const pathname = usePathname();

  const getCurrentLocale = () => {
    const segments = pathname.split("/").filter(Boolean);
    // If first segment is 'en', use English, otherwise default to Arabic
    return segments[0] === "en" ? "en" : "ar";
  };

  const locale = getCurrentLocale();
  const translations = translationMap[locale] || translationMap.ar;
  const isLoading = false;

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

    return Array.isArray(value) && typeof value[0] === 'string' ? value as string[] : [];
  };

  const getObjectArray = (key: string): FAQItem[] => {
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

    return Array.isArray(value) ? value as unknown as FAQItem[] : [];
  };

  return { t, getArray, getObjectArray, locale, isLoading };
}
