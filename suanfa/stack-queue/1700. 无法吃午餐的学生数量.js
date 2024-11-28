/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
	// 注意sandwiches[0]表示为栈顶
	let counter = students.length;
	while(sandwiches.length) { // 栈顶和队首匹配
		if(sandwiches[0] === students[0]) {
			sandwiches.shift();
			students.shift();
			counter = students.length;
		} else {
			if (!counter) break;
			// 队首学生出队后再入队
			students.push(students.shift());
			counter --;
		}
	}
	return sandwiches.length;
};

const students = [1, 1, 0, 0], sandwiches = [0, 1, 0, 1];
console.log(countStudents(students, sandwiches));
