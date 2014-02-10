var assert = require('assert');

module.exports = function(hydro) {
  hydro.set({
    attach: global,
    suite: 'parse-metric',
    formatter: 'hydro-dot',
    plugins: ['hydro-bdd'],
    tests: ['./test/*.js'],
    globals: { assert: assert }
  });
};
