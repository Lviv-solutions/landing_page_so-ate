"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LoadingSpinnerProps {
  message?: string;
  fullScreen?: boolean;
}

export default function LoadingSpinner({
  message,
  fullScreen = true,
}: LoadingSpinnerProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-6 ${
        fullScreen ? "fixed inset-0 z-[9999] bg-gradient-to-br from-[#502746] via-[#401736] to-[#200016]" : "py-20"
      }`}
    >
      {/* Spinner ring */}
      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute w-20 h-20 rounded-full border-[3px] border-transparent"
          style={{
            borderTopColor: "#ED614A",
            borderRightColor: "#E6446F",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-14 h-14 rounded-full border-[3px] border-transparent"
          style={{
            borderBottomColor: "#FF6B35",
            borderLeftColor: "#f9dcc7",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        {/* Logo */}
        <Image
          src="/image/logo-2.svg"
          alt="So-Eat"
          width={32}
          height={32}
          priority
        />
      </div>

      {/* Loading text */}
      {message && (
        <motion.p
          className="text-sm text-white/70 font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {message}
        </motion.p>
      )}

      {/* Animated dots */}
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-white/40"
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
