/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;

    let ans = 0;
    
    while (right > left) {
        // from left right pillar which ever small wall are. they are my length of wall
        let length = Math.min(height[left], height[right]);
        let breath = right - left;
        const area = length * breath;

        ans = Math.max(area, ans);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return ans
};