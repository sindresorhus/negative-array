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

			const index = Number(name);

			return target[index < 0 ? target.length + index : name];
		},
		set(target, name, value) {
			if (typeof name !== 'string') {
				return;
			}

			const index = Number(name);

			target[index < 0 ? target.length + index : name] = value;

			return true;
		}
	});
};
