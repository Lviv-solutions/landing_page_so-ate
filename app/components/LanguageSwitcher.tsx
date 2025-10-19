"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (locale: string) => {
    const segments = pathname.split("/").filter(Boolean);
    
    // Remove current locale from segments if it exists
    if (segments[0] === "en" || segments[0] === "ar") {
      segments.shift();
    }
    
    // Build new path with new locale
    const pathWithoutLocale = segments.length > 0 ? `/${segments.join("/")}` : "";
    const newPath = `/${locale}${pathWithoutLocale}`;
    
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
