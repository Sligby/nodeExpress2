const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  test('converts midnight correctly', () => {
    expect(timeToWords('00:00')).toBe('midnight');
  });

  test('converts noon correctly', () => {
    expect(timeToWords('12:00')).toBe('noon');
  });

  test('converts morning time correctly', () => {
    expect(timeToWords('08:30')).toBe('eight thirty am');
  });

  test('converts afternoon time correctly', () => {
    expect(timeToWords('15:45')).toBe('three forty five pm');
  });

  test('handles minutes with leading zero correctly', () => {
    expect(timeToWords('09:05')).toBe('nine oh five am');
  });

  test('handles midnight with minutes correctly', () => {
    expect(timeToWords('00:15')).toBe('midnight fifteen am');
  });

  test('handles noon with minutes correctly', () => {
    expect(timeToWords('12:45')).toBe('noon forty five pm');
  });

  test('handles evening time correctly', () => {
    expect(timeToWords('18:20')).toBe('six twenty pm');
  });

  test('handles midnight with single-digit minutes correctly', () => {
    expect(timeToWords('00:09')).toBe('midnight oh nine am');
  });

  test('handles noon with single-digit minutes correctly', () => {
    expect(timeToWords('12:08')).toBe('noon oh eight pm');
  });
});