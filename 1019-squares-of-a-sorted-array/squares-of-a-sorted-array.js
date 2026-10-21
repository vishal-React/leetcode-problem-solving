/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let arr = [];

    for (let position = right; position >= 0; position--) {
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];

        if (leftSquare < rightSquare) {
            arr[position] = rightSquare;
            right--;
        } else {
            arr[position] = leftSquare;
            left++;
        }
    }
    return arr
};