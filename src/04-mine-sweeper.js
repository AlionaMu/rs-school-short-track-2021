/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const len1 = matrix.length;
  const arr = [];

  const len2 = matrix[0].length;
  for (let i = 0; i < len1; i++) {
    arr[i] = [];
    for (let j = 0; j < len2; j++) {
      arr[i][j] = 0;
    }
  }

  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (i - 1 >= 0 && matrix[i - 1][j] === true) {
        arr[i][j] += 1;
      }

      if (j - 1 >= 0 && matrix[i][j - 1] === true) {
        arr[i][j] += 1;
      }
      if (i + 1 < len1 && matrix[i + 1][j] === true) {
        arr[i][j] += 1;
      }
      if (j + 1 <= len2 && matrix[i][j + 1] === true) {
        arr[i][j] += 1;
      }
      if (i + 1 < len1 && j + 1 < len2 && matrix[i + 1][j + 1] === true) {
        arr[i][j] += 1;
      }
      if (i - 1 >= 0 && j - 1 >= 0 && matrix[i - 1][j - 1] === true) {
        arr[i][j] += 1;
      }
      if (i - 1 >= 0 && j + 1 < len1 && matrix[i - 1][j + 1] === true) {
        arr[i][j] += 1;
      }
      if (i + 1 < len1 && j - 1 >= 0 && matrix[i + 1][j - 1] === true) {
        arr[i][j] += 1;
      }
    }
  }
  return arr;
}

module.exports = minesweeper;
