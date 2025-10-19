"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function FeaturesSection() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <AnimatedSection id="features-section" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#31241A] mb-4">
            {t("features.title")}
          </h2>
          <p className="text-lg text-gray-600">{t("features.description")}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-lg transition-shadow duration-300 group"
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="bg-gradient-to-br from-[#f9dcc7]/10 to-[#966192]/10 h-48 rounded-lg mb-4 flex items-center justify-center group-hover:from-[#f9dcc7]/20 group-hover:to-[#966192]/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-[#f9dcc7] font-medium">
                  {t("features.featureImageAlt", { number: item })}
                </span>
              </motion.div>
              <h3 className="text-xl font-semibold text-[#31241A] mb-2 group-hover:text-[#f9dcc7] transition-colors">
                {t("features.serviceTitle", { number: item })}
              </h3>
              <p className="text-gray-600">
                {t("features.serviceDescription")}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
