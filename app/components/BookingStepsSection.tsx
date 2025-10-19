"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { MapPin, Calendar, Heart, Search } from "lucide-react";

export default function BookingStepsSection() {
  const { t } = useTranslation();

  const bookingSteps = [
    {
      icon: MapPin,
      titleKey: "bookingSteps.steps.choose.title",
      descriptionKey: "bookingSteps.steps.choose.description",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: Calendar,
      titleKey: "bookingSteps.steps.book.title", 
      descriptionKey: "bookingSteps.steps.book.description",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: Heart,
      titleKey: "bookingSteps.steps.enjoy.title",
      descriptionKey: "bookingSteps.steps.enjoy.description",
      color: "from-pink-400 to-purple-500"
    }
  ];

  return (
    <section id="booking-steps" className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-red-400 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Steps Content */}
          <motion.div
            className="text-center lg:text-start order-2 lg:order-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            dir="auto"
          >
            {/* Title */}
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight font-clash"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              dir="auto"
            >
              {t("bookingSteps.title")}
            </motion.h2>

            {/* Booking Steps */}
            <div className="space-y-8">
              {bookingSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-6 rtl:flex-row-reverse"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  viewport={{ once: true }}
                  dir="auto"
                >
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-full  flex items-center justify-center"

                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <step.icon className="w-8 h-8 text-orange-600"  size={24} />
                    </motion.div>
                  </div>
                  <div className="flex-1 rtl:text-right ltr:text-left">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-clash" dir="auto">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-clash" dir="auto">
                      {t(step.descriptionKey)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Phone Frame */}
              <motion.div
                className="relative z-10"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-72 sm:w-80 lg:w-96 h-auto relative">
                  {/* Phone Shadow */}
                  <div className="absolute inset-0 bg-black/20 rounded-[3rem] blur-xl transform translate-y-4 scale-95" />
                  
                  {/* Phone Body */}
                  <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
                    <div className="bg-white rounded-[2.5rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="bg-white px-6 py-3 flex justify-between items-center text-black text-sm">
                        <span className="font-semibold">9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-4 h-2 bg-black rounded-sm" />
                          <div className="w-6 h-3 border border-black rounded-sm">
                            <div className="w-4 h-1 bg-green-500 rounded-sm mt-0.5 ml-0.5" />
                          </div>
                        </div>
                      </div>
                      
                      {/* App Header */}
                      <div className="px-6 py-4 bg-white border-b border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-lg font-bold text-gray-900 font-clash">Home</div>
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gray-200 rounded-full" />
                          </div>
                        </div>
                        
                        {/* Search Bar */}
                        <div className="bg-gray-100 rounded-full px-4 py-3 flex items-center space-x-3">
                          <Search className="w-5 h-5 text-gray-400" />
                          <span className="text-sm text-gray-500 font-clash">Search for food restaurants</span>
                        </div>
                      </div>

                 

                      {/* Restaurant Categories */}
                      <div className="px-6 py-4">
                        <div className="text-lg font-bold text-gray-900 mb-4 font-clash">Lunch Time !</div>
                        
                        {/* Restaurant Cards */}
                        <div className="grid grid-cols-2 gap-3">
                          {[1, 2].map((item) => (
                            <motion.div
                              key={item}
                              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="h-20 bg-gradient-to-br from-orange-200 to-red-200 relative">
                                <div className="absolute inset-0 flex items-center justify-center text-2xl">
                                  🍕
                                </div>
                              </div>
                              <div className="p-3">
                                <div className="text-sm font-semibold text-gray-900 mb-1">Crazy tacko</div>
                                <div className="text-xs text-gray-500 mb-2">Mexican food</div>
                                <div className="text-sm font-bold text-orange-500">$4.99</div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Fastest Delivery Section */}
                        <div className="mt-6">
                          <div className="text-lg font-bold text-gray-900 mb-4 font-clash">Fastest Delivery</div>
                          <div className="grid grid-cols-2 gap-3">
                            {[1, 2].map((item) => (
                              <div key={item} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="h-20 bg-gradient-to-br from-yellow-200 to-orange-200 relative">
                                  <div className="absolute inset-0 flex items-center justify-center text-2xl">
                                    🌮
                                  </div>
                                </div>
                                <div className="p-3">
                                  <div className="text-sm font-semibold text-gray-900 mb-1">Crazy tacko</div>
                                  <div className="text-xs text-gray-500 mb-2">Mexican food</div>
                                  <div className="text-sm font-bold text-orange-500">$4.99</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Bottom Navigation */}
                      {/* <div className="px-6 py-4 bg-white border-t border-gray-100">
                        <div className="flex justify-between items-center">
                          {['Home', 'Search', 'Orders', 'Favorites', 'Profile'].map((item, index) => (
                            <div key={item} className="flex flex-col items-center">
                              <div className={`w-6 h-6 rounded-full ${index === 0 ? 'bg-orange-500' : 'bg-gray-300'} mb-1`} />
                              <span className={`text-xs ${index === 0 ? 'text-orange-500' : 'text-gray-400'} font-clash`}>
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, delay: 0.5 }
                }}
              >
                <MapPin className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <Calendar className="w-5 h-5 text-white" />
              </motion.div>

              <motion.div
                className="absolute top-1/3 -left-6 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                <Heart className="w-4 h-4 text-white fill-current" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
