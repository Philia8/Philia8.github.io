/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
	let ease_s = easeString(s),
		ease_t = easeString(t);
	console.log(ease_s);
	console.log(ease_t);
  
  
	let i = 0;
	while (i < ease_s.length || i < t.length) {
		if (ease_s[i] !== ease_t[i]) return false;
		i++;
	}
	return true;
};

function easeString(s) {
	let stack = [];
	let i = 0;
	while(i < s.length) {
		if(s[i] !== '#') stack.push(s[i]);
		else stack.pop();
		i++;
	}
	return stack.join('');
}

const s = 'aaa###a',
	t = 'aaaa###a';
console.log(backspaceCompare(s, t));

