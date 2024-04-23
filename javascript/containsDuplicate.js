// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/

const containsDuplicate = function (nums) {
  let temp = [];
  for (let i = 0; i < nums.length; i++) {
    if (temp[nums[i]] == true) {
      return true;
    } else {
      temp[nums[i]] = true;
    }
  }
  return false;
};

const runContainsDuplicate = () => {
  console.log(containsDuplicate([1, 2, 3])); // false
  console.log(containsDuplicate([1, 2, 3, 1])); // true
};

export default runContainsDuplicate;
