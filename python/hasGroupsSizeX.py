# 914. X of a Kind in a Deck of Cards
# https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/
from typing import List
import math
from collections import Counter

class Solution:
    # without using library
    # def hasGroupsSizeX(self, deck: List[int]) -> bool:
    #     tempHash = {}
    #     tempList = []
    #     # hash table
    #     for i in deck:
    #         tempHash[i] = tempHash.get(i, 0) + 1

    #     #has table to value
    #     for i in tempHash:
    #         tempList.append(tempHash.get(i))

    #     # # find GCD

    #     min_value = min(tempList)
    #     gcd = -1
    #     for i in range(min_value, 0, -1):
    #         if all(eacg % i == 0 for eacg in tempList):
    #             gcd = i
    #             print(i)
    #             break

    #     return gcd > 1

    # using library
    def hasGroupsSizeX(self, deck: List[int]) -> bool:
        tempHash = Counter(deck)
        tempList = tempHash.values()
        gcd = math.gcd(*tempList)
        return gcd> 1

    def runHasGroupsSizeX(self):
        print(self.hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])) #true
        print(self.hasGroupsSizeX([1]))  # False
        print(self.hasGroupsSizeX([1, 1, 2, 2, 2, 2]))  # False
