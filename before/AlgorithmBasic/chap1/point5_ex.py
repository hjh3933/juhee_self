str1 = "hello "
str2 = "world"
print(str1 + str2)  # hello world
num1 = 123
# 오류발생
# print(str1 + num1)
# 형변환
str3 = str1 + str(num1)
print(str3)  # hello 123
# 문자열 삽입
# %i 는 %d 즉 정수를 의미함
print("abc%i" % 123)
