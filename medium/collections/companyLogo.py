# https://www.hackerrank.com/challenges/most-commons/problem
#!/bin/python3

from collections import Counter


def discussion_solution(s):
    chars = Counter(s).items()

    for char, n in sorted(chars, key=lambda c: (-c[1], c[0]))[:3]:
        print(char, n)


def logo_letters(s):
    l_dict = dict()
    for l in s:
        if l in l_dict:
            l_dict[l] += 1
        else:
            l_dict[l] = 1
    l_li = sorted(l_dict.items(), key=lambda e: (e[1]), reverse=True)

    grouped = []
    current_letter = l_li[0][1]
    current_group = []
    for letter in l_li:
        if letter[1] == current_letter:
            current_group.append(letter)
            if letter == l_li[-1]:
                grouped.append(current_group)
        else:
            grouped.append(current_group)
            current_letter = letter[1]
            current_group = []
            current_group.append(letter)

    sorted_groups = []
    for group in grouped:
        sorted_groups.append(sorted(group, key=lambda e: (e[0])))

    counter = 0
    for group in sorted_groups:
        for letter in group:
            if counter < 3:
                print(letter[0], letter[1])
                counter += 1
            else:
                break


samp_s = "aabbbccde"
goog_s = "googleeeaa"

logo_letters(goog_s)
discussion_solution(goog_s)
