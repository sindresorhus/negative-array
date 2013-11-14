# negative-array [![Build Status](https://secure.travis-ci.org/sindresorhus/negative-array.png?branch=gh-pages)](http://travis-ci.org/sindresorhus/negative-array)

> Negative array index support using ES6 Proxy

JavaScript doesn't natively support being able to use a negative index to get items backwards from the end, but with [ES6 Proxy](http://soft.vub.ac.be/~tvcutsem/proxies/) it's possible. Take a look at the source and see how simple it is to implement.

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


## Compatibility

- Node 0.8.0 with the harmony flag: `node --harmony`
- Chrome with the this flag enabled `chrome://flags/#enable-javascript-harmony` *(copy/paste into address-bar)*
- Firefox 12


## [Demo](http://sindresorhus.com/negative-array)


## Install

Download [manually](https://github.com/sindresorhus/negative-array/releases) or with a package-manager.

#### [npm](https://npmjs.org/package/negative-array)

```
npm install --save negative-array
```

#### [Bower](http://bower.io)

```
bower install --save negative-array
```

#### [Component](https://github.com/component/component)

```
component install sindresorhus/negative-array
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
