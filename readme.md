# negative-array [![Build Status](https://travis-ci.org/sindresorhus/negative-array.svg?branch=master)](https://travis-ci.org/sindresorhus/negative-array)

> Negative array index support `array[-1]` using ES6 Proxy

JavaScript doesn't natively support the use of a negative index to get items backwards from the end, but with [ES6 Proxy](http://soft.vub.ac.be/~tvcutsem/proxies/) it's possible. Take a look at the [source](https://github.com/sindresorhus/negative-array/blob/207b5858ed0261cc9a92a357ea7787b72abafcc7/negative-array.js#L21-L30) to see how simple it is to implement. There's also a [short article](http://dailyjs.com/2013/11/15/negative-array/) about it.

```js
var negativeArray = require('negative-array');

// adds negative array index support to any passed array
var unicorn = negativeArray(['pony', 'cake', 'rainbow']);

// get the last item by using an negative index
console.log(unicorn[-1]);
//=> rainbow

// OMG, YES!
```

> Proxies are objects for which the programmer has to define the semantics in JavaScript. The default object semantics are implemented in the JavaScript engine, often written in lower-level languages like C++. Proxies let the programmer define most of the behavior of an object in JavaScript. They are said to provide a meta-programming API.

This should go without saying; **don't use in production.**


## [Demo](http://sindresorhus.com/negative-array)


## Install

Download [manually](https://github.com/sindresorhus/negative-array/releases) or with a package-manager.

```bash
$ npm install --save negative-array
```

```bash
$ bower install --save negative-array
```

```bash
$ component install sindresorhus/negative-array
```


## Compatibility

- Node >=0.8.0 - with the harmony flag: `node --harmony`
- Chrome - with the this flag enabled `chrome://flags/#enable-javascript-harmony` *(copy/paste into address-bar)*
- Firefox >=12


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
