/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    // Approach:
    // 1. Find the middle index of the sorted array.
    // 2. If the middle element equals the target, return its index.
    // 3. If the target is greater, search the right half.
    // 4. If the target is smaller, search the left half.
    // 5. Repeat until the target is found or the search range becomes empty.
    // 6. If not found, return -1.
    
    let leftBound = 0;
    let rightBound = nums.length - 1;

    while (leftBound <= rightBound) {
        let midIndex = Math.floor((leftBound + rightBound) / 2);
        if (nums[midIndex] === target) return midIndex;

        if (target > nums[midIndex]) {
            // shrink from left side
            leftBound = midIndex + 1;
        } else {
            // shrink from right side cause we need left side
            rightBound = midIndex - 1;
        }
    }
    return -1;
};