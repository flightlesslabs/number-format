/**
 * Validates a given input to determine if it's a valid number.
 *
 * This function returns an array containing two elements:
 * 1. `isValid`: A boolean indicating if the input is a valid number.
 * 2. `value`: The processed value. This will be the parsed numeric value, `NaN`, or `undefined`.
 *
 * @param {string | number | undefined} value The input to validate.
 * @returns {[boolean | undefined, number | undefined]} An array with the validation status and the processed value.
 */
export default function validateNumber(value: string | undefined): [boolean, number | undefined] {
  // Handle undefined or blank string inputs first.
  if (value === undefined || (typeof value === 'string' && value.trim() === '')) {
    return [true, undefined];
  }

  // Convert the input to a number.
  const num = +value;

  // Check for NaN.
  if (isNaN(num)) {
    return [false, NaN];
  }

  // If it's a valid number, return true and the number itself.
  return [true, num];
}
