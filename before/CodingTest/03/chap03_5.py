import sys
from collections import deque
from queue import PriorityQueue

input = sys.stdin.readline
print = sys.stdout.write

# 011
N = int(input())
A = [0] * N
for i in range(N):
    A[i] = int(input())

stack = []
num = 1
result = True
answer = []

for i in range(N):
    su = A[i]
    if su >= num:
        while su >= num:
            stack.append(num)
            num += 1
            answer.append("+")
        stack.pop()
        answer.append("-")
    else:
        n = stack.pop()
        if n > su:
            print("NO")
            result = False
            break
        else:
            answer.append("-")

if result:
    for i in answer:
        print(i)

# 012
N = int(input())
A = list(map(int, input().split()))
ans = [0] * N
myStack = []

for i in range(N):
    while myStack and A[myStack[-1]] < A[i]:
        ans[myStack.pop()] = A[i]
    myStack.append(i)  # 인덱스를 저장

while myStack:
    ans[myStack.pop()] = -1

for i in range(N):
    print(ans[i], end=" ")

# 013
N = int(input())
myQueue = deque()

for i in range(1, N + 1):
    myQueue.append(i)

while len(myQueue) > 1:
    myQueue.popleft()
    myQueue.append(myQueue.popleft())

print(myQueue[0])

# 014
N = int(input())
myQueue = PriorityQueue()

for i in range(N):
    request = int(input())
    if request == 0:
        if myQueue.empty():
            print("0\n")
        else:
            temp = myQueue.get()
            print(str((temp[1])) + "\n")
    else:
        myQueue.put((abs(request), request))
