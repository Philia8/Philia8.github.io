/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let temp = [];
  let n = matrix.length;
  let top = 0, left = 0, right = n - 1, bottom = n - 1;
  while (top <= bottom && left <= right) {
    temp = [];
    for (let i = bottom; i >= top; i--) temp.push(matrix[i][left]);
    for (let i = left; i <= right; i++) { // 行，从左到右
      temp.push(matrix[top][i]);
      matrix[top][i] = temp.shift();
    }
    top++;
    temp.shift();
    for (let i = top; i <= bottom; i++) { // 列，从上到下
      temp.push(matrix[i][right]);
      matrix[i][right] = temp.shift();
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) { // 行，从右到左
        temp.push(matrix[bottom][i]);
        matrix[bottom][i] = temp.shift();
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) { // 列，从下到上
        temp.push(matrix[i][left]);
        matrix[i][left] = temp.shift();
      }
      left++;
    }
  }
  return;
};


// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
const matrix = [[1, 2],[3, 4]];
rotate(matrix);
console.log(matrix);
