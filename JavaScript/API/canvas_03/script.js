const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,width,height);

// 移动画布，通过移动画布原点实现，此处将画布原点移动至原画布中心位置
ctx.translate(width / 2, height / 2);

// 角度转换成弧度
function degToRad(deg) {
	return (deg * Math.PI) / 180;
}

// 返回指定范围内的随机数
function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let length = 300;
let moveOffset = 20;

for (let i = 0; i < length; i++) {
	// 使用rgba数值逐渐减小设置色彩渐变效果
	ctx.fillStyle = `rgba(${255 - length}, 0, ${255 - length}, 0.9)`;
	// 开始绘制路径
	ctx.beginPath();
	// 绘制圆
	// ctx.arc(moveOffset, moveOffset, length, 0, 2 * Math.PI);
	// 每次从原点(20, 20)处开始绘制
	ctx.moveTo(moveOffset, moveOffset);
	// 一条边
	ctx.lineTo(moveOffset + length, moveOffset);
	// 计算三角形高度
	const triHeight = (length / 2) * Math.tan(degToRad(60));
	// 另一个顶点位置
	ctx.lineTo(moveOffset + length / 2, moveOffset + triHeight);
	// 回到原点，等边三角形绘制完成
	ctx.lineTo(moveOffset, moveOffset);
	ctx.fill();

	// 三角形边长递减
	length--;
	// 顶点移动
	// moveOffset += 0.7;
	moveOffset = rand(10, 30);
	// 三角形旋转
	ctx.rotate(degToRad(5));
}