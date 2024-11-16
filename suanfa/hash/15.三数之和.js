/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	// 原数组排序
	nums = nums.sort((a, b) => a - b);
	let res = [];
  
	// 双重遍历数组，在第二重循环时使用双指针
	for (let i = 0; i < nums.length; i++){
		// 当前元素与上一个元素相同，跳过
		if(i > 0 && nums[i] === nums[i - 1]) continue;
		// 双指针
		let left = i + 1,
			right = nums.length - 1;
		while (left < right) {
			let sum = nums[left] + nums[right] + nums[i];
			if (sum > 0) {
				right--;
			} else if (sum < 0) {
				left++;
			} else {
				res.push([nums[i], nums[left], nums[right]]);
				// 去重，去除与当前双指针对应相同的值
				while (left < right && nums[left] === nums[left + 1]) left ++;
				while (left < right && nums[right] === nums[right - 1]) right--;
				// 找到left与right的非重复值，进行下一组解的判断
				left++;
				right--;
			}
		}
	}
	return res;
};

const nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4];
// const nums = [0, 0, 0, 0];
console.log(threeSum(nums));
