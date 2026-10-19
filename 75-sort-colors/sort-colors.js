/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    // Ideal logic:
    // We focus on 0 and 2, while 1 is already in the correct middle section.

    // If nums[mid] === 0, we swap it with nums[left] because 0 belongs at the start.
    // Then, we increment both left and mid to move to the next positions.

    // If nums[mid] === 2, we swap it with nums[right] because 2 belongs at the end.
    // Then, we decrement right to make space for the next 2.
    // We do not increment mid because the swapped value from right is not yet processed.

    // If nums[mid] === 1, we ignore it and increment mid because 1 belongs in the middle.

    // We continue until mid > right, meaning all elements are in their correct sections.
    let left = 0;
    let mid = 0;
    let right = nums.length - 1;

    while (mid <= right) {
        if (nums[mid] === 2) {
            [nums[mid], nums[right]] = [nums[right], nums[mid]];
            right--;
        } else if (nums[mid] === 0) {
            [nums[left], nums[mid]] = [nums[mid], nums[left]];
            left++;
            mid++;
        } else {
            mid++;
        }
    }
};