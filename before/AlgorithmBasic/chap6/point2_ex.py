# 변 리스트
edges = [
    [0, 1, 4],
    [0, 2, 3],
    [1, 2, 1],
    [1, 3, 1],
    [1, 4, 5],
    [2, 5, 2],
    [4, 6, 2],
    [5, 4, 1],
    [5, 6, 4],
]


def bellman_ford(edges, num_v):
    # 첫요소(시작점) 제외한 정점값 무한대로 초기화
    dist = [float("inf") for i in range(num_v)]
    dist[0] = 0
    # 갱신상태 관리
    changed = True

    while changed:
        changed = False
        for edge in edges:
            # B정점값 > A정점 + 변
            if dist[edge[1]] > dist[edge[0]] + edge[2]:
                # 더 작은 값으로 갱신
                dist[edge[1]] = dist[edge[0]] + edge[2]
                # 갱신여부
                changed = True
    # 모두 갱신이 안되는 경우의 dist를 리턴
    return dist


print(bellman_ford(edges, 7))
