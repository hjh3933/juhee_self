import os


# 하노이의 탑
# 남은 장수, 현재 위치, 이동 위치, 경유 장소
def hanoi(n, src, dist, via):
    if n > 1:
        # 하노이의 탑
        hanoi(n - 1, src, via, dist)  # n-1장을 현재 위치에서 경유 장소로 옮김
        print(src + "->" + via)
        hanoi(n - 1, via, dist, src)  # n-1장을 경유 장소에서 이동 위치로 옮김
    else:
        print(src + "->" + dist)


n = int(input())
hanoi(n, "a", "b", "c")


# GPT 예제 풀어보기
def hanoiPrac(n, src, dest, temp):
    if n > 1:
        hanoiPrac(n - 1, src, temp, dest)
        print(f"원판 {n}: {src}->{dest}")
        hanoiPrac(n - 1, temp, dest, src)
    else:
        print(f"원판 {n}: {src}->{dest}")


hanoiPrac(4, "A", "C", "B")


# 폴더 속 book이라는 이름의 폴더 or 파일 찾기
# DFS
def search(dir, name):
    for i in os.listdir(dir):
        if i == name:
            print(dir + i)
        if os.path.isdir(dir + i):
            if os.access(dir + i, os.R_OK):
                search(dir + i + "/", name)


search("C:/book", "book")
# BFS
queue = "C:/book"
while len(queue) > 0:
    dir = queue.pop()
    for i in os.listdir(dir):
        if i == "book":
            print(dir + i)
        if os.path.isdir(dir + i):
            if os.access(dir + i, os.R_OK):
                queue.append(dir + i + "/")
