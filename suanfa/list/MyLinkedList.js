class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}
class MyLinkedList {
  constructor() {
    this._size = 0;
    this._head = null;
    this._tail = null;
  }
}

MyLinkedList.prototype.get = function (index) {
  if (index >= this._size || index < 0) return -1;
  let count = 0;
  let curr = this._head;
  while (count < index) {
    curr = curr.next;
    count++;
  }
  return curr.val;
};

MyLinkedList.prototype.addAtHead = function (val) {
  const node = new ListNode(val, null);
  if (!this._size) {
    this._head = node;
    this._tail = node;
    this._size = 1;
  } else {
    node.next = this._head;
    this._head = node;
    this._size++;
  }
};

MyLinkedList.prototype.addAtTail = function (val) {
  const node = new ListNode(val, null);
  if (!this._size) {
    this._head = node;
    this._tail = node;
    this._size = 1;
  } else {
    this._tail.next = node;
    this._tail = node;
    this._size++;
  }
};

//  void addAtIndex(int index, int val) 将一个值为 val 的节点插入到链表中下标为 index 的节点之前。如果 index 等于链表的长度，那么该节点会被追加到链表的末尾。如果 index 比长度更大，该节点将 不会插入 到链表中。
// 链表index从0开始
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this._size) return; // 下标超出链表节点范围
  if (index === this._size) { this.addAtTail(val); return; }
  if (index === 0) { this.addAtHead(val); return; };

  let vHead = new ListNode('head', this._head);
  let node = new ListNode(val, null);
  while (index--) vHead = vHead.next;
  node.next = vHead.next;
  vHead.next = node;
  this._size++;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (!this._size || index >= this._size) return; // 链表无节点或超出下标范围
  if (index === 0) {
    this._head = this._head.next;
    this._size--;
    return;
  }
  let pre = new ListNode('head', this._head);
  let curr = this._head;
  let count = index;
  while (count--) {
    curr = curr.next;
    pre = pre.next;
  }
  if (index === this._size - 1) this._tail = pre;
  pre.next = curr.next;
  this._size--;
};

/**
 * 根据数组数据创建链表（尾插法）
 * @param {Array} nums 数组
 */
MyLinkedList.prototype.create = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    this.addAtTail(nums[i]);
  }
};

MyLinkedList.prototype.log = function () {
  let curr = this._head;
  // let index = 0;
  let res = '';
  while (curr) {
    // console.log(`${index++} : ${curr.val}`);
    res += curr.next ? `${curr.val} -> ` : curr.val; 
    curr = curr.next;
  }
  console.log(res);
  
};

export {
  ListNode,
  MyLinkedList
};