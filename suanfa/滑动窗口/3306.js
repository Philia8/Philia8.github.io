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
  let sum = 0;

  // 辅音字母 !VOWEL.inclueds(ch);
  for (let i = 0; i < word.length; i++) {
    const ch = word.charAt(i);
    if (!VOWEL.includes(ch)) consonant++;
    else {
      map.set(ch, (map.get(ch) || 0) + 1);
      sum++;
    }
    if (k === consonant && map.size === 5) res++;

    while (consonant >= k || sum > 5) { // 窗口缩小条件：辅音字母个数 > k || 元音字母个数可减少
      const s_ch = word.charAt(start);
      if (!VOWEL.includes(s_ch)) {
        consonant--;
        start++;
      }
      else {
        map.set(s_ch, map.get(s_ch) - 1);
        if (!map.get(s_ch)) map.delete(s_ch);
        start++;
        sum--;
      }
      if (k === consonant && map.size === 5) res++;
    }
  }
  return res;
};

// const word = "iqeaouqi", k = 2;
// const word = "ieaouqqieaouqq", k = 1;
const word = "eiaaoui", k = 0;
console.log(countOfSubstrings(word, k));
