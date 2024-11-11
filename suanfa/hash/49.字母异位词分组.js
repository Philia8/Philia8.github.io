/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
	// 将数组中的字符串按照是否为“字母异位词”进行分组
	var hsh = new Object();
	for(var i = 0;i < strs.length;i ++) {
		var count = new Array(26).fill(0);

		for(var ch of strs[i]) {
			var key = ch.charCodeAt() - 'a'.charCodeAt();
			count[key]++;
		}
		var value = hsh[count] ? hsh[count] : [];
		value.push(strs[i]);
		hsh[count] = value;
	}
	return Object.values(hsh);
	// 暴力解法
	// if (strs.length == 0) return [];
	// var map = new Map();
	// for (var i = 0; i < strs.length; i++) {
	// 	// if ('' == strs[i]) continue;
	// 	if (!map.has(strs[i])) map.set(strs[i], [strs[i]]);
	// 	for(var j = i + 1;j < strs.length;j ++){
	// 		var res = isAnagram(strs[i], strs[j]);
	// 		if (res) {
	// 			var value = map.get(strs[i]);
	// 			value.push(strs[j]);
	// 			map.set(strs[i], value);
	// 			strs[j] = '';
	// 		}
	// 	}
	// }
	// return [...map.values()];
};
// 判断两个任意两个字符串是否为字母异位词
var isAnagram = function(str1, str2) {
	var hsh = new Array(26).fill(0);
	var a_code = 'a'.charCodeAt();
	for(var char of str1) {
		var key = char.charCodeAt();
		hsh[key - a_code] ++;
	}

	for(var ch of str2) {
		var ky = ch.charCodeAt();
		hsh[ky - a_code] --;
	}

	for(var i = 0;i < 26;i ++) {
		if(hsh[i] !== 0) return false;
	}
	return true;
};

var strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
var res = groupAnagrams(strs);
console.log(res);
