/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
  // 暴力 双重循环判断是否为坏数对，时间复杂度为O(n^2)，超时
  // 优化：线性收集nums[i] - i与出现次数的键值对，判断nums[j] - j === nums[i] - i的情况，从总对数中减去

  let n = nums.length;
  let res = n * (n - 1) / 2;
  let hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    const ins = nums[i] - i;
    const count = hash.get(ins) ?? 0;
    res -= count;
    hash.set(ins, count + 1);
  }
  return res;
};


const nums = [4, 1, 3, 3];
console.log(countBadPairs(nums));
