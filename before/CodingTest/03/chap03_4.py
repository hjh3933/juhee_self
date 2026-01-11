import sys

input = sys.stdin.readline

# 009
# 변수선언
checkList = [0] * 4
myList = [0] * 4
checkSecret = 0  # 몇 개의 문자와 관련된 개수를 충족했는지 판단


# 함수선언
def myadd(c):
    global checkList, myList, checkSecret
    if c == "A":
        myList[0] += 1
        if myList[0] == checkList[0]:
            checkSecret += 1
    elif c == "C":
        myList[1] += 1
        if myList[1] == checkList[1]:
            checkSecret += 1
    elif c == "G":
        myList[2] += 1
        if myList[2] == checkList[2]:
            checkSecret += 1
    elif c == "T":
        myList[3] += 1
        if myList[3] == checkList[3]:
            checkSecret += 1


def myremove(c):
    global checkList, myList, checkSecret
    if c == "A":
        if myList[0] == checkList[0]:
            checkSecret -= 1
        myList[0] -= 1
    elif c == "C":
        if myList[1] == checkList[1]:
            checkSecret -= 1
        myList[1] -= 1
    elif c == "G":
        if myList[2] == checkList[2]:
            checkSecret -= 1
        myList[2] -= 1
    elif c == "T":
        if myList[3] == checkList[3]:
            checkSecret -= 1
        myList[3] -= 1


S, P = map(int, input().split())
A = list(input())
checkList = list(map(int, input().split()))
result = 0

for i in range(len(checkList)):
    if checkList[i] == 0:
        checkSecret += 1

for i in range(P):
    myadd(A[i])

if checkSecret == 4:
    result += 1

for i in range(P, S):
    j = i - P
    myadd(A[i])
    myremove([A[j]])
    if checkSecret == 4:
        result += 1

# print(result)

# 010
from collections import deque

N, L = map(int, input().split())
mydeque = deque()
now = list(map(int, input().split()))

# 새로운 값이 들어올 때 정렬 대신 현재 수 보다 큰 값을 덱에서 제거
for i in range(N):
    while mydeque and mydeque[-1][0] > now[i]:
        mydeque.pop()
    mydeque.append((now[i], i))
    if mydeque[0][1] <= i - L:
        mydeque.popleft()
    print(mydeque[0][0], end=" ")
