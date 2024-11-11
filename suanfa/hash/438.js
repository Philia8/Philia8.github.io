/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
	if(s.length < p.length) return [];
	// 找出字符串中所有p串的字母异位词
	var result = [],
		s_len = s.length,
		p_len = p.length;
	for(var i = 0;i < s_len - p_len;i ++) {
		var count = new Array(26).fill(0);
		// 初始化哈希表
		for(var ch of p) {
			count[ch.charCodeAt() - 'a'.charCodeAt()]++;
		}
		var subStr = s.substring(i, i + p_len);
		for(var c of subStr) {
			count[c.charCodeAt() - 'a'.charCodeAt()]--;
		}
    
		var isAnagram = true;
		// 判断哈希表中的值都为零说明互为字母异位词
		for(var k = 0;k < 26;k ++){
			if(count[k] !== 0){
				isAnagram = false;
				break;
			}
		}
		if(isAnagram) result.push(i);
	}
	return result;
};

var s = '', p = 'abc';
var res = findAnagrams(s, p);
console.log(res);
