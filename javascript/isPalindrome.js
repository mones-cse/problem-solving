var isPalindrome = function (s) {
  const str = s
    .split("")
    .filter((char) => char.match(/[a-zA-Z0-9]/))
    .join("")
    .toLowerCase();
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

const runIsPalindrome = () => {
  console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
  console.log(isPalindrome("race a car")); // false
};

export default runIsPalindrome;
