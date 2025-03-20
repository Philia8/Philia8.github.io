// /**
//  * @param {number} target
//  * @param {number[]} nums
//  * @return {number}
//  */
// var minSubArrayLen = function (target, nums) {
//   // 回溯

//   let minLen = Infinity;
//   let curLen = 0;
//   let sum = 0;

//   const backtracking = (start, sum, curLen) => {
//     if (sum >= target) {
//       minLen = Math.min(minLen, curLen);
//       return;
//     }

//     for (let i = start; i < nums.length; i++) {
//       curLen++;
//       sum += nums[i];
//       backtracking(i + 1, sum, curLen);
//       sum -= nums[i];
//       curLen--;
//     }
//   };
//   backtracking(0, sum, curLen);
//   return minLen;
// };

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// var minSubArrayLen = function (target, nums) {
//   var numsLen = nums.length, sum = 0, subLen = 0, start = 0, result = 0;
//   // 滑动窗口实现子序列遍历
//   for (var end = 0; end < numsLen; end++) { // 终止位置遍历整个数组
//     sum += nums[end]; // 当前子序列的长度
//     while (sum >= target) { //起始位置可以持续移动，以达到最小窗口的目标
//       subLen = end - start + 1; // 子序列长度
//       result = result == 0 || subLen < result ? subLen : result;
//       sum -= nums[start++];
//       // 起始位置的遍历范围是[start, end]，找出子序列中满足条件的起止位置，start向后移动时，需要从sum中减去nums[start]数据
//     }
//   }
//   return result;
// };
var minSubArrayLen = function (target, nums) {
  // 滑动窗口
  let res = 0;
  let sum = 0;
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= target) {
      const curLen = i - start + 1;
      res = res === 0 || curLen < res ? curLen : res;
      // 窗口从前面缩小
      sum -= nums[start++];
    }
  }
  return res;
};


// const target = 100, nums = [2, 3, 1, 2, 4, 3];
const target = 213;
const nums = [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12];
console.log(minSubArrayLen(target, nums));