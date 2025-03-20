/**
 * 01背包问题：给定n个物品的重量weight和价值value，求出背包能承受重量bagWeight内的最大价值和
 * @param {Array} weight 重量
 * @param {Array} value 物品价值
 * @return {Number} 最大价值
 */
function dp(bagWeight, weight, value) {
  const n = weight.length;
  let dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  // for (let i = 0; i < n; i++) dp[i][0] = 0; // 背包容量为0时，价值为0
  for (let i = 0; i <= bagWeight; i++) { // 判断物品0的状态，当且仅当容量>=weight[i]时，价值增加为物品0对应的价值
    if (weight[0] <= i) dp[0][i] = value[0];
  }

  for (let i = 1; i < n; i++) { // 遍历物品
    for (let j = 1; j <= bagWeight; j++) { // 遍历背包现有容量
      if (weight[i] > j) dp[i][j] = dp[i - 1][j]; // 当前物品重量大于背包剩余容量，则对应的最大价值与上一个物品的最终状态一致
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
    }
  }
  return dp[n-1][bagWeight];
}

const weight = [1, 3, 4];
const value = [15, 20, 30];
const bagWeight = 4;
console.log(dp(bagWeight,weight, value)); // 35

/**
 * 一维数组（滚动数组）解决01背包问题
 * @param {Number} bagWeight 背包最大容量
 * @param {Array} weight 物品的重量数组
 * @param {Array} value 物品的价值数组
 */
function fn(bagWeight, weight, value) {
  // 滚动数组dp[j]表示j容量下，对应的背包最大价值
  let n = weight.length;
  let dp = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = bagWeight; j >= weight[i]; j--) {
      dp[j] = Math.max(dp[j - 1], dp[j - weight[i]] + value[i]);
    }
  }
  return dp[bagWeight];
}
fn(bagWeight, weight, value);