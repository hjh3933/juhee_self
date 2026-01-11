### 스택과 큐

**Stack**

- 스택은 데이터의 삽입과 삭제가 후입선출(LIFO)로 이뤄지는 자료구조를 말한다
- 새 값 -> top에 쌓임, 삭제 -> top의 값을 삭제
- 리스트를 사용하여 파이썬에서 스택을 구현할 수 있다
- 깊이우선탐색(DFS), 백트래킹, 재귀 알고리즘과 일맥 상통한다
- `파이썬의 스택`
  - top: 삽입, 삭제가 일어나는 위치
  - s.append(data): top에 데이터를 추가함
  - s.pop(): top의 데이터를 삭제, 확인함
  - s[-1]: top의 데이터를 확인함

**Queue**

- 큐는 데이터의 삽입과 삭제가 선입선출(FIFO)로 이뤄지는 자료구조를 말한다
- 삽입과 삭제가 양방향에서 이루어진다
- deque를 이용하여 큐를 구현할 수 있다
- 너비우선탐색(BFS)에서 자주 사용된다
- `파이썬의 큐`
  - rear: 큐의 가장 끝 데이터(가장 최근에 추가)
  - front: 큐의 가장 앞의 데이터(가장 오래전 추가, 삭제의 대상)
  - s.append(data): rear에 새로운 데이터 삽입
  - s.popleft(): front 데이터를 삭제, 확인
  - s[0]: front 데이터 확인
- 우선순위 큐: 들어간 순서와 상관없이 우선순위가 높은 데이터가 먼저 나오게 되는 자료구조, 일반적으로 힙heap을 이용해 구현한다

**문제 011**

- 백준 1874
- 1~N까지의 숫자가 있고, 특정 순서를 가지는 수열 형태로 N개의 숫자가 주어진다. 이 때 오름차순으로 push되는 스택에 pop을 통하여 해당 수열을 구현할 수 있는지 판단하는 문제, 구현가능한 경우 1부터 N까지의 숫자를 push, pop하는 순서를 출력하고 불가능한 경우 No를 출력하도록 한다
- A에 수열을 저장하고, answer에는 작동과정을 저장한다
- 자연수 num을 1로 초기화, 현재 수열값 su와 비교하여
  - 현재 수열값이 자연수보다 큰 경우 stack에 계속 값을 추가한다, 자연수는 +1씩 증가
  - 현재 수열값이 자연수num과 같아지면 pop하고 해당 과정들을 answer에 기록한다
  - 현재 수열값이 자연수보다 작은경우 stack에서 pop한 값n이 현재 수열값su보다 크다면 해당 수열은 구현 불가능하므로 NO를 출력한다
  - 현재 수열값이 자연수보다 작지만, stack에서 pop한 값이 현재 수열값보다 작다면 answer에 - 작업을 추가하고 다시 반복문을 진행한다

```python
for i in range(N):
    su = A[i]
    if su >= num:
        while su >= num:
            stack.append(num)
            num += 1
            answer.append("+")
        stack.pop()
        answer.append("-")
    else:
        n = stack.pop()
        if n > su:
            print("NO")
            result = False
            break
        else:
            answer.append("-")
```

**문제 012**

- 백준 17298
- N개의 자연수로 구성된 수열이 주어졌을 때, 각 수의 오큰수를 구하고 없는경우 -1을 출력하도록 한다. 오큰수란 오른쪽에 있는 큰 수중 가장 왼쪽에 있는 수로, [1,4,2,7]의 수열에서 1의 오큰수는 4, 4의 오큰수는 7, 2의 오큰수는 7, 7은 오큰수가 없으므로 -1을 출력한다
- 제한시간 1초문제로 반복문을 사용할 수 없고, 스택에 인덱스를 저장하며 오큰수를 출력하도록 코드를 작성할 수 있다.
- myStack: 인덱스를 저장한다, A[]에 저장된 수열과 ans[]에 저장될 오큰수 리스트의 인덱스를 의미함
- 수열의 순서대로 오른쪽에 있는 A[i]가 스택의 top값보다 크다면 해당 값을 pop하고 해당 인덱스의 ans값을 A[i]로 저장하도록 하는 원리
- 수열의 모든 요소에 대하여 진행(반복문은 수열의 개수)하고, 스택의 남은 값이 있다면 곧 오큰수가 없어서 pop되지 않은 값을 의미하기 때문에 스택을 비우며 해당 인덱스의 오큰수를 -1로 저장해준다

```python
for i in range(N):
    while myStack and A[myStack[-1]] < A[i]:
        ans[myStack.pop()] = A[i]
    myStack.append(i)  # 인덱스를 저장

while myStack:
    ans[myStack.pop()] = -1
```

**문제 013**

- 백준 2164
- N이 주어졌을 때, 1~N까지의 숫자가 적힌 카드가 있고 맨 위가 1 맨 아래가 N의 형태로 쌓여있다고 가정한다. 첫번째 카드는 버리고 두번째 카드는 가장 아래로 넘기는 과정을 카드의 개수가 1개가 될 때까지 반복하면 가장 마지막의 남는 카드의 번호를 출력하는 문제
- 선입선출 queue의 성질을 활용하여 해결할 수 있다
- `from collections import deque`: deque를 사용하여 queue를 구현할 수 있음
- myQueue에 append를 사용하여 1부터 N까지 요소를 추가한다
- popleft를 두번 실행: 1번은 버리기, 2번은 맨 뒤에 추가, while문을 통해 1장 남았을 때의 결과 출력

```python
for i in range(1, N + 1):
    myQueue.append(i)

while len(myQueue) > 1:
    myQueue.popleft()
    myQueue.append(myQueue.popleft())
```

**문제 014**

- 백준 11286
- N개의 정수가 주어졌을 때,
  - 0이 아닌 경우: 배열에 저장
  - 0인 경우: 배열에서 절댓값이 가장 작은 수를 꺼내 출력, 절댓값이 같은 수가 있는 경우 가장 작은 수를 출력
- 우선순위 큐를 사용하여 구현할 수 있다. 1. 절댓값, 2. 수의 크기 두 가지 기준이 있으므로 우선순위를 직접 지정해야한다

```python
for i in range(N):
    request = int(input())
    if request == 0:
        if myQueue.empty():
            print("0\n")
        else:
            temp = myQueue.get()
            print(str((temp[1])) + "\n")
    else:
        myQueue.put((abs(request), request))
```

**[실습파일](chap03_5.py)**
