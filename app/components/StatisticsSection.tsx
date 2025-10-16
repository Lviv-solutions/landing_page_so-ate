"use client";

import { useTranslation } from "../hooks/useTranslation";

export default function StatisticsSection() {
  const { t } = useTranslation();

  const statistics = [
    { value: "500+", labelKey: "statistics.restaurants" },
    { value: "10K+", labelKey: "statistics.orders" },
    { value: "95%", labelKey: "statistics.satisfaction" },
    { value: "24/7", labelKey: "statistics.support" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {statistics.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-[#8B5261] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{t(stat.labelKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
