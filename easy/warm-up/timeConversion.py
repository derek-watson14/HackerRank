# https://www.hackerrank.com/challenges/time-conversion/problem

def timeConversion(s):
  timeCode = s[-2:]
  t = s[0:-2].split(":")
  if timeCode == "AM":
    return f'{"00" if t[0] == "12" else t[0]}:{t[1]}:{t[2]}'
  else:
    return f'{"12" if t[0] == "12" else 12 + int(t[0])}:{t[1]}:{t[2]}'


testS = "12:05:39AM"

print(timeConversion(testS))
# 00:05:39
