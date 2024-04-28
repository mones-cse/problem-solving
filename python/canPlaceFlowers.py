# 11. Container With Most Water
# https://leetcode.com/problems/container-with-most-water/description/
from typing import List

class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        count = 0
        for index, value in enumerate(flowerbed):
            if index == 0 and value == 0 and flowerbed[index + 1] == 0:
                print('match found at index ', index)
                flowerbed[index] = 1
                count += 1
            elif index == len(flowerbed) - 1 and value == 0 and flowerbed[index -
                                                                            1] == 0:
                flowerbed[index] = 1
                count += 1
                print('match found at index ', index)
            elif value == 0 and flowerbed[index - 1] == 0 and flowerbed[index +
                                                                        1] == 0:
                flowerbed[index] = 1
                count += 1
                print('match found at index ', index)

        return count >= n
    
    def runMaxArea(self):
        print(self.canPlaceFlowers([1,0,0,0,1],1)) # true
        print(self.canPlaceFlowers([1,0,0,0,1],2)) # false
        print(self.canPlaceFlowers([0,0,1,0,0,0,0,0,1,0,0],4)) # false
        