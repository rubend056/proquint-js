var consonants = {
  b: 0, d: 1, f: 2, g: 3,
  h: 4, j: 5, k: 6, l: 7,
  m: 8, n: 9, p: 10, r: 11,
  s: 12, t: 13, v: 14, z: 15
};

var vowels = { a: 0, i: 1, o: 2, u: 3 };

/**
 * Decodes a string into Uint16Array
 */
var decode = module.exports = function decode(str) {
  var bits = str.split("_"),
    buffer = new Uint16Array(bits.length);

  for (var i = 0, len = bits.length; i < len; i++) {
    buffer[i] =
      (consonants[bits[i][0]] << 12) +
      (vowels[bits[i][1]] << 10) +
      (consonants[bits[i][2]] << 6) +
      (vowels[bits[i][3]] << 4) +
      consonants[bits[i][4]];
  }

  return buffer;
};
