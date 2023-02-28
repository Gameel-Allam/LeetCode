var longestPalindrome = function (s) {
    let temp = new Set(), count = 0, length = s.length;
    for (let index = 0; index < length; index++)
        (temp.has(s[index])) ? (temp.delete(s[index]), count += 2) : (temp.add(s[index]));
    return count + (temp.size > 0 ? 1 : 0);
}


// Source : https://leetcode.com/problems/longest-palindrome/description/
// Author : Fady Allam
// Date   : 2023-2-28
/********************************
/**
 * @param {string} s
 * @return {number}
 *
 * Approach:
 * Count how many times for each character letter it exist for 2 times 
 * First add the character letter to the set if not exist - to save first time -
 * When found it again remove the character letter and add 2 to the count.
 * by Doing this two steps you get total length for palindrome of the even length so we can 
 * increase the length by making it odd by add single character letter if exist
 *  by check if therer a letter in the set don`t found it`s pairs yet.
********************************/