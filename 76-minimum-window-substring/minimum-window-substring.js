/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (t.length > s.length) return "";

    function validWindow(objTargetFreq, currWindowFreq) {
        for (const key in objTargetFreq) {
            if (objTargetFreq[key] > currWindowFreq[key] || !currWindowFreq[key]) {
                return false;
            }
        }
        return true;
    }
    const objTargetFreq = {};
    for (const char of t) {
        objTargetFreq[char] = (objTargetFreq[char] || 0) + 1;
    }

    let left = 0;
    let currWindowFreq = {};
    let minimumWindowChar = "";

    for (let right = 0; right < s.length; right++) {
        currWindowFreq[s[right]] = (currWindowFreq[s[right]] || 0) + 1;
        while (validWindow(objTargetFreq, currWindowFreq)) {
            if (
                !minimumWindowChar.length ||
                minimumWindowChar.length > right - left + 1
            ) {
                minimumWindowChar = s.slice(left, right + 1);
            }
            currWindowFreq[s[left]]--;
            left++;
        }
    }
    return minimumWindowChar;
};