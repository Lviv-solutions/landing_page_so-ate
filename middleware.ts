import { NextRequest, NextResponse } from "next/server";

const locales = ["ar", "en"];
const defaultLocale = "ar";

function getLocale(request: NextRequest): string {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = request.headers
      .get("accept-language")
      ?.split(",")[0]
      ?.split("-")[0];

    // Use detected locale if supported, otherwise use default
    const detectedLocale = locales.includes(locale || "")
      ? locale
      : defaultLocale;

    // For default locale (Arabic), don't add prefix
    if (detectedLocale === defaultLocale) {
      return defaultLocale;
    }

    return detectedLocale || defaultLocale;
  }

  // Extract locale from pathname
  const segments = pathname.split("/");
  const localeFromPath = segments[1];

  return locales.includes(localeFromPath) ? localeFromPath : defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // If pathname is missing locale and it's not the root path for Arabic
  if (pathnameIsMissingLocale && pathname !== "/") {
    const locale = getLocale(request);

    // Only redirect for non-default locale
    if (locale !== defaultLocale) {
      return NextResponse.redirect(
        new URL(`/${locale}${pathname}`, request.url),
      );
    }
  }

  // Handle English routes
  if (pathname.startsWith("/en")) {
    return NextResponse.next();
  }

  // Handle Arabic (default) routes
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next), API routes, static files, and assets
    "/((?!_next|api|favicon.ico|locales|image|.*\\.).*)",
  ],
};
