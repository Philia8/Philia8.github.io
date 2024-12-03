import { BinaryTree } from './start.mjs';
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
	let res = preorder(root);
	return res;
};

function preorder(root) {
	if(!root) return [];
	var stk = [],
		nums = [];
	stk.push(root);
	while(stk.length) {
		var node = stk.pop();
		nums.push(node.val);
		if(node.right) stk.push(node.right);
		if(node.left) stk.push(node.left);
	}
	return nums;
}

// const nums = [1, null, 2, 3];
const nums = [3, 9, 20, null, null, 15, 7];
const tree = new BinaryTree(nums);

const pre = [];
tree.preorder(tree.root, pre);
console.log(pre);

console.log(preorderTraversal(tree.root));
