import test from 'ava';
import m from '.';

test('get values', t => {
	const fixture = m(['foo', 'bar', 'baz']);
	t.is(fixture[0], 'foo');
	t.is(fixture[1], 'bar');
	t.is(fixture[-1], 'baz');
	t.is(fixture[-2], 'bar');
});

test('set values', t => {
	const fixture = m(['foo', 'bar', 'baz']);

	fixture[0] = 0;
	t.is(fixture[0], 0);
	t.is(fixture[1], 'bar');
	t.is(fixture[2], 'baz');

	fixture[1] = 1;
	t.is(fixture[0], 0);
	t.is(fixture[1], 1);
	t.is(fixture[2], 'baz');

	fixture[-1] = -1;
	t.is(fixture[0], 0);
	t.is(fixture[1], 1);
	t.is(fixture[2], -1);

	fixture[-2] = -2;
	t.is(fixture[0], 0);
	t.is(fixture[1], -2);
	t.is(fixture[2], -1);
});

// `t.deepEqual` can't handle Proxy objects:
// https://github.com/avajs/ava/issues/1578
// - test('set values', t => {
// 	const fixture = m(['foo', 'bar', 'baz']);
// 	fixture[0] = 0;
// 	t.deepEqual(fixture, [0, 'bar', 'baz']);
// 	fixture[1] = 1;
// 	t.deepEqual(fixture, [0, 1, 'baz']);
// 	fixture[-1] = -1;
// 	t.deepEqual(fixture, [0, 1, -1]);
// 	fixture[-2] = -2;
// 	t.deepEqual(fixture, [0, -2, -1]);
// });

test('only accepts arrays', t => {
	t.throws(() => {
		m({});
	});
});
