"use client";

import { useTranslation } from "../hooks/useTranslation";

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-r from-[#f9dcc7] to-[#966192]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{t("cta.title")}</h2>
        <p className="text-xl text-white/80 mb-8">{t("cta.description")}</p>
        <button className="bg-white text-[#f9dcc7] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          {t("cta.button")}
        </button>
      </div>
    </section>
  );
}
