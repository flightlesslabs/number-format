import { expect, test } from 'vitest';
import getCurrencySymbol from './getCurrencySymbol.js';

test('Converts alphabeticCode to Currency Symbol', () => {
  expect(getCurrencySymbol('USD')).toBe('$');
});
