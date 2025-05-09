import { BinaryTree } from "./BinaryTree.js";
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  // 右视图可以看见每层的最右节点，使用层序遍历，收集每层的最右侧节点
  if (!root) return [];
  let res = [];
  let que = [root];
  while (que.length) {
    let count = que.length;
    while (count--) {
      const node = que.shift();
      if(count === 0) res.push(node.val);

      if (node.left) que.push(node.left);
      if (node.right) que.push(node.right);
    }
  }
  return res;
};

const tree = new BinaryTree();
const nums = [1, 2, 3, null, 5, null, 4];
tree.init(nums);
console.log(tree.fn(tree.root));
console.log(rightSideView(tree.root));



