# 병합정렬
data = [6, 15, 4, 2, 8, 5, 11, 9, 7, 13]


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
    return result


print(merge_sort(data))

# 퀵정렬
data2 = [6, 15, 4, 2, 8, 5, 11, 9, 7, 13]


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
