# if
aa = 34
if aa <= 30:
    print("young")
elif aa <= 100:
    print("old")
else:
    print("what?!")
# old만 출력된다

# for
family = ["father", "mother", "kyunghee", "jisu"]
for i in family:
    print(i + " is my family")

for i in range(1, 10, 2):
    print(i, "는 10이하의 홀수 입니다")

# while
number = 1
while number < 20:
    print(number, "살은 미성년자")
    number += 1  # 해당 코드가 없을 경우 무한루프

# 리스트 내포
list1 = [i for i in range(10)]
print(list1)  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
list2 = [i for i in range(10) if i % 2 == 0]
print(list2)  # [0, 2, 4, 6, 8]
list3 = [i if i % 2 == 0 else 0 for i in range(10)]
print(list3)  # [0, 0, 2, 0, 4, 0, 6, 0, 8, 0]
