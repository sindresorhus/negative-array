import test from 'ava';
import negativeArray from '.';

test('quacks like an array', t => {
	const fixture = negativeArray(['foo', 'bar', 'baz']);
	t.is(fixture.length, 3);
	t.is(fixture.toString(), 'foo,bar,baz');
});

test('get values', t => {
	const fixture = negativeArray(['foo', 'bar', 'baz']);
	t.is(fixture[0], 'foo');
	t.is(fixture[1], 'bar');
	t.is(fixture[-1], 'baz');
	t.is(fixture[-2], 'bar');
});

test('set values', t => {
	const fixture = negativeArray(['foo', 'bar', 'baz']);
	fixture[0] = 0;
	t.deepEqual(fixture, [0, 'bar', 'baz']);
	fixture[1] = 1;
	t.deepEqual(fixture, [0, 1, 'baz']);
	fixture[-1] = -1;
	t.deepEqual(fixture, [0, 1, -1]);
	fixture[-2] = -2;
	t.deepEqual(fixture, [0, -2, -1]);
});

test('only accepts arrays', t => {
	t.throws(() => {
		negativeArray({});
	});
});
