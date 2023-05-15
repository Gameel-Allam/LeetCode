var isValid = function (s) {
  const pairs = { '(': ')', '{': '}', '[': ']' }, check = [];
  for (var i = 0; i < s.length; i++)
    if (s[i] == '(' || s[i] == '{' || s[i] == '[')
      check.push(s[i]);
    else if (pairs[check.pop()] == s[i]) continue;
    else return false;
  return (check.length == 0);
};


// Source : https://leetcode.com/problems/valid-parentheses/description/
// Author : Fady Allam
// Date   : 2023-5-15
/********************************
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * 
 * Approach:
 * Create an object the contain each parenthesis and it`s pair to help us when cheking if they correct matching.
 * Loop throw the string character by character:
    -if current character is one of the open parenthesis add it to the stack.
    -if not an open parenthesis check if it the closing matcher of the last added parenthesis if so continue untill we finish the string s.
 * After we finished the string if the stack contain any parenthesis that`s mean not all the parenthesis get it matcher and it won`t be a vaild parentheses.
********************************/