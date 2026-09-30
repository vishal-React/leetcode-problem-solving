/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // by sorting 
    const obj = {};

    for (let i = 0; i < strs.length; i++) {
        const element = strs[i];
        const sortChar = element.split("").sort().join("");

        (obj[sortChar] ||= []).push(element);
    }
    return Object.values(obj)
};