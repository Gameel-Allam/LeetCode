/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    const length = t.length;
    let match = 0;
    for (let index = 0; index < length; index++)
        if (s[match] === t[index])
            match++;
    return (match == s.length) ? true : false;
};


// Source : https://leetcode.com/problems/is-subsequence/
// Author : Fady Allam
// Date   : 2023-2-18
/********************************
/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * Approach:
 * Go character by character over the long string (t) from start and check for every index if current
 *  character is go with the sequence if so increase the match numbers and after finishing the long string
 *  compare sequence length and the number of matches.
********************************/