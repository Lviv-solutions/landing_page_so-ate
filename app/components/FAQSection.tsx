"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const { t, getObjectArray } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Dynamically get all FAQ questions
  const faqs = getObjectArray("faq.questions");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#ED614A] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#E6446F] rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block bg-[#ED614A]/12 text-[#ED614A] px-6 py-2 rounded-full text-sm font-medium mb-6 font-clash"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            dir="auto"
          >
            {t("faq.badge")}
          </motion.div>
          
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-[#31241A] mb-6 leading-tight font-clash"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            dir="auto"
          >
            {t("faq.title")}
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto font-clash"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            dir="auto"
          >
            {t("faq.description")}
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-2 lg:gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
            >
              <motion.button
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-start justify-between hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start space-x-4 flex-1">
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 flex-shrink-0 ${
                      openIndex === index
                        ? 'bg-gradient-to-r from-[#ED614A] to-[#E6446F] text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <AnimatePresence mode="wait">
                      {openIndex === index ? (
                        <motion.div
                          key="minus"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Minus size={16} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="plus"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Plus size={16} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  
                  <div className="text-start flex-1">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800 leading-tight font-clash" dir="auto">
                      {faq.question}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center ml-4">
                  <span className={`text-2xl font-bold transition-colors duration-300 ${
                    openIndex === index ? 'text-[#ED614A]' : 'text-gray-300'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="px-4 sm:px-6 pb-4 sm:pb-5"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="bg-gradient-to-r from-[#ED614A]/5 to-[#E6446F]/5 rounded-xl p-4 sm:p-5 border-l-4 border-[#ED614A]">
                        <p className="text-gray-700 leading-relaxed text-xs sm:text-sm font-clash" dir="auto">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-12 col-span-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 max-w-2xl mx-auto">
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-[#ED614A] to-[#E6446F] rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <HelpCircle className="text-white" size={28} />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-clash" dir="auto">
              {t("faq.contact.title")}
            </h3>
            <p className="text-gray-600 mb-6 font-clash" dir="auto">
              {t("faq.contact.description")}
            </p>
            
            <motion.button
              className="px-8 py-4 rounded-full text-lg font-semibold text-white shadow-lg font-clash"
              style={{ background: 'linear-gradient(90deg, #ED614A 0%, #E6446F 100%)' }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              dir="auto"
            >
              {t("faq.contact.cta")}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
