# 136. Single Number
# https://leetcode.com/problems/single-number/description/
from typing import List
class Solution:
    # solution 1
    # def singleNumber(self, nums: List[int]) -> int:
    #     my_dict ={}
    #     for each in nums:
    #         my_dict[each]=my_dict.get(each)+1 if my_dict.get(each) else 1
        
    #     for key,value in my_dict.items():
    #         if value == 1:
    #             return key

    # solution 2
    def singleNumber(self, nums: List[int]) -> int:
        result=nums[0]
        for i in range(1,len(nums)):
            result = result^nums[i]
        return result
        
    
    def runSingleNumber(self):
        print(self.singleNumber([2,2,1]))
        print(self.singleNumber([4,1,2,1,2]))
        print(self.singleNumber([1]))