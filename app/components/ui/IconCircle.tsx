"use client";

import React from "react";

interface IconCircleProps {
  size?: "sm" | "md";
  color?: "white" | "default";
  children: React.ReactNode;
}

export function IconCircle({ size = "sm", color = "white", children }: IconCircleProps) {
  const sizeClass = size === "sm" ? "w-6 h-6" : "w-8 h-8";
  const bgClass = color === "white" ? "bg-[#ed614a]" : "bg-[#1c252e]";
  return (
    <div
      className={`rounded-full flex items-center justify-center flex-shrink-0 ${sizeClass} ${bgClass}`}
    >
      {children}
    </div>
  );
}
