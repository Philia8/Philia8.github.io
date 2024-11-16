/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
	// 双指针截取子串进行翻转
	let left = 0,
		right = 2 * k,
		res = '';
	// 当前字符串长度 < 2 * k
	// if (s.length < k) {
	// 	return reverse(s);
	// } else if (s.length > k && s.length < 2 * k) {
	// 	return reverse(s.substring(0, k)) + s.substring(k, s.length);
	// }
  
	while(left < s.length) {
		const ins = right - left + 1;
		if(ins < k) {
			res += reverse(s.substring(left, right));
		} else {
			res += reverse(s.substring(left, left + k)) + s.substring(left + k, right);
		}
		left += 2 * k;
		right = right + 2 * k <= s.length ? right + 2 * k : s.length;
	}
	return res;
};

var reverse = function(s) {
	let left = 0,
		right = s.length - 1,
		arr = s.split('');
	while(left < right) {
		let temp = arr[left];
		arr[left] = arr[right];
		arr[right] = temp;
		left++;
		right--;
	}
	return arr.join('');
};

const str = 'abcdefg';
const k = 8;
// const str = 'abcd';
// const k = 2;
console.log(reverseStr(str, k));
