### 슬라이딩 윈도우

**슬라이딩 윈도우**

- 2개의 포인터로 범위를 지정한 다음, 범위를 유지한 채로 이동하며 문제를 해결하는 알고리즘
- 투 포인터와 매우 유사하고 원리가 간단하다
- 지정된 범위가 하나씩 이동하는 모습이 창문을 밀어서 여는 것과 비슷하여 붙여진 이름

**문제 009**

- 백준 12891
- {'A','C','G','T'}로 이루어진 DNA 문자열이 주어졌을 때 이중 N개의 연결된 문자열을 골라 비밀번호로 만드려고 한다. 비밀번호는 각각 DNA문자들의 개수 조건을 충족해야한다. 생성가능한 비밀번호의 개수를 구하는 문제
- checkSecret: {'A','C','G','T'}의 개수 조건을 충족하는지 알 수 있는 변수, 4가 되면 모든 조건을 만족한다는 의미이다
- checkList, myList: DNA 문자의 조건, DNA문자의 현재 개수를 각각 저장하는 리스트 비교를 통해 checkSecret판단
- myadd, myremove: 함수는 더해지는 문자, 빠지는 문자 c에 대하여 각각 어떤 DNA 문자인지 조건을 판단하고, myList와 checkList를 비교하여 checkSecret을 업데이트하는 작업을 한다
- myadd와 myremove 함수를 실행하고 checkSecret이 4이면 result 개수를 추가하여 결과를 계산한다

```python
def myadd(c):
    global checkList, myList, checkSecret
    if c == "A":
        myList[0] += 1
        if myList[0] == checkList[0]:
            checkSecret += 1
    elif c == "C":
        myList[1] += 1
        if myList[1] == checkList[1]:
            checkSecret += 1
    elif c == "G":
        myList[2] += 1
        if myList[2] == checkList[2]:
            checkSecret += 1
    elif c == "T":
        myList[3] += 1
        if myList[3] == checkList[3]:
            checkSecret += 1
###
for i in range(P, S):
    j = i - P
    myadd(A[i])
    myremove([A[j]])
    if checkSecret == 4:
        result += 1
```

**문제 010**

- 백준 11003
- N개의 숫자와 L이 주어졌을 때 L개의 연속된 숫자중 최솟값 D를 출력하는 프로그램을 작성하시오. i<=0인 숫자는 무시하고 D를 구한다
- L의 제약조건이 (1<=L<=5000000) 이므로 정렬을 사용할 수 없고, 전체 복잡도 O(n)으로 해결해야한다
- deque을 사용하여 정렬 효과를 볼 수 있다
- `while ~`: [-1][0]은 마지막 요소의 0번째 값을 불러와서 현재의 now[i]값과 비교, mydeque의 맨 끝값부터 차례대로 크기를 비교하며 더 큰경우 pop하는것이다. 모든 요소가 pop되는 경우 or mydeque의 마지막 요소가 더 작은 경우에는 while문이 종료되고 append 명령을 통해 (값, 인덱스)를 mydeque에 추가한다
- `if mydeque ~`: mydeque[0][1] 첫번째 요소가 i - L 보다 작거나 같을 때, 즉 L(윈도우)개수를 초과한 경우 popleft()를 통해 맨 앞의 요소를 빼낸다
- `print`: 최종적으로 for문의 마지막 행에서 mydeque의 맨 앞 요소는 L개의 윈도우 중 최솟값을 가지게 되므로 mydeque[0][0]을 그대로 출력한다

```python
for i in range(N):
    while mydeque and mydeque[-1][0] > now[i]:
        mydeque.pop()
    mydeque.append((now[i], i))
    if mydeque[0][1] <= i - L:
        mydeque.popleft()
    print(mydeque[0][0], end=" ")
```

**[실습파일](chap03_4.py)**
