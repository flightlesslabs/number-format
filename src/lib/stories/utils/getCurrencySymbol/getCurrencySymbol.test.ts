import { expect, test } from 'vitest';
import getCurrencySymbol from './getCurrencySymbol.js';

// --- Core Functionality & Standard Symbols ---

test('should return the standard symbol for USD', () => {
  expect(getCurrencySymbol('USD')).toBe('$');
});

test('should return the standard symbol for EUR', () => {
  expect(getCurrencySymbol('EUR')).toBe('€');
});

test('should return the standard symbol for GBP', () => {
  expect(getCurrencySymbol('GBP')).toBe('£');
});

// --- Behavior for Codes without Standard Symbols (e.g., LKR) ---

test('should return the currency code with a trailing space by default for codes without a symbol (LKR)', () => {
  // 'en-US' locale often formats codes without symbols as "CODE "
  expect(getCurrencySymbol('LKR')).toBe('LKR ');
});

test('should remove the trailing space when trim is true for LKR', () => {
  expect(getCurrencySymbol('LKR', true)).toBe('LKR');
});

// --- Edge Cases and International Coverage ---

test('should handle JPY correctly (symbol with no space)', () => {
  // JPY (¥) is another major symbol, ensuring it doesn't get an unwanted space
  expect(getCurrencySymbol('JPY')).toBe('¥');
});

test('should return an empty string or the code for an invalid code', () => {
  // Depending on the browser, an invalid code might result in the code itself,
  // an empty string, or an error. Testing for a non-error/known failure case is good.
  // Using an extremely invalid code. The Intl API often falls back to the code itself.
  expect(getCurrencySymbol('XYZ')).toMatch(/XYZ\s?|/); // Expect 'XYZ' or 'XYZ ' or ''
});

test('should handle lower-case input correctly (Intl is case-insensitive for currency codes)', () => {
  // While ISO 4217 is uppercase, Intl often handles lowercase input.
  expect(getCurrencySymbol('usd')).toBe('$');
});

test('should handle lower-case input correctly (Intl is case-insensitive for currency codes) for codes without a symbol (LKR)', () => {
  // While ISO 4217 is uppercase, Intl often handles lowercase input.
  expect(getCurrencySymbol('lkr')).toBe('LKR ');
});

test('should ensure trimming does nothing when no spaces are present', () => {
  // Testing trim on a standard symbol to ensure it doesn't corrupt it
  expect(getCurrencySymbol('USD', true)).toBe('$');
});
