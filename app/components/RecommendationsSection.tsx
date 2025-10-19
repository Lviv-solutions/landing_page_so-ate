"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { Brain, Heart, Sparkles, Target } from "lucide-react";
import Image from "next/image";

export default function RecommendationsSection() {
  const { t } = useTranslation();

  const recommendationFeatures = [
    {
      icon: Brain,
      titleKey: "recommendations.features.ai.title",
      descriptionKey: "recommendations.features.ai.description"
    },
    {
      icon: Target,
      titleKey: "recommendations.features.personalized.title",
      descriptionKey: "recommendations.features.personalized.description"
    },
    {
      icon: Sparkles,
      titleKey: "recommendations.features.smart.title",
      descriptionKey: "recommendations.features.smart.description"
    }
  ];

  return (
    <section id="recommendations" className="py-20 bg-gradient-to-br from-gray-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-yellow-300 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            className="text-center lg:text-start order-2 lg:order-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            dir="auto"
          >
            {/* Badge */}
            <motion.div
              className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-sm font-medium mb-6 font-clash"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              dir="auto"
            >
              {t("recommendations.badge")}
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight font-clash"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              dir="auto"
            >
              {t("recommendations.title")}
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed font-clash max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              dir="auto"
            >
              {t("recommendations.description")}
            </motion.p>

            {/* Recommendation Features */}
            <div className="space-y-6">
              {recommendationFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 rtl:flex-row-reverse"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  dir="auto"
                >
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="flex-shrink-0 w-12 h-12 rounded-full  bg-gradient-to-r from-orange-100 to-red-100 flex items-center justify-center"

                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className="text-orange-600" size={24} />
                    </motion.div>
                  </div>
                  <div className="flex-1 rtl:text-right ltr:text-left">
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

          {/* Food Bowl Illustration */}
          <motion.div
            className="relative flex justify-center lg:justify-start order-1 lg:order-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main Dish Image */}
              <motion.div
                className="relative z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-80 h-80 relative">
                  <Image
                    src="/image/dish.png"
                    alt="Delicious Food Dish"
                    width={320}
                    height={320}
                    className="w-full h-full object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </motion.div>

              {/* Heart Notification */}
              <motion.div
                className="absolute -top-4 -right-4 z-20"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-16 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg flex items-center justify-center relative">
                  {/* Speech Bubble Tail */}
                  <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-orange-500" />
                  <Heart className="w-8 h-8 text-white fill-current" />
                </div>
              </motion.div>

              {/* Sparkles */}
              <motion.div
                className="absolute -top-8 -left-8 w-8 h-8 text-yellow-400"
                animate={{ rotate: 360, scale: [1, 1.3, 1] }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, delay: 0.5 }
                }}
              >
                <Sparkles className="w-8 h-8 fill-current" />
              </motion.div>

              <motion.div
                className="absolute top-12 -right-12 w-6 h-6 text-orange-400"
                animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                transition={{ 
                  rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, delay: 1 }
                }}
              >
                <Sparkles className="w-6 h-6 fill-current" />
              </motion.div>

              <motion.div
                className="absolute bottom-4 -left-6 w-5 h-5 text-yellow-500"
                animate={{ rotate: 360, scale: [1, 1.4, 1] }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2.5, repeat: Infinity, delay: 1.5 }
                }}
              >
                <Sparkles className="w-5 h-5 fill-current" />
              </motion.div>

              {/* Floating AI Icons */}
              <motion.div
                className="absolute -bottom-6 -left-8 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Brain className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute top-8 right-16 w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Target className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
