# https://www.hackerrank.com/challenges/python-quest-1/problem
# More than 2 lines will result in 0 score. Do not leave a blank line also
# Note: Using anything related to strings will give a score of 0.

def triangle_function(input):
    for i in range(1, input):
        print(i * [1, 11, 111, 1111, 11111, 111111,
                   1111111, 11111111, 111111111][i - 1])


triangle_function(9)
