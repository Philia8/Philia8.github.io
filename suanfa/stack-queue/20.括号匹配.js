/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	// 使用栈结构，左括号逐一入栈，遇到右括号时与栈顶对比
	let leftBracket = new Map();
	leftBracket.set('(', ')');
	leftBracket.set('[', ']');
	leftBracket.set('{', '}');
	let i = 0;
	let stack = [];
	while(i < s.length) {
		// 左括号直接入栈
		if(leftBracket.has(s[i])) {
			stack.push(s[i]);
		} else {
			if (!stack.length) return false;
			const top = stack[stack.length - 1];
			if(s[i] === leftBracket.get(top)){
				stack.pop();
			} else {
				return false;
			}
		}
		i ++;
	}
	return stack.length === 0;
};

const s = '(){}[]';
console.log(isValid(s));