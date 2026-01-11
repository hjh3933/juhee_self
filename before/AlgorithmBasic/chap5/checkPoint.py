# check1
# 버킷정렬은 빈 정렬이라고도 불리며, 값의 종류가 한정된 경우에 사용된다
# 0~9의 정수만으로 구성된 데이터를 정렬할 때, 각 값이 나오는 횟수만큼 저장하고, 작은 순서대로 꺼내도록 하는 프로그램을 작성
data = [9, 4, 5, 2, 8, 3, 7, 8, 3, 2, 6, 5, 7, 9, 2, 9]


def counting_sort(data):
    count = [0] * 10
    sorted_data = []
    # 데이터의 개수 저장
    for num in data:
        count[num] += 1
    # 정렬된 데이터 생성
    for i in range(10):
        # extend는 반복가능한 객체만 받을 수 있다. 리스트, 문자열, 튜플 등
        sorted_data.extend([i] * count[i])  # [i] * n = n개의 [i]를 추가하게 된다

    return sorted_data


print(counting_sort(data))
