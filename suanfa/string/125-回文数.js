/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // 获取字母字符串，转为小写，通过对比unicode码
  // 判断回文串：双指针从前后出发对比
  let lowerStr = s.toLowerCase(s);
  // let reg = /[0-9][a-z][A-Z]+/;
  // let new_str = s.matchAll().join('');
  let new_str = '';
  for (let i = 0; i < lowerStr.length; i++) {
    const ch = lowerStr.charCodeAt(i);
    if (ch <= 'z' && ch >= 'a' || ch <= '9' && ch >= '0') new_str += ch;
  }
  console.log();
  
  let left = 0;
  let right = new_str.length - 1;
  while (left <= right) {
    if (new_str[left] !== new_str[right]) return false;
  }
  return true;
};

const s = "race a car";
console.log(isPalindrome(s));
