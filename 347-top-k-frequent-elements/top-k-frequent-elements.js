/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    // Count the frequency of each number
    const obj = {};
    for (const num of nums) {
        obj[num] = (obj[num] || 0) + 1;
    }

    // Group numbers by their frequency (frequency = index)
    const arr = new Array(nums.length + 1);
    for (const key in obj) {
        const objValue = obj[key];
        (arr[objValue] ||= []).push(key);
    }

    // Traverse from highest frequency and collect k numbers
    const res = [];
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i]) {
            for (const element of arr[i]) {
                res.push(Number(element));
                if (res.length === k) return res;
            }
        }
    }
    return res;
};