"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TrustedRestaurantsSection() {
  const { t } = useTranslation();

  // Restaurant logos/brands (using crown icons as placeholders)
  const restaurants = [
    { name: "البيك", color: "from-red-500 to-red-600" },
    { name: "البيك", color: "from-orange-500 to-orange-600" },
    { name: "البيك", color: "from-yellow-500 to-yellow-600" },
    { name: "البيك", color: "from-green-500 to-green-600" },
    { name: "البيك", color: "from-blue-500 to-blue-600" },
    { name: "البيك", color: "from-purple-500 to-purple-600" },
  ];

  // const stats = [
  //   { number: "500+", label: "مطعم شريك", icon: Award },
  //   { number: "50K+", label: "طلب يومي", icon: TrendingUp },
  //   { number: "95%", label: "رضا العملاء", icon: Star },
  //   { number: "24/7", label: "دعم فني", icon: Users },
  // ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#ED614A] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#E6446F] rounded-full blur-3xl" />
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
            className="inline-block bg-[#ED614A]/12 text-[#ED614A] px-6 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("trustedRestaurants.badge")}
          </motion.div>
          
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-[#31241A] mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t("trustedRestaurants.title")}
          </motion.h2>
          
          <motion.p
            className="text-2xl text-[#637381] max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t("trustedRestaurants.description")}
          </motion.p>
        </motion.div>

        {/* Restaurant Logos Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Restaurant Logo/Crown */}
              <motion.div
                className={`w-20 h-20 bg-gradient-to-r ${restaurant.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mb-4`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 6L9.5 9L7 6L4.5 9L2 6v12h20V6l-2.5 3L17 6l-2.5 3L12 6z"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              </motion.div>
              
              {/* Restaurant Name */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-gray-800 mb-1">{restaurant.name}</h3>
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={12}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Section */}
        {/*<motion.div*/}
        {/*  className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"*/}
        {/*  initial={{ opacity: 0, y: 50 }}*/}
        {/*  whileInView={{ opacity: 1, y: 0 }}*/}
        {/*  transition={{ duration: 0.8, delay: 0.8 }}*/}
        {/*  viewport={{ once: true }}*/}
        {/*>*/}
        {/*  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">*/}
        {/*    {stats.map((stat, index) => (*/}
        {/*      <motion.div*/}
        {/*        key={index}*/}
        {/*        className="text-center group"*/}
        {/*        initial={{ opacity: 0, scale: 0.8 }}*/}
        {/*        whileInView={{ opacity: 1, scale: 1 }}*/}
        {/*        transition={{ duration: 0.6, delay: 1 + index * 0.1 }}*/}
        {/*        viewport={{ once: true }}*/}
        {/*        whileHover={{ scale: 1.05 }}*/}
        {/*      >*/}
        {/*        <div className="flex items-center justify-center mb-4">*/}
        {/*          <div className="w-16 h-16 bg-gradient-to-r from-[#ED614A] to-[#E6446F] rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300">*/}
        {/*            <stat.icon className="text-white" size={24} />*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        */}
        {/*        <motion.div*/}
        {/*          className="text-3xl lg:text-4xl font-bold text-[#31241A] mb-2"*/}
        {/*          animate={{ scale: [1, 1.05, 1] }}*/}
        {/*          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}*/}
        {/*        >*/}
        {/*          {stat.number}*/}
        {/*        </motion.div>*/}
        {/*        */}
        {/*        <div className="text-gray-600 font-medium">*/}
        {/*          {stat.label}*/}
        {/*        </div>*/}
        {/*      </motion.div>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</motion.div>*/}

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-lg text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}
          >
            {t("trustedRestaurants.cta.description")}
          </motion.p>
          
          {/*<motion.button*/}
          {/*  className="px-8 py-4 rounded-full text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"*/}
          {/*  style={{ background: 'linear-gradient(90deg, #ED614A 0%, #E6446F 100%)' }}*/}
          {/*  whileHover={{ scale: 1.05, y: -2 }}*/}
          {/*  whileTap={{ scale: 0.95 }}*/}
          {/*  initial={{ opacity: 0, y: 20 }}*/}
          {/*  whileInView={{ opacity: 1, y: 0 }}*/}
          {/*  transition={{ duration: 0.8, delay: 1.6 }}*/}
          {/*  viewport={{ once: true }}*/}
          {/*>*/}
          {/*  {t("trustedRestaurants.cta.button")}*/}
          {/*</motion.button>*/}
        </motion.div>
      </div>
    </section>
  );
}
