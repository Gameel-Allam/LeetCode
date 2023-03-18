var myPow = (x, n) => (!n) ? 1 : (n == 1) ? x : (n == -1) ? 1 / x : (n % 2 == 0 ? (myPow(x * x, n / 2)) : (x * (myPow(x, n - 1))));


// Source : https://leetcode.com/problems/powx-n/
// Author : Fady Allam
// Date   : 2023-3-18
/********************************
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
*
 * Approach:
 * It can be solved as a recursive problem where we have:
        1- n equal 0 as base case returns 1
        2- n equal 1 as base case returns the value itself x
        3- n equal -1 as base case to handle negitive power as since (x)pow -n equal 1/((x)pow n)
            so we will return 1/x to handle negative power.
        4- n is odd since we 2 divide by will compute the power of (n-1) and multiple it by x to avoid
            power with fraction values.
 * Then call the function again untill we reach a base case, every call we send value is muiltped by
    itself (x*x) with the power divided by 2 every to reduce number of calls.
            Simple Prof Example : 3pow(4) = 81 so as 9pow(2)=81 that: " xpow(n) = (x*x)pow(n/2) "  
********************************/