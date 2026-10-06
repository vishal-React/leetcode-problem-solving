/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let sum = 0;
    const arr = [];

    for (const num of nums) {
        sum += num;
        arr.push(sum);
    }
    return arr
};