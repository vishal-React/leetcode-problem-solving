/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = height[0];
    let rightMax = height[height.length - 1];
    let count = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] > leftMax) {
                leftMax = height[left];
            }
            count += leftMax - height[left];
            left++;
        } else {
            if (height[right] > rightMax) {
                rightMax = height[right];
            }
            count += rightMax - height[right];
            right--;
        }
    }
    console.log("count", count);
    return count
};