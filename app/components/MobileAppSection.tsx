"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { Bell, BarChart3, Settings, Download } from "lucide-react";

export default function MobileAppSection() {
  const { t, getArray, locale } = useTranslation();
  const isRTL = locale === 'ar';

  const appFeatures = [
    {
      icon: Bell,
      title: t("mobileApp.features.0"),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Settings,
      title: t("mobileApp.features.1"),
      color: "from-green-500 to-green-600",
    },
    {
      icon: BarChart3,
      title: t("mobileApp.features.2"),
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Bell,
      title: t("mobileApp.features.3"),
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#ED614A] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E6446F] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              {t("mobileApp.title")}
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-600 mb-8 leading-relaxed font-clash"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t("mobileApp.description")}
            </motion.p>

            {/* Features List */}
            <div className="space-y-6 mb-8">
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}
                  initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg`}>
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <span className="text-lg text-gray-700 font-clash">{feature.title}</span>
                </motion.div>
              ))}
            </div>

            {/* Download Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              <motion.button
                className={`flex items-center justify-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'} bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-colors font-clash`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <div className={isRTL ? "text-right" : "text-left"}>
                  <div className="text-xs">{t("mobileApp.downloadButtons.appStore.prefix")}</div>
                  <div className="text-lg font-semibold">{t("mobileApp.downloadButtons.appStore.store")}</div>
                </div>
              </motion.button>
              
              <motion.button
                className={`flex items-center justify-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'} bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-colors font-clash`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <div className={isRTL ? "text-right" : "text-left"}>
                  <div className="text-xs">{t("mobileApp.downloadButtons.googlePlay.prefix")}</div>
                  <div className="text-lg font-semibold">{t("mobileApp.downloadButtons.googlePlay.store")}</div>
                </div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Mobile App Mockup */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Phone Frame */}
            <motion.div
              className="relative"
              whileHover={{ y: -10, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Phone Outer Frame */}
              <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                {/* Phone Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="bg-[#ED614A] h-12 flex items-center justify-between px-6 text-white">
                    <span className="font-semibold font-clash">{t("mobileApp.dashboard.appName")}</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-white rounded-sm opacity-60" />
                      <div className="w-4 h-2 bg-white rounded-sm opacity-80" />
                      <div className="w-4 h-2 bg-white rounded-sm" />
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-6 space-y-6">
                    {/* Dashboard Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                      >
                        <div className="text-blue-600 text-sm font-medium">{t("mobileApp.dashboard.todayOrders")}</div>
                        <div className="text-2xl font-bold text-blue-800">47</div>
                      </motion.div>
                      
                      <motion.div
                        className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >
                        <div className="text-green-600 text-sm font-medium">{t("mobileApp.dashboard.sales")}</div>
                        <div className="text-2xl font-bold text-green-800">1.2K</div>
                      </motion.div>
                    </div>

                    {/* Chart */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-gray-700 font-medium mb-3">{t("mobileApp.dashboard.weeklyStats")}</div>
                      <div className="flex items-end justify-between h-20">
                        {[30, 50, 35, 70, 45, 60, 80].map((height, index) => (
                          <motion.div
                            key={index}
                            className="bg-gradient-to-t from-[#ED614A] to-[#E6446F] rounded-t-md"
                            style={{ width: '10%', height: `${height}%` }}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ duration: 1, delay: 1 + index * 0.1 }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="space-y-3">
                      {getArray("mobileApp.dashboard.menuItems").map((item: string, index: number) => (
                        <motion.div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 1.5 + index * 0.2 }}
                        >
                          <span className="text-gray-700 font-medium">{item}</span>
                          <div className="w-2 h-2 bg-[#ED614A] rounded-full" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Notification */}
              <motion.div
                className="absolute -right-8 top-32 bg-white rounded-lg shadow-lg p-3 border border-gray-200"
                animate={{ x: [0, 10, 0], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center space-x-2">
                  <Bell className="text-[#ED614A]" size={16} />
                  <span className="text-sm text-gray-700">{t("mobileApp.dashboard.newOrder")}</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
