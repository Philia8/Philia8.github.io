class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  init(nums) {
    if (!nums || !nums.length) {
      this.root = null;
    }

    // 根节点
    let root = new TreeNode(nums.shift());
    let nodes = [root]; // nodes中存放所有未安排左右节点的子树根节点
    while (nums.length) {
      let node = nodes.shift();
      if (!nums.length) break;

      // 添加左节点
      const left = new TreeNode(nums.shift());
      node.left = left;
      nodes.push(left);

      // 判断是否存在右节点
      if (!nums.length) break;
      // 添加右节点
      const right = new TreeNode(nums.shift());
      node.right = right;
      nodes.push(right);
    }
    this.root = root;
  }

  // 递归遍历
  // 前序遍历：中左右
  preorder(node, nums) {
    if (!node) return;
    nums.push(node.val);
    this.preorder(node.left, nums);
    this.preorder(node.right, nums);
  }

  // 中序遍历：左中右
  inorder(node, nums) {
    if (!node) return;
    this.inorder(node.left, nums);
    nums.push(node.val);
    this.inorder(node.right, nums);
  }

  // 后序遍历：左右中
  postorder(node, nums) {
    if (!node) return;
    this.postorder(node.left, nums);
    this.postorder(node.right, nums);
    nums.push(node.val);
  }

  // 迭代遍历
  // 前序遍历：中左右，栈结构，将node的左右节点入栈后逐个出栈
  preorder2(root) {
    if (!root) return [];
    let nums = [];
    let stack = [root];
    while (stack.length) {
      const node = stack.pop();
      nums.push(node.val);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
    return nums;
  }

  // 中序遍历：左中右：栈结构
  inorder2(root) {
    if (!root) return [];
    let nums = [];
    let stack = [];
    while (root || stack.length) {
      while (root) {
        stack.push(root);
        root = root.left;
      }

      root = stack.pop();
      if (root) nums.push(root.val);
      root = root.right;
    }
    return nums;
  }

  // 中序遍历：左右中
  postorder2(root) {
    if (!root) return [];
    let stack = [];
    let nums = [];
    let pre = null; // 指向上一个访问过的节点
    while (root || stack.length) {
      // 达到树的最左节点
      while (root) {
        stack.push(root);
        root = root.left;
      }

      root = stack.pop();
      if (!root.right || root.right === pre) {
        nums.push(root.val);
        pre = root;
        root = null;
      } else { // 当前节点的右子树未访问
        stack.push(root);
        root = root.right;
      }
    }
    return nums;
  }

  // 层序遍历：借助队列结构存储未访问的节点
  fn(root) {
    if (!root) return [];
    let res = [];
    let que = [root];
    while (que.length) {
      let count = que.length;
      let nums = [];
      while (count--) {
        const node = que.shift();
        nums.push(node.val);
        if (node.left) que.push(node.left);
        if (node.right) que.push(node.right);        
      }
      res.push(nums);
    }
    return res;
  }
}

let nums = [1, 2, 3, 4, 5, 6];
const tree = new BinaryTree();
tree.init(nums);
// const preRes = [];
// tree.preorder(tree.root, preRes);
// console.log(preRes);


// const inRes = [];
// tree.inorder(tree.root, inRes);
// console.log(inRes);

// const postRes = [];
// tree.postorder(tree.root, postRes);
// console.log(postRes);

// console.log(tree.preorder2(tree.root));
// console.log(tree.inorder2(tree.root));
// console.log(tree.postorder2(tree.root));


// console.log(tree.fn(tree.root));


export {
  BinaryTree
};