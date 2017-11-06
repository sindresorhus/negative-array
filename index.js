'use strict';

module.exports = input => {
	if (!Array.isArray(input)) {
		throw new TypeError('Expected an array');
	}

	return new Proxy(input, {
		get(target, name, receiver) {
			if (typeof name !== 'string') {
				return Reflect.get(target, name, receiver);
			}

			const index = Number(name);

			if (Number.isNaN(index)) {
				return Reflect.get(target, name, receiver);
			}

			return target[index < 0 ? target.length + index : index];
		},
		set(target, name, value, receiver) {
			if (typeof name !== 'string') {
				return Reflect.set(target, name, value, receiver);
			}

			const index = Number(name);

			if (Number.isNaN(index)) {
				return Reflect.set(target, name, value, receiver);
			}

			target[index < 0 ? target.length + index : index] = value;

			return true;
		}
	});
};
