### A\* 알고리즘

**불필요한 경로 제외하기**

- 다익스트라 알고리즘에서 발전한 것, 끝점과 멀어지는 불필요한 경로를 검색하지 않도록 고안하여 처리 속도를 향상한다
- 현재 위치와 끝점에 대한 `비용의 추정값`을 고려한다
- 맨해튼거리`manhattan distance`: 좌표차이의 절댓값을 사용 `|x1-x2|+|y1-y2|` 어디서든지 같은 값을 얻을 수 있다
- 비용은 고정되어야 하며, 비용이 바뀌면 최적의 해답을 찾을 수 없다

**알고리즘 구현하기**

- 다익스트라 알고리즘에서 발전한 것이기 때문에 코드가 거의 차이가 없다
- `heapq.heappush(q, [dist[last] + i[1] + nodes[i[0]], u + [i[0]]])`
- `nodes[i[0]]`: 노드 i[0]에서 goal까지의 거리(추정치)로 이동거리(실제값) + 목표까지거리(추정값)을 통해 최단거리일 가능성이 높은 것을 먼저 탐색할 수 있도록 도와주는 것이다
- `heapq.heappush(heap, item)`: 리스트(heap처럼 대함)에 item을 넣고 알아서 최솟값부터 정렬
- `heapq.heappop(heap)`: heap의 최소요소 반환, 여기서는 비용이 우선순위로 [비용, 경로리스트]를 반환

```python
def astar(edges, nodes, goal):
    dist = [float("inf")] * len(nodes)
    dist[0] = 0
    q = 0
    heapq.heappush(q, [0, [0]])

    while len(q) > 0:
        _, u = heapq.heappop(q)
        last = u[-1]

        if last == goal:
            return u
        for i in edges[last]:
            if dist[i[0]] > dist[last] + i[1]:
                dist[i[0]] = dist[last] + i[1]
                # 다익스트라와 차이점** nodes[i[0]]이 추가됨
                heapq.heappush(q, [dist[last] + i[1] + nodes[i[0]], u + [i[0]]])

    return []
```

**[실습파일](point4_ex.py)**
