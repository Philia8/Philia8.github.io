/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 去重：数组升序
  // 判断和：双重循环，外层循环控制nums[i]，内层循环使用双指针遍历剩余数组项，对应nums[j]和nums[k]

  nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    // nums[i]去重
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) right--;
      else if (sum < 0) left++;
      else {
        res.push([nums[i], nums[left], nums[right]]);
        // 去重
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return res;
};
// const nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4];
// const nums = [0, 0, 0, 0];
// const nums = [-1, 0, 1, 2, -1, -4];
const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
