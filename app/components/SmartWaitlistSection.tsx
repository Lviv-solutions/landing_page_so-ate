"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { Clock, Users, Bell } from "lucide-react";

export default function SmartWaitlistSection() {
  const { t } = useTranslation();

  const waitlistStats = [
    { value: "234", label: t("smartWaitlist.stats.waiting"), color: "from-red-400 to-red-500" },
    { value: "127", label: t("smartWaitlist.stats.millionOrders"), color: "from-yellow-400 to-yellow-500" },
    { value: "714", label: t("smartWaitlist.stats.thousandOrders"), color: "from-purple-400 to-purple-500" },
    { value: "125", label: t("smartWaitlist.stats.millionOrders"), color: "from-green-400 to-green-500" },
  ];

  const chartData = [
    { day: t("smartWaitlist.days.saturday"), waiting: 45, served: 38 },
    { day: t("smartWaitlist.days.sunday"), waiting: 52, served: 48 },
    { day: t("smartWaitlist.days.monday"), waiting: 38, served: 35 },
    { day: t("smartWaitlist.days.tuesday"), waiting: 58, served: 52 },
    { day: t("smartWaitlist.days.wednesday"), waiting: 48, served: 44 },
    { day: t("smartWaitlist.days.thursday"), waiting: 62, served: 58 },
    { day: t("smartWaitlist.days.friday"), waiting: 68, served: 65 },
  ];

  const features = [
    {
      icon: Clock,
      title: t("smartWaitlist.features.smartQueue"),
      description: t("smartWaitlist.features.smartQueueDesc")
    },
    {
      icon: Bell,
      title: t("smartWaitlist.features.tableNotifications"),
      description: t("smartWaitlist.features.tableNotificationsDesc")
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-400 rounded-full blur-3xl" />
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
              className="inline-block bg-[#ED614A]/12 text-[#ED614A] px-6 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {t("smartWaitlist.badge")}
            </motion.div>

            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-[#31241A] mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t("smartWaitlist.title")}
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t("smartWaitlist.description")}
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
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="text-red-600" size={24} />
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
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              {/*<motion.button*/}
              {/*  className="px-8 py-4 rounded-full text-lg font-semibold text-white shadow-lg"*/}
              {/*  style={{ background: 'linear-gradient(90deg, #ED614A 0%, #E6446F 100%)' }}*/}
              {/*  whileHover={{ scale: 1.05, y: -2 }}*/}
              {/*  whileTap={{ scale: 0.95 }}*/}
              {/*>*/}
              {/*  {t("smartWaitlist.cta")}*/}
              {/*</motion.button>*/}
            </motion.div>
          </motion.div>

          {/* Dashboard Preview */}
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
                  <p className="text-gray-500 text-sm">{t("smartWaitlist.dashboard.smartWaitlist")}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600 font-medium">Area installed</span>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {waitlistStats.map((stat, index) => (
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
                {/* Bar Chart */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Website visits</h4>
                  <div className="flex items-end justify-between h-20 space-x-1">
                    {chartData.slice(0, 5).map((item, index) => (
                      <div key={index} className="flex flex-col items-center flex-1 space-y-1">
                        {/* Waiting customers bar */}
                        <motion.div
                          className="bg-gradient-to-t from-red-400 to-orange-400 rounded-t-sm w-full"
                          style={{ height: `${(item.waiting / 70) * 50}%` }}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${(item.waiting / 70) * 50}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                        {/* Served customers bar */}
                        <motion.div
                          className="bg-gradient-to-t from-green-400 to-emerald-400 rounded-t-sm w-full"
                          style={{ height: `${(item.served / 70) * 50}%` }}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${(item.served / 70) * 50}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pie Chart */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Current visits</h4>
                  <div className="flex items-center justify-center">
                    <motion.div
                      className="relative w-16 h-16"
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
                          stroke="#f97316"
                          strokeWidth="20"
                          strokeDasharray="45 55"
                          strokeDashoffset="0"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="20"
                          strokeDasharray="35 65"
                          strokeDashoffset="-45"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#eab308"
                          strokeWidth="20"
                          strokeDasharray="20 80"
                          strokeDashoffset="-80"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Waitlist Status */}
              <div className="mt-4 space-y-2">
                {[
                  { status: t("smartWaitlist.dashboard.waitingStatus"), count: 12, color: "bg-red-400" },
                  { status: t("smartWaitlist.dashboard.receivedStatus"), count: 8, color: "bg-green-400" },
                  { status: t("smartWaitlist.dashboard.cancelledStatus"), count: 3, color: "bg-yellow-400" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 + index * 0.2 }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 ${item.color} rounded-full`} />
                      <span className="text-sm text-gray-700 font-medium">{item.status}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-800">{item.count}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating Notification */}
            <motion.div
              className="absolute -right-6 top-20 bg-white rounded-lg shadow-lg p-3 border border-gray-200 max-w-xs z-20"
              animate={{ x: [0, 10, 0], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <Users className="text-orange-600" size={16} />
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-xs">{t("smartWaitlist.dashboard.newCustomer")}</div>
                  <div className="text-gray-600 text-xs">{t("smartWaitlist.dashboard.addedToWaitlist")}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
