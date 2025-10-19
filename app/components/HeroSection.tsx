"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section id="hero" className=" mx-20 max-h-200 rounded-3xl border bg-gradient-to-br from-[#ed624a] to-[#ef715d] relative overflow-hidden">
    <div className="relative py-35 overflow-hidden" style={{
      backgroundImage: 'url(/image/Vector.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{
        display: 'flex',
        alignContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        <div className="grid grid-cols-1 gap-16 items-center text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {/*<span className="bg-gradient-to-r from-[#ED614A] to-[#E6446F] text-white px-4 py-2 rounded-full text-sm font-medium font-clash">*/}
              {/*  {t("hero.subtitle")}*/}
              {/*</span>*/}
            </motion.div>
            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-[#fff] mb-6 leading-tight font-clash"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("hero.title")}
            </motion.h1>
            <motion.p
              className="text-xl text-[#fff] mb-10 leading-relaxed font-clash"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t("hero.description")}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="px-8 py-4 rounded-full text-lg bg-[#fff] font-semibold text-[#ED614A] font-clash shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("hero.startNow")}
              </motion.button>
              <motion.button
                className="border-2 border-[#fff] text-[#fff] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#ED614A] hover:text-white transition-all duration-300 font-clash"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("hero.learnMore")}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      </div>
    </section>
  );
}
