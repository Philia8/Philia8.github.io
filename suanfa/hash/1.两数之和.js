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

var nums = [3, 3];
console.log(twoSum(nums, 6));
