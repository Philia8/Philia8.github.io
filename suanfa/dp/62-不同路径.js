/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n);
    dp[i].fill(0);
  }
  dp[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // dp[i][j] = i === 0 || j === 0 ? dp[i - 1][j] || dp[i][j - 1] : dp[i - 1][j] + dp[i][j - 1];
      if (i === 0 || j === 0) dp[i][j] = 1;
      else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
};
// const m = 3, n = 7;
const m = 3, n = 2;
console.log(uniquePaths(m, n));
