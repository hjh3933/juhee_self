### 병합정렬

**병합 정렬의 핵심 이론**

- 분할정복방식을 사용해 데이터를 분할하고 분할한 집합을 정렬하며 합치는 알고리즘
- 시간복잡도는 O(nlogn)
- 투 포인터 개념을 사용하여 왼쪽, 오른쪽 그룹을 병합한다
- 더 작은 값을 배열에 저장하고 포인터를 오른쪽으로 한칸 이동하는 방식

**문제 020**

- 백준 2751번
- 첫줄에 N, 두번째 줄부터 N개의 수가 한줄당 하나씩 주어질 때 오름차순 정렬하는 프로그램을 작성하시오
- 정렬할 그룹을 최소길일 나누고 그룹마다 정렬 -> 병합 과정을 반복
- 원소가 하나(e-s<1)일 경우 정렬할 필요가 없으므로 리턴
- s, e는 각각 왼쪽, 오른쪽 끝요소
- 중간점 m을 구하여 왼쪽구간(s,m)과 오른쪽구간(m+1, e)를 재귀정렬
- index1은 왼쪽집합 1번, index2는 오른쪽집합 1번요소를 뜻함, k는 A에 넣을 인덱스 세는 용도, index1과2 비교하며 더 작은것부터 넣는것
- while문으로 index1,index2가 각자 끝지점에 도달하기 전까지 반복문실행(m, e)
- 한쪽집합을 다 넣고도 남은 값이 있는 경우 추가처리해주는방식

```python
def merge_sort(s, e):
    if e - s < 1:
        return
    # 분할
    m = int(s + (e - s) / 2)
    merge_sort(s, m)
    merge_sort(m + 1, e)
    for i in range(s, e + 1):
        tmp[i] = A[i]
    # 병합
    k = s
    index1 = s
    index2 = m + 1
    while index1 <= m and index2 <= e:  # 두 그룹 병합 로직
        if tmp[index1] > tmp[index2]:
            A[k] = tmp[index2]
            k += 1
            index2 += 1
        else:
            A[k] = tmp[index1]
            k += 1
            index1 += 1
    while index1 <= m:  # 한쪽 그룹이 모두 선택된 후 남아있는 값 정리
        A[k] = tmp[index1]
        k += 1
        index1 += 1
    while index2 <= e:
        A[k] = tmp[index2]
        k += 1
        index2 += 1
```

**문제 021**

- 백준 1517번
- N개의 수로 이뤄진 수열 A[]가 있을 때 버블정렬을 수행하는 경우 swap이 총 몇번 발생하는지 알아내는 프로그램을 작성하시오
- 1 <= N <= 500000
- N의 최대범위가 500000이므로 O(nlogn)의 시간복잡도를 가지는 알고리즘을 사용해야한다
- 문제에서 구하는 버블정렬은 시간안에 해결이 불가능하기 때문에 병합정렬을 사용하여 해결할 수 있다
- 병합정렬의 과정에서 index의 이동거리를 계산하여 swap한 것과 같은 횟수를 저장할 수 있다

```python
def merge_sort(s, e):
    global result
    if e - s < 1:
        return
    m = int(s + (e - s) / 2)
    merge_sort(s, m)  # 재귀함수 구현
    merge_sort(m + 1, e)
    for i in range(s, e + 1):
        tmp[i] = A[i]
    k = s
    index1 = s
    index2 = m + 1
    # 병합로직
    while index1 <= m and index2 <= e:
        if tmp[index1] > tmp[index2]:
            A[k] = tmp[index2]
            result = result + index2 - k  # 뒤쪽 데이터값이 더 작다면 결과값 업데이트
            k += 1
            index2 += 1
        else:
            A[k] = tmp[index1]
            k += 1
            index1 += 1
    while index1 <= m:
        A[k] = tmp[index1]
        k += 1
        index1 += 1
    while index2 <= e:
        A[k] = tmp[index2]
        k += 1
        index2 += 1
```

**[실습파일](chap04_5.py)**
