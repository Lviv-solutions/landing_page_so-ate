"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface NavigationProps {
  locale: string;
}

export default function Navigation({ locale }: NavigationProps) {
  const router = useRouter();

  const toggleLocale = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split("/").filter(Boolean);
    pathSegments[0] = newLocale;
    router.push("/" + pathSegments.join("/"));
  };

  return (
    <header className="flex justify-between items-center px-6 md:px-12 lg:px-24 py-3 absolute top-0 left-0 right-0 z-10">
      {/* Left side - Logo & Brand */}
      <div className="flex items-center gap-3">
        <Image
          src="/assets/admin-console/Icon.svg"
          alt="So-Eat Business"
          width={36}
          height={36}
        />
        <span className="text-base font-bold text-gray-900">
          {locale === "ar" ? "سو - إيت بيزنس" : "So-Eat Business"}
        </span>
      </div>

      {/* Right side - My Claims & Language Switcher */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.push(`/${locale}/business/claims`)}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-900 hover:border-[#FF5630] hover:bg-[#FF5630]/5 transition-all"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span className="text-sm font-medium">
            {locale === "ar" ? "مطالباتي" : "My Claims"}
          </span>
        </button>
        <button
          onClick={toggleLocale}
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all"
        >
          {locale === "ar" ? (
            <svg className="w-5 h-3" viewBox="0 0 60 30">
              <rect width="60" height="30" fill="#012169" />
              <path
                d="M0,0 L60,30 M60,0 L0,30"
                stroke="white"
                strokeWidth="6"
              />
              <path
                d="M0,0 L60,30 M60,0 L0,30"
                stroke="#C8102E"
                strokeWidth="4"
              />
              <path
                d="M30,0 L30,30 M0,15 L60,15"
                stroke="white"
                strokeWidth="10"
              />
              <path
                d="M30,0 L30,30 M0,15 L60,15"
                stroke="#C8102E"
                strokeWidth="6"
              />
            </svg>
          ) : (
            <svg className="w-5 h-3" viewBox="0 0 900 600">
              <rect width="900" height="600" fill="#006C35" />
              <path d="M 450,300 L 450,150 L 600,225 Z" fill="white" />
              <text
                x="300"
                y="350"
                fontSize="200"
                fill="white"
                fontFamily="Arial"
              >
                LA
              </text>
            </svg>
          )}
          <span className="text-sm font-medium text-gray-600">
            {locale === "ar" ? "English" : "العربية"}
          </span>
        </button>
      </div>
    </header>
  );
}
