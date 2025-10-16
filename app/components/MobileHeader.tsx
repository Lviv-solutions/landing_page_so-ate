"use client";

import { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import PromoBanner from "./PromoBanner";

export default function MobileHeader() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: "nav.home", href: "#hero" },
    { key: "nav.about", href: "#about" },
    { key: "nav.services", href: "#features" },
    { key: "nav.contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <PromoBanner />
      <header className="md:hidden bg-[#ED614A] shadow-sm relative">
      <div className="px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center min-h-[48px]">
          <motion.h1
            className="text-xl font-bold text-white relative font-clash"
            whileHover={{ scale: 1.05 }}
          >
            {t("company.name")}
            <motion.span
              className="absolute -top-1 -right-1 text-xs"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              🌟
            </motion.span>
          </motion.h1>

          <div className="flex items-center space-x-3">
            <LanguageSwitcher />
            
            <motion.button
              className="hidden sm:block px-4 py-2 rounded-full text-xs font-semibold text-white font-clash whitespace-nowrap"
              style={{ background: 'linear-gradient(90deg, #ED614A 0%, #E6446F 100%)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("header.actions.subscribe")}
            </motion.button>
            
            <motion.button
              className="p-2 text-white relative z-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  className="block h-0.5 w-6 bg-white rounded-sm"
                  animate={isMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-0.5 w-6 bg-white rounded-sm"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-0.5 w-6 bg-white rounded-sm"
                  animate={isMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="mt-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.key}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left py-2 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors font-clash"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {t(item.key)}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Animated Border */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-white"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, delay: 0.5 }}
      />
    </header>
    </>
  );
}
