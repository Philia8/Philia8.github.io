// /**
//  * @param {string} s
//  * @return {string}
//  */
// var reverseWords = function(s) {
// 	// 1. 截取字符串中的所有单词
// 	// 2. 遍历数组将单词顺序翻转，采用双指针
    
// 	// 截取单词
// 	let i = 0,
// 		words = [];
// 	while(i < s.length) {
// 		let start = i;
// 		// 判断每个字符是否为小写字母
// 		while (isLetter(s.substring(i, i + 1)) || isNumber(s.substring(i, i + 1))) {
// 			i++;
// 		}
// 		// 遇到空格后记录当前单词
// 		if (start !== i) words.push(s.substring(start, i));
// 		i++;
// 	}

// 	// 翻转数组
// 	let left = 0,
// 		right = words.length - 1;
// 	while(left < right) {
// 		const temp = words[left];
// 		words[left] = words[right];
// 		words[right] = temp;
// 		left ++;
// 		right --;
// 	}
// 	return words.join(' ');
// };

// var isLetter = (ch) => {
// 	const chCode = ch.charCodeAt();
// 	return chCode >= 'a'.charCodeAt() && chCode <= 'z'.charCodeAt()
//     || chCode >= 'A'.charCodeAt() && chCode <= 'Z'.charCodeAt();
// };

// var isNumber = (ch) => {
// 	const chCode = ch.charCodeAt();
// 	return chCode >= '0'.charCodeAt() && chCode <= '9'.charCodeAt();
// };

// const s = '  Bob  7878  Loves  Alice   ';
// console.log(reverseWords(s));

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
	// 截取单词
	let i = 0,
		words = [];
	while (i < s.length) {
		let start = i;
		// 判断每个字符是否为小写字母
		while (i < s.length && s.substring(i, i + 1) !== ' ') {
			i++;
		}
		// 遇到空格后记录当前单词
		if (start !== i) words.push(s.substring(start, i));
		i++;
	}
	// 翻转数组
	let res = [];
	while (words.length) {
		res.push(words.pop());
	} 
	return res.join(' ');
};

// const s = '  Bob  7878  Loves  Alice   ';
const s = 'the sky is blue';
console.log(reverseWords(s));