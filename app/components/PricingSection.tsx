"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Image from "next/image";
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
    <section id="pricing" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ED614A] to-[#E6446F]" />
      </div>

      {/* Right Gradient Blur */}
      <div 
        className="absolute w-[864px] h-[864px] rounded-full"
        style={{
          right: '-538.83px',
          bottom: '-128.42px',
          background: 'linear-gradient(14deg, rgba(237, 97, 74, 0.50) 33.68%, rgba(255, 192, 66, 0.50) 78.63%)',
          filter: 'blur(213.05px)'
        }}
      />

      {/* Left Gradient Blur */}
      <div 
        className="absolute w-[864px] h-[864px] rounded-full"
        style={{
          left: '-574px',
          bottom: '-128.42px',
          background: 'linear-gradient(14deg, rgba(237, 97, 74, 0.25) 33.68%, rgba(255, 192, 66, 0.50) 78.63%)',
          filter: 'blur(213.05px)'
        }}
      />

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
            className="flex items-center justify-center space-x-4 rounded-full p-2 w-80 mx-auto"
            style={{ background: '#fff' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setIsYearly(false)}
              className={`flex-1 px-6 py-2 rounded-full font-medium transition-all duration-300 font-clash cursor-pointer relative overflow-hidden shadow-md hover:shadow-lg ${
                !isYearly
                  ? "text-white"
                  : "text-[#ED614A]"
              }`}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
              }}
              style={{
                background: !isYearly 
                  ? 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.2) 0%, transparent 50%), linear-gradient(90deg, #ED614A 0%, #E6446F 100%)'
                  : 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(237, 97, 74, 0.1) 0%, transparent 50%), white'
              }}
            >
              {t("pricing.monthly")}
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`flex-1 px-6 py-2 rounded-full font-medium transition-all duration-300 font-clash cursor-pointer relative overflow-hidden shadow-md hover:shadow-lg ${
                isYearly
                  ? "text-white"
                  : "text-[#ED614A]"
              }`}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
              }}
              style={{
                background: isYearly 
                  ? 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.2) 0%, transparent 50%), linear-gradient(90deg, #ED614A 0%, #E6446F 100%)'
                  : 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(237, 97, 74, 0.1) 0%, transparent 50%), white'
              }}
            >
              {t("pricing.yearly")}
              {/* <span className="ml-2 bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
                {t("pricing.save", { amount: "20%" })}
              </span> */}
            </button>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-end justify-items-center max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.key}
              className={`relative w-full max-w-sm mx-0 rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-2xl flex items-end mb-0 ${
                plan.popular
                  ? "bg-[#ED614A] border-[#ED614A] scale-105 lg:transform lg:-translate-y-6 py-0 min-h-[500px] lg:min-h-[520px]"
                  : "border-gray-200 hover:border-[#ED614A]/50 bg-white py-0 min-h-[420px] lg:min-h-[440px]"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
        

              <div className={`${plan.popular ? "p-10" : "p-6"}`}>
                              {/* Popular Badge */}
                      {plan.popular && (
                <div className=" pb-4 mb-4 transform ">
                  <div className={` px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 font-clash ${
                plan.popular
                  ? " bg-[#FFFFFF52]/80 text-[#fff] border-[#ED614A] scale-105"
                  : "border-gray-200 text-[#ED614A]  hover:border-[#ED614A]/50  bg-white"
                  }`}
                  >
                    <Star size={16} fill="currentColor" />
                    <span>{t(`pricing.plans.${plan.key}.popular`)}</span>
                  </div>
                </div>
              )}
        

                {/* Price */}
                <div className="text-center mb-8">
                  {plan.key === "enterprise" ? (
                    <div className="flex items-center justify-center">
                      <div className={`text-4xl font-bold font-clash ${
                        plan.popular ? "text-white" : "text-[#31241A]"
                      }`}>
                        {t(`pricing.plans.${plan.key}.price`)}
                      </div>
                      {/* <Image
                        src="/image/SAR.svg"
                        alt="Saudi Riyal"
                        width={36}
                        height={36}
                        className={`ml-2 ${plan.popular ? "brightness-0 invert" : ""}`}
                      /> */}
                    </div>
                  ) : (
                    <div className="flex items-baseline justify-center">
                      <span className={`text-4xl font-bold font-clash ${
                        plan.popular ? "text-white" : "text-[#31241A]"
                      }`}>
                        {isYearly 
                          ? Math.round(parseInt(t(`pricing.plans.${plan.key}.price`)) * 12 * 0.8)
                          : t(`pricing.plans.${plan.key}.price`)
                        }
                      </span>
                      <Image
                        src="/image/SAR.svg"
                        alt="Saudi Riyal"
                        width={36}
                        height={36}
                        className={`mx-2 ${plan.popular ? "brightness-0 invert" : ""}`}
                      />
                      <span className={`text-3xl font-clash ${
                        plan.popular ? "text-white/90" : "text-gray-600"
                      }`}>
                        {isYearly ? t("pricing.yearly") : t(`pricing.plans.${plan.key}.period`)}
                      </span>
                    </div>
                  )}
                </div>

                        {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 font-clash ${
                    plan.popular ? "text-white" : "text-[#31241A]"
                  }`}>
                    {t(`pricing.plans.${plan.key}.name`)}
                  </h3>
                  <p className={`font-clash ${
                    plan.popular ? "text-white/70" : "text-[#637381]"
                  }`}>
                    {t(`pricing.plans.${plan.key}.description`)}
                  </p>
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
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.popular ? "bg-white/20" : "bg-green-100"
                        }`}>
                          <Check size={12} className={plan.popular ? "text-white" : "text-green-600"} />
                        </div>
                        <span className={`font-clash ${
                          plan.popular ? "text-white/95" : "text-gray-700"
                        }`}>{feature}</span>
                      </motion.div>
                    )
                  )}
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-4 rounded-full font-semibold transition-all duration-300 font-clash cursor-pointer relative overflow-hidden ${
                    plan.popular
                      ? "bg-white text-[#ED614A] shadow-lg hover:shadow-xl hover:bg-gray-50"
                      : "border-2 border-[#ED614A] text-[#ED614A] hover:bg-[#ED614A] hover:text-white hover:shadow-lg"
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(237, 97, 74, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                  }}
                  style={{
                    background: plan.popular 
                      ? 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(237, 97, 74, 0.1) 0%, transparent 50%), white'
                      : undefined
                  }}
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
