"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useState } from "react";

export default function PricingSection() {
  const { t, getArray } = useTranslation();
  const [isYearly, setIsYearly] = useState(false);

  const getFeatures = (planKey: string): string[] => {
    return getArray(`pricing.plans.${planKey}.features`);
  };

  const plans = [
    {
      key: "basic",
      popular: false,
    },
    {
      key: "professional", 
      popular: true,
    },
    {
      key: "enterprise",
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ED614A] to-[#E6446F]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-[#31241A] mb-6 font-clash"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t("pricing.title")}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-8 font-clash"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t("pricing.description")}
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            className="flex items-center justify-center space-x-4 bg-gray-100 rounded-full p-2 w-fit mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 font-clash ${
                !isYearly
                  ? "bg-white text-[#ED614A] shadow-md"
                  : "text-gray-600 hover:text-[#ED614A]"
              }`}
            >
              {t("pricing.monthly")}
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 font-clash ${
                isYearly
                  ? "bg-white text-[#ED614A] shadow-md"
                  : "text-gray-600 hover:text-[#ED614A]"
              }`}
            >
              {t("pricing.yearly")}
              <span className="ml-2 bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
                {t("pricing.save", { amount: "20%" })}
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.key}
              className={`relative  rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl ${
                plan.popular
                  ? " bg-[#ED614A] border-[#ED614A] scale-105"
                  : "border-gray-200 hover:border-[#ED614A]/50  bg-white"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={` px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 font-clash ${
                plan.popular
                  ? " bg-[#ED614A]/40 text-[#fff] border-[#ED614A] scale-105"
                  : "border-gray-200 text-[#ED614A]  hover:border-[#ED614A]/50  bg-white"
                  }`}
                  >
                    <Star size={16} fill="currentColor" />
                    <span>{t(`pricing.plans.${plan.key}.popular`)}</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#31241A] mb-2 font-clash">
                    {t(`pricing.plans.${plan.key}.name`)}
                  </h3>
                  <p className="text-gray-600 font-clash">
                    {t(`pricing.plans.${plan.key}.description`)}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  {plan.key === "enterprise" ? (
                    <div className="text-4xl font-bold text-[#31241A] font-clash">
                      {t(`pricing.plans.${plan.key}.price`)}
                    </div>
                  ) : (
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-[#31241A] font-clash">
                        {isYearly 
                          ? Math.round(parseInt(t(`pricing.plans.${plan.key}.price`)) * 12 * 0.8)
                          : t(`pricing.plans.${plan.key}.price`)
                        }
                      </span>
                      <span className="text-gray-600 ml-2 font-clash">
                        {isYearly ? t("pricing.yearly") : t(`pricing.plans.${plan.key}.period`)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {getFeatures(plan.key).map((feature: string, featureIndex: number) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                          <Check size={12} className="text-green-600" />
                        </div>
                        <span className="text-gray-700 font-clash">{feature}</span>
                      </motion.div>
                    )
                  )}
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-4 rounded-full font-semibold transition-all duration-300 font-clash ${
                    plan.popular
                      ? "text-white shadow-lg"
                      : "border-2 border-[#ED614A] text-[#ED614A] hover:bg-[#ED614A] hover:text-white"
                  }`}
                  style={
                    plan.popular
                      ? { background: 'linear-gradient(90deg, #ED614A 0%, #E6446F 100%)' }
                      : {}
                  }
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.key === "enterprise"
                    ? t("pricing.contactSales")
                    : t("pricing.selectPlan")}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4 font-clash">
            {t("pricing.helpText")}
          </p>
          <motion.button
            className="text-[#ED614A] font-semibold hover:underline font-clash"
            whileHover={{ scale: 1.05 }}
          >
            {t("pricing.contactSales")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
