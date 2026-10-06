/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    // 2 way check that ransomNote char are in magazine feq or not if yes than decrease freq of that char in magazine 
    const obj = {};

    for (const char of magazine) {
        obj[char] = (obj[char] || 0) + 1;
    }

    for (const char of ransomNote) {
        if (!obj[char]) return false;
        obj[char]--;
    }
    return true;
};