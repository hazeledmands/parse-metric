var parse = require('../');
var test = require('tape');

test('cm', function(t) {
  t.plan(1);
  t.equal(parse('2923cm'), 29.23);
});

test('negative cm', function(t) {
  t.plan(1);
  t.equal(parse('-19cm'), -0.19);
});

test('m', function(t) {
  t.plan(1);
  t.equal(parse('12543m'), 12543);
});

test('negative m', function(t) {
  t.plan(1);
  t.equal(parse('-288m'), -288);
});

test('km', function(t) {
  t.plan(1);
  t.equal(parse('12km'), 12000);
});

test('decimal kilometers', function(t) {
  t.plan(1);
  t.equal(parse('46.32 kilometers'), 46320);
});
