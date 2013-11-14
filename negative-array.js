/*!
	negative-array
	Negative array index support using ES6 Proxy
	https://github.com/sindresorhus/negative-array
	by Sindre Sorhus
	MIT License
*/
(function () {
	'use strict';
	var isNode = typeof global !== 'undefined' && {}.toString.call(global) === '[object global]';

	if (isNode) {
		require('harmony-reflect');
	}

	function negativeArray(arr) {
		if (!Array.isArray(arr)) {
			throw new Error('Input must be an array.');
		}

		return Proxy(arr, {
			get: function (target, name) {
				var i = +name;
				return target[i < 0 ? target.length + i : i];
			},
			set: function (target, name, val) {
				var i = +name;
				return target[i < 0 ? target.length + i : i] = val;
			}
		});
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = negativeArray;
	} else {
		window.negativeArray = negativeArray;
	}
})();
