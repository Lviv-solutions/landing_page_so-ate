"use client";

import { useTranslation } from "../hooks/useTranslation";

export default function AboutSection() {
  const { t, getArray } = useTranslation();
  const features = getArray("about.features");

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-300 aspect-video rounded-lg flex items-center justify-center">
            <span className="text-gray-500">{t("about.aboutImageAlt")}</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#31241A] mb-6">
              {t("about.title")}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {t("about.description")}
            </p>
            <ul className="space-y-3 text-gray-600">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-[#f9dcc7] rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
