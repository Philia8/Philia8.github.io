/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	// 使用hash表存储已遍历过的数据
	var map = new Map();

	for(var i = 0;i < nums.length;i ++) {
		// target - nums[i] 计算数组项与target的差值
		var ins = target - nums[i];
		if(map.has(ins)) return [map.get(ins), i];
		map.set(nums[i], i);
	}
};

// var nums = [3, 3];
// console.log(twoSum(nums, 6));

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSumSort = function(numbers, target) { // pass 不允许改变原数组顺序
  // 双指针
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let sub = target - numbers[left];
    if (sub === numbers[right]) return [left + 1, right + 1];
    if (sub < numbers[right]) right--;
    else left++;
  }
};

// let nums = [2, 3, 4];
let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSumSort(nums, target));
