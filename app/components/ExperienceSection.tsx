"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { Star, Camera, Users, CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  const { t } = useTranslation();

  const experienceFeatures = [
    {
      icon: Star,
      titleKey: "experience.features.rating.title",
      descriptionKey: "experience.features.rating.description"
    },
    {
      icon: Camera,
      titleKey: "experience.features.reviews.title",
      descriptionKey: "experience.features.reviews.description"
    },
    {
      icon: Users,
      titleKey: "experience.features.community.title",
      descriptionKey: "experience.features.community.description"
    }
  ];

  return (
    <section id="experience" className=" mx-20 rounded-3xl  py-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-orange-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            className="text-center lg:text-start order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            dir="auto"
          >
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-clash"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              dir="auto"
            >
              {t("experience.title")}
            </motion.h2>

            <motion.p
              className="text-xl text-white/90 mb-8 leading-relaxed font-clash max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              dir="auto"
            >
              {t("experience.description")}
            </motion.p>

            {/* Experience Features */}
            <div className="space-y-6">
              {experienceFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 rtl:flex-row-reverse"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  dir="auto"
                >
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                  <div className="flex-1 rtl:text-right ltr:text-left">
                    <h3 className="text-lg font-semibold text-white mb-1 font-clash" dir="auto">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-white/80 font-clash text-sm" dir="auto">
                      {t(feature.descriptionKey)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Phone Mockups */}
          <motion.div
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main Phone */}
              <motion.div
                className="relative z-20"
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
                      <div className="px-6 py-4 bg-white">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-lg font-bold text-gray-900 font-clash">Home</div>
                          <div className="w-8 h-8 bg-gray-200 rounded-full" />
                        </div>
                      </div>

                      {/* Promotion Banner */}
                      <div className="px-6 py-4 bg-gradient-to-r from-orange-100 to-red-100">
                        <div className="bg-white rounded-2xl p-4 flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl overflow-hidden">
                            <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'64\' height=\'64\' viewBox=\'0 0 64 64\'%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-size=\'32\'%3E🍔%3C/text%3E%3C/svg%3E")'}} />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-bold text-gray-900 mb-1">Get your 30% daily</div>
                            <div className="text-sm text-gray-600 mb-2">discount now!</div>
                            <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-medium w-fit">
                              Order now
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Restaurant List */}
                      <div className="px-6 py-4">
                        <div className="text-lg font-bold text-gray-900 mb-4 font-clash">Lunch Time !</div>
                        
                        {/* Restaurant Cards */}
                        <div className="space-y-3">
                          {[
                            { name: "Tasty bowl", cuisine: "Mexican food", price: "$4.99", rating: "4.8" },
                            { name: "Crazy tacko", cuisine: "Mexican food", price: "$4.99", rating: "4.9" }
                          ].map((restaurant, index) => (
                            <motion.div
                              key={index}
                              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center space-x-4"
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-red-200 rounded-xl overflow-hidden">
                                <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'64\' height=\'64\' viewBox=\'0 0 64 64\'%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-size=\'32\'%3E🌮%3C/text%3E%3C/svg%3E")'}} />
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-semibold text-gray-900 mb-1">{restaurant.name}</div>
                                <div className="text-xs text-gray-500 mb-2">{restaurant.cuisine}</div>
                                <div className="flex items-center justify-between">
                                  <div className="text-sm font-bold text-orange-500">{restaurant.price}</div>
                                  <div className="flex items-center space-x-1">
                                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                    <span className="text-xs text-gray-600">{restaurant.rating}</span>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Secondary Phone */}
              <motion.div
                className="absolute -top-8 -right-16 z-10"
                animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-48 sm:w-56 lg:w-64 h-auto relative">
                  {/* Phone Shadow */}
                  <div className="absolute inset-0 bg-black/15 rounded-[2rem] blur-lg transform translate-y-2 scale-95" />
                  
                  {/* Phone Body */}
                  <div className="relative bg-black rounded-[2rem] p-1.5 shadow-xl">
                    <div className="bg-white rounded-[1.5rem] overflow-hidden">
                      {/* Status Bar */}
                      <div className="bg-white px-4 py-2 flex justify-between items-center text-black text-xs">
                        <span className="font-semibold">9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-1.5 bg-black rounded-sm" />
                          <div className="w-4 h-2 border border-black rounded-sm">
                            <div className="w-3 h-0.5 bg-green-500 rounded-sm mt-0.5 ml-0.5" />
                          </div>
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="px-4 py-3 bg-gray-50">
                        <div className="text-sm font-bold text-gray-900 mb-3 font-clash">Reviews</div>
                        
                        {/* Review Cards */}
                        <div className="space-y-2">
                          {[1, 2].map((item) => (
                            <div key={item} className="bg-white rounded-lg p-3">
                              <div className="flex items-center space-x-2 mb-2">
                                <div className="w-6 h-6 bg-orange-200 rounded-full" />
                                <div className="flex-1">
                                  <div className="text-xs font-semibold text-gray-900">User Review</div>
                                  <div className="flex items-center space-x-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <Star key={star} className="w-2 h-2 text-yellow-400 fill-current" />
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="text-xs text-gray-600">Great food and service!</div>
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
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -15, 0], rotate: 360 }}
                transition={{ 
                  y: { duration: 2, repeat: Infinity },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                }}
              >
                <Star className="w-6 h-6 text-white fill-current" />
              </motion.div>

              <motion.div
                className="absolute top-1/3 -left-8 w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ x: [0, 10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <Camera className="w-5 h-5 text-white" />
              </motion.div>

              <motion.div
                className="absolute top-8 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                <Users className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
