"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { Shield, CreditCard, Smartphone, CheckCircle } from "lucide-react";

export default function SmartPaymentSection() {
  const { t } = useTranslation();

  const paymentFeatures = [
    {
      icon: CreditCard,
      titleKey: "smartPayment.features.electronic.title",
      descriptionKey: "smartPayment.features.electronic.description"
    },
    {
      icon: Shield,
      titleKey: "smartPayment.features.security.title", 
      descriptionKey: "smartPayment.features.security.description"
    },
    {
      icon: Smartphone,
      titleKey: "smartPayment.features.advance.title",
      descriptionKey: "smartPayment.features.advance.description"
    }
  ];

  return (
    <section id="smart-payment" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-right order-2 lg:order-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <motion.div
              className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-sm font-medium mb-6 font-clash"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              dir="auto"
            >
              {t("smartPayment.badge")}
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-clash"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              dir="auto"
            >
              {t("smartPayment.title")}
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed font-clash max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              dir="auto"
            >
              {t("smartPayment.description")}
            </motion.p>

            {/* Payment Features */}
            <div className="space-y-6">
              {paymentFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 text-right"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 order-2">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div className="flex-1 order-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 font-clash" dir="auto">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-gray-600 font-clash" dir="auto">
                      {t(feature.descriptionKey)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Phone Frame */}
              <motion.div
                className="relative z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-64 sm:w-80 lg:w-96 h-auto relative">
                  {/* Phone Shadow */}
                  <div className="absolute inset-0 bg-black/20 rounded-[3rem] blur-xl transform translate-y-4 scale-95" />
                  
                  {/* Phone Body */}
                  <div className="relative bg-gray-800 rounded-[3rem] p-2 shadow-2xl">
                    <div className="bg-black rounded-[2.5rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="bg-black px-6 py-3 flex justify-between items-center text-white text-sm">
                        <span className="font-semibold">11:52</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 bg-white rounded-sm" />
                          <div className="w-6 h-3 border border-white rounded-sm">
                            <div className="w-4 h-1 bg-green-500 rounded-sm mt-0.5 ml-0.5" />
                          </div>
                        </div>
                      </div>
                      
                      {/* App Icons */}
                      <div className="px-8 py-12 bg-black">
                        <div className="grid grid-cols-2 gap-8">
                          {/* So-Eat App */}
                          <motion.div
                            className="flex flex-col items-center"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl mb-3 flex items-center justify-center shadow-lg">
                              <div className="text-white text-2xl font-bold">🍽️</div>
                            </div>
                            <span className="text-white text-xs font-medium font-clash">سو-إيت</span>
                          </motion.div>

                          {/* Maps App */}
                          <motion.div
                            className="flex flex-col items-center"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-green-400 rounded-2xl mb-3 flex items-center justify-center shadow-lg">
                              <div className="text-white text-2xl">🗺️</div>
                            </div>
                            <span className="text-white text-xs font-medium">Maps</span>
                          </motion.div>

                          {/* Apple Pay */}
                          <motion.div
                            className="flex flex-col items-center"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-black rounded-2xl mb-3 flex items-center justify-center shadow-lg">
                              <div className="text-white text-xl">💳</div>
                            </div>
                            <span className="text-white text-xs font-medium">Pay</span>
                          </motion.div>

                          {/* STC Pay */}
                          <motion.div
                            className="flex flex-col items-center"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-3 flex items-center justify-center shadow-lg">
                              <div className="text-white text-xl">💰</div>
                            </div>
                            <span className="text-white text-xs font-medium">STC</span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Payment Icons */}
              <motion.div
                className="absolute -top-8 -right-8 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ rotate: 360, y: [0, -10, 0] }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  y: { duration: 2, repeat: Infinity, delay: 0.5 }
                }}
              >
                <CreditCard className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <Shield className="w-5 h-5 text-white" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-8 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              >
                <Smartphone className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
