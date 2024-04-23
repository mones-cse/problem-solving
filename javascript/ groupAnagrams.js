//49. Group Anagrams
//https://leetcode.com/problems/group-anagrams/

// solution 1
// const groupAnagrams = (strs) => {
//   let hashTable = {};
//   for (let i = 0; i < strs.length; i++) {
//     let temp = strs[i].split("").sort().join("");
//     hashTable[temp] = hashTable[temp]
//       ? [...hashTable[temp], strs[i]]
//       : [strs[i]];
//   }
//   return Object.values(hashTable);
// };

// solution 2
const groupAnagrams = (strs) => {
  let hashTable = {};
  strs.forEach((element) => {
    let sortedString = element.split("").sort().join("");
    hashTable[sortedString] = hashTable[sortedString]
      ? [...hashTable[sortedString], element]
      : [element];
  });
  return Object.values(hashTable);
};

// solution 3
// var groupAnagrams = function (strs) {
//   const mp = new Map();
//   const ans = [];

//   for (const str of strs) {
//     const sortedStr = str.split("").sort().join("");
//     if (mp.has(sortedStr)) {
//       ans[mp.get(sortedStr)].push(str);
//     } else {
//       mp.set(sortedStr, ans.length);
//       ans.push([str]);
//     }
//   }

//   return ans;
// };

const runGroupAnagrams = () => {
  console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
};

export default runGroupAnagrams;
