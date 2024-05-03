# 1909. Remove One Element to Make the Array Strictly Increasing
# https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/description/
from typing import List

class Solution:
    def canBeIncreasing(self, nums: List[int]) -> int:
        length = len(nums)
        if length < 3:
            return True
        if length == 3 and nums[0] == nums[1] == nums[2]:
            return False
        
        # 
        def is_duplicate(arr):
            flag = False
            for i in range(len(arr)):
                if i == len(arr)-1:
                    break
                if arr[i] == arr[i+1]:
                    flag = True
                    break
            return flag


        # generate all possible arrays
        temp = []
        for i in range(length):
            # if i == 0 or i == length-1:
            if i ==0:
                if nums[i] >= nums[i+1]:
                    temp.append([*nums[i+1:]])
            elif i == length-1:
                if nums[i-1] >=nums[i]:
                    temp.append([*nums[:i]])
            else:
                x= nums[i-1]
                y = nums[i]
                z = nums[i+1]
                if (x > y > z):
                    return False
                elif (x <= y >= z) or (x >= y <= z):
                    temp.append([*nums[:i], *nums[i+1:]])
        
        # print("temp")
        icIncreasing = False
        if len(temp) == 0:
            icIncreasing = True
        for each in temp:
            if is_duplicate(each):
                continue
            if each == sorted(each):
                icIncreasing = True
                break
      
        return icIncreasing
    
    def runCanBeIncreasing(self):
        print(self.canBeIncreasing([1]),"true") # true
        print(self.canBeIncreasing([1,2]),"true") # true
        print(self.canBeIncreasing([2,1]),"true") # true
        print(self.canBeIncreasing([1,1,1]),"false") # false
        print(self.canBeIncreasing([3,2,1]),"false") # false
        print(self.canBeIncreasing([2,1,3]),"true") # true
        print(self.canBeIncreasing([3,2,1]),"false") # false
        print(self.canBeIncreasing([1,2,3]),"true") # true
        print(self.canBeIncreasing([1,3,2]),"true") # true
        print(self.canBeIncreasing([1,2,10,5,7]),"true") # true
        print(self.canBeIncreasing([2,3,1,2]),"false") # false
        print(self.canBeIncreasing([1,1,1]),"false") # false
        print(self.canBeIncreasing([3,1,1]),"false") # false
        print(self.canBeIncreasing([105,924,32,968]),"true") # true
        print(self.canBeIncreasing([1,2,3]),"true") # true
        print(self.canBeIncreasing([1,1]),"true") # true
        print(self.canBeIncreasing([100,21,3]),"false") # false




        # def canBeIncreasing(self, nums: List[int]) -> int:
        # result=False
        # temp = []

        # def is_sorted(arr):
        #     return arr == sorted(arr)
        
        # def is_duplicate(arr):
        #     flag = False
        #     for i in range(len(arr)):
        #         if i == len(arr)-1:
        #             break
        #         if arr[i] == arr[i+1]:
        #             flag = True
        #             break
        #     return flag

        # if is_sorted(nums) and not is_duplicate(nums):
        #     return True      
        # if len(nums) == 2 and nums[0] == nums[1]:
        #     return True
        # for index, value in enumerate(nums):
        #     # print(index,value)
        #     if index == 0 and value > nums[index+1]:
        #         # print('index 0')
        #         temp.append([*nums[:index], *nums[index+1:]]) # remove the first elemen
        #     elif index == len(nums)-1 and value < nums[index-1]:
        #         # print('index last')
        #         temp.append([*nums[:index-1]])
        #     elif index !=0 and index != len(nums)-1 and nums[index-1] < value > nums[index+1]:
        #         # print('index middle')
        #         temp.append([*nums[:index], *nums[index+1:]])
        #     elif index !=0 and index != len(nums)-1 and nums[index-1] > value < nums[index+1]:
        #         # print('index middle')
        #         temp.append([*nums[:index], *nums[index+1:]])
        # # print(temp)

        # for each in temp:
        #     # if each == sorted and each[i] !< each[i+1]
        #     if is_sorted(each) and not is_duplicate(each):
        #         result = True
        #         break
            
        # return result