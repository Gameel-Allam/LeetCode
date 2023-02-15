// clear form of solution 
var runningSum = function (nums) {
    const result = [];
    nums.reduce((accumulator, current) => {
        result.push(accumulator + current);
        return accumulator + current;
    }, 0)
    return result;
};

// Simplified form of solution
var runningSum2 = function (nums) {
    nums.reduce((accumulator, current, index, array) => { array[index] += accumulator; return accumulator + current }, 0)
    return nums;
};


// Source : https://leetcode.com/problems/running-sum-of-1d-array/
// Author : Fady Allam
// Date   : 2023-2-15
/********************************
/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * Approach:
 * Using Arrry.reduce() to go throw array elements and save 
 * the accumulator + current array element as the new values of the current element.
********************************/