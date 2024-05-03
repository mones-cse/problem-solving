# 20. Valid Parentheses
# https://leetcode.com/problems/valid-parentheses/description/
from typing import List

class Solution:

    # solution 2: using point O(n)
    def isValid(self, s: str) -> bool:
       if len(s) == 0:
            return False
       stack = []
       bracket = {
              ")":"(",
              "}":"{",
              "]":"["
       }
       for each in s:
            if each in bracket.values():
                stack.append(each)
            elif each in bracket.keys():
                if stack == []:
                    return False
                if stack[-1] == bracket[each]:
                    stack.pop()
                else:
                    return False
        
       
       return True if stack == [] else False
    
    def runIsValidParentheses(self):
        print(self.isValid("{}"),"true")
        print(self.isValid("{[]}"),"true")
        print(self.isValid("{[()]}"),"true")
        print(self.isValid("{[()]}()"),"true")
        print(self.isValid("(){}[]"),"true")
        print(self.isValid("}"),"false") 
        print(self.isValid("})"),"false") 
        print(self.isValid("({"),"false") 
        print(self.isValid("(}{)"),"false") 
        print(self.isValid("{[}]"),"false") 
        print(self.isValid(""),"false") 
        print(self.isValid("("),"false") 
        print(self.isValid("(()"),"false") 