var maxProfit = function (prices) {
    let lowestPrice = prices[0], maxProfit = 0;
    for (let index = 1; index < prices.length; index++)
        if (prices[index] > lowestPrice && prices[index] - lowestPrice > maxProfit)
            maxProfit = prices[index] - lowestPrice;
        else if (prices[index] < lowestPrice)
            lowestPrice = prices[index];
    return maxProfit;
};


// Source : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
// Author : Fady Allam
// Date   : 2023-2-27
/********************************
/**
 * @param {number[]} prices
 * @return {number}
 *
 * 
 * Approach:
 * Go throw the days and on the way find the maxprofit by getting the lowest price of all previous days and also
 *  save the maximum profit possible on this day, so at the end we can get the maximum profit from this prices.
********************************/