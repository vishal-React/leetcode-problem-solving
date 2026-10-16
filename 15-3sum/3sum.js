/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);

    let res = {};

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = element + nums[left] + nums[right];
            if (sum === 0) {
                res[[element, nums[left], nums[right]]] = [
                    element,
                    nums[left],
                    nums[right],
                ];
                right--;
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return Object.values(res)
};