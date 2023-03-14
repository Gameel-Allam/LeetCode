var sumNumbers = (root, sum = 0) => (!root) ? 0 : (!root.left && !root.right) ? root.val + sum : sumNumbers(root.left, (root.val + sum) * 10) + sumNumbers(root.right, (root.val + sum) * 10);


// Detailed solution
var sumNumbers = (root, sum = 0) => {
    if (!root) return 0;
    if (!root.left && !root.right) return root.val + sum;
    return sumNumbers(root.left,(root.val+sum)*10) + sumNumbers(root.right,(root.val+sum)*10);
};


// Source : https://leetcode.com/problems/sum-root-to-leaf-numbers/
// Author : Fady Allam
// Date   : 2023-3-14
/********************************
/**
/**
 * @param {TreeNode} root
 * @return {number}
 *
 * Approach:
 * It can be solved as a recursive problem where we keep add call the function with
    each side of the node untill reach the leaf node and return the path summation.
 * The code will be as follow:
        1-Handle Special case if the given tree don`t contain any node we return 0;
        2-If we reach the leaf node we don`t need to iterate again we will return this path value.
        3-call the function for the current node two sides with sending the sum value ready for addition
            by add current node value and multiple borh by 10 to if the next node is leaf node we will only
            add it value to the sum without extra handling.
********************************/