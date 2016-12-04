'use strict';
require('harmony-reflect');

function circularIndex(length, index) {
  return index < 0 ? (length + index % length) % length : index % length;
}

module.exports = function (arr) {
	if (!Array.isArray(arr)) {
		throw new TypeError('Expected an array');
	}

	return new Proxy(arr, {
		get: function (target, name) {
			var i = +name;
			return target[circularIndex(target.length, i)];
		},
		set: function (target, name, val) {
			var i = +name;
			return target[circularIndex(target.length, i)] = val;
		}
	});
};
