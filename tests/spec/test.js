/* jslint maxlen:80, es6:true, white:true */

/* jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
   freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
   nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
   es3:false, esnext:true, plusplus:true, maxparams:1, maxdepth:2,
   maxstatements:12, maxcomplexity:4 */

/* eslint strict: 1, max-lines: 1, symbol-description: 1, max-nested-callbacks: 1,
   max-statements: 1 */

/* global JSON:true, expect, module, require, describe, xit, it, returnExports */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var isSet;
  if (typeof module === 'object' && module.exports) {
    require('es5-shim');
    require('es5-shim/es5-sham');
    if (typeof JSON === 'undefined') {
      JSON = {};
    }
    require('json3').runInContext(null, JSON);
    require('es6-shim');
    var es7 = require('es7-shim');
    Object.keys(es7).forEach(function (key) {
      var obj = es7[key];
      if (typeof obj.shim === 'function') {
        obj.shim();
      }
    });
    isSet = require('../../index.js');
  } else {
    isSet = returnExports;
  }

  var hasSet = typeof Set === 'function';
  if (hasSet) {
    try {
      var getSize = Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(new Set()),
        'size'
      ).get;
      if (typeof getSize.call(new Set()) !== 'number') {
        throw new TypeError('not a number');
      }
    } catch (ignore) {
      hasSet = false;
    }
  }

  var ifHasSet = hasSet ? it : xit;

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
