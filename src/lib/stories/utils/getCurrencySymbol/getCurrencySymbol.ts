/**
 * Retrieves the currency symbol for a given alphabetic currency code.
 *
 * It uses the 'en-US' locale to format the currency. Note that for currencies
 * without a standard symbol (e.g., 'LKR'), the formatted value often returns
 * the code itself followed by a space (e.g., "LKR ").
 *
 * @param {string} alphabeticCode The 3-letter alphabetic ISO 4217 currency code (e.g., 'USD', 'EUR', 'LKR').
 * @param {boolean} [trim] If true, any leading or trailing whitespace is removed from the resulting symbol/code.
 * This is particularly useful for codes that result in a trailing space, like 'LKR'.
 * @returns {string} The currency symbol associated with the code (e.g., '$', '€', or the formatted code like 'LKR').
 */
export default function getCurrencySymbol(alphabeticCode: string, trim: boolean = false): string {
  const value = 1;

  let formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: alphabeticCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace('1', '');

  if (formattedValue.trim().toLowerCase() === alphabeticCode.toLowerCase()) {
    formattedValue = `${formattedValue.trim()} `;
  }

  if (trim) {
    return formattedValue.trim();
  }

  return formattedValue;
}
