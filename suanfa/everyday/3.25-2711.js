/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var differenceOfDistinctValues = function (grid) {
  // 要求输出一个矩阵，矩阵中每项对应原矩阵中左上对角线与右下对角线中不同值的绝对值
  // 模拟：对每一个元素的左上和右下对角线进行模拟和元素收集，set记录不同数值的数量
  let m = grid.length;
  let n = grid[0].length;
  let res = new Array(m).fill(0).map(() => new Array(n).fill(0));
  let setLeft = new Set();
  let setRight = new Set();

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) { // 矩阵元素遍历
      //分别计算左上角、右下角的不同元素数量
      let k = i - 1, h = j - 1;
      while (k >= 0 && h >= 0) { // 左上角
        setLeft.add(grid[k][h]);
        k--;
        h--;
      }
      k = i + 1;
      h = j + 1;
      while (k < m && h < n) { // 右上角
        setRight.add(grid[k][h]);
        k++;
        h++;
      }
      res[i][j] = Math.abs(setLeft.size - setRight.size);
      setLeft.clear();
      setRight.clear();
    }
  }
  return res;
};

// const grid = [[1, 2, 3], [3, 1, 5], [3, 2, 1]];
const grid = [[1, 2, 3], [3, 1, 5], [3, 2, 1], [3, 5, 6]];
console.log(differenceOfDistinctValues(grid));
