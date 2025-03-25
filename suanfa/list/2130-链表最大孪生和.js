import { MyLinkedList, ListNode } from "./MyLinkedList.js";
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  // 分析孪生节点可以推出，将链表中[n/2-1, n]的部分翻转后，与链表[0, n/2-1]节点分别求和
  // 使用快慢指针找出中间节点，将后半段链表反转后，与前半段分别相加
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  slow = reverseList(slow);
  let res = -1;
  while (slow) {
    const sum = head.val + slow.val;
    res = Math.max(sum, res);
    head = head.next;
    slow = slow.next;
  }
  return res;
};

function reverseList(head) {
  let pre = null;
  let curr = head;
  while (curr) {
    let temp = curr.next;
    curr.next = pre;
    pre = curr;
    curr = temp;
  }
  return pre;
}

// const nums = [5, 4, 2, 1];
// const nums = [4, 2, 2, 3];
const nums = [1, 100000];
const list = new MyLinkedList();
list.create(nums);
console.log(pairSum(list._head));
