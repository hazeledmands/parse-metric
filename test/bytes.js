var parse = require('../');
var test = require('tape');

test('B', function(t) {
  t.plan(1);
  t.equal(parse('12543B'), 12543);
});

test('bytes', function(t) {
  t.plan(1);
  t.equal(parse('200 bytes'), 200);
});

test('kB', function(t) {
  t.plan(1);
  t.equal(parse('12kB'), 12 * 1000);
});

test('kilobytes', function(t) {
  t.plan(1);
  t.equal(parse('43 kilobytes'), 43 * 1000);
});

test('MB', function(t) {
  t.plan(1);
  t.equal(parse('23MB'), 23 * Math.pow(1000, 2));
});

test('megabytes', function(t) {
  t.plan(1);
  t.equal(parse('99 megabytes'), 99 * Math.pow(1000, 2));
});

test('GB', function(t) {
  t.plan(1);
  t.equal(parse('87GB'), 87 * Math.pow(1000, 3));
});

test('gigabytes', function(t) {
  t.plan(1);
  t.equal(parse('3 gigabytes'), 3 * Math.pow(1000, 3));
});

test('TB', function(t) {
  t.plan(1);
  t.equal(parse('87TB'), 87 * Math.pow(1000, 4));
});

test('terabytes', function(t) {
  t.plan(1);
  t.equal(parse('42 terabytes'), 42 * Math.pow(1000, 4));
});
