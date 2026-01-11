### 다익스트라 알고리즘

**정점에 주목한 최단경로찾기**

- 연결된 정점을 후보로 하여 비용이 가장 적어지는 정점을 선택하는 과정을 반복해 탐색하는 알고리즘
- 변의 값이 음수인 경우 사용이 불가능하지만, 빠른속도(효율적)로 문제를 풀 수 있다
- 비용이 최소인 것만 탐색하므로 그 외에는 탐색할 필요가 없다

**알고리즘 구현하기**

- dist: 정점별 비용을 저장, 최종 리턴값, 처음에는 무한대값을 저장함
- q: 정점 리스트
- 가장 작은 정점 q[0]을 r에 대입하고, dist[q[0]] 보다 작은 dist[n]이 있으면 r을 갱신한다
- pop을 통해 가장 비용이 작은 정점을 꺼내서 u에 대입한다
- edges[u] = u정점과 연결된 [끝점, 비용][][]을 하나씩 꺼내서 정점까지의 비용을 갱신할 수 있으면 갱신한다

```python
def dijkstra(edges, num_v):
    dist = [float("inf")] * num_v
    dist[0] = 0
    q = [i for i in range(num_v)]

    while len(q) > 0:
        r = q[0]
        for i in q:
            if dist[i] < dist[r]:
                r = i

        u = q.pop(q.index(r))
        for i in edges[u]:
            if dist[i[0]] > dist[u] + i[1]:
                dist[i[0]] = dist[u] + i[1]

    return dist
```

**복잡도 개선하기**

- 다익스트라 알고리즘의 복잡도는 중첩 반복문을 생각하면 `O(n^2)`이다, 그러나 각 정점을 탐색하더라도 횟수는 1회뿐이므로 변의 수가 m이라고 하면 복잡도는 `O(m)`, 알고리즘 전체는 `O(m+n^2)`이 되는데 m은 최대 n(n-1)/2 이므로 복잡도는 `O(n)`이 된다
- 우선순위가 있는 큐 자료구조(피보나치 힙)를 통해 전체 시간복잡도를 `O(m+nlogn)`으로 감소시킬 수 있다
- 다만 피보나치 힙을 사용하면 구현이 어려워지므로 간단한 힙을 이용한 우선순위가 있는 큐를 사용한다
- 힙 구현

  - 현재노드를 가장 작은 값으로 대입하고 왼쪽, 오른쪽 자식과 대소비교후 min값을 업데이트
  - 현재노드와 min값이 다른 경우 값을 바꿔 가장 작은 값이 현재(부모)노드에 오도록함
  - min_heapify는 루트만 최솟값을 보장하기 때문에 dijkstra2에서 계속 큐를 재구성함
  - 다익스트라에서는 항상 가장 작은 거리의 정점 하나만 꺼내면 되므로, 최소 힙이면 충분

  ```python
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
    #
    def dijkstra2(edges, num_v):
        ...
        # 큐 재구성
        min_heapify(q, 0)
        ...
        return dist
  ```

**[실습파일](point3_ex.py)**
