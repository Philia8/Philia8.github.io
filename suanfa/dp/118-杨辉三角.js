/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let dp = new Array(numRows).fill(0).map((n, idx) => new Array(idx + 1).fill(1));

  for (let i = 2; i < numRows; i++) {
    for (let j = 1; j < i; j++) {
      console.log(dp[i - 1][j]);
      console.log(dp[i - 1][j]);
      
      dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1];
    }
  }
  return dp;
};

const numRows = 5;
let res = generate(numRows);
for (let i = 0; i < numRows; i++) {
  console.log(res[i]);
  
}
