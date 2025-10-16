"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Activity, Target } from "lucide-react";

export default function AnalyticsReportsSection() {
  const { t } = useTranslation();

  const analyticsStats = [
    { value: "234", label: t("analyticsReports.stats.monthlyReports"), color: "from-red-400 to-red-500" },
    { value: "127", label: t("analyticsReports.stats.millionOrders"), color: "from-yellow-400 to-yellow-500" },
    { value: "714", label: t("analyticsReports.stats.thousandOrders"), color: "from-purple-400 to-purple-500" },
    { value: "125", label: t("analyticsReports.stats.millionOrders"), color: "from-green-400 to-green-500" },
  ];

  const chartData = [
    { month: t("analyticsReports.months.january"), sales: 45, orders: 38 },
    { month: t("analyticsReports.months.february"), sales: 52, orders: 48 },
    { month: t("analyticsReports.months.march"), sales: 38, orders: 35 },
    { month: t("analyticsReports.months.april"), sales: 58, orders: 52 },
    { month: t("analyticsReports.months.may"), sales: 48, orders: 44 },
    { month: t("analyticsReports.months.june"), sales: 62, orders: 58 },
    { month: t("analyticsReports.months.july"), sales: 68, orders: 65 },
    { month: t("analyticsReports.months.august"), sales: 55, orders: 50 },
    { month: t("analyticsReports.months.september"), sales: 72, orders: 68 },
    { month: t("analyticsReports.months.october"), sales: 65, orders: 60 },
    { month: t("analyticsReports.months.november"), sales: 78, orders: 72 },
    { month: t("analyticsReports.months.december"), sales: 85, orders: 80 },
  ];

  const features = [
    {
      icon: BarChart3,
      title: t("analyticsReports.features.detailedReports"),
      description: t("analyticsReports.features.detailedReportsDesc")
    },
    {
      icon: TrendingUp,
      title: t("analyticsReports.features.kpiIndicators"),
      description: t("analyticsReports.features.kpiIndicatorsDesc")
    },
    {
      icon: Target,
      title: t("analyticsReports.features.customerBehavior"),
      description: t("analyticsReports.features.customerBehaviorDesc")
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#d2ebcb] via-[#f9f8f3] to-[#f8dac4] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-400 rounded-full blur-3xl" />
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
            <motion.div
              className="inline-block  bg-[#ED614A]/12 text-[#ED614A] px-6 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t("analyticsReports.badge")}
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-[#31241A] mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t("analyticsReports.title")}
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t("analyticsReports.description")}
            </motion.p>

            {/* Features List */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

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
              {/*  {t("analyticsReports.cta")}*/}
              {/*</motion.button>*/}
            </motion.div>
          </motion.div>

          {/* Analytics Dashboard Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Main Dashboard */}
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
              whileHover={{ y: -5, rotateY: -2 }}
              transition={{ duration: 0.3 }}
            >
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Hi, Welcome back</h3>
                  <p className="text-gray-500 text-sm">{t("analyticsReports.dashboard.advancedReports")}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600 font-medium">Current download</span>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {analyticsStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`bg-gradient-to-r ${stat.color} p-4 rounded-xl text-white relative overflow-hidden`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative z-10">
                      <motion.div
                        className="text-2xl font-bold mb-1"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm opacity-90 font-medium">{stat.label}</div>
                    </div>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                  </motion.div>
                ))}
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-2 gap-4">
                {/* Advanced Bar Chart */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Website visits</h4>
                  <div className="flex items-end justify-between h-24 space-x-1">
                    {chartData.slice(0, 8).map((item, index) => (
                      <div key={index} className="flex flex-col items-center flex-1 space-y-1">
                        {/* Sales bar */}
                        <motion.div
                          className="bg-gradient-to-t from-blue-400 to-indigo-400 rounded-t-sm w-full"
                          style={{ height: `${(item.sales / 100) * 60}%` }}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${(item.sales / 100) * 60}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                        {/* Orders bar */}
                        <motion.div
                          className="bg-gradient-to-t from-purple-400 to-pink-400 rounded-t-sm w-full"
                          style={{ height: `${(item.orders / 100) * 40}%` }}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${(item.orders / 100) * 40}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Pie Chart */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Current visits</h4>
                  <div className="flex items-center justify-center">
                    <motion.div
                      className="relative w-20 h-20"
                      initial={{ opacity: 0, rotate: -90 }}
                      whileInView={{ opacity: 1, rotate: 0 }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                    >
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="20"
                          strokeDasharray="50 50"
                          strokeDashoffset="0"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#8b5cf6"
                          strokeWidth="20"
                          strokeDasharray="30 70"
                          strokeDashoffset="-50"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="20"
                          strokeDasharray="20 80"
                          strokeDashoffset="-80"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-800">92%</div>
                          <div className="text-xs text-gray-600">{t("analyticsReports.dashboard.activity")}</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* KPI Indicators */}
              <div className="mt-4 space-y-2">
                {[
                  { label: t("analyticsReports.dashboard.growthRate"), value: "+15%", trend: "up", color: "text-green-600" },
                  { label: t("analyticsReports.dashboard.customerSatisfaction"), value: "4.8/5", trend: "up", color: "text-blue-600" },
                  { label: t("analyticsReports.dashboard.averageOrder"), value: "125 SAR", trend: "up", color: "text-purple-600" }
                ].map((kpi, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 + index * 0.2 }}
                  >
                    <div className="flex items-center space-x-2">
                      <Activity className={`w-4 h-4 ${kpi.color}`} />
                      <span className="text-sm text-gray-700 font-medium">{kpi.label}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className={`text-sm font-bold ${kpi.color}`}>{kpi.value}</span>
                      <TrendingUp className={`w-3 h-3 ${kpi.color}`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating Analytics Notification */}
            <motion.div
              className="absolute -right-6 top-20 bg-white rounded-lg shadow-lg p-3 border border-gray-200 max-w-xs z-20"
              animate={{ x: [0, 10, 0], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="text-blue-600" size={16} />
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-xs">{t("analyticsReports.dashboard.newReport")}</div>
                  <div className="text-gray-600 text-xs">{t("analyticsReports.dashboard.salesReportGenerated")}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
