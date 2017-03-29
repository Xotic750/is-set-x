<a name="module_is-set-x"></a>

## is-set-x
<a href="https://travis-ci.org/Xotic750/is-set-x"
title="Travis status">
<img src="https://travis-ci.org/Xotic750/is-set-x.svg?branch=master"
alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/is-set-x"
title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-set-x.svg"
alt="Dependency status" height="18"/>
</a>
<a
href="https://david-dm.org/Xotic750/is-set-x#info=devDependencies"
title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-set-x/dev-status.svg"
alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/is-set-x" title="npm version">
<img src="https://badge.fury.io/js/is-set-x.svg"
alt="npm version" height="18">
</a>

Detect whether or not an object is an ES6 SET.

**Version**: 1.2.0  
**Author**: Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_is-set-x--module.exports"></a>

### `module.exports(object)` ⇒ <code>boolean</code> ⏏
Determine if an `object` is a `Set`.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - `true` if the `object` is a `Set`,
 else false`  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>\*</code> | The object to test. |

**Example**  
```js
var isSet = require('is-set-x');
var s = new Set();

isSet([]); // false
isSet(true); // false
isSet(s); // true
```
