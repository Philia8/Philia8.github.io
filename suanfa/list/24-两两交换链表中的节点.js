import { MyLinkedList, ListNode } from "./MyLinkedList.js";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let vHead = new ListNode('head', head);
  let curr = head;
  let pre = vHead;
  while (curr && curr.next) {
    let temp = curr.next;
    pre.next = temp;
    curr.next = temp.next;
    temp.next = curr;
    pre = curr;
    curr = curr.next;
  }
  return vHead.next;
};

const nums = [1, 2, 3];
const list = new MyLinkedList();
list.create(nums);
list.log();
const newList = swapPairs(list._head);
