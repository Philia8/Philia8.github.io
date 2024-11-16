var fn = function(s) {
	// 题目描述：将给定字符串中的所有数字转换成'number'子串
	// eg: 'a1b3n42' -> 'anumberbnumbernnumbernumer'

	// 思路：识别子串中的数字字符，转换成'number'后拼接子串
	let arr = s.split('');
	for (let i = 0; i < arr.length; i++) {
		if (isNumber(arr[i])) arr[i] = 'number';
	}
	return arr.join('');

};

var isNumber = function (ch) {
	return ch.charCodeAt() - '0'.charCodeAt() <= 10; 
};

const s = 'a1b2c3';
console.log(
	fn(s)
);
