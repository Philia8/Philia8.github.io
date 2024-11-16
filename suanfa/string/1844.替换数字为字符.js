/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
	// 设计shhift函数，将数组替换成符合条件的小写字符
	let chars = s.split(''),
		count = 1;
	while(count < chars.length) {
		chars[count] = shift(chars[count - 1], chars[count]);
		count += 2;
	}
	return chars.join('');
};

// 返回ch后的n个字符
var shift = (ch, n) => {
	const ins = n.charCodeAt() - '0'.charCodeAt();
	return String.fromCharCode(ch.charCodeAt() + ins); 
};

const s = 'a1c1e1';
console.log(replaceDigits(s));
