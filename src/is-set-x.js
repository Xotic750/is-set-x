import isFalsey from 'is-falsey-x';

let attempt;
let isObjectLike;
let isLength;
let getSize;

if (typeof Set === 'function') {
  const descriptor = require('object-get-own-property-descriptor-x')(Set.prototype, 'size');

  if (descriptor && typeof descriptor.get === 'function') {
    attempt = require('attempt-x');
    isObjectLike = require('is-object-like-x');
    let res = attempt(function() {
      return new Set();
    });

    if (res.threw === false && isObjectLike(res.value)) {
      isLength = require('is-length-x');
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
  if (isFalsey(getSize) || isObjectLike(object) === false) {
    return false;
  }

  const result = attempt.call(object, getSize);

  return result.threw === false && isLength(result.value);
}
