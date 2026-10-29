/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (!nums.length) return 0;
    let leftBound = 0;
    let rightBound = nums.length - 1;
    let midIndex = 0;
    while (rightBound >= leftBound) {
        midIndex = Math.floor((rightBound + leftBound) / 2);
        // console.log("leftBound", leftBound);
        // console.log("righBound", rightBound);
        // console.log("midIndex", midIndex);
        if (nums[midIndex] === target) return midIndex;
        // if (leftBound === rightBound) {
        //   return nums[leftBound] > target ? leftBound : leftBound + 1;
        // }

        if (target > nums[midIndex]) {
            leftBound = midIndex + 1;
        } else {
            rightBound = midIndex - 1;
        }
    }
    // console.log("leftBound", leftBound);
    // console.log("righBound", rightBound);
    // console.log("midIndex", midIndex);

    return nums[midIndex] > target ? midIndex : midIndex + 1;
};