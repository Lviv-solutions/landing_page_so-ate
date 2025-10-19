"use client";

import { MouseEvent } from 'react';

interface MouseTrackingOptions {
  gradientColor?: string;
  gradientOpacity?: number;
  gradientSize?: number;
  baseBackground?: string;
}

export const useMouseTracking = (options: MouseTrackingOptions = {}) => {
  const {
    gradientColor = '237, 97, 74', // Default orange color (RGB)
    gradientOpacity = 0.1,
    gradientSize = 50,
    baseBackground = 'transparent'
  } = options;

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const getTrackingStyle = (isActive: boolean = true) => ({
    background: isActive 
      ? `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(${gradientColor}, ${gradientOpacity}) 0%, transparent ${gradientSize}%), ${baseBackground}`
      : baseBackground
  });

  const getTrackingClasses = () => 'cursor-pointer relative overflow-hidden transition-all duration-300';

  return {
    handleMouseMove,
    getTrackingStyle,
    getTrackingClasses
  };
};
