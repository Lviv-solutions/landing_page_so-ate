"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Table, TrendingUp, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ReservationManagementSection() {
  const { t } = useTranslation();

  const reservationStats = [
    { value: "342", label: t("reservations.stats.todayBookings"), color: "from-orange-400 to-orange-500", icon: Calendar },
    { value: "127", label: t("reservations.stats.availableTables"), color: "from-yellow-400 to-yellow-500", icon: Table },
    { value: "89", label: t("reservations.stats.confirmedBookings"), color: "from-purple-400 to-purple-500", icon: CheckCircle },
    { value: "24", label: t("reservations.stats.waitingList"), color: "from-green-400 to-green-500", icon: Clock },
    { value: "156", label: t("reservations.stats.newCustomers"), color: "from-blue-400 to-blue-500", icon: Users },
    { value: "98%", label: t("reservations.stats.occupancyRate"), color: "from-teal-400 to-teal-500", icon: TrendingUp },
  ];

  const chartData = [
    { day: t("reservations.days.saturday"), value: 85, orders: 45, revenue: 2800 },
    { day: t("reservations.days.sunday"), value: 92, orders: 52, revenue: 3200 },
    { day: t("reservations.days.monday"), value: 78, orders: 38, revenue: 2400 },
    { day: t("reservations.days.tuesday"), value: 95, orders: 58, revenue: 3600 },
    { day: t("reservations.days.wednesday"), value: 88, orders: 48, revenue: 3000 },
    { day: t("reservations.days.thursday"), value: 96, orders: 62, revenue: 3800 },
    { day: t("reservations.days.friday"), value: 100, orders: 68, revenue: 4200 },
  ];

  const [activeChart, setActiveChart] = useState<'occupancy' | 'orders' | 'revenue'>('occupancy');

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block bg-[#ED614A]/8 hover:bg-[#ED614A]/50  text-[#ED614A] px-6 py-2 rounded-full text-sm font-medium mb-6 font-clash"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("reservations.badge")}
          </motion.div>
          
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-[#31241A] mb-6 font-clash leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t("reservations.title")}
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto font-clash"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t("reservations.description")}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* iPad Dashboard Preview */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* iPad Frame */}
            <motion.div
              className="relative"
              whileHover={{ y: -10, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              {/* iPad Outer Frame */}
              <div className="w-96 h-[500px] bg-gray-800 rounded-[2rem] p-3 shadow-2xl">
                {/* iPad Screen */}
                <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                  {/* iPad Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full"></div>
                  
                  {/* Dashboard Content */}
                  <div className="p-6 h-full overflow-hidden">
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{t("reservations.dashboard.title")}</h3>
                        <p className="text-gray-500 text-sm">{t("reservations.dashboard.subtitle")}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600 font-medium">{t("reservations.dashboard.connected")}</span>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {reservationStats.map((stat, index) => (
                        <motion.div
                          key={index}
                          className={`bg-gradient-to-r ${stat.color} p-3 rounded-lg text-white relative overflow-hidden`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="relative z-10">
                            <div className="flex items-center justify-between mb-1">
                              <stat.icon size={16} className="opacity-80" />
                              <motion.div
                                className="text-lg font-bold"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                              >
                                {stat.value}
                              </motion.div>
                            </div>
                            <div className="text-xs opacity-90 font-medium">{stat.label}</div>
                          </div>
                          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Enhanced Chart Section */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-base font-semibold text-gray-800">{t("reservations.dashboard.weeklyStats")}</h4>
                  
                        {/* Chart Type Selector */}
                        <div className="flex bg-white rounded-md p-1 shadow-sm">
                          <button
                            onClick={() => setActiveChart('occupancy')}
                            className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                              activeChart === 'occupancy'
                                ? 'bg-orange-500 text-white'
                                : 'text-gray-600 hover:text-orange-500'
                            }`}
                          >
                            {t("reservations.dashboard.occupancy")}
                          </button>
                          <button
                            onClick={() => setActiveChart('orders')}
                            className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                              activeChart === 'orders'
                                ? 'bg-blue-500 text-white'
                                : 'text-gray-600 hover:text-blue-500'
                            }`}
                          >
                            {t("reservations.dashboard.orders")}
                          </button>
                          <button
                            onClick={() => setActiveChart('revenue')}
                            className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                              activeChart === 'revenue'
                                ? 'bg-green-500 text-white'
                                : 'text-gray-600 hover:text-green-500'
                            }`}
                          >
                            {t("reservations.dashboard.revenue")}
                          </button>
                        </div>
                      </div>
                
                      {/* Interactive Bar Chart */}
                      <div className="relative">
                        <div className="flex items-end justify-between h-24 space-x-1 mb-3">
                    {chartData.map((item, index) => {
                      const getBarHeight = () => {
                        switch (activeChart) {
                          case 'occupancy': return item.value;
                          case 'orders': return (item.orders / 70) * 100;
                          case 'revenue': return (item.revenue / 4500) * 100;
                          default: return item.value;
                        }
                      };
                      
                      const getBarColor = () => {
                        switch (activeChart) {
                          case 'occupancy': return 'from-orange-400 to-yellow-400';
                          case 'orders': return 'from-blue-400 to-cyan-400';
                          case 'revenue': return 'from-green-400 to-emerald-400';
                          default: return 'from-orange-400 to-yellow-400';
                        }
                      };
                      
                      const getValue = () => {
                        switch (activeChart) {
                          case 'occupancy': return `${item.value}%`;
                          case 'orders': return item.orders;
                          case 'revenue': return `${(item.revenue / 1000).toFixed(1)}k`;
                          default: return `${item.value}%`;
                        }
                      };
                      
                      return (
                        <div key={index} className="flex flex-col items-center flex-1 group relative">
                          {/* Tooltip */}
                          <motion.div
                            className="absolute -top-12 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity z-10"
                            initial={{ opacity: 0, y: 10 }}
                            whileHover={{ opacity: 1, y: 0 }}
                          >
                            {getValue()}
                          </motion.div>
                          
                          <motion.div
                            className={`bg-gradient-to-t ${getBarColor()} rounded-t-md w-full mb-2 cursor-pointer hover:shadow-lg transition-shadow`}
                            style={{ height: `${getBarHeight()}%` }}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${getBarHeight()}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                          />
                          <span className="text-xs text-gray-600 font-medium">{item.day}</span>
                        </div>
                      );
                    })}
                  </div>
                  
                        {/* Chart Legend */}
                        <div className="flex items-center justify-center space-x-4 text-xs">
                          <div className="flex items-center space-x-1">
                            <div className={`w-2 h-2 rounded-full ${
                              activeChart === 'occupancy' ? 'bg-orange-400' :
                              activeChart === 'orders' ? 'bg-blue-400' :
                              'bg-green-400'
                            }`}></div>
                            <span className="text-gray-600">
                              {activeChart === 'occupancy' ? t("reservations.dashboard.occupancyRate") :
                               activeChart === 'orders' ? t("reservations.dashboard.orderCount") :
                               t("reservations.dashboard.revenueAmount")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pie Chart Section */}
                    <div className="mt-4 bg-gray-50 rounded-lg p-4">
                      <h4 className="text-base font-semibold text-gray-800 mb-3">{t("reservations.dashboard.reservationDistribution")}</h4>
                      <div className="flex items-center justify-center">
                        <motion.div
                          className="relative w-20 h-20"
                          initial={{ opacity: 0, rotate: -90 }}
                          whileInView={{ opacity: 1, rotate: 0 }}
                          transition={{ duration: 1 }}
                          viewport={{ once: true }}
                        >
                          {/* Pie Chart SVG */}
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              fill="none"
                              stroke="#f97316"
                              strokeWidth="20"
                              strokeDasharray="75 25"
                              strokeDashoffset="0"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              fill="none"
                              stroke="#eab308"
                              strokeWidth="20"
                              strokeDasharray="15 85"
                              strokeDashoffset="-75"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="40"
                              fill="none"
                              stroke="#06b6d4"
                              strokeWidth="20"
                              strokeDasharray="10 90"
                              strokeDashoffset="-90"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-lg font-bold text-gray-800">98%</div>
                              <div className="text-xs text-gray-600">{t("reservations.dashboard.occupancyPercent")}</div>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Legend */}
                      <div className="flex justify-center space-x-4 mt-3">
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">{t("reservations.dashboard.reserved")}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">{t("reservations.dashboard.waiting")}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">{t("reservations.dashboard.available")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Notification */}
              <motion.div
                className="absolute -right-8 top-16 bg-white rounded-lg shadow-lg p-3 border border-gray-200 max-w-xs z-20"
                animate={{ x: [0, 10, 0], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-green-600" size={16} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-xs">{t("reservations.dashboard.newBookingConfirmed")}</div>
                    <div className="text-gray-600 text-xs">{t("reservations.dashboard.tableNumber")}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {/* Features List */}
              {[
                {
                  icon: Calendar,
                  title: t("reservations.management.title"),
                  description: t("reservations.management.description")
                },
                {
                  icon: Table,
                  title: t("reservations.management.tablePlanning.title"),
                  description: t("reservations.management.tablePlanning.description")
                },
                {
                  icon: Clock,
                  title: t("reservations.management.realTimeTracking.title"),
                  description: t("reservations.management.realTimeTracking.description")
                },
                {
                  icon: TrendingUp,
                  title: t("reservations.management.advancedAnalytics.title"),
                  description: t("reservations.management.advancedAnalytics.description")
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 font-clash">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-clash">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {/*<motion.button*/}
              {/*  className="px-8 py-4 rounded-full text-lg font-semibold text-white font-clash shadow-lg"*/}
              {/*  style={{ background: 'linear-gradient(90deg, #ED614A 0%, #E6446F 100%)' }}*/}
              {/*  whileHover={{ scale: 1.05, y: -2 }}*/}
              {/*  whileTap={{ scale: 0.95 }}*/}
              {/*>*/}
              {/*  {t("reservations.cta")}*/}
              {/*</motion.button>*/}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
