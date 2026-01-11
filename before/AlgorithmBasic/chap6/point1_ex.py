# 경로의 수 구하기
# 1. 동적계획법
M, N = 6, 5  # M은 가로 칸수, N은 세로칸수를 의미한다 각각 M은 열, N은 행을 의미하게 됨

route = [[0 for i in range(N + 1)] for j in range(M + 1)]

# 가로 방향의 첫 1행을 설정
for i in range(M + 1):
    route[i][0] = 1

for i in range(1, N + 1):
    # 세로 방향의 첫 1열을 설정
    route[0][i] = 1
    for j in range(1, M + 1):
        # 왼쪽과 아래쪽의 교차점에 적혀 있는 숫자를 더함
        route[j][i] = route[j - 1][i] + route[j][i - 1]

print(route[M][N])

# 2. 메모이제이션
import functools

M, N = 6, 5


# 파이썬에서는 아래 1행만 추가하면 재귀처리를 메모이제이션 할 수 있다
@functools.lru_cache(maxsize=None)
def search(m, n):
    # 가로 세로 첫 줄은 모두 1로 설정
    if (m == 0) or (n == 0):
        return 1

    # 왼쪽경로와 위쪽경로를 더한값을 출력
    return search(m - 1, n) + search(m, n - 1)


print(search(M, N))

# 미로 탈출
# 5 6
# 101010
# 111111
# 000001
# 111111
# 111111

n, m = map(int, input().split())
maze = []

for _ in range(n):
    maze.append(list(map(int, input())))

# 시작위치
pos = [[0, 0, 0]]

while len(pos) > 0:
    x, y, depth = pos.pop(0)
    if x == n - 1 and y == m - 1:
        print(depth + 1)
        break
    # 탐색완료 설정
    maze[x][y] = 2
    # 상하좌우(동시)탐색
    if y - 1 >= 0 and maze[x][y - 1] == 1:
        pos.append([x, y - 1, depth + 1])
    if y + 1 < m and maze[x][y + 1] == 1:
        pos.append([x, y + 1, depth + 1])
    if x - 1 >= 0 and maze[x - 1][y] == 1:
        pos.append([x - 1, y, depth + 1])
    if x + 1 < n and maze[x + 1][y] == 1:
        pos.append([x + 1, y, depth + 1])
