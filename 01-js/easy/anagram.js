/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const s1 = str1.replace(/\s/g, "").toLowerCase();
  const s2 = str2.replace(/\s/g, "").toLowerCase();

  if (s1.length !== s2.length) {
    return false;
  }

  //short the cahracter in both string
  const sortedS1 = s1.split("").sort().join("");
  const sortedS2 = s2.split("").sort().join("");

  return sortedS1 === sortedS2;
}

module.exports = isAnagram;
