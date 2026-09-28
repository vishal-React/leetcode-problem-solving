/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let left = 0;
    const res = [];
    const deque = [];

    for (let right = 0; right < nums.length; right++) {
        while (deque.length && nums[deque[deque.length - 1]] < nums[right]) {
            deque.pop();
        }
        deque.push(right);

        if (right - left + 1 > k) {
            if (left === deque[0]) {
                deque.shift();
            }
            left++;
        }

        const currWindow = right - left + 1;
        if (currWindow === k) {
            res.push(nums[deque[0]]);
        }
    }

    return res
};