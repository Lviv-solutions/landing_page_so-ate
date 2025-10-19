"use client";

import { useTranslation } from "../../hooks/useTranslation";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, FileText, Users, Lock, AlertCircle, Mail } from "lucide-react";
import Link from "next/link";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { useState, useEffect } from "react";

export default function TermsPage() {
  const { t } = useTranslation();
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  const sections = [
    {
      icon: FileText,
      titleKey: "terms.sections.acceptance.title",
      contentKey: "terms.sections.acceptance.content"
    },
    {
      icon: Users,
      titleKey: "terms.sections.services.title",
      contentKey: "terms.sections.services.content"
    },
    {
      icon: Shield,
      titleKey: "terms.sections.userResponsibilities.title",
      contentKey: "terms.sections.userResponsibilities.content"
    },
    {
      icon: Lock,
      titleKey: "terms.sections.privacy.title",
      contentKey: "terms.sections.privacy.content"
    },
    {
      icon: AlertCircle,
      titleKey: "terms.sections.limitations.title",
      contentKey: "terms.sections.limitations.content"
    },
    {
      icon: Mail,
      titleKey: "terms.sections.contact.title",
      contentKey: "terms.sections.contact.content"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="flex items-center gap-3 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">{t("common.backToHome")}</span>
            </Link>
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <div className="text-sm text-gray-500" dir="auto">
                {t("terms.lastUpdated")}: {currentDate}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-orange-100 text-orange-600 px-6 py-3 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FileText className="w-5 h-5" />
            {t("terms.badge")}
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight font-clash"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            dir="auto"
          >
            {t("terms.title")}
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            dir="auto"
          >
            {t("terms.description")}
          </motion.p>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <div className="flex items-start gap-4 mb-6" dir="auto">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-clash" dir="auto">
                    {t(section.titleKey)}
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-gray max-w-none" dir="auto">
                <div 
                  className="text-gray-600 leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: t(section.contentKey) }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="mt-12 p-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-clash" dir="auto">
              {t("terms.footer.title")}
            </h3>
            <p className="text-gray-600 mb-6" dir="auto">
              {t("terms.footer.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/privacy"
                className="px-6 py-3 bg-white text-gray-700 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-orange-300"
              >
                {t("terms.footer.privacyPolicy")}
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t("terms.footer.contactUs")}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
