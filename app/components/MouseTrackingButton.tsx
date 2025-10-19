"use client";

import { motion } from "framer-motion";
import { useMouseTracking } from "../hooks/useMouseTracking";
import { ReactNode } from "react";

interface MouseTrackingButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  gradientColor?: string;
  gradientOpacity?: number;
  baseBackground?: string;
}

export default function MouseTrackingButton({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  gradientColor = '237, 97, 74',
  gradientOpacity = 0.1,
  baseBackground
}: MouseTrackingButtonProps) {
  
  const { handleMouseMove, getTrackingStyle, getTrackingClasses } = useMouseTracking({
    gradientColor,
    gradientOpacity,
    baseBackground: baseBackground || getVariantBackground(variant)
  });

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-[#ED614A] text-white hover:bg-[#E6446F] shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-[#ED614A] border-2 border-[#ED614A] hover:bg-[#ED614A] hover:text-white shadow-md hover:shadow-lg',
    outline: 'bg-transparent text-[#ED614A] border-2 border-[#ED614A] hover:bg-[#ED614A] hover:text-white',
    ghost: 'bg-transparent text-gray-600 hover:text-[#ED614A] hover:bg-gray-100'
  };

  const baseClasses = `
    rounded-full font-semibold font-clash
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${getTrackingClasses()}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `.trim();

  return (
    <motion.button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={!disabled ? handleMouseMove : undefined}
      style={!disabled ? getTrackingStyle(true) : undefined}
      whileHover={!disabled ? { 
        scale: 1.02,
        boxShadow: "0 10px 30px rgba(237, 97, 74, 0.3)"
      } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
    >
      {children}
    </motion.button>
  );
}

function getVariantBackground(variant: string): string {
  switch (variant) {
    case 'primary':
      return '#ED614A';
    case 'secondary':
    case 'outline':
      return 'white';
    case 'ghost':
      return 'transparent';
    default:
      return 'transparent';
  }
}
