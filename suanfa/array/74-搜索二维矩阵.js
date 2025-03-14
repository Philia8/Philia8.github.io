/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  // 二分查找，先找出小于target的首列数字
  // 再在该行中二分查找

  const m = matrix.length, n = matrix[0].length;
  let left = 0, right = m - 1;
  let row = -1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (matrix[mid][0] === target) return true;
    if (matrix[mid][0] < target) {
      row = mid;
      left = mid + 1;
    } else right = mid - 1;
  }
  if (row === -1) return false;

  left = 0, right = n - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (matrix[row][mid] === target) return true;
    if (matrix[row][mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
};

const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 100;
console.log(searchMatrix(matrix, target));
