module.exports = {
  i18n: {
    defaultLocale: "ar",
    locales: ["ar", "en"],
    localeDetection: true,
  },
  fallbackLng: {
    default: ["ar"],
  },
  debug: false,
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
