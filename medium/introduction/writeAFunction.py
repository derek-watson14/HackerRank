# https://www.hackerrank.com/challenges/write-a-function/problem

def is_leap(year):
    leap = False

    # Write your logic here
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                leap = True
            leap = False
        leap = True

    return leap


test = 1990

is_leap(test)
# False
