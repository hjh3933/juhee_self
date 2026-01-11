def dijkstra(edges, num_v):
    dist = [float("inf")] * num_v
    dist[0] = 0
    # q: 정점 리스트, 0-6
    q = [i for i in range(num_v)]

    while len(q) > 0:
        # 가장 비용이 적은 정점을 찾기
        r = q[0]
        for i in q:
            if dist[i] < dist[r]:
                r = i

        # 가장 비용이 적은 정점을 꺼내기
        u = q.pop(q.index(r))
        for i in edges[u]:
            if dist[i[0]] > dist[u] + i[1]:
                # 정점까지의 비용을 갱신할 수 있다면 갱신하기
                dist[i[0]] = dist[u] + i[1]

    return dist


# 변의 리스트(끝점과 비용의 리스트)
edges = [
    [[1, 4], [2, 3]],
    [[2, 1], [3, 1], [4, 5]],
    [[5, 2]],
    [[4, 3]],
    [[6, 2]],
    [[4, 1], [6, 4]],
    [],
]

print(dijkstra(edges, 7))


# 복잡도 개선 - 힙 구현
def min_heapify(data, i):
    left = 2 * i + 1
    right = 2 * i + 2
    min = i

    if left < len(data) and data[i][0] > data[left][0]:
        min = left
    if right < len(data) and data[min][0] > data[right][0]:
        min = right
    if min != i:
        data[i], data[min] = data[min], data[i]
        min_heapify(data, min)


def dijkstra2(edges, num_v):
    dist = [float("inf")] * num_v
    dist[0] = 0
    q = [[0, 0]]

    while len(q) > 0:
        q[0], q[-1] = q[-1], q[0]
        _, u = q.pop()

        # 큐 재구성
        min_heapify(q, 0)

        for i in edges[u]:
            if dist[i[0]] > dist[u] + i[1]:
                dist[i[0]] = dist[u] + i[1]
                q.append((dist[u] + i[1], i[0]))
                j = len(q) - 1
                while (j > 0) and (q[(j - 1) // 2] > q[j]):
                    q[(j - 1) // 2], q[j] = q[j], q[(j - 1) // 2]
                    j = (j - 1) // 2

    return dist


print(dijkstra2(edges, 7))

# 라이브러리 사용
import heapq


def dijkstra3(edges, num_v, goal):
    dist = [float("inf")] * num_v
    dist[0] = 0
    q = []
    heapq.heappush(q, [0, [0]])

    while len(q) > 0:
        # 힙에서 요소 꺼내기
        _, u = heapq.heappop(q)
        last = u[-1]

        if last == goal:
            return u
        for i in edges[last]:
            if dist[i[0]] > dist[last] + i[1]:
                # 정점까지의 비용을 갱신할 수 있다면 갱신해 힙에 등록
                dist[i[0]] = dist[last] + i[1]
                heapq.heappush(q, [dist[last] + i[1], u + [i[0]]])
    return []
