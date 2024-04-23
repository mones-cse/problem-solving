// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/

// solution 1
// const containsDuplicate = function (nums) {
//   let temp = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (temp[nums[i]] == true) {
//       return true;
//     } else {
//       temp[nums[i]] = true;
//     }
//   }
//   return false;
// };

// solution 2
var containsDuplicate = function (nums) {
  const s = new Set(nums);
  return s.size !== nums.length;
};

const runContainsDuplicate = () => {
  console.log(containsDuplicate([1, 2, 3])); // false
  console.log(containsDuplicate([1, 2, 3, 1])); // true
};

export default runContainsDuplicate;
