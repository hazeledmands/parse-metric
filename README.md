# parse-metric

[![Build Status](https://travis-ci.org/demands/parse-metric.png?branch=master)](https://travis-ci.org/demands/parse-metric)
[![NPM version](https://badge.fury.io/js/parse-metric.png)](http://badge.fury.io/js/parse-metric)

Translates numbers with [CI prefixes](http://en.wikipedia.org/wiki/Metric_prefix) into plain JavaScript Numbers.

## Examples

```javascript
var pm = require('parse-metric');

pm('200kB');   // => 200000
pm('12.75cm'); // => 0.1275
```
