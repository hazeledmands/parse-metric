var prefixes = {
  centi: -2, c: -2,
  kilo:   3, k:  3,
  mega:   6, M:  6,
  giga:   9, G:  9,
  tera:  12, T: 12,
};
var matchers = Object.keys(prefixes).map(function(prefix) {
  return {
    prefix: prefix,
    multiplier: Math.pow(10, prefixes[prefix]),
    regex: new RegExp('^\\d+\\.?\\d*\\s*' + prefix + '\\w+$'),
  };
});

module.exports = function(inString) {
  var number = parseInt(inString);
  for (var i = 0; i < matchers.length; i++) {
    if(matchers[i].regex.test(inString)) {
      return number * matchers[i].multiplier;
    }
  }
  return number;
};
