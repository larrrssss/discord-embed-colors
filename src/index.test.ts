import { decimalToHex, getColor, hexToDecimal } from './index';

test('get a constant color', () => {
  const green = getColor('GREEN');

  expect(green).toBe(3066993);
});

test('convert hex to decimal', () => {
  const decimal = hexToDecimal('#2ecc71');

  expect(decimal).toBe(3066993);
});

test('decimal to hex', () => {
  const hex = decimalToHex(3066993);

  expect(hex).toBe('#2ecc71');
});