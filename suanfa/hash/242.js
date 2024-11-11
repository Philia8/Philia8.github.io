/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	if(s.length != t.length) return false;
	//哈希表
	var count = new Array(26).fill(0),
		base = 'a'.charCodeAt();
	for(var char of s){
		var curr = char.charCodeAt();
		count[curr - base] ++;
	}

	for(var char of t){
		var curr = char.charCodeAt();
		count[curr - base] --;
	}

	for(var i = 0;i < 26;i ++){
		if(count[i] !== 0) return false;
	}
	return true;
};

var s = 'aacc',
	t = 'accc';
var isEqual = isAnagram(s, t);
console.log(isEqual);
