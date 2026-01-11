import queue
import heapq

# 스택 구현
stack = []

stack.append(2)
stack.append(3)
stack.append(5)

temp = stack.pop()
print(temp)  # 마지막 입력 요소인 5 출력

stack.append(4)
temp = stack.pop()
print(temp)  # 마지막 입력 요소인 4 출력

# 큐 구현
q = queue.Queue()
q.put(2)
q.put(3)
q.put(5)

temp = q.get()
print(temp)  # 첫번째 입력 요소인 2 출력

# 힙 구현
data = [6, 15, 4, 2, 8, 5, 11, 9, 7, 13]

for i in range(len(data)):
    j = i
    while (j > 0) and (data[(j - 1) // 2] < data[j]):
        data[(j - 1) // 2], data[j] = data[j], data[(j - 1) // 2]
        j = (j - 1) // 2

# 힙 정렬
for i in range(len(data), 0, -1):
    # 힙의 맨 앞과 교환
    data[i - 1], data[0] = data[0], data[i - 1]
    j = 0
    while ((2 * j + 1 < i - 1) and (data[j] < data[2 * j + 1])) or (
        (2 * j + 2 < i - 1) and (data[j] < data[2 * j + 2])
    ):
        if (2 * j + 2 == i - 1) or (data[2 * j + 1] > data[2 * j + 2]):
            # 왼쪽 아래와 교환
            data[j], data[2 * j + 1] = data[2 * j + 1], data[j]
            # 왼쪽 아래로 이동
            j = 2 * j + 1
        else:
            # 오른쪽 아래와 교환
            data[j], data[2 * j + 2] = data[2 * j + 2], data[j]
            # 오른쪽 아래로 이동
            j = 2 * j + 2

print(data)


# heapq 라이브러리
def heap_sort(array):
    h = array.copy()
    heapq.heapify(h)  # 힙 생성
    return [heapq.heappop(h) for _ in range(len(array))]
    # 리스트 컴프리헨션 (List Comprehension) 으로 작성, 배열 길이만큼 반복하여, 최솟값부터 꺼내진 값들을 리스트로 리턴함
    # _ 는 실제로 사용하지 않을 쓸모없는 변수명에 대한 관례


data2 = [6, 15, 4, 2, 8, 5, 11, 9, 7, 13]
print(heap_sort(data2))
