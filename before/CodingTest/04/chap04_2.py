import sys

input = sys.stdin.readline
print = sys.stdout.write

# 016
A = list(input())
for i in range(len(A)):
    Max = A[i]
    for j in range(i + 1, len(A)):
        Max = max(Max, A[j])
        if A[i] < Max:
            temp = A[i]
            A[i] = A[j]
            A[j] = temp

for i in range(len(A)):
    print(A[i])
