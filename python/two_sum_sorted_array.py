# 167. Two Sum II - Input Array Is Sorted
# https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
from typing import List

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        l,r=0,len(numbers)-1
        while l<r:
            if numbers[l]+numbers[r] > target:
                r-=1
                continue
            if numbers[l]+numbers[r] < target:
                l+=1
                continue
            if numbers[l]+numbers[r] == target:
                return [l+1,r+1]
        return True;

    def runSumSortedArray(self):
        print(self.twoSum([2,7,11,15],9)) #[1,2]
        print(self.twoSum([2,3,4],6)) #[1, 3]
        print(self.twoSum([-1,0],-1)) #[1, 2]