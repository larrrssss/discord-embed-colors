import { colors } from './constant';

/**
 * @param name name of colors
 * @returns decimal number for color
 */
export function getColor(name: keyof typeof colors): number | null {
  return (colors as { [k: string]: number })[name] || null;
}

/**
 * Convert custom hexadecimal string to decimal for discord embeds
 * 
 * @param hex hexadecimal string
 * @returns converted decimal number
 */
export function hexToDecimal(hex: string): number {
  return parseInt(hex.startsWith('#') ? hex.slice(1) : hex, 16);
}

/**
 * Coonvert decimal number back to hexadecimal
 * 
 * @param decimal decimal number
 * @returns converted hexadecimal string
 */
export function decimalToHex(decimal: number): string | null {
  const asNumber = Number(decimal);
  if (!asNumber) return null;

  return `#${asNumber.toString(16)}`;
}