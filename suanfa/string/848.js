/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
// var shiftingLetters = function (s, shifts) {

//   for (let i = 0; i < shifts.length; i++) {
//     let str = s.substring(0, i + 1);
//     s = shift(str, shifts[i]) + s.substring(i + 1);
//   }

//   return s;

//   function shift(s, count) {
//     let str = s.split('');
//     let z_code = 'z'.charCodeAt();
//     let a_code = 'a'.charCodeAt();
//     for (let i = 0; i < str.length; i++) {
//       let ch_code = str[i].charCodeAt();
//       let code = ch_code + count < z_code ?
//         ch_code + count :
//         ch_code + count - z_code + a_code;
//       str[i] = String.fromCharCode(code);
//     }
//     return str.join('');
//   }
// };


/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  // 后缀和处理，计算每个字符需要移位的总次数，一次遍历转换
  if (!shifts.length) return '';

  let str = s.split('');
  const z_code = 'z'.charCodeAt();
  const a_code = 'a'.charCodeAt();
  const len = s.length;
  let counter = 0;
  for (let i = len - 1; i >= 0; i--) {
    counter = (counter + shifts[i]) % 26;
    const ch_code = str[i].charCodeAt();
    const code = (ch_code - a_code + counter) % 26 + a_code;
    str[i] = String.fromCharCode(code);
  }
  return str.join('');
};
// const s = "abc", shifts = [3, 5, 9];
// const s = "bad", shifts = [10, 20, 30];
// const s = 'abc', shifts = [26, 26, 26];
const s = 'z', shifts = [52];
console.log(shiftingLetters(s, shifts));
