import sys

input = sys.stdin.readline
# print = sys.stdout.write

# 020
# N = int(input())
# A = [0] * (N + 1)
# tmp = [0] * (N + 1)  # 정렬을 위해 임시 사용할 리스트

# # A리스트에 값 넣기
# for i in range(1, N + 1):
#     A[i] = int(input())


# def merge_sort(s, e):
#     if e - s < 1:
#         return
#     m = int(s + (e - s) / 2)
#     # 재귀
#     merge_sort(s, m)
#     merge_sort(m + 1, e)
#     for i in range(s, e + 1):
#         tmp[i] = A[i]
#     k = s
#     index1 = s
#     index2 = m + 1
#     while index1 <= m and index2 <= e:  # 두 그룹 병합 로직
#         if tmp[index1] > tmp[index2]:
#             A[k] = tmp[index2]
#             k += 1
#             index2 += 1
#         else:
#             A[k] = tmp[index1]
#             k += 1
#             index1 += 1
#     while index1 <= m:  # 한쪽 그룹이 모두 선택된 후 남아있는 값 정리
#         A[k] = tmp[index1]
#         k += 1
#         index1 += 1
#     while index2 <= e:
#         A[k] = tmp[index2]
#         k += 1
#         index2 += 1


# merge_sort(1, N)

# for i in range(1, N + 1):
#     print(str(A[i]) + "\n")

# 021
result = 0


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


N = int(input())
A = list(map(int, input().split()))
A.insert(0, 0)
tmp = [0] * int(N + 1)
merge_sort(1, N)
print(result)
