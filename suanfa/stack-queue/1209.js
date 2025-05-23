/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  // 栈结构存储已扫描字符，当前元素与栈顶元素一致时count更新，当count === k 时元素出栈
  let stk = [];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    // 栈为空，直接入栈
    if (!stk.length) {
      stk.push(s[i]);
      count = 1;
    } else {
      // 栈顶元素与当前元素相同
      if (stk[stk.length - 1] === s[i]) {
        if (count < k - 1) { // 相同字符个数小于k
          stk.push(s[i]);
          count = 0;
          let j = stk.length - 1;
          while (j >= 0 && s[i] === stk[j--]) count++;
          if (count === k) {
            while (count--) stk.pop();
            count = 0;
          }
        } else { // 删除k-1个字符
          while (count--) stk.pop();
          count = 0;
        }
      } else { // 不同字符直接入栈，更新计数器
        count = 1;
        stk.push(s[i]);
      }
    }
  }
  return stk.join('');
};

const s = "deeedbbcccbdaa", k = 3;
console.log(removeDuplicates(s,k));
