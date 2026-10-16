/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);

    let res = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i - 1] === nums[i]) continue;
        const element = nums[i];

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = element + nums[left] + nums[right];
            if (sum === 0) {
                res.push([element, nums[left], nums[right]]);
                right--;
                left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
                while (left < right && nums[left] === nums[left - 1]) left++;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return res
};