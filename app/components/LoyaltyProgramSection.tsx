"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { Gift, Star, Award } from "lucide-react";
import Image from "next/image";

export default function LoyaltyProgramSection() {
  const { t } = useTranslation();



  return (
    <section id="loyalty" className=" mx-20 rounded-3xl border border-b-[#ffffff] py-10 relative overflow-hidden"
        style={{
          background: 'linear-gradient(250deg, rgba(145, 158, 171, 0.12)',
          
        }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-yellow-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Gift Boxes Illustration */}
          <motion.div
            className="relative flex justify-center lg:order-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              animate={{ 
                y: [-5, 5, -5],
                rotate: [-1, 1, -1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/image/loyalty.png"
                alt="Loyalty Program"
                width={400}
                height={400}
                className="drop-shadow-2xl"
              />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute top-10 left-10 text-orange-400"
                animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Gift size={20} />
              </motion.div>
              <motion.div
                className="absolute bottom-10 right-10 text-red-400"
                animate={{ y: [0, -15, 0], rotate: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <Award size={18} />
              </motion.div>
              <motion.div
                className="absolute top-20 right-5 text-yellow-400"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              >
                <Star size={14} fill="currentColor" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:order-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block bg-[#ED614A]/12 text-[#ED614A] px-6 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t("loyaltyProgram.badge")}
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-[#31241A] mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t("loyaltyProgram.title")}
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t("loyaltyProgram.description")}
            </motion.p>

            {/* Features Grid */}
            {/*<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">*/}
            {/*  {loyaltyFeatures.map((feature, index) => (*/}
            {/*    <motion.div*/}
            {/*      key={index}*/}
            {/*      className="flex items-start space-x-4 p-4 bg-white/50 rounded-xl backdrop-blur-sm border border-white/20"*/}
            {/*      initial={{ opacity: 0, y: 30 }}*/}
            {/*      whileInView={{ opacity: 1, y: 0 }}*/}
            {/*      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}*/}
            {/*      viewport={{ once: true }}*/}
            {/*      whileHover={{ scale: 1.02, y: -2 }}*/}
            {/*    >*/}
            {/*      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl flex items-center justify-center">*/}
            {/*        <feature.icon className="text-orange-600" size={24} />*/}
            {/*      </div>*/}
            {/*      <div>*/}
            {/*        <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>*/}
            {/*        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>*/}
            {/*      </div>*/}
            {/*    </motion.div>*/}
            {/*  ))}*/}
            {/*</div>*/}

            {/* Statistics */}
            <motion.div
              className="grid grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              {[
                { number: "85%", label: t("loyaltyProgram.stats.loyaltyIncrease") },
                { number: "3x", label: t("loyaltyProgram.stats.visitFrequency") },
                { number: "40%", label: t("loyaltyProgram.stats.revenueIncrease") }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="text-3xl font-bold text-[#ED614A] mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              {/*<motion.button*/}
              {/*  className="px-8 py-4 rounded-full text-lg font-semibold text-white shadow-lg"*/}
              {/*  style={{ background: 'linear-gradient(90deg, #ED614A 0%, #E6446F 100%)' }}*/}
              {/*  whileHover={{ scale: 1.05, y: -2 }}*/}
              {/*  whileTap={{ scale: 0.95 }}*/}
              {/*>*/}
              {/*  {t("loyaltyProgram.cta")}*/}
              {/*</motion.button>*/}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
