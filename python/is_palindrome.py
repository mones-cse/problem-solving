# 125. Valid Palindrome
# https://leetcode.com/problems/valid-palindrome/description/
# solution 2

class Solution:
    def isPalindrome(self, s: str) -> bool:
        l = 0
        r = len(s)-1

        while l<r :
            if not s[l].isalnum():
                l=l+1
                continue
            if not s[r].isalnum():
                r=r-1
                continue
            if s[l].lower()==s[r].lower():
                l=l+1
                r=r-1
            else:
                return False
                
        return True

    
    def runSolution(self):
        print(self.isPalindrome("A man, a plan, a canal: Panama")) # true
        print(self.isPalindrome("race a car")) # false