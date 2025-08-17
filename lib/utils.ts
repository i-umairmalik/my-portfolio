import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Shadow utility functions for consistent card styling
export const shadowVariants = {
  sm: "shadow-sm",
  md: "shadow-md", 
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
  inner: "shadow-inner",
  none: "shadow-none"
}

export const hoverShadowVariants = {
  sm: "hover:shadow-sm",
  md: "hover:shadow-md",
  lg: "hover:shadow-lg", 
  xl: "hover:shadow-xl",
  "2xl": "hover:shadow-2xl"
}

export function getCardShadows(base: keyof typeof shadowVariants = "lg", hover: keyof typeof hoverShadowVariants = "xl") {
  return `${shadowVariants[base]} ${hoverShadowVariants[hover]} transition-all duration-300 ease-in-out`
}
