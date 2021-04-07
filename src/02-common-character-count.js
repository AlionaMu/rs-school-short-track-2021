/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const total = [];
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      const x = arr2.find((item) => item === arr1[i]);

      total.push(arr1[i]);
      arr2.splice(arr2.indexOf(x), 1);
    }
  }
  return total.length;
}

module.exports = getCommonCharacterCount;
