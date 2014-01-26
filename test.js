'use strict';
var assert = require('assert');
var negativeArray = require('./negative-array');
var testArr = negativeArray(['foo', 'bar', 'baz']);

describe('negativeArray', function () {
	it('should get values', function () {
		assert.strictEqual(testArr[0], 'foo');
		assert.strictEqual(testArr[1], 'bar');
		assert.strictEqual(testArr[-1], 'baz');
		assert.strictEqual(testArr[-2], 'bar');
	});

	it('should set values', function () {
		testArr[0] = 0;
		assert.deepEqual(testArr, [0, 'bar', 'baz']);
		testArr[1] = 1;
		assert.deepEqual(testArr, [0, 1, 'baz']);
		testArr[-1] = -1;
		assert.deepEqual(testArr, [0, 1, -1]);
		testArr[-2] = -2;
		assert.deepEqual(testArr, [0, -2, -1]);
	});

	it('should only accept arrays', function () {
		assert.throws(function () {negativeArray({})});
	});
});
