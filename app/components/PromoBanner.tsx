"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export default function PromoBanner() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white py-3 px-4 relative overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12" />
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        <div className="flex-1 text-center">
          <motion.p
            className="text-sm md:text-base font-medium font-clash"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {t("header.promo.text")}
          </motion.p>
        </div>

        <div className="flex items-center space-x-4">
          <motion.button
            className="bg-white text-[#FF6B6B] px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg font-clash"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("header.promo.cta")}
          </motion.button>

          <motion.button
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white transition-colors duration-200 p-1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={16} />
          </motion.button>
        </div>
      </div>

      {/* Animated Sparkles */}
      <motion.div
        className="absolute top-1 left-1/4 text-yellow-300"
        animate={{
          y: [0, -5, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✨
      </motion.div>
      <motion.div
        className="absolute top-2 right-1/3 text-yellow-300"
        animate={{
          y: [0, -3, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        ⭐
      </motion.div>
    </motion.div>
  );
}
