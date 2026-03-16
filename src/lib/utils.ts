import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn() — the standard pattern for conditional Tailwind classes.
 * Combines clsx (conditional logic) with tailwind-merge (deduplication).
 * Example: cn("px-4", isLarge && "px-8") correctly resolves to "px-8"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
