/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
	// 暴力四重循环，时间肯定超出限制
	// 排序 + 双重双指针遍历
	nums.sort((a, b) => a - b);
	// 双指针遍历，控制元组外边界
	let res = [];
	// a、b指针不能同时走，在什么条件下ab指针移动？无法判断，改用双重循环更改外边界
	for (let a = 0; a < nums.length - 3; a++) {
		debugger;
		// 当前数与前一个数相等，跳过
		if (a > 0 && nums[a] === nums[a - 1]) continue;
    
		for (let b = a + 1; b < nums.length - 2; b++) {
			if (b > a + 1 && nums[b] === nums[b - 1]) continue;

			// 双指针控制内边界
			let c = b + 1,
				d = nums.length - 1;
			while(c < d) {
				let sum = nums[a] + nums[b] + nums[c] + nums[d];
				if (sum > target) {
					d--;
				} else if (sum < target) {
					c++;
				} else {
					res.push([nums[a], nums[b], nums[c], nums[d]]);
          
					// 判断当前数与下一个数相同，则跳过当前数
					// 如果判断与上一个是否相同时，已经push了，导致重复
					while(c < d && nums[c] === nums[c + 1]) c ++;
					while(c < d && nums[d] === nums[d - 1]) d --;
					c ++;
					d --;
				}
			} 
		}
	}
	return res;
};
let nums = [1,0,-1,0,-2,2];
// let nums = [2, 2, 2, 2, 2, 2];
// let nums = [-2, -1, -1, 1, 1, 2, 2];
console.log(fourSum(nums, 0));
