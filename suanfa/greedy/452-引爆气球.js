/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  // 按照start到end的范围降序
  points.sort((a, b) => a[0] - b[0]);
  // 记录数组的最大交叉范围
  let arr = [points[0]];
  for (let i = 1; i < points.length; i++) {
    let len = arr.length;
    let updated = false;
    for (let j = 0; j < len; j++) {
      if (points[i][0] >= arr[j][0] && points[i][0] <= arr[j][1] || // 范围交叉
        points[i][1] >= arr[j][0] && points[i][1] <= arr[j][1] 
      ) {
        // 更新交叉范围start
        arr[j][0] = Math.max(points[i][0], arr[j][0]);
        arr[j][1] = Math.min(points[i][1], arr[j][1]);
        updated = true;
        break;
      }
    }
    arr.sort((a, b) => a[0] - b[0]);
    if (!updated) arr.push(points[i]);
  }

  return arr.length;
};
// const points = [[10, 16], [2, 8], [1, 6], [7, 12]]; // 2
// const points = [[1, 2], [2, 3], [3, 4], [4, 5]]; // 2
// const points = [[1, 2], [3, 4], [5, 6], [7, 8]]; // 4
// const points = [[3, 9], [7, 12], [3, 8], [6, 8], [9, 10], [2, 9], [0, 9], [3, 9], [0, 6], [2, 8]]; //2
const points = [[4289383, 51220269], [81692777, 96329692], [57747793, 81986128], [19885386, 69645878], [96516649, 186158070], [25202362, 75692389], [83368690, 85888749], [44897763, 112411689], [65180540, 105563966], [4089172, 7544908]]; // 4
console.log(findMinArrowShots(points));
