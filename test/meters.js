parse = require('../');

describe('meters', function() {
  it('should convert a centimeter string into a Number', function() {
    assert.equal(parse('2923cm'), 29.23);
  });

  it('should convert a meter string into a Number', function() {
    assert.equal(parse('12543m'), 12543);
  });

  it('should convert a km string into a Number', function() {
    assert.equal(parse('12km'), 12000);
  });
});
