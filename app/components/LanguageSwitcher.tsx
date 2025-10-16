"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (locale: string) => {
    const newPath = locale === "ar" ? "/" : `/${locale}`;
    router.push(newPath);
  };

  const getCurrentLocale = () => {
    const segments = pathname.split("/").filter(Boolean);
    return segments[0] === "en" ? "en" : "ar";
  };

  const currentLocale = getCurrentLocale();

  const toggleLanguage = () => {
    const nextLocale = currentLocale === "ar" ? "en" : "ar";
    switchLanguage(nextLocale);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2  text-sm font-medium transition-all duration-300 bg-white/20 header-font hover:text-white hover:bg-white/30 "
    >
      {currentLocale === "ar" ? "English" : "العربية"}
    </button>
  );
}
