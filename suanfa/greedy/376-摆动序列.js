/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  let len = nums.length;
  if (len <= 1) return len;

  let prediff = nums[1] - nums[0];
  let res = prediff === 0 ? 1 : 2; // 开始的两个元素可能相等，此时摆动序列长度为1，否则为2
  for (let i = 1; i < len; i++) {
    const diff = nums[i] - nums[i - 1];
    if (prediff <= 0 && diff > 0 || prediff >= 0 && diff < 0) {
      res++;
      prediff = diff;
    }
  }

  return res;
};