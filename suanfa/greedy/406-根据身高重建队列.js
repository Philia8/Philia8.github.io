/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  // 按身高降序
  people.sort((a, b) => b[0] - a[0]);

  // 根据ki确定序列
  for (let i = 0; i < people.length; i++) {
    let sum = 0; // 记录大于等于hi的人数
    let j = 0;
    for (j = 0; j < i && sum < people[i][1]; j++) {
      if (people[j][0] >= people[i][0]) {
        sum++;
      }
    }
    // 不满足ki的情况下插入people[i]，插入位置是people[j]
    if (j < i) {
      let temp = people[i];
      // 移动数组
      for (let k = i; k > j;k --) {
        people[k] = people[k - 1];
      }
      people[j] = temp;
    }
  }
  return people;
};

const people = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]];
console.log(reconstructQueue(people));