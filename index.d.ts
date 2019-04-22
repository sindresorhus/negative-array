/**
Negative array index support `array[-1]` using [ES2015 `Proxy`](https://ponyfoo.com/articles/es6-proxies-in-depth).

@example
```
import negativeArray = require('negative-array');

// Adds negative array index support to any given array
const unicorn = negativeArray(['🐴', '🎂', '🌈']);

// Get the last item by using a negative index
console.log(unicorn[-1]);
//=> '🌈'

// OMG, YES!
```
*/
declare function negativeArray<T extends readonly unknown[]>(array: T): T;

export = negativeArray;
