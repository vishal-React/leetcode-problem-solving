/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const uniqueNums = new Set();

    for (const num of nums) {
        if (uniqueNums.has(num)) {
            return true;
        }
        uniqueNums.add(num);
    }
    return false;

};