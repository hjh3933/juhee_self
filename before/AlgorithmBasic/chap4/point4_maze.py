maze = [
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 9],
    [9, 0, 9, 0, 0, 0, 9, 9, 0, 9, 9, 9],
    [9, 0, 9, 9, 0, 9, 0, 0, 0, 9, 0, 9],
    [9, 0, 0, 0, 9, 0, 0, 9, 9, 0, 9, 9],
    [9, 9, 9, 0, 0, 9, 0, 9, 0, 0, 0, 9],
    [9, 0, 0, 0, 9, 0, 9, 0, 0, 9, 1, 9],
    [9, 0, 9, 0, 0, 0, 0, 9, 0, 0, 9, 9],
    [9, 0, 0, 9, 0, 9, 0, 0, 9, 0, 0, 9],
    [9, 0, 9, 0, 9, 0, 9, 0, 0, 9, 0, 9],
    [9, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
]
# 시작위치(x좌표, y좌표, 이동 횟수)
pos = [[1, 1, 0]]

# 너비우선탐색
while len(pos) > 0:
    x, y, depth = pos.pop(0)  # maze에서 탐색할 위치를 얻음
    # 탐색 좌표가 목표위치일 경우 종료
    if maze[x][y] == 1:
        print(depth)
        break
    # 탐색완료로 설정
    maze[x][y] = 2
    # 상하좌우탐색
    if maze[x][y - 1] < 2:
        pos.append([x, y - 1, depth + 1])
    if maze[x][y + 1] < 2:
        pos.append([x, y + 1, depth + 1])
    if maze[x - 1][y] < 2:
        pos.append([x - 1, y, depth + 1])
    if maze[x + 1][y] < 2:
        pos.append([x + 1, y, depth + 1])

print("\n" + "===============")


# 깊이우선탐색
def search(x, y, depth):
    # 탐색 좌표가 목표위치일 경우 종료
    if maze[x][y] == 1:
        print(depth)
        exit()
    # 탐색완료로 설정
    maze[x][y] = 2
    # 상하좌우탐색
    if maze[x][y - 1] < 2:
        search(x, y - 1, depth + 1)
    if maze[x][y + 1] < 2:
        search(x, y + 1, depth + 1)
    if maze[x - 1][y] < 2:
        search(x - 1, y, depth + 1)
    if maze[x + 1][y] < 2:
        search(x + 1, y, depth + 1)
    # 탐색 전으로 되돌리기
    maze[x][y] = 0


search(1, 1, 0)

# 우수법
# 상하좌우 방향 설정
dir = [[1, 0], [0, 1], [-1, 0], [0, -1]]

# 시작위치, 횟수, 방향 설정
x, y, depth, d = 1, 1, 0, 0

while maze[x][y] != 1:
    # 탐색완료 설정
    maze[x][y] = 2
    # 우수법으로 탐색
    for i in range(len(dir)):
        # 진행 방향의 오른쪽부터 순서대로 탐험
        j = (d + i - 1) % len(dir)
        if maze[x + dir[j][0]][y + dir[j][1]] < 2:
            # 방문하지 않은 경우에는 진행하여 이동 횟수를 늘림
            x += dir[j][0]
            y += dir[j][1]
            d = j
            depth += 1
            break
        elif maze[x + dir[j][0]][y + dir[j][1]] == 2:
            # 이미 방문한 경우에는 진행하여 이동 횟수를 줄임
            x += dir[j][0]
            y += dir[j][1]
            d = j
            depth -= 1
            break

print(depth)
