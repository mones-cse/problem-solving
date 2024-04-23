// 242. Valid Anagram
// /https://leetcode.com/problems/valid-anagram/

// solution 1
// loop and find element and remove from array if found
/**
var isAnagram = function (s, t) {
  //   return t.split("").sort().join("") == s.split("").sort().join("");
  let s = s.split("");
  let t = t.split("");
  // loop through each element in sArray while lenght sArray is no zero
  // check last element of sArray with any element in tArray
  // if match found then remove last element of sArray
  // and remove finded element from tArray
  // if match not found then return false

  // if loop is complete and tArray is zero then return true

  while (sArray.length > 0) {
    let currntElement = sArray[sArray.length - 1];
    if (tArray.indexOf(currntElement) == -1) {
      return false;
    }
    tArray.splice(tArray.indexOf(currntElement), 1);
    sArray.pop();
  }
  return tArray.length == 0;
};
 */

// solution 2
// using hash
var isAnagram = function (s, t) {
  let sHash = {};
  let tHash = {};
  for (let i = 0; i < t.length; i++) {
    tHash[t[i]] = tHash[t[i]] ? tHash[t[i]] + 1 : 1;
  }
  for (let i = 0; i < s.length; i++) {
    sHash[s[i]] = sHash[s[i]] ? sHash[s[i]] + 1 : 1;
  }
  if (Object.keys(tHash).length != Object.keys(sHash).length) {
    return false;
  }

  for (const [key, value] of Object.entries(sHash)) {
    if (tHash[key] != value) {
      return false;
    }
  }
  return true;
};

const runIsAnagram = () => {
  console.log(isAnagram("anagram", "nagaram")); // true
  console.log(isAnagram("rat", "car")); // false
  console.log(isAnagram("a", "ab")); // false
};

// runIsAnagram();
export default runIsAnagram;
