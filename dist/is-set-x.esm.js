import attempt from 'attempt-x';
import isObjectLike from 'is-object-like-x';
import isLength from 'is-length-x';
import call from 'simple-call-x';
import getGetter from 'util-get-getter-x';

var creator = function creator() {
  /* eslint-disable-next-line compat/compat */
  return new Set();
};

var getSize = getGetter(creator, 'size', isLength);
/**
 * Determine if an `object` is a `Set`.
 *
 * @param {*} object - The object to test.
 * @returns {boolean} `true` if the `object` is a `Set`,
 *  else `false`.
 */

var isSet = function isSet(object) {
  if (getSize === null || isObjectLike(object) === false) {
    return false;
  }

  var result = attempt(function attemptee() {
    return call(getSize, object);
  });
  return result.threw === false && isLength(result.value);
};

export default isSet;

//# sourceMappingURL=is-set-x.esm.js.map