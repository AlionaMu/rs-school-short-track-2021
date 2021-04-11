/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const res = n.toString().split('');

  const total = res.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
  return total.toString().split('').length > 1 ? getSumOfDigits(total) : total;
}

module.exports = getSumOfDigits;
