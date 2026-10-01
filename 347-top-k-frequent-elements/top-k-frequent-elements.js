/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const obj = {};
    for (const num of nums) {
        obj[num] = (obj[num] || 0) + 1;
    }
    const res = Object.entries(obj)
        .sort(([, a], [, b]) => a - b)
        .slice(-k)
        .map(([key]) => Number(key));
    // console.log("obj", res);
    return res
};