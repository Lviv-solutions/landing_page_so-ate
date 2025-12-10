"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import "../style.css";
import {
  Home,
  Database,
  Package,
  Users,
  Lightbulb,
  FileText,
  BookOpen,
  Briefcase,
  ShoppingCart,
  BarChart3,
  Shield,
  Megaphone,
  Bell,
  Clipboard,
  ChevronDown,
  LogOut,
  User,
  Mail,
} from "lucide-react";

interface NavigationItem {
  key: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  subItems?: NavigationItem[];
}

interface SidebarProps {
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  onLogout?: () => void;
}

export default function Sidebar({
  userName = "صبرينا نصر",
  userEmail = "hioban.anan@gmail.com",
  userAvatar,
  onLogout,
}: SidebarProps) {
  const { t } = useTranslation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [activeItem, setActiveItem] = useState<string>("home");

  const navigationItems: NavigationItem[] = [
    {
      key: "home",
      icon: Home,
      href: "/dashboard",
    },
    {
      key: "externalDatabases",
      icon: Database,
      href: "/databases",
    },
    {
      key: "products",
      icon: Package,
      href: "/products",
    },
    {
      key: "externalAccounts",
      icon: Users,
      href: "/accounts",
    },
    {
      key: "manageSuggestions",
      icon: Lightbulb,
      href: "/suggestions",
    },
    {
      key: "posts",
      icon: FileText,
      href: "/posts",
    },
    {
      key: "articles",
      icon: BookOpen,
      href: "/articles",
    },
    {
      key: "services",
      icon: Briefcase,
      href: "/services",
    },
    {
      key: "orders",
      icon: ShoppingCart,
      href: "/orders",
    },
    {
      key: "transactions",
      icon: BarChart3,
      href: "/transactions",
    },
    {
      key: "rightsPrivacy",
      icon: Shield,
      href: "/privacy",
    },
    {
      key: "ads",
      icon: Megaphone,
      href: "/ads",
    },
    {
      key: "announcements",
      icon: Bell,
      href: "/announcements",
    },
    {
      key: "requests",
      icon: Clipboard,
      href: "/requests",
    },
  ];

  const toggleExpand = (key: string) => {
    setExpandedItems((prev) =>
      prev.includes(key)
        ? prev.filter((item) => item !== key)
        : [...prev, key]
    );
  };

  const handleItemClick = (key: string, href?: string) => {
    setActiveItem(key);
    if (href) {
      // Handle navigation
      console.log(`Navigate to: ${href}`);
    }
  };

  return (
    <motion.aside
      className="fixed right-0 top-0 h-screen w-64 bg-white shadow-lg flex flex-col overflow-hidden z-50"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      dir="rtl"
    >
      {/* Header with Logo */}
      <div className="p-4 border-b border-gray-200">
        <motion.div
          className="flex items-center justify-center gap-2"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">SO</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-800">منصة التجارية</span>
            <span className="text-xs text-gray-500">So-eat business</span>
          </div>
        </motion.div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 sidebar-scrollbar">
        <div className="space-y-1">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeItem === item.key;
            const isExpanded = expandedItems.includes(item.key);

            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <button
                  onClick={() => {
                    handleItemClick(item.key, item.href);
                    if (item.subItems) {
                      toggleExpand(item.key);
                    }
                  }}
                  className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? "bg-gradient-to-r from-orange-50 to-pink-50 text-orange-600"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-5 h-5 ${
                        isActive
                          ? "text-orange-600"
                          : "text-gray-500 group-hover:text-orange-500"
                      }`}
                    />
                    <span className={`text-sm font-medium ${
                      isActive ? "text-orange-600" : "text-gray-700"
                    }`}>
                      {t(`sidebar.${item.key}`) || item.key}
                    </span>
                  </div>
                  {item.subItems && (
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </motion.div>
                  )}
                </button>

                {/* Sub Items */}
                {item.subItems && isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mr-8 mt-1 space-y-1"
                  >
                    {item.subItems.map((subItem) => {
                      const SubIcon = subItem.icon;
                      return (
                        <button
                          key={subItem.key}
                          onClick={() => handleItemClick(subItem.key, subItem.href)}
                          className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-600 transition-colors duration-200"
                        >
                          <SubIcon className="w-4 h-4 text-gray-400" />
                          <span className="text-sm">
                            {t(`sidebar.${subItem.key}`) || subItem.key}
                          </span>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </nav>

      {/* User Profile Section */}
      <div className="border-t border-gray-200 p-4">
        <motion.div
          className="flex items-center gap-3 mb-3"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {userAvatar ? (
            <img
              src={userAvatar}
              alt={userName}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-800 truncate">
              {userName}
            </p>
            <p className="text-xs text-gray-500 truncate flex items-center gap-1">
              <Mail className="w-3 h-3" />
              {userEmail}
            </p>
          </div>
        </motion.div>

        {/* Logout Button */}
        <motion.button
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium text-sm hover:from-orange-600 hover:to-pink-600 transition-all duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <LogOut className="w-4 h-4" />
          <span>إنهاء الخروج</span>
        </motion.button>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 via-pink-500 to-orange-500"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.aside>
  );
}
