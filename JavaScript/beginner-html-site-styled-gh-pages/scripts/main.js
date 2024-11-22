/**
 * 修改指定标签中的内容
 */
// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!';

/**
 * 设计：点击图片区域切换图片内容
 */
let image = document.querySelector('img');
image.onclick = () => {
	console.log('click');
  
	const src = image.getAttribute('src') === 'images/firefox-icon.png' ?
		'images/vae.jpg' :
		'images/firefox-icon.png';
	image.setAttribute('src', src);
};

/**
 * 网页中添加欢迎信息，并存储在浏览器中，用户再次打开时显示
 */
const myHeading = document.querySelector('h1'),
	button = document.querySelector('button');

function setUserName() {
	const myName = prompt('Please enter your name.');
	// 输入值判空
	if (!myName) {
		setUserName();  
	} else {
		// 存储在浏览器本地
		localStorage.setItem('name', myName);
		myHeading.textContent = `Mozilla is cool, ${myName}`;  
	}
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	const storedName = localStorage.getItem('name');
	myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

button.onclick = () => {
	setUserName();
};