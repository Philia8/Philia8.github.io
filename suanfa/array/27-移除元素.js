/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums, val) {
//   // 需要原地移除数组中的数，且数组中剩余的前k个为有效值
//   // 双指针首尾遍历数组，将等于val的值放在数组末尾，同时统计非val的元素个数
//   let k = nums.length;
//   let lt = 0;
//   let rt = nums.length - 1;
//   while (val === nums[rt]) {
//     rt--;
//     k--;
//   }
//   while (lt <= rt) {
//     if (val === nums[lt]) {
//       k--;
//       nums[lt++] = nums[rt];
//       nums[rt--] = val;
//       while (val === nums[rt]) {
//         rt--;
//         k--;
//       }
//     } else {
//       lt++;
//     }
//   }
//   return k;
// };


var removeElement = function (nums, val) {
  // 快慢指针同时从起始项出发，
  var left = 0, right = 0;
  for (left; left < nums.length; left++) {
    if (nums[left] !== val) {
      nums[right++] = nums[left];
    }
  }
  return right;
};


// const nums = [3, 2, 2, 3], val = 3;
const nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2;
console.log(removeElement(nums, val));
