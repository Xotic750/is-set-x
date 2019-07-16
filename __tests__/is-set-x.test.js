import isSet from '../src/is-set-x';

let hasSet = typeof Set === 'function';

if (hasSet) {
  try {
    const getSize = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(new Set()), 'size').get;

    if (typeof getSize.call(new Set()) !== 'number') {
      // noinspection ExceptionCaughtLocallyJS
      throw new TypeError('not a number');
    }
  } catch (ignore) {
    hasSet = false;
  }
}

const ifHasSet = hasSet ? it : xit;

describe('isSet', function() {
  it('basic', function() {
    expect.assertions(7);
    expect(isSet(undefined)).toBe(false);
    expect(isSet(null)).toBe(false);
    expect(isSet(1)).toBe(false);
    expect(isSet(true)).toBe(false);
    expect(isSet('abc')).toBe(false);
    expect(isSet([])).toBe(false);
    expect(isSet({})).toBe(false);
  });

  ifHasSet('hasSet', function() {
    expect.assertions(1);
    expect(isSet(new Set())).toBe(true);
  });
});
