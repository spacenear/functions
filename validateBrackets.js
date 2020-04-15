/**
 * That function can validate your string with brackets
 *
 * Валидация скобок в строке на js
 *
 * @param str {string}
 * @returns {boolean}
 */

function validateBrackets(str) {
  str = str.replace(/[^{}\[\]\(\)]/gm, '');
  
  let brackets = new Map()
    .set('(', ')')
    .set('[', ']')
    .set('{', '}');
  
  let stack = [];
  
  for (let char of str) {
    if (brackets.has(char)) {
      stack.push(char);
    } else if (brackets.get(stack.pop()) !== char) {
      return false;
    }
  }
  
  return true;
}

console.log(validateBrackets('((a+b)/5–d)'));           // true;
console.log(validateBrackets('())((a+b)/5–d)'));        // false;
console.log(validateBrackets('{x+(g-*c)-([q+w)]}'));    // false;
console.log(validateBrackets('{x+(g-*c)-([q+w])}'));    // true;
console.log(validateBrackets('({[]})'));                // true;
console.log(validateBrackets('({[}])'));                // false;
console.log(validateBrackets('({[})'));                 // false;
console.log(validateBrackets('({}[])'));                // true;