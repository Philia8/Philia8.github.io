var isHappy = function(n) {
	// 1. 取数
	// 2. 使用set判断终止循环的条件

	var set = new Set(),
		sum = 0,
		nums = [];
    
	while (n != 1) {
		nums = [];
		sum = 0;
		// 取出每位的数
		while(n >= 1) {
			nums.push(Math.floor(n % 10));
			n /= 10;
		}
		// 计算平方和
		for (var m of nums) {
			sum += m * m;
		}
		if (set.has(sum)) return false;
		set.add(sum);
		n = sum;
	}
	return true;
};

var num = 32;
var res = isHappy(num);
console.log(res);
