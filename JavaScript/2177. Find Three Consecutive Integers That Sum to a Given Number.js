var sumOfThree = (num) => num % 3 == 0 ? [num / 3 - 1, num / 3, num / 3 + 1] : [];


// Source : https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/description/
// Author : Fady Allam
// Date   : 2023-3-9
/********************************
 * @param {number} num
 * @return {number[]}
 *
 *
 * Approach:
 * simply three consecutive integer equal the middle number multiple by 3
 *      prove : if the middle is (num) then the post is (num-1) and the pre is (num+1)
 *      so (num-1 + num + num +1) will equal (num*3)
 * So to check if the number can be a summing to three other consecutive numbers
 *      we check if it can divided by 3 and don`t return any reminders
 *          if yes the division result is the middle (num) that we easly can get the post (num-1) and the pre (num+1).
 *          if not we return any empty array.
********************************/