"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ClientHeroSection() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="mx-4 sm:mx-8 lg:mx-20 max-w-8xl rounded-3xl border bg-gradient-to-br from-[#ed624a] to-[#ef715d] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-orange-300 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-300 rounded-full blur-2xl" />
        </div>

        <div className="relative py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Text Content */}
              <motion.div
                className="text-center lg:text-right order-2 lg:order-1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.h1
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight font-clash"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  dir="auto"
                >
                  {t("clientHero.title")}
                </motion.h1>

                <motion.p
                  className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed font-clash max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  dir="auto"
                >
                  {t("clientHero.description")}
                </motion.p>

                {/* App Download Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.a
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 font-medium"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center space-x-3">
                      <Image
                        src="/image/apple-logo.svg"
                        alt="Apple"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                      <div className="text-right">
                        <div className="text-xs text-gray-300 font-clash">{t("clientHero.downloadOn")}</div>
                        <div className="text-lg font-semibold font-clash">App Store</div>
                      </div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 font-medium"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center space-x-3">
                      <Image
                        src="/image/google-play-logo.svg"
                        alt="Google Play"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                      <div className="text-right">
                        <div className="text-xs text-gray-300 font-clash">{t("clientHero.getItOn")}</div>
                        <div className="text-lg font-semibold font-clash">Google Play</div>
                      </div>
                    </div>
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Phone Mockup */}
              <motion.div
                className="relative flex justify-center lg:justify-start order-1 lg:order-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
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
                      <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
                        <div className="bg-white rounded-[2.5rem] overflow-hidden">
                          {/* Status Bar */}
                          <div className="bg-white px-6 py-2 flex justify-between items-center text-black text-sm">
                            <span className="font-semibold">9:41</span>
                            <div className="flex items-center space-x-1">
                              <div className="w-4 h-2 bg-black rounded-sm" />
                              <div className="w-6 h-3 border border-black rounded-sm">
                                <div className="w-4 h-1 bg-green-500 rounded-sm mt-0.5 ml-0.5" />
                              </div>
                            </div>
                          </div>
                          
                          {/* App Content */}
                          <div className="px-4 py-6 bg-gray-50">
                            {/* Search Bar */}
                            <div className="bg-white rounded-full px-4 py-3 mb-6 shadow-sm">
                              <div className="flex items-center space-x-3 text-gray-400">
                                <div className="w-5 h-5 bg-gray-300 rounded-full" />
                                <span className="text-sm font-clash">{t("clientHero.searchPlaceholder")}</span>
                              </div>
                            </div>

                            {/* Category Icons */}
                            <div className="flex justify-between mb-6">
                              {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="flex flex-col items-center">
                                  <div className="w-12 h-12 bg-orange-100 rounded-2xl mb-2 flex items-center justify-center">
                                    <div className="w-6 h-6 bg-orange-400 rounded" />
                                  </div>
                                  <span className="text-xs text-gray-600 font-clash">Category</span>
                                </div>
                              ))}
                            </div>

                            {/* Restaurant Cards */}
                            <div className="space-y-4">
                              {[1, 2].map((item) => (
                                <div key={item} className="bg-white rounded-2xl p-4 shadow-sm">
                                  <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-16 h-16 bg-orange-200 rounded-xl" />
                                    <div className="flex-1">
                                      <div className="h-4 bg-gray-200 rounded mb-2" />
                                      <div className="h-3 bg-gray-100 rounded w-2/3" />
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2 gap-2">
                                    <div className="h-20 bg-orange-100 rounded-xl" />
                                    <div className="h-20 bg-orange-100 rounded-xl" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
