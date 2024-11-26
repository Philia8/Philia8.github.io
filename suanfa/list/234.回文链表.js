/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
	// 快慢指针找到链表的一半，反转剩余链表节点与原链表从头比较
	let center = findCenterNode(head);
	let reverseHalfList = reverseList(center);
	while (head) {
		if (head.val != reverseHalfList.val) return false;
		head = head.next;
		reverseHalfList = reverseHalfList.next;
	}
	return true;
};

function findCenterNode(head) {
	let fast = head,
		slow = head;
	while(fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
}

function reverseList(head) {
	// 在原链表的基础上进行指针修改，使用双指针
	if(!head || !head.next) return head; // 链表只有一个节点
	var curr = head,
		pre = null;
	while(curr) {
		let temp = curr.next;
		curr.next = pre;
		pre = curr;
		curr = temp;
	}
	return pre;
}

class ListNode {
	constructor(val, next) {
		this.val = val || 0;
		this.next = next || null;
	}
}

class LinkedList {
	constructor() {
		this.size = 0;
		this.head = null;
	}

	addAtTail(val) {
		const node = new ListNode(val);
		node.next = null;
		let curr = this.head;
		if (!curr) this.head = node;
		else {
			while (curr.next) {
				curr = curr.next;
			}
			curr.next = node;
		}
		this.size++;
	}
}

const list = new LinkedList();
const nums = [1, 2, 1];
for (let n of nums) {
	list.addAtTail(n);
}
console.log(isPalindrome(list.head));
