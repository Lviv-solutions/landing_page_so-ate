"use client";
import React from "react";

interface PrimaryButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
}

export default function PrimaryButton({
  onClick,
  children,
  className = "",
  disabled = false,
  type = "button",
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-3 bg-[#ED614A] text-white rounded-lg font-medium hover:bg-[#DC5139] transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}
