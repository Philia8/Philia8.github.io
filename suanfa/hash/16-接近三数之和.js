/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // 找出所有的三元组，计算和，同时计算和与target的差值，找出最小差值对应的和返回
  nums.sort((a, b) => a - b);
  let min = Number.MAX_VALUE;
  let res = 0;

  // 记录所有三元组的和
  for (let i = 0; i < nums.length; i++) {
    // if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      
      if (sum === target) return target;
      if (Math.abs(sum - target) < min) {
        res = sum;
        min = Math.abs(sum - target);
      }
      // 更新指针
      if (sum > target) {
        while (left < right && nums[right] === nums[right - 1]) right--;
        right--;
      } else {
        while (left < right && nums[left] === nums[left + 1]) left++;
        left++;
      }
    }
  }
  return res;
};

function help(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        console.log(nums[i], nums[j], nums[k], nums[i] + nums[j] + nums[k]);

      }
    }
  }
}
const nums = [-1, 2, 1, -4], target = 1; // 2
// const nums = [-1, 2, 1, -4, 3], target = 1; // 1
console.log(threeSumClosest(nums, target));
// help(nums);
