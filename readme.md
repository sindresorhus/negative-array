# negative-array [![Build Status](https://travis-ci.org/sindresorhus/negative-array.svg)](https://travis-ci.org/sindresorhus/negative-array)

> Negative array index support `array[-1]` using [ES2015 `Proxy`](https://ponyfoo.com/articles/es6-proxies-in-depth)

JavaScript doesn't natively support the use of a negative index to get items backwards from the end, but with [ES2015 Proxy](http://soft.vub.ac.be/~tvcutsem/proxies/) it's possible. Take a look at the [source](index.js) to see how simple it is to implement and read this [short article](http://dailyjs.com/2013/11/15/negative-array/) about it.


## Install

```
$ npm install negative-array
```


## Usage

```js
const negativeArray = require('negative-array');

// Adds negative array index support to any given array
const unicorn = negativeArray(['🐴', '🎂', '🌈']);

// Get the last item by using a negative index
console.log(unicorn[-1]);
//=> '🌈'

// OMG, YES!
```


## Related

- [on-change](https://github.com/sindresorhus/on-change) - Watch an object or array for changes (Uses `Proxy` too)
- [known](https://github.com/sindresorhus/known) - Allow only access to known object properties (Uses `Proxy` too)


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
