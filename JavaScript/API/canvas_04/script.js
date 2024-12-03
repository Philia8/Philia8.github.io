const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0,0,0)';
ctx.fillRect(0,0,width,height);

// 更新画布原点
ctx.translate(width / 2, height / 2);

const Image = document.createElement('img');
Image.src = 'walk-right.png';
// 图片加载完成后执行绘图函数
Image.onload = draw;

// 精灵图小人序号
let sprite = 0;
// 图片在x轴上的相对偏移量
let posX = 0;

// 绘图函数
// 切片的 X 坐标应为 102 的倍数
// 切片宽高102 * 148
function draw() {
	// 清除画布
	ctx.fillRect(-(width / 2), -(height / 2), width, height);
	// 画布中绘制图片
	// image对象，切片相对于源图片的坐标(x,y)，切片width、height，切片在画布中的坐标(x, y)，切片在画布中的width、height
	ctx.drawImage(Image, sprite * 102, 0, 102, 148, 0 + posX, -74, 102, 148);

	// 精灵图更新
	if (posX % 13 === 0) {
		if (sprite === 5) {
			sprite = 0;
		} else {
			sprite++;
		}
	}
  
	// 判断角色是否走到屏幕边缘
	if (posX > width / 2) {
		let newStartPos = -(width / 2 + 102);
		posX = Math.ceil(newStartPos);
		console.log(posX);
	} else {
		posX += 1;
	}
  
	window.requestAnimationFrame(draw);

}