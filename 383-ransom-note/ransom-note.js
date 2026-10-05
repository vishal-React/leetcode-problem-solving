/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const obj = {};
    const obj2 = {};

    for (const char of ransomNote) {
        obj[char] = (obj[char] || 0) + 1;
    }

    for (const char of magazine) {
        obj2[char] = (obj2[char] || 0) + 1;
    }

    for (const key of Object.keys(obj)) {
        if (!obj2[key] || obj[key] > obj2[key]) return false;
    }
    return true;
};