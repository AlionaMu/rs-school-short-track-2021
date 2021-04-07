/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const one = [];
  const sorted = [];
  const total = [];
  arr.forEach((el, i) => {
    if (el === -1) {
      one.push(i);
    } else { sorted.push(el); }
  });

  sorted.sort((a, b) => a - b);

  for (let j = 0; j < arr.length; j++) {
    if (one.includes(j)) {
      total.push(-1);
    } else { total.push(sorted.shift()); }
  }

  return total;
}

module.exports = sortByHeight;
