/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const arr = s.split("");
    let left = 0;
    let right = arr.length - 1;
    let vowelsSet = new Set("aeiouAEIOU");

    while (left < right) {
        if (vowelsSet.has(arr[left])) {
            if (vowelsSet.has(arr[right])) {
                [arr[left], arr[right]] = [arr[right], arr[left]];
                left++;
                right--;
            } else {
                right--;
            }
        } else {
            left++;
        }
    }
    return arr.join("");
};