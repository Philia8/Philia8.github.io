/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  // dp二维数组中记录整个杨辉三角，如果只需要其中的一行，可以使用滚动数组，只记录最后一行的状态
  let dp = [1];
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j >= 0; j--) {
      if (j === 0 || j === i) dp[j] = 1;
      else {
        dp[j] += dp[j - 1];
      }
    }
  }
  return dp;
};

let rowIndex = 5;
console.log(getRow(rowIndex));
