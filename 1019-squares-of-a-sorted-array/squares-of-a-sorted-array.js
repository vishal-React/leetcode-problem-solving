/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let arr = [];

    while (left <= right) {
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];
        console.log("leftSquare rightSquare", leftSquare, rightSquare);

        if (leftSquare < rightSquare) {
            arr.unshift(rightSquare);
            right--;
        } else {
            arr.unshift(leftSquare);
            left++;
        }
    }
    return arr
};