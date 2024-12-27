// import { BinaryTree } from 'start';
const {BinaryTree} = require('./start.js');

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
	let pre = 0;
	const converrInorder = (root) => {
		if(!root) return ;
		converrInorder(root.right);  
		root.val += pre;
		pre = root.val;
		converrInorder(root.left);
	};
	converrInorder(root);
	return root;
};


function inorder(root) {
	let nums = [];
	const help = (root) => {
		if (!root) return null;
		help(root.left);
		nums.push(root.val);
		help(root.right);
	};
	help(root);
	console.log(nums);
}
const nums = [4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8];
let tree = new BinaryTree(nums);
inorder(tree.root);

let covertRoot = convertBST(tree.root);
inorder(covertRoot);