'use strict';

module.exports = input => {
	if (!Array.isArray(input)) {
		throw new TypeError('Expected an array');
	}

	return new Proxy(input, {
		get(target, index) {
			if (typeof index !== 'string') {
				return;
			}

			return target[index < 0 ? target.length - -index : index];
		},
		set(target, index, value) {
			if (typeof index !== 'string') {
				return;
			}

			target[index < 0 ? target.length - -index : index] = value;

			return true;
		}
	});
};
