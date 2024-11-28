// setup canvas
const scoreP = document.querySelector('#score');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number
function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color
function randomRGB() {
	return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Shape {
	exists = false;
	constructor(x, y, velX, velY) {
		this.x = x;
		this.y = y;
		this.velX = velX;
		this.velY = velY;
	}
}

class EvilCircle extends Shape {
	color;
	size;
	velX = 20;
	velY = 20;

	constructor(x, y, exists, color = '#fff', size = 10) {
		super(x, y, 20, 20, exists);
		this.color = color;
		this.size = size;
	}
  
	// 绘制一个圆环形状
	draw() {
		ctx.beginPath();
		// 设置绘图的线宽
		ctx.lineWidth = 3;
		// 用于绘制轮廓形状
		ctx.strokeStyle = this.color;
		ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
		ctx.stroke();
	}
  
	// 检查边界，使环不会超出边界
	checkBounds() {
		// 右，环触到右边界时，向左移size大小
		if (this.x >= width) {
			this.x -= this.velX;
		}
		if (this.x <= 0) {
			this.x += this.velX;
		}
		if (this.y >= height) {
			this.y -= this.velY;
		}
		if (this.y <= 0) {
			this.y += this.velY;
		}
	}
  
	// 键盘控制环的移动
	setControls() {
		window.onkeydown = (e) => {
			switch (e.key) {
			case 'a': {
				this.x -= this.velX;
				break;
			}
			case 'd': {
				this.x += this.velX;
				break;
			}
			case 'w': {
				this.y -= this.velY;
				break;
			}
			case 's': {
				this.y += this.velY;
				break;
			}
			}
		};
	}
  
	// 环与小球的碰撞检测
	collisionDetect() {
		for (let i = 0; i < balls.length; i++) {
			if (balls[i].size !== 0) {
				const dx = this.x - balls[i].x;
				const dy = this.y - balls[i].y;
				const distance = Math.sqrt(dx * dx + dy * dy);        
        
				// 碰撞成功，更新小球半径消除小球，更新积分栏
				if (distance <= this.size + balls[i].size) {
					balls[i].size = 0;
					scoreP.textContent = `还剩下${score--}个球`;
				}
			}
		}
	}
}

class Ball extends Shape {
	color = '#FFF';
	size = 0;
	constructor(x, y, velX, velY, color, size, exists = true) {
		super(x, y, velX, velY);
		this.color = color;
		this.size = size;
		this.exists = exists;
	}
  
	draw() {
		// 绘画开始
		ctx.beginPath();
		// 填充颜色
		ctx.fillStyle = this.color;
		// 绘制圆弧 中心坐标(x, y)，圆弧半径，最后两个参数对应圆弧夹角，0-Math.PI 表示180度，此处使用弧度
		ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
		ctx.fill();
	}
  
	// 更新小球位置
	update () {
		// 当小球“碰壁后”反弹，通过设置反向速度使小球按碰壁的反向移动
		if (this.x + this.size >= width) { //右
			this.velX = -this.velX;
		}

		if (this.x - this.size <= 0) { // 左
			this.velX = -this.velX;
		}

		if (this.y + this.size >= height) { // 上
			this.velY = -this.velY;
		}

		if (this.y - this.size <= 0) { //下
			this.velY = -this.velY;
		}

		// 更新小球位置
		this.x += this.velX;
		this.y += this.velY;
	}
  
	// 小球碰撞检测，当两个小球圆心的距离小于两球半径之和时，两球相撞
	// 利用勾股定理求出第三边的长度，与两球半径之和进行对比
	collisionDetect() {
		for (let i = 0; i < balls.length; i++) {
			if (this !== balls[i]) {
				// 计算两球水平和垂直方向的距离
				const dx = this.x - balls[i].x;
				const dy = this.y - balls[i].y;
				const distance = Math.sqrt(dx * dx + dy * dy);

				if (distance <= this.size + balls[i].size) {
					balls[i].color = this.color;
				}
			}
		}
	}
}

let balls = [];

while (balls.length < 25) {
	let size = random(10, 20);
	let ball = new Ball(
		// 为避免绘制错误，球至少离画布边缘一个半径的距离，因为(x,y)指定是圆心位置
		random(0 + size, width - size),
		random(0 + size, height - size),
		random(-7, 7),
		random(-7, 7),
		// 速度范围越大，运动速度越快
		// random(-20, 20),
		// random(-20, 20),
		randomRGB(),
		size,
	);
	balls.push(ball);
}

let score = balls.length;
scoreP.textContent = `还剩下${score}个球`;


// 运动循环，绘制底板区域，并在区域内绘制小球
function loop() {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
	// ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
	ctx.fillRect(0, 0, width, height);

	for (let i = 0; i < balls.length; i++) {
		if (balls[i].size !== 0) {
			balls[i].draw();
			balls[i].update();
			balls[i].collisionDetect();      
		}
	}

	e.draw();
	e.checkBounds();
	e.collisionDetect();
  
	requestAnimationFrame(loop);
}

// 绘制“恶魔圈”
// 无需循环
const e = new EvilCircle(20, 20, true);
e.setControls();

loop();