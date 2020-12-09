def substrCount(n, s):
    l = []
    count = 0
    cur = None

# 1st pass: compress str to ordered count ie. m:1 n:1 o:1 n:1 o:1 p:1 o:2 but tuples
    for i in range(n):
        if s[i] == cur:
            count += 1
        else:
            if cur is not None:
                l.append((cur, count))
            cur = s[i]
            count = 1
    l.append((cur, count))
    count = 0
		
# 2nd pass: count all the non-palindrome single strings
    for i in l:
        # Counts # of single letter palindromes produced per tuple in l
        count += (i[1] * (i[1] + 1)) // 2

# 3rd pass: count special palindrome strings with a single char in middle
    for i in range(1, len(l) - 1):
        # if the chars to the left and right of a char are the same
        if l[i - 1][0] == l[i + 1][0] and l[i][1] == 1:
            # the # of additional SS this creates is the lower count of
            # the two matching char counts on either side
            count += min(l[i - 1][1], l[i + 1][1])

    return count

testN = 8
testS = 'mnonopoo'

print(substrCount(testN, testS))