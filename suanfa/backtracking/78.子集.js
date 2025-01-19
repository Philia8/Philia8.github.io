/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [],
        path = [];

  const dfs = (start) => {
    if (path.length <= res.length)
      res.push([...path]);
    else return;

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      dfs(i + 1);
      path.pop();
    }
  }
    nums.sort((a, b) => a - b);
    dfs(0);
    return res;
};

const nums = [1, 2, 3];
console.log(subsets(nums));
