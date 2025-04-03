/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  // 元音字母字典，双指针首尾遍历
  let strArr = s.split('');
  let dic = new Set(['a', 'e', 'i', 'o', 'u']);
  let left = 0;
  let right = strArr.length - 1;
  while (left < right) {
    while (left < right && !dic.has(strArr[left].toLowerCase())) left++;
    while (left < right && !dic.has(strArr[right].toLowerCase())) right--;
    const temp = strArr[left];
    strArr[left] = strArr[right];
    strArr[right] = temp;
    left++;
    right--;
  }
  return strArr.join('');
};

const s = "IceCreAm";
console.log(reverseVowels(s));
