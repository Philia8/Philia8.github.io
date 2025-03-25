import { ListNode, MyLinkedList } from "./MyLinkedList.js";
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  // 先找到范围的左边界，翻转范围内节点
  let vHead = new ListNode('head', head); // 避免头节点变动
  let curr = head;
  let pre = vHead;
  let count = right - left + 1;
  if (count === 1) return head;
  while (curr && --left > 0) { // 找到反转节点左边界
    pre = curr;
    curr = curr.next;
  }
  // 翻转范围内的链表
  let tempHead = pre;
  let tempTail = curr;
  while (curr && count--) { // 范围内使用双指针翻转链表节点
    if (!count) {
      tempTail.next = curr.next;
      curr.next = pre;
      tempHead.next = curr;
    } else {
      let temp = curr.next;
      curr.next = pre;
      pre = curr;
      curr = temp;
    }
  }
  return vHead.next;
};

let list = new MyLinkedList();
// const nums = [1, 2, 3, 4, 5], left = 2, right = 4;
const nums = [3, 5], left = 2, right = 2;
// const nums = [4], left = 1, right = 1;
list.create(nums);
let res = reverseBetween(list._head, left, right);
console.log(res);
