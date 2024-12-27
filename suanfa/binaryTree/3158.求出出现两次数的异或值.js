/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
	let map = new Map();
	for(let n of nums) {
		if(map.has(n)) {
			map.set(n, map.get(n) + 1);
		} else {
			map.set(n, 1);
		}
	}
  
	// 遍历map
	let res = 0;
	let arr = map.entries();
	for (let [key, value] of arr) {
		if (value === 2) {
			res = Number.parseInt(res ^ key);
		}
	}
	return res;
};

let nums = [1, 2, 23, 21];
console.log(duplicateNumbersXOR(nums));
