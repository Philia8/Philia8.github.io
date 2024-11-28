class Professor {
	name = '';
	teaches = '';

	constructor(name, teaches) {
		this.name = name;
		this.teaches = teaches;
	}

	grade() {
		const grade = Math.random() * 100 + 1;
		return grade;
	}

	introduceSelf() {
		console.log(`Hello, My name is ${this.name}, I teach ${this.teaches}`);
    
	}
}

const proLi = new Professor('wangzili', 'English');
console.log(proLi);
