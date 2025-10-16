"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
// import HeaderThreeBackground from "./HeaderThreeBackground";
import MobileHeader from "./MobileHeader";
import PromoBanner from "./PromoBanner";
import "../style.css";

export default function Header() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
  };

  // Show mobile header on small screens
  if (isMobile) {
    return <MobileHeader />;
  }

  return (
    <>
      <PromoBanner />
      <header className="mx-20 my-3 border-orange header-font hidden md:block  shadow-sm  overflow-hidden">
      {/* 3D AI Interface Background */}
      {/*<HeaderThreeBackground />*/}

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex justify-between items-center py-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.h1
                className="text-2xl font-bold text-white relative"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(139, 82, 97, 0)",
                    "0 0 10px rgba(139, 82, 97, 0.3)",
                    "0 0 0px rgba(139, 82, 97, 0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
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
            </motion.div>

            <div className="flex items-center space-x-8">
              <nav className="flex space-x-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.key}
                    onClick={() => handleNavClick(item.href)}
                    className=" header-font hover:text-white transition-colors duration-300 relative group"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {t(item.key)}
                    <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                  </motion.button>
                ))}
              </nav>

              <div className="flex items-center space-x-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <LanguageSwitcher />
                </motion.div>

                <motion.button
                  className="px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-white"
                  style={{ background: 'linear-gradient(90deg, #ED614A 0%, #E6446F 100%)' }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("header.actions.subscribe")}
                </motion.button>

                <motion.button
                  className="border-2 border-[#ED614A] text-[#ED614A] px-6 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-[#ED614A] transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("header.actions.ClientPage")}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* AI Interface Overlay Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      {/* Animated Border */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-white"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, delay: 1 }}
      />
    </header>
    </>
  );
}
