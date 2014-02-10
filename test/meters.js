parse = require('../');

describe('meters', function() {
  it('cm', function() {
    assert.equal(parse('2923cm'), 29.23);
  });

  it('negative cm', function() {
    assert.equal(parse('-19cm'), -0.19);
  });

  it('m', function() {
    assert.equal(parse('12543m'), 12543);
  });

  it('negative m', function() {
    assert.equal(parse('-288m'), -288);
  });

  it('km', function() {
    assert.equal(parse('12km'), 12000);
  });

  it('decimal kilometers', function() {
    assert.equal(parse('46.32 kilometers'), 46320);
  });
});
