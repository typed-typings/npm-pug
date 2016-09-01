/// <reference path="bundle.d.ts" />

import assert = require('assert');
import pug = require('pug');

assert.equal(pug.compile('test')(), '<test></test>');
assert.equal(pug.render('test'), '<test></test>');
