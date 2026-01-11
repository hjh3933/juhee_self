### 병합정렬

**병합정렬이란**

- 리스트를 반복해서 둘로 분할하고, 뿔뿔이 흩어진 상태에서 리스트를 병합하는 방법
- 병합하는 과정에서 첫번째 요소들끼리 값의 대소를 비교하여 정렬하도록 한다
- 두 리스트를 병합하는 과정의 복잡도는 `O(n)`, 단계수를 고려하면 log2N으로 전체 복잡도는 `O(nlogn)`이 된다

**병합정렬 구현**

- `merge_sort(data)`: 리스트 요소가 1개가 될때까지 재귀를 통해 요소를 분할한다, 이후 merge함수를 통해 각 요소가 병합된 리스트를 반환한다(return)
- `merge(left, right)`: result 변수에 병합된 리스트를 담아 리턴한다, 두 리스트의 첫번째 요소부터 대소를 비교하여 오름차순으로 리스트에 저장한다
- `extend()`: 리스트에 여러 요소를 풀어서 추가

```python
def merge_sort(data):
    if len(data) <= 1:
        return data
    # 2개 이상의 데이터를 가진 리스트이면 분할함
    mid = len(data) // 2

    # 재귀분할
    left = merge_sort(data[:mid])
    right = merge_sort(data[mid:])
    # 병합
    return merge(left, right)


def merge(left, right):
    result = []  # 병합한 리스트를 담을 곳
    i, j = 0, 0  # 두 리스트의 인덱스를 각각 관리, 왼쪽과 오른쪽 리스트라고 생각
    # 인덱스이므로 각각 리스트의 길이보다 작은 조건 부여 -> 리스트가 비워지면 종료
    while (i < len(left)) and (j < len(right)):
        # 대소를 비교하여 더 작은 요소를 result에 추가
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    # 남은 요소에 대한 처리
    if i < len(left):
        result.extend(left[i:])
    if j < len(right):
        result.extend(right[j:])


print(merge_sort(data))
```

### 퀵정렬

**퀵정렬이란?**

- 적절한 데이터를 하나 선택해 기준점(pivot)으로 삼고, 작은 요소와 큰 요소로 분할하는 과정을 반복
- 분할정복법, 더 나눌 수 없는 크기까지 분할하고 처리하는 과정을 재귀적으로 반복
- 기준이 되는 데이터 피벗 `pivot`의 선택이 중요하다
- 적절한 피벗을 선택한 경우 `O(nlogn)`, 잘 선택하지 않으면 최악의 경우 `O(n)`의 복잡도가 된다

**퀵정렬 구현**

- 리스트를 분할하며 첫번째 요소를 피벗으로 사용한다
- 피벗을 기준으로 작은 요소[left], 큰 요소[right], 같은 요소 same(정수로 카운트)을 관리한다
- if 조건문 아래에 재귀를 통해 요소를 1개 이하로 분할한다, 재귀를 빠져나오면서 return 문에서 오름차순으로 정렬된 리스트를 병합하면서 최종적으로 정렬된 리스트를 반환한다

```python
def quick_sort(data):
    if len(data) <= 1:
        return data

    # 피벗으로 리스트 첫번째 요소 사용
    pivot = data[0]
    left, right, same = [], [], 0

    for i in data:
        if i < pivot:
            # 피벗보다 작은 요소는 왼쪽으로 이동
            left.append(i)
        elif i > pivot:
            # 피벗보다 큰 요소는 오른쪽으로 이동
            right.append(i)
        else:
            same += 1
    left = quick_sort(left)
    right = quick_sort(right)

    # 정렬결과와 피벗 값을 함께 반환
    return left + [pivot] * same + right


print(quick_sort(data2))
```

**[실습파일](point6,7_ex.py)**
