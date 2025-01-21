/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
	let res = [];
	let path = [];
	const strLen = s.length;

	// 判断回文串
	const help = (left, right) => {
		while(left <= right) {
			if(s[left++] !== s[right--]) return false;
		}
		return true;
	};

	// 遍历字符串子串
	const back = (start) => {
		if (start >= strLen) {
			res.push([...path]);
			// res.push(path.slice());
			return;
		}
    
		for(let i = start;i < strLen;i ++) {
			// path中存放回文串，先判断当前子串是否为回文串
			if (help(start, i)) {
				path.push(s.substring(start, i + 1));
			} else continue;
			back(i + 1);
			path.pop();
		}
	};

	back(0);
	return res;
};

const s = 'abbccbba';
console.log(partition(s));
