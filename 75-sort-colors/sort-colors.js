/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    // the ideal logic will be :
    // we will ignore 1 and we focus on 0 and 2 why? beacuse while iteration if we get 2 as we know that 2 will always in end so we swap to last as right pointer and decrease the right pointer for next 2 place on right and same goes with 0 if we get 0 we know that 0 will always in start so we swap to left and we increase left pointer for next 0 place on left correct.
    // until we swap 0 and 2 in corrcet position we dont move current pointer which is mid = 1 if we got mid as a 1 than we ignore and move mid pointer 
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