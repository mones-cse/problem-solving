// 347. Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements/

// solution 1
/**
const topKFrequent = function (nums, k) {
  // make a hash object
  // create array lenght of nums.lenght with empty array
  // from the hash based on value push the key into the array
  // pop array till all the empty array is gone
  // push last k elements to the result
  const hashObject = {};
  for (let i = 0; i < nums.length; i++) {
    hashObject[nums[i]] = hashObject[nums[i]] + 1 || 1;
  }
  const bucket = [];
  for (let i = 0; i < nums.length; i++) {
    bucket.push([]);
  }

  for (const [key, value] of Object.entries(hashObject)) {
    bucket[value - 1].push(key);
  }
  let result = [];
  for (let i = bucket.length - 1; i > -1; i--) {
    if (bucket[i].length == 0) {
      continue;
    }
    result = [...result, ...bucket[i]];
  }

  result = result.splice(0, k);

  return result;
};
 */

// solution 2
/**
const topKFrequent = function (nums, k) {
  const hashObject = {};
  for (let i = 0; i < nums.length; i++) {
    hashObject[nums[i]] = hashObject[nums[i]] + 1 || 1;
  }

  let bucket = [];
  for (let i = 0; i < nums.length; i++) {
    bucket.push([]);
  }

  for (const [key, value] of Object.entries(hashObject)) {
    bucket[value - 1] = bucket[value - 1] ? [...bucket[value - 1], key] : key;
  }

  let result = [];
  for (let i = bucket.length - 1; i > -1; i--) {
    if (bucket[i].length == 0) {
      continue;
    }

    for (let j = 0; j < bucket[i].length; j++) {
      if (result.length >= k) {
        console.log("now break");
        break;
      }
      result.push(bucket[i][j]);
    }
  }
  return result;
};
 */

// solution 2
const topKFrequent = function (nums, k) {
  const hashMap = new Map();
  nums.forEach((element) => {
    hashMap.set(element, (hashMap.get(element) || 0) + 1);
  });
  let temp = Array.from(hashMap).sort((curr, next) => next[1] - curr[1]);

  return temp.splice(0, k).map((each) => each[0]);
};

const runTopKFrequent = () => {
  console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]
  console.log(topKFrequent([1], 1)); // [1]
  console.log(topKFrequent([-1, -1], 1)); // [1]
};

export default runTopKFrequent;
