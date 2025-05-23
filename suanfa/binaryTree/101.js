import { BinaryTree } from "./BinaryTree.js";
// var isSymmetric = function (root) {
//   // 递归实现：轴对称的树左子树与右子树对称，
//   return check(root.left, root.right);
// };
// // 判断根节点的左右子树是否互为镜像
// function check(l, r) {
//   if (!l && !r) return true;
//   if (!l || !r) return false;
//   return l.val === r.val && check(l.left, r.right) && check(l.right, r.left);
// }

// 迭代
var isSymmetric = function (root) {
  // 层序遍历+队列
  let que = [root, root];
  while (que.length) {
    while (que.length > 0) {
      // 依次出队两个节点，应该互为镜像关系
      const a = que.shift();
      const b = que.shift();
      // 同为空节点对称
      if (!a && !b) continue;
      if (!a || !b || a.val !== b.val) return false; // 一个空节点或值不相等
      // 相邻节点应互为镜像关系
      que.push(a.left, b.right);
      que.push(a.right, b.left);
    }
  }
  return true;
};

const tree = new BinaryTree();
const nums = [1, 2, 2, 3, 4, 4, 3, 5, 6, 7, 8, 8, 7, 6, 5];
tree.init(nums);
let res = [];
res = tree.fn(tree.root);
// console.log(res);
console.log(isSymmetric(tree.root));
