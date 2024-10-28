function prefixSum() {
	const readline = require('readline');
    
	const rl = readline.creatInterface({
		input: process.stdin,
		output: process.stdout
	});
    
	let inputLines = [];
	rl.on('line', (line) => {
		inputLines.push(line.trim());
	});
    
	// 输入完成后开始运算
	rl.close('line', () => {
		// 1.读取项数
		const length = parseInt(inputLines[0]);
		// 2.构造前缀和数组
		let prefixArr = [];
		prefixArr[0] = parseInt(inputLines[1]);
		for(let i = 1;i < length;i ++){
			prefixArr[i] = prefixArr[i - 1] + parseInt(inputLines[i + 1]);
		}
        
		//3.输出
		for(let j = i;j < inputLines.length;j ++){
			const d = inputLines[j].split(' ');
			const left = d[0],
				right = d[1];
			if(right < length){ // 正确数据范围内的输入有效
				if(left === 0) {
					console.log(prefixArr[right]);
				} else {
					console.log(prefixArr[right] - prefixArr[left - 1]);
				}
			}
		}
	});
}

prefixSum();