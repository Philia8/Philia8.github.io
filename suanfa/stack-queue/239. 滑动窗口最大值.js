/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
	// 暴力双重循环
	let res = [];
	for(let i = 0;i < nums.length - k + 1;i ++) {
		let j = k,
			m = i,
			max = nums[i];
		while(j --) {
			if(nums[m] > max) max = nums[m];
			m ++;
		}
		res.push(max);
	}
	return res;
};

const nums = [1,3,-1,-3,5,3,6,7], k = 3;
console.log(maxSlidingWindow(nums, k));