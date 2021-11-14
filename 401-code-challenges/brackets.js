'use strict';

function validateBrackets (str) => {
  let stack = [];
  for (i = 0; i < str.length; i++) {
    let character = stack[stack.length - 1];
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      stack.push(str[i]);
    } else if (
      (character === '(' && str[i] === ')') ||
      (character === '{' && str[i] === '}') ||
      (character === '[' && str[i] === ']')
    ) {
      stack.pop();
    } else return false;
  }
  return stack.length ? false : true;
}
