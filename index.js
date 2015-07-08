'use strict';
var nircmd = require('nircmd');

module.exports = function (cb) {
	if (process.platform !== 'win32') {
		throw new Error('Only Windows systems are supported');
	}

	nircmd('screensaver', function (err) {
		if (err) {
			cb(err);
			return;
		}

		cb();
	});
};
