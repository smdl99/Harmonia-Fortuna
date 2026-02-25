import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  if (typeof window === 'undefined') {
    return clsx(inputs);
  }

  console.log('Import tailwindcss');
  const { twMerge } = require('tailwind-merge');
  return twMerge(clsx(inputs));
}
