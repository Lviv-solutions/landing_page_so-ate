import type { Metadata } from "next";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return {
      title: "So-Eat - Restaurant Management Platform",
      description:
        "An integrated platform for restaurant management and electronic orders",
    };
  }

  return {
    title: "So-Eat - منصة إدارة المطاعم",
    description: "منصة متكاملة لإدارة المطاعم والطلبات الإلكترونية",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  const isRTL = locale === 'ar';
  
  // Set document attributes via useEffect since we can't have nested html tags
  return (
    <div data-locale={locale} data-dir={isRTL ? 'rtl' : 'ltr'} className="locale-wrapper">
      {children}
    </div>
  );
}
