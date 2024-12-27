// 二叉树链式存储
// 二叉链表
class TreeNode {
	left = null;
	val = undefined;
	right = null;
  
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {
	root = null;
	treeHeight = 0;
  
	constructor(nums) {
		this.init(nums);
	}

	/**
   * 
   * @param {Array} nums 根据数组构造二叉树
   * 构造过程使用层序遍历，逐层遍历，使用队列保存某一层未添加左右子树的节点
   */
	init(nums = []) {
		// 若没有参数或数组长度为0，则视为空树
		if (!nums || nums.length === 0) {
			this.root = null;
		}
    
		// 先将数组第一个元素 设置为根结点
		let root = new TreeNode(nums.shift());
    
		// 节点队列，保存未添加左右子树的节点
		let nodeQueue = [root];
    
		// 当数组剩余仍有元素，则持续为最近的节点添加叶子
		while (nums.length > 0) {
    
			// 取出队首节点，
			let node = nodeQueue.shift();
        
			// 若数组中无元素，则视为无叶子可添加,返回即可
			if (!nums.length) {
				break;
			}
        
			// 先从节点数组中取一个元素 转化为节点 拼接为左叶子
			let left = new TreeNode(nums.shift());
			node.left = left;
			nodeQueue.push(left);
        
			// 判断是否有未添加到树中的数据
			if (!nums.length) {
				break;
			}
        
			// 左侧叶子拼完，右边一样的操作
			let right = new TreeNode(nums.shift());
			node.right = right;
			nodeQueue.push(right);
		}
    
		// 最后返回根结点，通过根结点就能得到整个二叉树的结构
		this.root = root;
	}

	isEmpty() {
		return !this.root;
	}
  
	// 前序遍历
	preorder(node, nums) {
		// 终止条件
		if (!node) return nums;
		nums.push(node.val);
		// 递归调用逻辑
		// 前序遍历中，遵循“中、左、右”的顺序
		this.preorder(node.left, nums);
		this.preorder(node.right, nums);
	}
  
	// 中序遍历
	inorder(node, nums) {
		if (!node) return null;
		// 递归调用逻辑
		// 中序遍历，遵循“左、中、右”的顺序
		this.inorder(node.left, nums);
		nums.push(node.val);
		this.inorder(node.right, nums);
	}

	// 后序遍历
	postorder(node, nums) {
		if (!node) return;
		// 递归调用逻辑：遵循“左、右、中”的顺序
		// 遍历左子树
		this.postorder(node.left, nums);
		// 遍历右子树
		this.postorder(node.right, nums);
		// 处理当前节点的值
		nums.push(node.val);
	}

}

// const nums = [3, 9, 20, null, null, 15, 7];
// const tree = new BinaryTree(nums);
// // console.log(tree);
// let preRes = [],
// 	inRes = [],
// 	postRes = [];
// tree.preorder(tree.root, preRes);
// tree.inorder(tree.root, inRes);
// tree.postorder(tree.root, postRes);
// console.log(preRes, inRes, postRes);

module.exports = {
	BinaryTree
};