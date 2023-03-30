import test from '@ava/test';

import {fixture} from '../helpers/exec.js';

test('node assertion ', async t => {
	const result = await t.throwsAsync(fixture(['assert-failure.js']));
	t.snapshot(result.stdout);
});

test('expect error ', async t => {
	const result = await t.throwsAsync(fixture(['expect-failure.js']));
	t.snapshot(result.stdout);
});
