# 디버깅 활용사례
import random

testcase = int(input())  # testcase: 5
answer = 0
A = [0] * (100001)

for i in range(0, 10001):
    A[i] = random.randrange(1, 101)

for t in range(1, testcase + 1):  # t: 2
    start, end = map(int, input().split())  # start: 1, end: 10

    for i in range(start, end + 1):
        answer = answer + A[i]

    print(str(testcase) + " " + str(answer / 2))
