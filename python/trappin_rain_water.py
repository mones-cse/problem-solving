# 42. Trapping Rain Water
# https://leetcode.com/problems/trapping-rain-water/description/
from typing import List
import math 

class Solution:
    # solution 1: O(n^2)
    # def trap(self, height: List[int]) -> int:
    #     result=0
    #     l,r=0,len(height)-1
    #     while l<r:
    #         while (l<r)and (height[l+1]>height[l] or height[l]<=0):
    #             l=l+1
    #         while (l<r)and (height[r-1]>height[r] or height[r]<=0):
    #             r=r-1
    #         for index,value in enumerate(height[l:r]):
    #             if value <1:
    #                 result=result+1
    #         for index,value in enumerate(height):
    #             height[index]=height[index]-1   
    #     return result

    # solution 2: O(n)
    # def trap(self, height: List[int]) -> int:
    #     n = len(height)
    #     l_max=[]
    #     r_max=[]
    #     result = 0;
    #     for i in range(n):
    #         if i==0:
    #             l_max.append(0)
    #         else:
    #             l_max.append(max(height[:i]))
        
    #     for i in range(n,0,-1):
    #         if i==n:
    #             r_max.insert(0,0)
    #         else:
    #             r_max.insert(0,max(height[i:]))

    #     for i in range(n):
    #         minHeight = min(l_max[i],r_max[i])
    #         if minHeight > height[i]:
    #             result =result + minHeight-height[i]

    #     return result

    # solution 3: O(1)
    def trap(self, height: List[int]) -> int:
        l=0
        r=len(height)-1
        leftMax=height[l]
        rightMax=height[r]
        result=0
        
        while l<r:
            if leftMax < rightMax:
                l+=1
                leftMax = max(leftMax,height[l])
                result+=leftMax-height[l]
                
            else:
                r-=1
                rightMax = max(rightMax,height[r])
                result+=rightMax-height[r]
            
        return result
    
    def runTrap(self):
        print(self.trap([0,1,0,2,1,0,1,3,2,1,2,1])) #6
        print(self.trap([4,2,0,3,2,5])) #9
        print(self.trap([2,0,2])) #2
        print(self.trap([1,2,1])) #0
    