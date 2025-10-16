'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function DocumentHead() {
  const pathname = usePathname();

  useEffect(() => {
    const getCurrentLocale = () => {
      const segments = pathname.split('/').filter(Boolean);
      return segments[0] === 'en' ? 'en' : 'ar';
    };

    const locale = getCurrentLocale();
    const isRTL = locale === 'ar';

    // Update document attributes
    document.documentElement.lang = locale;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    
    // Update document title based on locale
    if (locale === 'en') {
      document.title = 'So-Eat - Restaurant Management Platform';
    } else {
      document.title = 'So-Eat - منصة إدارة المطاعم';
    }
  }, [pathname]);

  return null; // This component doesn't render anything
}
