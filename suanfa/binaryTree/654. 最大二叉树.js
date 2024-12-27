/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val);
	this.left = (left===undefined ? null : left);
	this.right = (right===undefined ? null : right);
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
	if(!nums.length) return null;
	if(nums.length === 1) return new TreeNode(nums[0]);
	const res = getMax(nums);
	const {max, index} = res;
	let node = new TreeNode(max);
	node.left = constructMaximumBinaryTree(nums.splice(0, index));
	node.right = constructMaximumBinaryTree(nums.splice(index + 1, nums.length));
	return node;
};

function getMax(nums) {
	let max = nums[0];
	let index = 0;
	for(let i = 0;i < nums.length;i ++){
		if(nums[i] > max) {
			index = i;
			max = nums[i];
		}
	}
	return {
		max,
		index
	};
}

const nums = [3, 2, 1, 6, 0, 5];
const root = constructMaximumBinaryTree(nums);

dfs(root);

function dfs(root) {
	if(!root) return [];
	let que = [root];
	let vals = [];
	while (que.length) {
		let len = que.length;
		while (len--) {
			const node = que.shift();
			if (node) {
				vals.push(node.val);
				que.push(node.left);
				que.push(node.right);
			} else {
				vals.push('null');
			}
		}
	}
	console.log(vals);
}