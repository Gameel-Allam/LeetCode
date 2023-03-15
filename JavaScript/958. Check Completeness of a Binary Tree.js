var isCompleteTree = function (root) {
    if (root) {
        const queue = [root];
        while (queue.length) {
            let curr = queue.shift();
            if (!curr) { for (node of queue) if (node) return false; break; }
            queue.push(curr.left);
            queue.push(curr.right);
        }
    }
    return true;
};


// Source : https://leetcode.com/problems/check-completeness-of-a-binary-tree/description/
// Author : Fady Allam
// Date   : 2023-3-15
/********************************
 *
 * @param {TreeNode} root
 * @return {boolean}
 * 
 * Approach:
 * 
 * Problem will be used using an array as a queue where the first input be the first output to make sure
    that all levels before the current node would be successfully completed and checked. 
 * First we will check if the root is not empty as if wasn`t we directly return true.
 * Second we will check that if there`s a level is not completed before the leaf -last- level by check:
        1-if current value is null so it`s a child of leaf node from either in:
            * The Last level so we will break loop and return true as we completely check the tree.
            * Not the last level so we return false as it`s not a complete tree.
 * Third check the last level are as far left by push the left side of the current node before the right 
    side so if the left side is null then the right side will be checked to confirm it`s also null.
********************************/