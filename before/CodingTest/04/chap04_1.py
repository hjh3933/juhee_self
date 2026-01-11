import sys

input = sys.stdin.readline

# 015
N = int(input())
A = [0] * N

for i in range(N):
    num = int(input())
    A[i] = num

for i in range(N - 1):
    for j in range(N - 1 - i):
        if A[j] > A[j + 1]:
            temp = A[j]
            A[j] = A[j + 1]
            A[j + 1] = temp

for i in range(N):
    print(A[i])

# 016
N = int(input())
A = []

for i in range(N):
    # (값, 인덱스)
    A.append((int(input()), i))

Max = 0
sorted_A = sorted(A)

for i in range(N):
    if sorted_A[i][1] - i > Max:
        Max = sorted_A[i][1] - i

print(Max + 1)
