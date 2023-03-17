var longestCommonPrefix = function (strs) {
    for (let i = 0; i < strs[0].length; i++)
        for (let j = 1; j < strs.length; j++)
            if (strs[0][i] !== strs[j][i]) return strs[0].substr(0, i);
    return strs[0];
};


// Source : https://leetcode.com/problems/longest-common-prefix/
// Author : Fady Allam
// Date   : 2023-3-17
/********************************
/**
 * @param {string[]} strs
 * @return {string}
 * 
 * Approach:
 * Brute Force solution that take the first string in strs as the reference value and compare it`s
    characters one by one with all other strings in the strs untill:
        1-Find a mismatch so return the str[0] from 0 to where we find mismatch.
        2-strs[0] characters match all characters of all other strings in strs so ans is str[0].
********************************/