'use strict';
var test = require('ava');
var winScreensaver = require('./');

test('screensaver', function (t) {
	t.plan(1);

	winScreensaver(function (err) {
		t.assert(!err, err);
	});
});
