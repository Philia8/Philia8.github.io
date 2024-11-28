/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {
	// k相当于一个窗口，判断k内每三个元素的交替情况
	let originLen = colors.length;
  
	// 将k个元素添加到数组中，则无需判断环的情况
	let i = 0;
	while(i < k - 1) colors.push(colors[i++]);
	let counter = 0;
	for(i = 0;i < originLen;i ++) {

		let j = i;
		while (j < i + k - 2 && colors[j] === colors[j + 2] && colors[j] !== colors[j + 1]) {
			j++;
		}
    
		if (j === i + k - 2) counter++;
	}
	return counter;
};

// const colors = [0, 1, 0, 1, 0], k = 3;
// const colors = [0, 1, 0, 0, 1, 0, 1], k = 6;
const colors = [1,1,0,1], k = 4;
console.log(numberOfAlternatingGroups(colors, k));
