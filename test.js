import test from 'ava';
import fn from './';

test('screensaver', t => {
	t.plan(1);

	fn(err => {
		t.assert(!err, err);
	});
});
