import random

# N=100
findNumber = random.randrange(1, 101)

for i in range(1, 101):
    if i == findNumber:
        print(i)
        break
# 빅 오메가: 1번
# 빅 세타1: N/2번
# 빅 오: N번

# 시간 복잡도에 따른 코드 개선
N = 100000
cnt = 1

for i in range(N):
    print("연산횟수" + str(cnt))
    cnt += 1
# N

for i in range(N):
    print("연산횟수" + str(cnt))
    cnt += 1
for i in range(N):
    print("연산횟수" + str(cnt))
    cnt += 1
for i in range(N):
    print("연산횟수" + str(cnt))
    cnt += 1
# 3N

for i in range(N):
    for j in range(N):
        print("연산횟수" + str(cnt))
        cnt += 1
# N^2
