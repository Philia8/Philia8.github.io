/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
let VOWEL = ['a', 'e', 'i', 'o', 'u'];
var countOfSubstrings = function (word, k) {
  let res = 0;
  let map = new Map();
  let consonant = 0;
  let start = 0;

  // 辅音字母 !VOWEL.inclueds(ch);
  for (let i = 0; i < word.length; i++) {
    const curCh = word.charAt(i);
    if (!VOWEL.includes(curCh)) consonant++;
    else map.set(curCh, (map.get(curCh) || 0) + 1);
    if (consonant === k && map.size === 5) res++;
    else {
      // 滑动窗口可以缩小的条件
      while (true) {
        const char = word.charAt(start);
        if (VOWEL.includes(char)) {
          start++;
          map.set(char, map.get(char) - 1);
          if (!map.get(char)) map.delete(char);
        } else if (consonant > k) {
          consonant--;
          start++;
        }
        if (consonant === k && map.size === 5) res++;
        else if (consonant < k || map.size < 5) break;
      }
    }
  }
  return res;
};

const word = "iqeaouqi", k = 2;
console.log(countOfSubstrings(word, k));
