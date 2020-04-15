/**
 * Checks if a string is a palindrome or not.
 * Competed with the students of the course who will
 * come up with the shortest function solving this problem.
 * My version was a winner - 49 characters in the function body.
 *
 * Supports only latin chars
 *
 * @param s {string}
 * @returns {boolean}
 */

const isPalindrom = s => (s=s.toLowerCase().match(/\w/g))+1==s.reverse()+1;

console.log(isPalindrom('Was it a cat I saw'));              // true
console.log(isPalindrom('Live not on evil'));                // true
console.log(isPalindrom('Pull up if I pull up'));            // true
console.log(isPalindrom('Some men interpret nine memos'));   // true
console.log(isPalindrom('Not New York, Roy went on'));       // true
