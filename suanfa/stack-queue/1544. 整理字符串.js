/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
	let stk = [];
	for(let i = 0;i < s.length;i ++) {
		if(!stk.length) {
			stk.push(s[i]);
			continue;
		}
		while (/[A-Z]/.test(s[i]) && stk[stk.length - 1].charCodeAt() === s[i].charCodeAt() + 32
      || /[a-z]/.test(s[i]) && stk[stk.length - 1].charCodeAt() === s[i].charCodeAt() - 32) {
      
			stk.pop();
			i++;
			if (!stk.length || i >= s.length) break;
		}
		stk.push(s[i]);
	}
	return stk.join('');
};

// const s = 'leEeetcodDde';
// const s = 'abBAcC';
const s = 'XxDFOBKRrkbofdXxeEijJIcCsBikPgfxXFGpKIbSemGivrqqQQRVIgMEPBWpPwbpSCWqWQqwQwcsQqasLwGWlSAQq';
console.log(makeGood(s));
