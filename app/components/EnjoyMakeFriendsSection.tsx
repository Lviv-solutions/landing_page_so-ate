"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { Users, Heart, Smile } from "lucide-react";
import Image from "next/image";

export default function EnjoyMakeFriendsSection() {
  const { t } = useTranslation();

  const socialFeatures = [
    {
      icon: Users,
      titleKey: "enjoyMakeFriends.features.connect.title",
      descriptionKey: "enjoyMakeFriends.features.connect.description"
    },
    {
      icon: Heart,
      titleKey: "enjoyMakeFriends.features.share.title",
      descriptionKey: "enjoyMakeFriends.features.share.description"
    },
    {
      icon: Smile,
      titleKey: "enjoyMakeFriends.features.enjoy.title",
      descriptionKey: "enjoyMakeFriends.features.enjoy.description"
    }
  ];

  return (
    <section id="enjoy-make-friends" className="py-20 bg-gradient-to-br from-pink-100 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-300 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            className="text-center lg:text-start order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            dir="auto"
          >
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight font-clash"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              dir="auto"
            >
              {t("enjoyMakeFriends.title")}
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 mb-8 leading-relaxed font-clash max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              dir="auto"
            >
              {t("enjoyMakeFriends.description")}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {/* <motion.button
                className="px-10 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-clash"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                dir="auto"
              >
                {t("enjoyMakeFriends.cta")}
              </motion.button> */}
            </motion.div>

            {/* Social Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {socialFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  dir="auto"
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 font-clash" dir="auto">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-gray-600 text-sm font-clash" dir="auto">
                    {t(feature.descriptionKey)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coffee Cups Illustration */}
          <motion.div
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Orange Coffee Cup */}
              <motion.div
                className="relative z-10"
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-64 h-64 relative">
                  <Image
                    src="/image/orange-cup.png"
                    alt="Orange Coffee Cup"
                    width={256}
                    height={256}
                    className="w-full h-full object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </motion.div>

              {/* Loyalty/Second Cup */}
              <motion.div
                className="absolute top-8 -right-12 z-20"
                animate={{ y: [0, -8, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-56 h-56 relative">
                  <Image
                    src="/image/yale-cup.png"
                    alt="yale Cup"
                    width={224}
                    height={224}
                    className="w-full h-full object-contain drop-shadow-xl"
                  />
                </div>
              </motion.div>

              {/* Floating Hearts */}
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 text-red-400"
                animate={{ y: [0, -20, 0], rotate: [0, 15, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-8 h-8 fill-current" />
              </motion.div>

              <motion.div
                className="absolute top-12 -right-8 w-6 h-6 text-pink-400"
                animate={{ y: [0, -15, 0], rotate: [0, -15, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <Heart className="w-6 h-6 fill-current" />
              </motion.div>

              <motion.div
                className="absolute bottom-8 left-4 w-5 h-5 text-orange-400"
                animate={{ y: [0, -12, 0], rotate: [0, 20, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <Heart className="w-5 h-5 fill-current" />
              </motion.div>

              {/* Floating Social Icons */}
              <motion.div
                className="absolute -bottom-4 -left-8 w-12 h-12 bg-gradient-to-br from-[#502746]/50 to-[#502746] rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Users className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute top-4 right-16 w-10 h-10 bg-gradient-to-br  from-[#502746]/50 to-[#502746] rounded-full flex items-center justify-center shadow-lg"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Smile className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
