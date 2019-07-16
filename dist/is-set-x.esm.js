var _this = this;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

import gOPD from 'object-get-own-property-descriptor-x';
import attempt from 'attempt-x';
import isObjectLike from 'is-object-like-x';
import isLength from 'is-length-x';
/** @type {BooleanConstructor} */

var castBoolean = true.constructor;
var getSize;

if (typeof Set === 'function') {
  /* eslint-disable-next-line compat/compat */
  var descriptor = gOPD(Set.prototype, 'size');

  if (descriptor && typeof descriptor.get === 'function') {
    var res = attempt(function () {
      _newArrowCheck(this, _this);

      /* eslint-disable-next-line compat/compat */
      return new Set();
    }.bind(this));

    if (res.threw === false && isObjectLike(res.value)) {
      res = attempt.call(res.value, descriptor.get);

      if (res.threw === false && isLength(res.value)) {
        getSize = descriptor.get;
      }
    }
  }
}
/**
 * Determine if an `object` is a `Set`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is a `Set`,
 *  else `false`.
 */


export default function isSet(object) {
  if (castBoolean(getSize) === false || isObjectLike(object) === false) {
    return false;
  }

  var result = attempt.call(object, getSize);
  return result.threw === false && isLength(result.value);
}

//# sourceMappingURL=is-set-x.esm.js.map