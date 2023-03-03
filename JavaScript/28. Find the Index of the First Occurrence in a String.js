const strStr = (haystack, needle) => {
    if (needle === '' || needle === haystack) return 0;
    for (let i = 0; i < haystack.length - needle.length + 1; i++)
        if (haystack[i] === needle[0])
            for (let j = 0; j < needle.length; j++)
                if (needle[j] !== haystack[i + j]) break;
                else if (j === needle.length - 1) return i;
    return -1;
};

// Source : https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
// Author : Fady Allam
// Date   : 2023-3-3
/********************************
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
*
 * Approach:
 * Iterate throw all the hasystack array
 *when found a letter match the start of the needle
 *   then will go to the inner for to check if the remains characters of the
needle and the haystack match or not
 *  if all matched then it will be the first complete mathcing so return the index of ( i )
from the outer loop that was stoping in the position of the start matching in the haystack.
 *If the outer for don`t found any complete matching of needle in haystack then
we return -1 to annotate not mathcing.
********************************/