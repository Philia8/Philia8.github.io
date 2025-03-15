/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let res = 0;
  for (let i = num1.length - 1; i >= 0; i--) {
    let n = Number(num1.charAt(i));
    console.log('个位数 = ' + n);
    
    if (!n) continue;
    let sum = 0;
    for (let j = num2.length - 1; j >= 0; j++) {
      let m = Number(num2.charAt(j)) * Math.pow(10, j);
      sum += n * m;
    }
    res += sum * Math.pow(10, i);
  }
  return `${res}`;
};

const num1 = "123", num2 = "456";
console.log(multiply(num1, num2));
