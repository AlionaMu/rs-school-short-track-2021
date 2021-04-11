/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const res = n.toString().split('');
  const arr = [];

  for (let i = 0; i < res.length; i++) {
    let num = '';
    res.forEach((el, j) => {
      if (j !== i) {
        num += el;
      }
    });
    arr.push(parseInt(num, 10));
    num = '';
    arr.sort((a, b) => a - b);
  }
  return arr[arr.length - 1];
}

module.exports = deleteDigit;
