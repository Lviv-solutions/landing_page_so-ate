"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function BusinessPage() {
  const router = useRouter();
  const pathname = usePathname();
  
  // Extract current locale from pathname
  const currentLocale = pathname.split('/')[1] || 'ar';

  useEffect(() => {
    // Redirect to search page
    router.replace(`/${currentLocale}/business/search`);
  }, [router, currentLocale]);

  return null;
}
