### 삽입정렬

**삽입 정렬의 핵심 이론**

- 정렬된 데이터 범위에 정렬되지 않은 데이터를 적절히 삽입시켜 정렬하는 방식
- 시간복잡도 O(n^2)로 느린 편이지만 구현이 쉽다
- 이진탐색 등과 같은 알고리즘을 사용하면 시간 복잡도를 줄일 수 있다

**문제 018**

- 백준 11399번
- ATM기 앞에 N명의 사람이 줄을 서있다. 각각 인출에 걸리는 시간을 i라고 했을 때 전체 인출 시간이 가장 빨라지는 경우의 총 시간을 구하시오
- 그리디 방식으로 해결할 수 있다. 가장 빠른 경우는 인출에 걸리는 시간이 가장 적은 순서 부터 ATM기를 이용하는 경우이다
- 앞사람인출시간의 합+자신의 인출시간이므로 합배열로 푼다
- `insert_value = A[i]`: 삽입할 값
- `for j in range(i - 1, -1, -1)`: (start, stop, step) i-1부터 0까지 -1씩 줄여나가며 반복
- 첫번째 반복문: 값 A[i]가 오름차순 정렬된 데이터를 역순으로 탐색하다가 자신보다 작은 값을 만나면 바로 insert_point(삽입위치)를 업데이트하고 반복을 중단한다
- 두번째 반복문: 본래 위치 i부터 삽입위치 insert_point까지의 값은 한칸씩 뒤로 밀려난다(인덱스-1의 값을 가짐)
- 마지막으로 insert_point에 insert_value를 삽입

```python
for i in range(1, N):
    insert_point = i
    insert_value = A[i]
    for j in range(i - 1, -1, -1):
        if A[j] < A[i]:
            insert_point = j + 1
            break
        if j == 0:
            insert_point = 0
    for j in range(i, insert_point, -1):
        A[j] = A[j - 1]
    A[insert_point] = insert_value
```

**[실습파일](chap04_3.py)**
