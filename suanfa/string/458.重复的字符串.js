/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
	// 判断一个字符串是否可以由他的子串多次匹配
	let s_arr = Array.from(s);
	// 取出所有子串
	// 子串(前缀串)长度必然小于等于主串的一半
	let substr = [];
	for(let j = 1;j < Math.floor(s_arr.length / 2) + 1;j ++){
		substr.push(s.substring(0, j));
	}
	let i = 0;
	// 遍历子串数组，与主串进行逐一对比
	while (i < substr.length) {
		let temp = s;
		// 子串长度与主串长度取余大于零则无法重复构成主串
		if (0 !== Math.floor(temp.length % substr[i].length)) {
			i++;
			continue;
		}
		// 对比次数
		let k = Math.floor(temp.length / substr[i].length);
		while(k-- > 0) {
			let re = true;
			let p = 0;
			while (p < substr[i].length) {
        
				if(substr[i].substring(p, p + 1) !== temp.substring(p, p + 1)) {
					re = false;
					break;
				} else {
					p++;
				}
			}
			if (!re) break;
			temp = temp.substring(p);
		}

		if (-1 === k) return true;
		i++;
	}
	return false;
};

const s = 'abavabav';
console.log(repeatedSubstringPattern(s));