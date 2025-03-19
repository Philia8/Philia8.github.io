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

MyLinkedList.prototype.log = function () {
  let curr = this._head;
  let index = 0;
  while (curr) {
    console.log(`${index++} : ${curr.val}`);
    curr = curr.next;
  }
};

const run = function (op, args) {
  if (op[0] === 'MyLinkedList') {
    let list = new MyLinkedList();
    for (let i = 1; i < op.length; i++) {
      const res = list[op[i]](...args[i]);
      console.log('---');
      list.log();
      console.log('res = ' + res);
      
    }
  } else return;
}

// const op = ["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
// const args = [[],[1],[3],[1,2],[1],[1],[1]]

const op = ["MyLinkedList", "addAtHead", "get", "addAtHead", "addAtHead", "deleteAtIndex", "addAtHead", "get", "get", "get", "addAtHead", "deleteAtIndex"];
const args = [[], [4], [1], [1], [5], [3], [7], [3], [3], [3], [1], [4]];
run(op, args);

// let list = new MyLinkedList();
// list.addAtHead(1);
// list.addAtTail(3);
// list.addAtIndex(1, 2);
// list.get(1);
// list.deleteAtIndex(1);
// list.get(1);
// list.log();


// let list = new MyLinkedList();
// console.log(list);
// console.log(list.get(0));
// list.addAtHead(10);
// list.addAtHead(11);
// list.addAtHead(12);
// // list.log();
// list.addAtTail(13);
// list.addAtTail(14);
// list.addAtTail(15);
// list.log();
// console.log(list.get(3) + '------');
// // list.addAtIndex(6, 16);
// list.addAtIndex(3, 8);
// list.addAtIndex(0, 9);
// list.addAtIndex(8, 18);
// list.log();
// console.log('----');

// // list.addAtIndex(0, 19);
// // list.log();
// list.deleteAtIndex(4);
// list.deleteAtIndex(0);
// list.deleteAtIndex(6);
// list.log();


/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */