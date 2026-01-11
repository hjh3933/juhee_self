# 선형검색
data = [50, 30, 90, 10, 20, 70, 60, 40, 80]
found = False

for i in range(len(data)):
    if data[i] == 40:
        print(i)
        found = True
        break

if not found:
    print("Not Found")


def linear_search(data, value):
    for i in range(len(data)):
        if data[i] == value:
            return i
    return -1


print(linear_search(data, 40))


# 이진검색
dataB = [10, 20, 30, 40, 50, 60, 70, 80, 90]


def binary_search(data, value):
    left = 0
    right = len(data) - 1
    while left <= right:
        mid = (left + right) // 2
        if data[mid] == value:
            return mid
        elif data[mid] < value:
            left = mid + 1
        else:
            right = mid - 1
    return -1


print(binary_search(dataB, 40))
