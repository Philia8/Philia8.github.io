/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
	// 使用栈结构存储已遍历的字符，对比栈顶元素与当前字符是否一致
	let stack = [];
	let i = 0;
	while(i < s.length) {
		if(!stack.length) {
			stack.push(s[i]);
			i++;
			continue;
		}

		let top = stack[stack.length - 1];
		if(top === s[i]) {
			stack.pop();
		} else {
			stack.push(s[i]);
		}
		i ++;
	}
	return stack.join('');
};

const s = 'abbaca';
console.log(removeDuplicates(s));
