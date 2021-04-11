/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let counter = 1;
  let end = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      counter++;
    } else if (counter > 1) {
      end += `${counter}${arr[i]}`;
      counter = 1;
    } else {
      end += `${arr[i]}`;
      counter = 1;
    }
  }
  return end;
}

module.exports = encodeLine;
