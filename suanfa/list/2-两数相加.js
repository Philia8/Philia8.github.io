import { MyLinkedList, ListNode } from './MyLinkedList.js';
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 创建新链表存储求和的结果
  let vHead = new ListNode('head', null);
  let curr = vHead;
  let sum = 0;
  while (l1 && l2) {
    sum += l1.val + l2.val;
    let node = new ListNode(Math.floor(sum % 10), null);
    curr.next = node;
    sum = Math.floor(sum / 10);
    l1 = l1.next;
    l2 = l2.next;
    curr = curr.next;
  }
  while (l1) {
    sum += l1.val;
    let node = new ListNode(Math.floor(sum % 10), null);
    curr.next = node;
    sum = Math.floor(sum / 10);
    l1 = l1.next;
    curr = curr.next;
  }
  while (l2) {
    sum += l2.val;
    let node = new ListNode(Math.floor(sum % 10), null);
    curr.next = node;
    sum = Math.floor(sum / 10);
    l2 = l2.next;
    curr = curr.next;
  }
  // 最高位有进位
  if (sum > 0) {
    let node = new ListNode(sum, null);
    curr.next = node;
  }
  return vHead.next;
};

const nums1 = [9, 9, 9, 9, 9, 9, 9];
const nums2 = [9, 9, 9, 9];
const list1 = new MyLinkedList();
const list2 = new MyLinkedList();
list1.create(nums1);
list2.create(nums2);
list1.log();
list2.log();

console.log(addTwoNumbers(list1._head, list2._head));
