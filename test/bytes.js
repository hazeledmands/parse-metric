parse = require('../');

describe('bytes', function() {
  it('B', function() {
    assert.equal(parse('12543B'), 12543);
  });

  it('bytes', function() {
    assert.equal(parse('200 bytes'), 200);
  });

  it('kB', function() {
    assert.equal(parse('12kB'), 12 * 1000);
  });

  it('kilobytes', function() {
    assert.equal(parse('43 kilobytes'), 43 * 1000);
  });

  it('MB', function() {
    assert.equal(parse('23MB'), 23 * Math.pow(1000, 2));
  });

  it('megabytes', function() {
    assert.equal(parse('99 megabytes'), 99 * Math.pow(1000, 2));
  });

  it('GB', function() {
    assert.equal(parse('87GB'), 87 * Math.pow(1000, 3));
  });

  it('gigabytes', function() {
    assert.equal(parse('3 gigabytes'), 3 * Math.pow(1000, 3));
  });

  it('TB', function() {
    assert.equal(parse('87TB'), 87 * Math.pow(1000, 4));
  });

  it('terabytes', function() {
    assert.equal(parse('42 terabytes'), 42 * Math.pow(1000, 4));
  });
});

