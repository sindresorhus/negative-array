'use strict';
require('harmony-reflect');

module.exports = function (arr) {
	if (!Array.isArray(arr)) {
		throw new TypeError('Expected an array');
	}

	return new Proxy(arr, {
		get: function (target, name) {
			var i = +name;
			return target[i < 0 ? target.length + i : i];
		},
		set: function (target, name, val) {
			var i = +name;
			return target[i < 0 ? target.length + i : i] = val;
		}
	});
};
