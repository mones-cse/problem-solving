# String Encode and Decode
# https://neetcode.io/problems/string-encode-and-decode
from typing import List
import re

class Solution:

    def encode(self, strs: List[str]) -> str:
        temp=""
        for i in range(len(strs)):
            temp=temp+str(len(strs[i]))+'#'+strs[i]
        return temp

    def decode(self, s: str) -> List[str]:
        temp =[]
        pattern = r'(\d+)#'
        while (len(s)>0):
            matche = re.findall(pattern, s)
            if matche:
                bite_size = matche[0]
                lenghth_of_bite= len(bite_size)+1
                temp.append(s[lenghth_of_bite:lenghth_of_bite+int(bite_size)])
                s=s[lenghth_of_bite+int(bite_size):]
        return temp


    def runSolution(self):
        print(self.encode(["we","say",":","yes","!@#$%^&*()"]))
        print(self.decode("2#we3#say1#:3#yes10#!@#$%^&*()"))
        print('-----------------------------------')
        print(self.encode(["hello", "world"]))
        print(self.decode("5#hello5#world"))