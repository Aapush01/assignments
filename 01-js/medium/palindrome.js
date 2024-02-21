/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    // lets first Convert the string to lowercase to ensure case-insensitivity
    const lowerCaseStr = str.toLowerCase();

    // Remove non-alphanumeric characters from the string
    const alphanumericStr = lowerCaseStr.replace(/[^a-z0-9]/g, '');
  
    // Check if the reversed string is equal to the original string
    const reversedStr = alphanumericStr.split('').reverse().join('');
    return alphanumericStr === reversedStr;
   
}

module.exports = isPalindrome;
