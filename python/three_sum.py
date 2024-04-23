from typing import List

class Solution:
    # try 1 but failed: Time Limit Exceeded
    # def threeSum(self, nums: List[int]) -> List[List[int]]:
    #     sortedNums= sorted(nums)
    #     result =[]
    #     for index,each in enumerate(sortedNums):
    #         l=index+1
    #         r=len(sortedNums)-1
    #         while l<r:
    #             currentSum = each + sortedNums[l]+ sortedNums[r]
    #             if currentSum == 0:
    #                 result.append([each,sortedNums[l], sortedNums[r]])
    #                 r-=1
    #             elif currentSum >0:
    #                 r-=1
    #             else:
    #                 l+=1
    #     unique_tuples = set(map(tuple, result))
    #     unique_list = [list(t) for t in unique_tuples]
                
    #     return unique_list

    # solution 2:bruteforce  
    # failed: Time Limit Exceeded
    # def threeSum(self, nums: List[int]) -> List[List[int]]:
    #     print('------------------------------------------------')
    #     nums=sorted(nums)
    #     n= len(nums)
    #     result=[]
    #     for i in range(n):
    #         for j in range(i+1,n):
    #             for k in range(j+1,n):
    #                 # print(i,j,k)
    #                 # print(nums[i],nums[j],nums[k])
    #                 if nums[i]+nums[j]+nums[k]==0:
    #                     result.append([ nums[i],nums[j],nums[k]])
        
    #     unique_tuples = set(map(tuple, result))
    #     unique_list = [list(t) for t in unique_tuples]
    #     return unique_list

    # solution 3: accepted
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        print('------------------------------------------------')
        nums.sort()
        n= len(nums)
        result=[]
        for i,each in enumerate(nums):
            # as nums sorted if each > 0 means all the value on the right side 
            # are higher than 0 so there is no way sum will be 0. So, break.
            if each > 0:
                break
            if i>0 and each == nums[i-1]:
                continue
            l=i+1
            r=len(nums)-1
            while l<r:
                currentSum = each + nums[l]+ nums[r]
                if currentSum == 0:
                    result.append([each,nums[l], nums[r]])
                    r=r-1
                    while nums[r] == nums[r+1] and l<r:
                        r=r-1
                elif currentSum >0:
                    r-=1
                else:
                    l+=1
        return result

                

    
    def runThreeSum(self):
        print(self.threeSum([-1,0,1,2,-1,4]))       #[[-1, 0, 1], [-1, -1, 2]]
        print(self.threeSum([-1,0,1,2,-1,-4]))        #[[-1, -1, 2], [-1, 0, 1]]
        print(self.threeSum([0,1,1]))               #[]
        print(self.threeSum([0,0,0]))               #[[0, 0, 0]]
        print(self.threeSum([0,0,0,0]))             #[[0, 0, 0]]
        print(self.threeSum([-2,0,1,1,2]))          #[[-2, 0, 2], [-2, 1, 1]]