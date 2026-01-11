import sys

input = sys.stdin.readline
# 006
n = int(input())
count = 1
start_index = 1
end_index = 1
sum = 1

while end_index != n:
    if sum == n:
        count += 1
        end_index += 1
        sum += end_index
    elif sum > n:
        sum -= start_index
        start_index += 1
    else:
        end_index += 1
        sum += end_index

print(count)

### 007
N = int(input())
M = int(input())
A = list(map(int, input().split()))
A.sort()
i = 0
j = N - 1
count = 0

while i < j:
    if A[i] + A[j] < M:
        i += 1
    elif A[i] + A[j] > M:
        j -= 1
    else:
        count += 1
        i += 1
        j -= 1

print(count)

### 008
N = int(input())
Result = 0
A = list(map(int, input().split()))
A.sort()

for k in range(N):
    # 변수 초기화
    find = A[k]
    i = 0
    j = N - 1
    while i < j:
        if A[i] + A[j] == find:
            if i != k and j != k:
                Result += 1
                break
            elif i == k:
                i += 1
            elif j == k:
                j -= 1
        elif A[i] + A[j] > find:
            j -= 1
        else:
            i += 1

print(Result)
