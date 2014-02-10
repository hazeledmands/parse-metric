parse = require('../');

describe('bytes', function() {
  it('should convert a byte string into a Number', function() {
    assert.equal(parse('12543B'), 12543);
  });

  it('should convert a kB string into a Number', function() {
    assert.equal(parse('12kB'), 12 * 1000);
  });

  it('should convert an MB string into a Number', function() {
    assert.equal(parse('23MB'), 23 * Math.pow(1000, 2));
  });

  it('should convert a GB string into a Number', function() {
    assert.equal(parse('87GB'), 87 * Math.pow(1000, 3));
  });

  it('should convert a TB string into a Number', function() {
    assert.equal(parse('87TB'), 87 * Math.pow(1000, 4));
  });
});

