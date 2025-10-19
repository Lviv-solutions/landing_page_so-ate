"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
// import { BarChart3, TrendingUp, Users, ShoppingCart } from "lucide-react";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
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
              <span className="bg-gradient-to-r from-[#ED614A] to-[#E6446F] text-white px-4 py-2 rounded-full text-sm font-medium font-clash">
                {t("hero.subtitle")}
              </span>
            </motion.div>
            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-[#31241A] mb-6 leading-tight font-clash"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("hero.title")}
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-10 leading-relaxed font-clash"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t("hero.description")}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="px-8 py-4 rounded-full text-lg font-semibold text-white font-clash shadow-lg"
                style={{ background: 'linear-gradient(90deg, #ED614A 0%, #E6446F 100%)' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("hero.startNow")}
              </motion.button>
              <motion.button
                className="border-2 border-[#ED614A] text-[#ED614A] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#ED614A] hover:text-white transition-all duration-300 font-clash"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("hero.learnMore")}
              </motion.button>
            </motion.div>
          </motion.div>
          {/*<motion.div*/}
          {/*  className="relative"*/}
          {/*  initial={{ opacity: 0, x: 50 }}*/}
          {/*  animate={{ opacity: 1, x: 0 }}*/}
          {/*  transition={{ duration: 0.8, delay: 0.3 }}*/}
          {/*>*/}
            {/* Dashboard Preview */}
            {/*<motion.div*/}
            {/*  className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"*/}
            {/*  whileHover={{ y: -10, rotateY: 5 }}*/}
            {/*  transition={{ duration: 0.3 }}*/}
            {/*>*/}
              {/* Dashboard Header */}
          {/*    <div className="flex items-center justify-between mb-6">*/}
          {/*      <h3 className="text-lg font-semibold text-gray-800 font-clash">{t("hero.dashboardPreview")}</h3>*/}
          {/*      <div className="flex space-x-2">*/}
          {/*        <div className="w-3 h-3 bg-red-400 rounded-full"></div>*/}
          {/*        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>*/}
          {/*        <div className="w-3 h-3 bg-green-400 rounded-full"></div>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    */}
          {/*    /!* Stats Cards *!/*/}
          {/*    <div className="grid grid-cols-2 gap-4 mb-6">*/}
          {/*      <motion.div */}
          {/*        className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl"*/}
          {/*        whileHover={{ scale: 1.05 }}*/}
          {/*      >*/}
          {/*        <div className="flex items-center justify-between">*/}
          {/*          <div>*/}
          {/*            <p className="text-blue-600 text-sm font-medium">المبيعات اليوم</p>*/}
          {/*            <p className="text-2xl font-bold text-blue-800">2,847</p>*/}
          {/*          </div>*/}
          {/*          <TrendingUp className="text-blue-600" size={24} />*/}
          {/*        </div>*/}
          {/*      </motion.div>*/}
          {/*      */}
          {/*      <motion.div */}
          {/*        className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl"*/}
          {/*        whileHover={{ scale: 1.05 }}*/}
          {/*      >*/}
          {/*        <div className="flex items-center justify-between">*/}
          {/*          <div>*/}
          {/*            <p className="text-green-600 text-sm font-medium">الطلبات</p>*/}
          {/*            <p className="text-2xl font-bold text-green-800">156</p>*/}
          {/*          </div>*/}
          {/*          <ShoppingCart className="text-green-600" size={24} />*/}
          {/*        </div>*/}
          {/*      </motion.div>*/}
          {/*      */}
          {/*      <motion.div */}
          {/*        className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl"*/}
          {/*        whileHover={{ scale: 1.05 }}*/}
          {/*      >*/}
          {/*        <div className="flex items-center justify-between">*/}
          {/*          <div>*/}
          {/*            <p className="text-purple-600 text-sm font-medium">العملاء</p>*/}
          {/*            <p className="text-2xl font-bold text-purple-800">89</p>*/}
          {/*          </div>*/}
          {/*          <Users className="text-purple-600" size={24} />*/}
          {/*        </div>*/}
          {/*      </motion.div>*/}
          {/*      */}
          {/*      <motion.div */}
          {/*        className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl"*/}
          {/*        whileHover={{ scale: 1.05 }}*/}
          {/*      >*/}
          {/*        <div className="flex items-center justify-between">*/}
          {/*          <div>*/}
          {/*            <p className="text-orange-600 text-sm font-medium">التقارير</p>*/}
          {/*            <p className="text-2xl font-bold text-orange-800">12</p>*/}
          {/*          </div>*/}
          {/*          <BarChart3 className="text-orange-600" size={24} />*/}
          {/*        </div>*/}
          {/*      </motion.div>*/}
          {/*    </div>*/}
          {/*    */}
          {/*    /!* Chart Area *!/*/}
          {/*    <div className="bg-gray-50 rounded-xl p-4 h-32 flex items-end justify-between">*/}
          {/*      {[40, 65, 45, 80, 55, 70, 85].map((height, index) => (*/}
          {/*        <motion.div*/}
          {/*          key={index}*/}
          {/*          className="bg-gradient-to-t from-[#ED614A] to-[#E6446F] rounded-t-md"*/}
          {/*          style={{ width: '12%', height: `${height}%` }}*/}
          {/*          initial={{ height: 0 }}*/}
          {/*          animate={{ height: `${height}%` }}*/}
          {/*          transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}*/}
          {/*        />*/}
          {/*      ))}*/}
          {/*    </div>*/}
          {/*  </motion.div>*/}
          {/*  */}
          {/*  /!* Floating Elements *!/*/}
          {/*  <motion.div*/}
          {/*    className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg"*/}
          {/*    animate={{ y: [0, -10, 0] }}*/}
          {/*    transition={{ duration: 3, repeat: Infinity }}*/}
          {/*  >*/}
          {/*    <TrendingUp className="text-green-500" size={20} />*/}
          {/*  </motion.div>*/}
          {/*  */}
          {/*  <motion.div*/}
          {/*    className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg"*/}
          {/*    animate={{ y: [0, 10, 0] }}*/}
          {/*    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}*/}
          {/*  >*/}
          {/*    <BarChart3 className="text-blue-500" size={20} />*/}
          {/*  </motion.div>*/}
          {/*</motion.div>*/}
        </div>
      </div>
    </section>
  );
}
