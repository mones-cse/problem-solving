// 1. Two Sum
// https://leetcode.com/problems/two-sum

// solution 1
/**
const twoSum = function (nums, target) {
    const hashObjectmap = new Map();
    for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];
      if (hashmap.get(diff) >= 0) {
        console.log("fond match");

        return [i, hashmap.get(diff)];
      } else {
        hashmap.set(nums[i], i);
      }
    }
};
 */

// solution 2
// loop and check

/**
const twoSum = function (nums, target) {
for (let i = 0; i < nums.length; i++) {
  let matchIndex = nums.indexOf(target - nums[i]);
  if (matchIndex > -1 && matchIndex != i) {
    return [i, matchIndex];
  }
}
};
*/

// solution 3
// hashobject create and check with diffrence from target
const twoSum = function (nums, target) {
  let hashObject = {};
  for (let i = 0; i < nums.length; i++) {
    hashObject[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let matchIndex = hashObject[target - nums[i]];
    if (matchIndex && matchIndex != i) {
      return [i, matchIndex];
    }
  }
};

const runTwoSum = () => {
  console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
  console.log(twoSum([3, 2, 4], 6)); // [1, 2]
  console.log(twoSum([100, 123, 123, 412, 23, 1, 7, 2], 123));
  console.log(twoSum([1, 3, 4, 2], 6));
  [1, 3, 4, 2];
};

export default runTwoSum;
