"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import PromoBanner from "./PromoBanner";
import { webClientAuthService } from "../../lib/auth-service";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

export default function MobileHeader() {
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pendingBusinessNav, setPendingBusinessNav] = useState(false);
  
  // Extract current locale from pathname
  const currentLocale = pathname.split('/')[1] || 'ar';

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

  const isClientPage = pathname.includes('/client');
  const isBusinessPage = pathname.includes('/business');

  useEffect(() => {
    setIsLoggedIn(webClientAuthService.isAuthenticated());
  }, [signInOpen, signUpOpen]);

  const handleClientPageClick = () => {
    router.push(`/${currentLocale}/client`);
  };

  const handleBusinessPageClick = () => {
    if (!webClientAuthService.isAuthenticated()) {
      setPendingBusinessNav(true);
      setSignInOpen(true);
      return;
    }
    router.push(`/${currentLocale}/business`);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setSignInOpen(false);
    setSignUpOpen(false);
    if (pendingBusinessNav) {
      setPendingBusinessNav(false);
      router.push(`/${currentLocale}/business`);
    }
  };

  const handleSignOut = () => {
    webClientAuthService.logout();
    setIsLoggedIn(false);
  };

  return (
    <>
      <PromoBanner />
      <header className="md:hidden bg-[#ED614A] shadow-sm relative">
      <div className="px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center min-h-[48px]">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/image/logo.png"
              alt={t("company.name")}
              width={100}
              height={32}
              className="h-8 w-auto"
              priority
            />
            <motion.span
              className="absolute -top-1 -right-1 text-xs"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              🌟
            </motion.span>
          </motion.div>

          <div className="flex items-center space-x-3">
            <LanguageSwitcher />

            {!isLoggedIn && (
              <>
                <motion.button
                  type="button"
                  onClick={() => setSignInOpen(true)}
                  className="hidden sm:block px-3 py-1.5 rounded-full text-xs font-semibold text-white border border-white/50"
                  whileTap={{ scale: 0.95 }}
                >
                  {t("header.actions.signIn")}
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => setSignUpOpen(true)}
                  className="hidden sm:block px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                  style={{ background: 'rgba(255,255,255,0.25)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("header.actions.signUp")}
                </motion.button>
              </>
            )}
            {isLoggedIn && (
              <motion.button
                type="button"
                onClick={handleSignOut}
                className="hidden sm:block px-3 py-1.5 rounded-full text-xs font-semibold text-white border border-white/50"
                whileTap={{ scale: 0.95 }}
              >
                {t("header.actions.signOut")}
              </motion.button>
            )}

            {!isBusinessPage && (
              <motion.button
                onClick={handleBusinessPageClick}
                className="hidden sm:block px-4 py-2 rounded-full text-xs font-semibold text-white font-clash whitespace-nowrap"
                style={{ background: 'linear-gradient(90deg, #ED614A 0%, #E6446F 100%)' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("header.actions.BusinessPage")}
              </motion.button>
            )}
            
            {!isClientPage && (
              <motion.button
                onClick={handleClientPageClick}
                className="hidden sm:block px-4 py-2 rounded-full text-xs font-semibold text-white font-clash whitespace-nowrap"
                style={{ background: 'linear-gradient(90deg, #ED614A 0%, #E6446F 100%)' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("header.actions.ClientPage")}
              </motion.button>
            )}
            
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

      <SignInModal
        open={signInOpen}
        onClose={() => { setSignInOpen(false); setPendingBusinessNav(false); }}
        onSwitchToSignUp={() => { setSignInOpen(false); setSignUpOpen(true); }}
        onLoginSuccess={handleLoginSuccess}
      />
      <SignUpModal
        open={signUpOpen}
        onClose={() => setSignUpOpen(false)}
        onSwitchToSignIn={() => { setSignUpOpen(false); setSignInOpen(true); }}
      />
    </header>
    </>
  );
}
