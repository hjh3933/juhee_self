N = 8


def check(x, col):
    # 현재 퀸을 놓으려는 행
    current_row = len(col)
    for row, y in enumerate(col):  # 각 요소와 인덱스를 함께 꺼내줌
        # 현재 행과 이전에 놓은 퀸의 행 차이 == 현재 열과 이전 퀸의 열 차이의 절댓값이 같은 경우 대각선 이동을 의미한다
        if abs(current_row - row) == abs(x - y):
            return False
    return True


def search(col):
    # 전부 배치되면 출력
    if len(col) == N:
        print(col)
        return

    for i in range(N):
        if i not in col:
            if check(i, col):
                col.append(i)
                search(col)
                col.pop()  # 돌아오면 꼭 지워야, 다음 i를 시도 가능(백트래킹)


search([])
