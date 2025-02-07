// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function (nums) {
//   // 1. 回溯
//   let len = nums.length;
//   let sum = 0;
//   let max = sum;

//   const backtracking = (start, sum) => {
//     // 终止条件
//     max = sum > max ? sum : max;

//     // 单层遍历
//     for (let i = 0; i < len; i++) {
//       sum += nums[i];
//       backtracking(i + 1, sum);
//       sum -= nums[i];
//     }
//   };
//   backtracking(0, sum);
//   return max;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 3. 暴力
  let len = nums.length;
  let max = nums[0];
  for (let i = 0; i < len; i++) {
    let sum = 0;
    let str = '';
    for (let j = i; j < len; j++) {
      str = `${str} + ${nums[j]}`;
      sum += nums[j];
    }
    console.log(`${str} = ${sum}`);

    max = sum > max ? sum : max;
  }

  return max;
};

const a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

maxSubArray(a);