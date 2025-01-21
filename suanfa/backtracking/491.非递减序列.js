/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  let res = [],
      path = [];

  const numsLen = nums.length;
  const dfs = (start) => {
    if (path.length > 1) res.push([...path]);
    const set = new Set(); // 记录本层循环中已使用过的数字项
    for (let i = start; i < numsLen; i++) {
      if (set.has(nums[i]) || path.length && nums[i] < path[path.length - 1]) continue; // 当前元素与path栈顶元素比较大小
      set.add(nums[i]);
      path.push(nums[i]);
      dfs(i + 1);
      // set.delete(nums[i]); // 如果此处删除set中的元素nums[i]，无法达到去重效果
      path.pop();
    }
  }

  dfs(0);
  return res;
};

// const nums = [4, 7, 6, 7];
const nums = [4, 6, 7, 7];
// const nums = [4, 4, 3, 2, 1];
console.log(findSubsequences(nums));
