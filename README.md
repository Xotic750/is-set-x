<a
  href="https://travis-ci.org/Xotic750/is-set-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/is-set-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/is-set-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-set-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/is-set-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-set-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/is-set-x"
  title="npm version">
<img src="https://badge.fury.io/js/is-set-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/is-set-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/is-set-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/is-set-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/is-set-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/is-set-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/is-set-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_is-set-x"></a>

## is-set-x

Detect whether or not an object is an ES6 SET.

<a name="exp_module_is-set-x--module.exports"></a>

### `module.exports(object)` ⇒ <code>boolean</code> ⏏

Determine if an `object` is a `Set`.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - `true` if the `object` is a `Set`,
else `false`.

| Param  | Type            | Description         |
| ------ | --------------- | ------------------- |
| object | <code>\*</code> | The object to test. |

**Example**

```js
import isSet from 'is-set-x';

const s = new Set();

console.log(isSet([])); // false
console.log(isSet(true)); // false
console.log(isSet(s)); // true
```
