"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { Menu, Eye, Clock, Star } from "lucide-react";
import Image from "next/image";

export default function InteractiveMenuSection() {
  const { t } = useTranslation();

  const menuFeatures = [
    {
      icon: Menu,
      titleKey: "interactiveMenu.features.browse.title",
      descriptionKey: "interactiveMenu.features.browse.description"
    },
    {
      icon: Eye,
      titleKey: "interactiveMenu.features.preview.title",
      descriptionKey: "interactiveMenu.features.preview.description"
    },
    {
      icon: Clock,
      titleKey: "interactiveMenu.features.time.title",
      descriptionKey: "interactiveMenu.features.time.description"
    }
  ];

  return (
    <section id="interactive-menu" className="mx-20 rounded-3xl py-20 bg-gradient-to-br from-[#502746] via-purple-900 to-[#502746] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-yellow-400 rounded-full blur-3xl" />
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Food Images */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main Dish - Chicken */}
              <motion.div
                className="relative z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-80 h-80 relative">
                  <Image
                    src="/image/Chicken.png"
                    alt="Delicious Chicken Dish"
                    width={320}
                    height={320}
                    className="w-full h-full object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </motion.div>

              {/* Appetizer - Hummus */}
              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-full h-full relative">
                  <Image
                    src="/image/Hummus.png"
                    alt="Fresh Hummus"
                    width={128}
                    height={128}
                    className="w-full h-full object-contain drop-shadow-xl"
                  />
                </div>
              </motion.div>

              {/* Bread */}
              <motion.div
                className="absolute top-16 -left-12 w-40 h-40"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-full h-full relative">
                  <Image
                    src="/image/Bread.png"
                    alt="Fresh Bread"
                    width={160}
                    height={160}
                    className="w-full h-full object-contain drop-shadow-xl"
                  />
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -15, 0], rotate: 360 }}
                transition={{ 
                  y: { duration: 2, repeat: Infinity },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                }}
              >
                <Star className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ x: [0, 10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <Eye className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="text-center lg:text-start order-1 lg:order-2"
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
              {t("interactiveMenu.badge")}
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-clash"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              dir="auto"
            >
              {t("interactiveMenu.title")}
            </motion.h2>

            <motion.p
              className="text-xl text-orange-300 mb-8 leading-relaxed font-clash max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              dir="auto"
            >
              {t("interactiveMenu.description")}
            </motion.p>

            {/* Menu Features */}
            <div className="space-y-6">
              {menuFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 rtl:flex-row-reverse"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  dir="auto"
                >
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-full  flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon  className="text-orange-600" size={24} />
                    </motion.div>
                  </div>
                  <div className="flex-1 rtl:text-right ltr:text-left">
                    <h3 className="text-lg font-semibold text-white mb-2 font-clash" dir="auto">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-orange-200 font-clash" dir="auto">
                      {t(feature.descriptionKey)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              {/* <motion.button
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 font-clash"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                dir="auto"
              >
                {t("interactiveMenu.cta")}
              </motion.button> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
