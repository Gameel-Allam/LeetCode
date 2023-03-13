var isSymmetric = (node1, node2) => {
   if (node2 === undefined) node2 = node1.left, node1 = node1.right;
   if (!node1 && !node2) return true;
   if (!node1 || !node2 || node1.val !== node2.val) return false;
   return isSymmetric(node1.left, node2.right) && isSymmetric(node1.right, node2.left);
};


// Source : https://leetcode.com/problems/symmetric-tree/description/
// Author : Fady Allam
// Date   : 2023-3-13
/********************************
 * @param {TreeNode} root
 * @return {boolean}
 *
 *
 * Approach:
 * For simplicity and avoid use anther function i add extra parameter to the function so now (node1) would 
   be the first side and the root in the first function call and (node2) that would refer to the second side.
 * First initialize the 2 nodes in the first function call by check if the node2 is undefined, 
   so assign node1 to the right of the root and node2 to the left to the root - where root in this case is node1-.
 * Base cases for the recursion:
      1-If both nodes come from leaf node so no need to check the value and then we will return true
      as the tree branch ends without found any dissymmetric.
      2-If one node come from leaf node and the other not so that only one has a value and the other is null
      so we return false as it result of no symmetric.
      3-If the 2 nodes don`t match there values so also no symmetric and we return false.
 * If there `s no conditions of the above satisfied then the current 2 nodes are matching so we will addvance
      to there childs by calling the function again two times to check the two nodes childs and so on,
      untill found a dismatch or the tree is completely symmetric.
********************************/