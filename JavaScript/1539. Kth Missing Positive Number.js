var findKthPositive = (arr, k, ans = 1) => {
    for (let i = 0; k > 0; (arr[i] === ans) ? (i++, ans++) : (k--, ans++));
    return ans - 1;
};



// Source : https://leetcode.com/problems/kth-missing-positive-number/description/
// Author : Fady Allam
// Date   : 2023-3-6
/********************************
/**
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 *
 * Approach:
 * - Inside the loop it increase the answer every iteration untill k reach 0 where it found the kth poistion.
********************************/