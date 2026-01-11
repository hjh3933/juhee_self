### 투 포인터

**투 포인터 알고리즘**

- 연속된 요소의 합을 구하는 문제에서 시작 인덱스와 종료 인덱스를 투 포인터로 지정한 뒤, 각각 이동시키는 방식으로 해당하는 값을 찾아나가는 방법이다
- 투포인터 이동원칙
  - `sum > N`: sum = sum - start_index; start_index++;
  - `sum < N`: end_index++; sum = sum + end_index;
  - `sum = N`: end_index++; sum = sum + end_index; count++;
- end_index가 N이 될때까지 해당 과정을 반복하며 count를 세는 방식이다

**문제 006**

- 백준 2018
- 자연수 N이 주어졌을 때 연속된 자연수의 합으로 N을 나타내는 가짓수를 구한다
- 사용변수 모두 1로 초기화, count의 경우 n으로 표현되는 경우 한가지를 포함하기 때문에 1로 초기화 되는것

```python
while end_index != n:
    if sum == n:
        count += 1
        end_index += 1
        sum += end_index
    elif sum > n:
        sum -= start_index
        start_index += 1
    else:
        end_index += 1
        sum += end_index
```

**문제 007**

- 백준 1940
- 주몽이 갑옷을 만들라며 명령했다 2가지 재료의 고유한 번호를 합한 값이 M이 되면 갑옷이 만들어지며, 재료의 수 N, 각각의 번호, 합할 값 M이 주어진다
- 시간제한 2초, N의 최대범위가 15000이므로 O(nlogn) 정렬 알고리즘을 사용할 수 있다
- 요소들을 정렬한뒤 start_index는 1,end_index는 n으로 설정하고 각각 값을 조정하면서 M일 경우에는 count를 추가한다
- 투 포인터 - 합이 큰 경우: end_index-- - 합이 작은 경우: start_index++ - 같은 경우: count를 추가하고 각각 end_index--, start_index++

```python
while i < j:
    if A[i] + A[j] < M:
        i += 1
    elif A[i] + A[j] > M:
        j -= 1
    else:
        count += 1
        i += 1
        j -= 1
```

**문제 008**

- 백준 1253
- N개의 수가 주어졌을 때 다른 두 수의 합으로 표현되는 수가 있다면, 이를 '좋은 수'라고 한다. 좋은 수의 개수를 구하시오
- N은 최대 2000, 제한시간은 2초이기 때문에 N^2 알고리즘을 사용할 수 없다. 최소 O(nlogn)의 시간 복잡도를 가지는 알고리즘이 필요하기 때문에 정렬과 투포인터 알고리즘을 사용한다
- 투 포인터 i, j : 리스트의 양 끝에 설정후 A[k]의 값과 대소비교를 통해 포인터를 이동시킨다
- 자기자신(A[k])을 포함하여 만들면 안되기 때문에 두 수의 합이 A[k]인 경우에도 i, j값을 조건문을 통해 검증하여 하나라도 k와 일치하는 경우 포인터를 이동시킨다

```python
for k in range(N):
    find = A[k]
    i = 0
    j = N - 1
    while i < j:
        if A[i] + A[j] == find:
            if i != k and j != k:
                Result += 1
                break
            elif i == k:
                i += 1
            elif j == k:
                j -= 1
        elif A[i] + A[j] > find:
            j -= 1
        else:
            i += 1
```

**[실습파일](chap03_3.py)**
