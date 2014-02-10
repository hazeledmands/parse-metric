module.exports = function(inString) {
  var number = parseInt(inString);

  if(/^\d+\.?\d*\s*k(ilo)?\w+$/.test(inString)) {
    return number * 1000;
  }

  if(/^\d+\.?\d*\s*c(enti)?\w+$/.test(inString)) {
    return number / 100;
  }

  if(/^\d+\.?\d*\s*(M|mega)\w+$/.test(inString)) {
    return number * Math.pow(1000, 2);
  }

  if(/^\d+\.?\d*\s*(G|giga)\w+$/.test(inString)) {
    return number * Math.pow(1000, 3);
  }

  if(/^\d+\.?\d*\s*(T|tera)\w+$/.test(inString)) {
    return number * Math.pow(1000, 4);
  }

  else return number;

};
