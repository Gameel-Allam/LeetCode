var lengthOfLongestSubstring = (s)=> {
    let length = s.length, longSubString = 0, ans = 0;;
    for (let i = 0; i < length; i++) {
        let freqArr = new Array(255);
        for (let j = i; j < length; j++)
            if (!freqArr[s[j].codePointAt()]) longSubString++, freqArr[s[j].codePointAt()] = 1;
            else break;
        if (longSubString > ans) ans = longSubString;
        longSubString = 0;
    }
    return ans;
};


// Source : https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Author : Fady Allam
// Date   : 2023-3-11
/********************************
/**
 * @param {string} s
 * @return {number}
 * 
 * Approach:
 * Brute-force approach by use each character in the string (s) as the start of a passable long substring
    and get the longest substring starts with this character without repeating character.
 * Then check if this substring length is the longest between all we have get till now or not
    if use take it`s length as the current longest substring.
********************************/