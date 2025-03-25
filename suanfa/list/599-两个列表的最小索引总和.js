/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  // 两个字符串有重叠项，需要找出索引和最小的重叠项
  let minSum = Number.MAX_VALUE;
  let map = new Map();
  let res = [];
  // 遍历第一个数组，记录索引，为了遍历第二个数组时能够快速查找
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }

  for (let i = 0; i < list2.length; i++) {
    if (map.has(list2[i])) { // 有重叠项，计算索引和
      let sum = i + map.get(list2[i]);
      if (sum < minSum) { // 更小的索引和，更新res
        res.length = 0;
        res.push(list2[i]);
        minSum = sum;
      } else if (sum === minSum) { // 索引和相等时加入res
        res.push(list2[i]);
      }
    }
  }
  return res;
};

const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
const list2 = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"];
console.log(findRestaurant(list1, list2));
