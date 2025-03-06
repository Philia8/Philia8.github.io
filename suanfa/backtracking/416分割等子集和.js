/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  // 回溯
  if (nums.length <= 1) return false;
  let sum = 0;
  for (let num of nums) sum += num;

  const back = (sum1, sum2, start) => {
    if (sum1 === sum2) return true;

    for (let i = start; i < nums.length; i++) {
      sum1 += nums[i];
      sum2 -= nums[i];
      const res = back(sum1, sum2, i + 1);
      if (res) return true;
      sum2 += nums[i];
      sum1 -= nums[i];
    }
    return false;
  };
  return back(0, sum, 0);
};

// const nums = [1, 5, 11, 5];
const nums = [98, 11, 68, 50, 69, 12, 96, 2, 3, 39, 35, 17, 44, 60, 91, 1, 19, 10, 83, 86, 15, 90, 23, 42, 71, 94, 27, 1, 72, 46, 8, 40, 20, 37, 66, 93, 71, 17, 73, 95, 20, 1, 32, 99, 81, 87, 22, 88, 63, 80, 46, 27, 23, 81, 25, 77, 64, 32, 99, 93, 48, 64, 2, 48, 55, 27, 51, 16, 31, 33, 75, 97, 28, 33, 81, 63, 39, 69, 66, 89, 29, 86, 37, 98, 64, 86, 54, 34, 43, 82, 12, 46, 53, 76, 53, 37, 14, 94, 87, 77];
console.log(canPartition(nums));
console.log('aaa');
