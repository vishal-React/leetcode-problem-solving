/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let left = 0;
    let currWindowFreq = new Map();
    let maximumWindowSize = 0;

    for (let right = 0; right < fruits.length; right++) {
        currWindowFreq.set(
            fruits[right],
            (currWindowFreq.get(fruits[right]) || 0) + 1,
        );
        while (currWindowFreq.size > 2) {
            if (currWindowFreq.get(fruits[left]) === 1) {
                currWindowFreq.delete(fruits[left]);
            } else {
                currWindowFreq.set(fruits[left], currWindowFreq.get(fruits[left]) - 1);
            }
            left++;
        }
        maximumWindowSize = Math.max(maximumWindowSize, right - left + 1);
    }
    return maximumWindowSize
};