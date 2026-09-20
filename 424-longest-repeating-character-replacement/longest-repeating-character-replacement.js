/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let left = 0;
    let obj = {};
    let maxfreqCurrentWindow = 0;
    let MaxSubStringReplacement = 0;

    for (let right = 0; right < s.length; right++) {
        const currChar = s[right];
        obj[currChar] = (obj[currChar] || 0) + 1;

        let currentWindow = right - left + 1;
        maxfreqCurrentWindow = Math.max(...Object.values(obj));
        let replaceableChar = currentWindow - maxfreqCurrentWindow;

        while (replaceableChar > k) {
            obj[s[left]]--;
            left++;

            currentWindow = right - left + 1;
            maxfreqCurrentWindow = Math.max(...Object.values(obj));
            replaceableChar = currentWindow - maxfreqCurrentWindow;
        }

        MaxSubStringReplacement = Math.max(MaxSubStringReplacement, currentWindow);
    }
    return MaxSubStringReplacement
};