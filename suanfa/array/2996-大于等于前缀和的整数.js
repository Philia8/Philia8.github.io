/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
  // 找出顺序前缀并维护前缀和
  let sum = nums[0];
  let preEnd = 0;
  let i = 1;
  while (i < nums.length && nums[i] === nums[preEnd] + 1) {
    sum += nums[i];
    preEnd++;
    i++;
  }

  nums.sort((a, b) => a - b);
  let left = 0, right = nums.length - 1;
  let target = sum;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      target = nums[mid] + 1;
      // 更新目标值target，再剩余部分继续找大于等于target的值，直到遍历完
      left = mid;
      right = nums.length - 1;
    } else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  // 如果在数组中未找到大于等于前缀和的数，返回前缀和，否则返回目标值
  if (target === sum) return sum;
  return target;
};

const nums = [1, 2, 3, 2, 5];
// const nums = [3, 4, 5, 1, 12, 14, 13];
console.log(missingInteger(nums));
