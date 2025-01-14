/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
	class DoubleQueue {
		que;
        
		constructor() {
			this.que = [];
		}

		// 入队
		enqueue(val) {
			let end = this.que[this.que.length - 1];
			while(end !== undefined && end < val) {
				this.que.pop();
				end = this.que[this.que.length - 1];
			}
			this.que.push(val);
		}

		// 出队
		dequeue(val) {
			let front = this.getMax();
			if(front === val) {
				this.que.shift();
			}
		}

		// 获取队首元素
		getMax() {
			return this.que[0];
		}
	}

	let dq = new DoubleQueue();
	// k窗口内元素入队
	let cur = 0,
		left = 0, // left指针指向当前窗口移动时需要移除元素的下标
		res = [];
	while(cur < k) {
		dq.enqueue(nums[cur++]);
	}
	res.push(dq.getMax());
	while(cur < nums.length) {
		dq.enqueue(nums[cur]);
		dq.dequeue(nums[left]);
		// console.log(dq.que);
    
		res.push(dq.getMax());
		cur ++;
		left ++;
	}
	return res;
};

const nums = [1, 3, 1, 2, 0, 5],
	k = 3;
console.log(maxSlidingWindow(nums, k));
