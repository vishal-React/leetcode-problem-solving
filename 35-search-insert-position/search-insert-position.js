/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let leftBound = 0;
    let rightBound = nums.length - 1;

    while (leftBound <= rightBound) {
        const midIndex = Math.floor((leftBound + rightBound) / 2);

        if (nums[midIndex] === target) return midIndex;

        if (target > nums[midIndex]) {
            leftBound = midIndex + 1;
        } else {
            rightBound = midIndex - 1;
        }
    }

    return leftBound;
};