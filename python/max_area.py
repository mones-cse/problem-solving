# 11. Container With Most Water
# https://leetcode.com/problems/container-with-most-water/description/
from typing import List

class Solution:
    # solution 1: brute force O(n^2)
    # def maxArea(self, height: List[int]) -> int:
    #     result=0
    #     for i,value in enumerate(height):
    #         for j,each in enumerate(height[i+1:],i+1):
    #             prod = min(value,each)*(j-i)
    #             result=max(result,prod)
    #     return result

    # solution 2
    def maxArea(self, height: List[int]) -> int:
        result=0
        l,r=0,len(height)-1
        while l <r:
            result=max(result,min(height[l],height[r])*(r-l))
            if height[r]>height[l]:
                l=l+1
            else:
                r=r-1

        return result
    
    def runMaxArea(self):
        print(self.maxArea([1,8,6,2,5,4,8,3,7])) #49
        print(self.maxArea([1,1])) #1