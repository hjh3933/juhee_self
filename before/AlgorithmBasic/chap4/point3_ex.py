tree = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
    [11, 12],
    [13, 14],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
]

# 너비우선탐색
data = [0]

while len(data) > 0:
    pos = data.pop(0)
    print(pos, end=" ")
    for i in tree[pos]:
        data.append(i)

# 출력결과: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14
print("\n")


# 깊이우선탐색
# 전위순회
def searchF(pos):
    print(pos, end=" ")
    for i in tree[pos]:
        searchF(i)  # 재귀적으로 탐색


searchF(0)
# 출력결과: 0 1 3 7 8 4 9 10 2 5 11 12 6 13 14
print("\n")


# 후위순회
def searchL(pos):
    for i in tree[pos]:
        searchL(i)
    print(pos, end=" ")


searchL(0)
# 출력결과: 7 8 3 9 10 4 1 11 12 5 13 14 6 2 0
print("\n")


# 중위순회
def searchM(pos):
    if len(tree[pos]) == 2:
        searchM(tree[pos][0])
        print(pos, end=" ")
        searchM(tree[pos][1])
    elif len(tree[pos]) == 1:
        searchM(tree[pos][0])
        print(pos, end=" ")
    else:
        print(pos, end=" ")


searchM(0)
# 출력결과: 7 3 8 1 9 4 10 0 11 5 12 2 13 6 14
