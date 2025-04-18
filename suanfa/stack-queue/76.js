// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {string}
//  */
// var minWindow = function (s, t) {
//   if (s.length < t.length) return '';
//   let hash_t = new Map();
//   // 获取t字符串中字符对应的哈希表
//   for (let ch of t) {
//     hash_t.set(ch, (hash_t.get(ch) || 0) + 1);
//   }

//   let left = 0;
//   let right = 0;
//   let hash_s = new Map();
//   let res = '';
//   let minLen = Infinity;
//   while (right < t.length) {
//     if (hash_t.has(s[right])) hash_s.set(s[right], (hash_s.get(s[right]) || 0) + 1);
//     right++;
//   }
//   while (right < s.length) {
//     const curr = s[right];
//     if (!hash_t.has(curr)) right++;
//     else {
//       hash_s.set(curr, (hash_s.get(curr) || 0) + 1);
//       right++;
//       // 满足包含条件，更新窗口左边界
//       while (isContained(hash_s, hash_t) && left < right) {
//         let ch = s[left];
//         if (!hash_t.has(ch)) left++;
//         else if (hash_s.get(ch) > hash_t.get(ch)) {
//           hash_s.set(ch, hash_s.get(ch) - 1);
//           if (!hash_s.get(ch)) hash_s.delete(ch);
//           left++;
//         } else break;
//         if (right - left + 1 < minLen) {
//           res = s.substring(left, right + 1);
//           minLen = right - left + 1;
//         }
//       }
//     }
//   }
//   // return s.substring(left, right + 1);
//   return res;
// };

// /**
//   判断hash_s中是否在字符种类和个数上均包含hash_t
//  */
// function isContained(h1, h2) {
//   if (h1.size !== h2.size) return false;
//   const keys = h1.keys();
//   for (let k of keys) {
//     if (!h2.has(k) || h1.get(k) < h2.get(k)) return false;
//   }
//   return true;
// }

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) return '';

  // 获取t字符串中字符对应的哈希表
  let hash_t = new Map();
  for (let ch of t) {
    hash_t.set(ch, (hash_t.get(ch) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let hash_s = new Map();
  let minLen = Infinity;
  let minStart = -1;
  let requiredChars = hash_t.size; // 需要匹配的字符种类数
  let formedChars = 0; // 已匹配的字符种类数

  while (right < s.length) {
    const curr = s[right];
    if (hash_t.has(curr)) {
      hash_s.set(curr, (hash_s.get(curr) || 0) + 1);
      if (hash_s.get(curr) === hash_t.get(curr)) {
        formedChars++;
      }
    }

    // 当窗口包含所有t的字符时，尝试收缩窗口
    while (formedChars === requiredChars) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        minStart = left;
      }

      const leftChar = s[left];
      if (hash_t.has(leftChar)) {
        hash_s.set(leftChar, hash_s.get(leftChar) - 1);
        if (hash_s.get(leftChar) < hash_t.get(leftChar)) {
          formedChars--;
        }
      }
      left++;
    }

    right++;
  }

  return minStart === -1 ? "" : s.substring(minStart, minStart + minLen);
};

// const s = "ADOBECODEBANC", t = "ABC";
const s = 'a', t = 'a';
console.log(minWindow(s, t));
