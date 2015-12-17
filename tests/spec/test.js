/*jslint maxlen:80, es6:false, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:false, plusplus:true, maxparams:1, maxdepth:3,
  maxstatements:19, maxcomplexity:7 */

/*global JSON:true, expect, module, require, describe, xit, it, returnExports */

(function () {
  'use strict';

  var isSet, hasSet, ifHasSet, getSize;
  if (typeof module === 'object' && module.exports) {
    require('es5-shim');
    require('es5-shim/es5-sham');
    if (typeof JSON === 'undefined') {
      JSON = {};
    }
    require('json3').runInContext(null, JSON);
    require('es6-shim');
    isSet = require('../../index.js');
  } else {
    isSet = returnExports;
  }

  hasSet = typeof DataView === 'function';
  if (hasSet) {
    try {
      getSize = Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(new Set()),
        'size'
      ).get;
      if (typeof getSize.call(new Set()) !== 'number') {
        throw 'not a number';
      }
    } catch (ignore) {
      hasSet = false;
    }
  }

  ifHasSet = hasSet ? it : xit;

  describe('isSet', function () {
    it('basic', function () {
      expect(isSet()).toBe(false);
      expect(isSet(undefined)).toBe(false);
      expect(isSet(null)).toBe(false);
      expect(isSet(1)).toBe(false);
      expect(isSet(true)).toBe(false);
      expect(isSet('abc')).toBe(false);
      expect(isSet([])).toBe(false);
      expect(isSet({})).toBe(false);
    });

    ifHasSet('hasSet', function () {
      expect(isSet(new Set())).toBe(true);
    });
  });
}());
