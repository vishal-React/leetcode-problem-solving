/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let leftBound = 0;
    let rightBound = nums.length - 1;

    let midIndex = Math.floor(rightBound / 2);
    while (leftBound <= rightBound) {
        // console.log("midIndex", midIndex);
        if (nums[midIndex] === target) return midIndex;

        if (target > nums[midIndex]) {
            // console.log("take right side");
            // shrink from left side
            leftBound = midIndex + 1;
        } else {
            // console.log("take left side");
            // shrink from right side cause we need left side
            rightBound = midIndex - 1;
        }
        midIndex = Math.floor((leftBound + rightBound) / 2);
        // console.log("leftBound", leftBound);
        // console.log("rightBound", rightBound);
        // console.log("midIndex", midIndex, nums[midIndex]);
    }
    return -1;
};