// solution 1: using sort and O(n log n)
// var longestConsecutive = function (nums) {
//   if (nums.length == 0) {
//     return 0;
//   }
//   let newNums = nums.sort((a, b) => a - b);
//   let finalMax = 0;
//   let currentMax = 1;

//   for (let i = 1; i < newNums.length; i++) {
//     if (newNums[i] == newNums[i - 1] + 1) {
//       currentMax = currentMax + 1;
//     } else if (newNums[i] == newNums[i - 1]) {
//       continue;
//     } else {
//       if (currentMax > finalMax) {
//         finalMax = currentMax;
//       }
//       currentMax = 1;
//     }
//   }
//   finalMax = finalMax > currentMax ? finalMax : currentMax;

//   return finalMax;
// };

// solution 2: O(n)
// var longestConsecutive = function (nums) {
//   if (nums.length == 0) {
//     return 0;
//   }
//   const collection = new Map();
//   const header = [];
//   let currentMax = 1;
//   let finalMax = 0;
//   nums.map((each) => collection.set(each, each));

//   for (let [key, value] of collection) {
//     if (!collection.get(value - 1)) {
//       header.push(value);
//     }
//   }

//   for (let i = 0; i < header.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (collection.get(header[i] + currentMax) != undefined) {
//         currentMax = currentMax + 1;
//       } else {
//         finalMax = Math.max(currentMax, finalMax);
//         currentMax = 0;
//         break;
//       }
//     }
//   }

//   return Math.max(finalMax, currentMax);
// };

//solution 2 simplified using set
var longestConsecutive = function (nums) {
  let currentMax = 0;
  let finalMax = 0;
  const collection = new Set(nums);

  nums.map((num) => {
    if (!collection.has(num - 1)) {
      while (collection.has(num + currentMax)) {
        currentMax = currentMax + 1;
      }
      finalMax = Math.max(currentMax, finalMax);
      currentMax = 0;
    }
  });
  return Math.max(finalMax, currentMax);
};

const runLongestConsecutive = () => {
  console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); //4
  console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); //9
  console.log(longestConsecutive([1, 2, 0, 1])); //3
  console.log(longestConsecutive([0, -1])); //2
  console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])); //7
};

export default runLongestConsecutive;
