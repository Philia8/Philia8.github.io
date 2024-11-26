/**
 * 1. 实现图片点击切换功能：点击的图片显示为大图，并遵循明暗设置
 * 2. 实现明暗切换功能：点击按钮切换图片明暗效果
 */
const displayedImage = document.querySelector('.displayed-img'); //大图
const thumbBar = document.querySelector('.thumb-bar'); //小图

const btn = document.querySelector('button');
// 使用空的div设置半透明背景达到明暗切换的效果
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [
	'pic1.jpg',
	'pic2.jpg',
	'pic3.jpg',
	'pic4.jpg',
	'pic5.jpg'
];
/* Declaring the alternative text for each image file */

/* Looping through images */
// 大图明暗切换
for (let img of images) {
	let src = './images/' + img;
	const newImage = document.createElement('img');
	newImage.src = src;
	newImage.alt = img;
	thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
let isDarken = false;

btn.addEventListener('click', (e) => {
	isDarken = !isDarken;
	e.target.textContent = isDarken ? 'Darken' : 'Lighten';
	overlay.style.backgroundColor = isDarken ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0,0,0,0)';
});

// 大图内容切换
thumbBar.addEventListener('click', (e) => {
	displayedImage.src = e.target.src;
});