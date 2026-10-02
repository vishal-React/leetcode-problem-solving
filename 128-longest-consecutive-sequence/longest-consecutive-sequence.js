/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const numsSet = new Set(nums);
    let maxCount = 0;

    for (const num of numsSet) {
        if (numsSet.has(num - 1)) continue;
        let count = 1;
        let copyNum = num;
        while (numsSet.has(++copyNum)) {
            count++;
        }
        maxCount = Math.max(maxCount, count);
    }
    return maxCount
};