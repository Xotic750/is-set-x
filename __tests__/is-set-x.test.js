let isSet;

if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');

  if (typeof JSON === 'undefined') {
    JSON = {};
  }

  require('json3').runInContext(null, JSON);
  require('es6-shim');
  const es7 = require('es7-shim');
  Object.keys(es7).forEach(function(key) {
    const obj = es7[key];

    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  isSet = require('../../index.js');
} else {
  isSet = returnExports;
}

let hasSet = typeof Set === 'function';

if (hasSet) {
  try {
    const getSize = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(new Set()), 'size').get;

    if (typeof getSize.call(new Set()) !== 'number') {
      throw new TypeError('not a number');
    }
  } catch (ignore) {
    hasSet = false;
  }
}

const ifHasSet = hasSet ? it : xit;

describe('isSet', function() {
  it('basic', function() {
    expect.assertions(1);
    expect.assertions(1);
    expect(isSet()).toBe(false);
    expect(isSet(undefined)).toBe(false);
    expect(isSet(null)).toBe(false);
    expect(isSet(1)).toBe(false);
    expect(isSet(true)).toBe(false);
    expect(isSet('abc')).toBe(false);
    expect(isSet([])).toBe(false);
    expect(isSet({})).toBe(false);
  });

  ifHasSet('hasSet', function() {
    expect(isSet(new Set())).toBe(true);
  });
});
