"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();

  const footerSections = [
    {
      titleKey: "footer.privacy.title",
      links: [
        { labelKey: "footer.privacy.policy", href: "#" },
        { labelKey: "footer.privacy.terms", href: "#" },
      ],
    },
    {
      titleKey: "footer.links.title",
      links: [
        { labelKey: "footer.links.pricing", href: "#" },
        { labelKey: "footer.links.contact", href: "#" },
        { labelKey: "footer.links.questions", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-gradient-to-br from-[#502746] via-[#401736] to-[#200016] text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-400 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            variants={containerVariants}
          >
            {/* Company Info */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <motion.div
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <h3 className="text-2xl font-bold">{t("company.name")}</h3>
              </motion.div>
              <p className="text-white/80 mb-6 leading-relaxed">
                {t("footer.company.description")}
              </p>
              
              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">{t("footer.newsletter.title")}</h4>
                <div className="flex space-x-2">
                  <motion.button
                    className="px-6 py-3 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t("footer.newsletter.subscribe")}
                  </motion.button>
                  <motion.button
                    className="px-6 py-3 border-2 border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t("footer.newsletter.demo")}
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <motion.div key={index} variants={itemVariants}>
                <h4 className="font-semibold mb-4 text-lg">{t(section.titleKey)}</h4>
                <ul className="space-y-3 text-white/70">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a
                        href={link.href}
                        className="hover:text-orange-400 transition-colors duration-200 text-base"
                      >
                        {t(link.labelKey)}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}

          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="border-t border-white/20 mt-12 pt-8"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <motion.p
                className="text-white/60 text-sm"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {t("footer.copyright")}
              </motion.p>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-400 transition-colors duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon size={18} className="text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </footer>
  );
}
