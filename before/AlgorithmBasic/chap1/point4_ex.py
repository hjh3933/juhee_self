# 대입
num1 = 3
print(num1)  # 3
num2 = 1
num2 += 3
print(num2)  # 4
# 리스트
list1 = [1, "a", True, 0.5]
print(list1[1])  # a
print(list1[1:3])  # ['a', True]
list1.append(45)  # 추가
print(list1)  # [1, 'a', True, 0.5, 45]
list1[1] = False  # 변경
print(list1[1])  # False
# 튜플
tuple1 = (1, "a", True, 0.5)
print(tuple1[2])  # True
# tuple1[2] = 3 변경 시 오류 발생
