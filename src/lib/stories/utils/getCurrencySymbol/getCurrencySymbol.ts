/**
 * Retrieves the currency symbol for a given alphabetic currency code.
 *
 * @param {string} alphabeticCode The 3-letter alphabetic ISO 4217 currency code (e.g., 'USD', 'EUR', 'JPY').
 * @returns {string} The currency symbol associated with the code (e.g., '$', '€', '¥').
 */
export default function getCurrencySymbol(alphabeticCode: string): string {
  const value = 1;

  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: alphabeticCode,
  })
    .format(value)
    .replace('1.00', '');

  return formattedValue;
}
