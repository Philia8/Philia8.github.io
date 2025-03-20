import { MyLinkedList, ListNode } from "./MyLinkedList.js";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // 头插法：创建新链表
  let vHead = new ListNode('head', null);
  let curr = head;
  while (curr) {
    let temp = curr;
    curr = curr.next;
    temp.next = vHead.next;
    vHead.next = temp;
  }
  return vHead.next;
};

const nums = [1, 2, 3, 4, 5];
let list = new MyLinkedList();
list.create(nums);
list.log();

const res = reverseList(list._head);
console.log(res);
