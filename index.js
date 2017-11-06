'use strict';

module.exports = input => {
	if (!Array.isArray(input)) {
		throw new TypeError('Expected an array');
	}

	return new Proxy(input, {
		get(target, name) {
			if (typeof name !== 'string') {
				return;
			}

			return target[name < 0 ? target.length - -name : name];
		},
		set(target, name, value) {
			if (typeof name !== 'string') {
				return;
			}

			target[name < 0 ? target.length - -name : name] = value;

			return true;
		}
	});
};
