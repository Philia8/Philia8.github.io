/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
	let hash = new Map();
	let res = [];
	for(let i = 0;i < nums.length;i++) {
		if(hash.has(nums[i])) {
			hash.set(nums[i], hash.get(nums[i]) + 1);
		} else {
			hash.set(nums[i], 1);
		}
	}
	console.log(hash);
    
    
	const num_arr = Array.from(hash.entries());
	num_arr.sort((a, b) => b[1] - a[1]);
	console.log();
    
	while(k --) {
		res.push(num_arr[k][0]);
	}

	return res;
};

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
console.log(topKFrequent(nums, k));
