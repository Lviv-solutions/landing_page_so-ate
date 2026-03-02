"use client";

import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { isAdmin } from "../../lib/auth";
import { webClientAuthService } from "../../lib/auth-service";
// import HeaderThreeBackground from "./HeaderThreeBackground";
import MobileHeader from "./MobileHeader";
import PromoBanner from "./PromoBanner";
import MouseTrackingButton from "./MouseTrackingButton";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import "../style.css";

export default function Header() {
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isAdminUser, setIsAdminUser] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pendingBusinessNav, setPendingBusinessNav] = useState(false);
  
  // Extract current locale from pathname - common for both ar and en
  const getLocaleFromPath = () => {
    const segments = pathname.split('/').filter(Boolean);
    return segments[0] === 'en' ? 'en' : 'ar';
  };
  
  const currentLocale = getLocaleFromPath();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setIsAdminUser(isAdmin());
  }, []);

  useEffect(() => {
    setIsLoggedIn(webClientAuthService.isAuthenticated());
  }, [signInOpen, signUpOpen]);

  const navItems = [
    { key: "nav.home", href: "#hero" },
    { key: "nav.pricing", href: "#pricing" },
    { key: "nav.faq", href: "#faq" },
  ];

    const navItemsBusiness = [
    { key: "nav.home", href: "#hero" },
    { key: "nav.pricing", href: "#pricing" },
    { key: "nav.faq", href: "#faq" },
  ];
    //   { key: "nav.home", href: "#hero" },
    // { key: "nav.reservations", href: "#reservations" },
    // { key: "nav.menu", href: "#menu" },
    // { key: "nav.waitlist", href: "#waitlist" },
    // { key: "nav.loyalty", href: "#loyalty" },
    // { key: "nav.analytics", href: "#analytics" },
    // { key: "nav.feedback", href: "#feedback" },
    // { key: "nav.security", href: "#security" },
    // { key: "nav.pricing", href: "#pricing" },
    // { key: "nav.faq", href: "#faq" },

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      // Calculate offset for fixed header (header height + some padding)
      const headerOffset = 100;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Check current page type
  const isClientPage = pathname.includes('/client');
  const isBusinessPage = pathname.includes('/business');
  
  // Common navigation function for both ar and en
  const handleClientPageClick = () => {
    const basePath = `/${currentLocale}`;
    
    if (isClientPage) {
      // If on client page, go to home page
      router.push(basePath);
    } else if (isBusinessPage) {
      // If on business page, go to home page  
      router.push(basePath);
    } else {
      // If on home page, go to client page
      router.push(`${basePath}/client`);
    }
  };

  const handleBusinessPageClick = () => {
    const basePath = `/${currentLocale}`;
    if (!webClientAuthService.isAuthenticated()) {
      setPendingBusinessNav(true);
      setSignInOpen(true);
      return;
    }
    router.push(`${basePath}/business`);
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

  const handleAdminPanelClick = () => {
    const basePath = `/${currentLocale}`;
    router.push(`${basePath}/admin/claims`);
  };

  // Show mobile header on small screens
  if (isMobile) {
    return <MobileHeader />;
  }

  return (
    <>
      <PromoBanner />
      <header className="mx-2 sm:mx-4 md:mx-3 lg:mx-8 xl:mx-20 my-2 md:my-3 border-orange header-font hidden md:block shadow-sm overflow-hidden">
      {/* 3D AI Interface Background */}
      {/*<HeaderThreeBackground />*/}

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-8xl mx-auto px-1 sm:px-2 md:px-2 lg:px-5 xl:px-8">
          <motion.div
            className="flex justify-start items-center py-3 md:py-3 lg:py-5 xl:py-6 gap-2 md:gap-3 lg:gap-6 xl:gap-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex-shrink-0 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              onClick={handleClientPageClick}
            >
              <motion.div
                className="relative"
                animate={{
                  filter: [
                    "drop-shadow(0 0 0px rgba(139, 82, 97, 0))",
                    "drop-shadow(0 0 10px rgba(139, 82, 97, 0.3))",
                    "drop-shadow(0 0 0px rgba(139, 82, 97, 0))",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Image
                  src="/image/logo.png"
                  alt={t("company.name")}
                  width={120}
                  height={40}
                  className="h-10 w-auto"
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
            </motion.div>

            {/* Navigation Menu */}
            <nav className="flex space-x-2 md:space-x-3 lg:space-x-4 xl:space-x-6">
              {(isClientPage ? navItems : navItemsBusiness).map((item, index) => (
                <motion.button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className="header-font hover:text-white transition-colors duration-300 relative group text-xs md:text-xs lg:text-sm xl:text-base px-1 md:px-1 lg:px-3"
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

            {/* Right Side Elements */}
            <div className="flex items-center space-x-3 md:space-x-4 lg:space-x-5 xl:space-x-6" style={{ marginInlineStart: 'auto' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <LanguageSwitcher />
              </motion.div>

              {isLoggedIn ? (
                <motion.button
                  type="button"
                  onClick={handleSignOut}
                  className="text-xs md:text-xs lg:text-sm font-semibold px-2 md:px-3 lg:px-4 py-1.5 md:py-2 rounded-lg hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("header.actions.signOut")}
                </motion.button>
              ) : (
                <>
                  <motion.button
                    type="button"
                    onClick={() => setSignInOpen(true)}
                    className="text-xs md:text-xs lg:text-sm font-semibold px-2 md:px-3 lg:px-4 py-1.5 md:py-2 rounded-lg hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t("header.actions.signIn")}
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setSignUpOpen(true)}
                    className="text-xs md:text-xs lg:text-sm font-semibold px-2 md:px-3 lg:px-4 py-1.5 md:py-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t("header.actions.signUp")}
                  </motion.button>
                </>
              )}

                <MouseTrackingButton
                  variant="primary"
                  size="md"
                  className="text-xs md:text-xs lg:text-sm font-bold text-white px-2 md:px-3 lg:px-5 xl:px-8 py-1 md:py-1.5 lg:py-2.5 xl:py-3"
                  baseBackground="linear-gradient(135deg, #ED614A 0%, #E6446F 50%, #FF6B35 100%)"
                  gradientColor="255, 255, 255"
                  gradientOpacity={0.2}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {t("header.actions.subscribe")}
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                    </motion.span>
                  </span>
                </MouseTrackingButton>

                {!isBusinessPage && (
                  <MouseTrackingButton
                    onClick={handleBusinessPageClick}
                    variant="secondary"
                    size="md"
                    className="text-xs md:text-xs lg:text-sm font-bold px-2 md:px-3 lg:px-5 xl:px-8 py-1 md:py-1.5 lg:py-2.5 xl:py-3 backdrop-blur-sm bg-white/10"
                    baseBackground="rgba(255, 255, 255, 0.1)"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {t("header.actions.BusinessPage")}
                      <motion.span
                        className="text-xs"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                      </motion.span>
                    </span>
                  </MouseTrackingButton>
                )}

                <MouseTrackingButton
                  onClick={handleClientPageClick}
                  variant="secondary"
                  size="md"
                  className="text-xs md:text-xs lg:text-sm font-bold px-2 md:px-3 lg:px-5 xl:px-8 py-1 md:py-1.5 lg:py-2.5 xl:py-3 backdrop-blur-sm bg-white/10"
                  baseBackground="rgba(255, 255, 255, 0.1)"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isClientPage ? t("header.actions.HomePage") : t("header.actions.ClientPage")}
                    <motion.span
                      className="text-xs"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                    </motion.span>
                  </span>
                </MouseTrackingButton>
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
