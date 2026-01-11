# 3.
import sys  # 보통 import문은 코드 맨 위에 작성함

# 1.
insert_price = input("insert: ")
if not insert_price.isdecimal():
    print("정수를 입력하세요")
    sys.exit()

product_price = input("product: ")
if not product_price.isdecimal():
    print("정수를 입력하세요")
    sys.exit()

change = int(insert_price) - int(product_price)
if change < 0:
    print("금액이 부족합니다")
    sys.exit()

# 2-1.
r5000 = change // 5000  # 매수
q5000 = change % 5000  # 나머지
print("5000: " + str(r5000))

r1000 = q5000 // 1000  # 매수
q1000 = q5000 % 1000  # 나머지
print("1000: " + str(r1000))

r500 = q1000 // 500  # 매수
q500 = q1000 % 500  # 나머지
print("500: " + str(r500))

r100 = q500 // 100  # 매수
q100 = q500 % 100  # 나머지
print("100: " + str(r100))

r50 = q100 // 50  # 매수
q50 = q100 % 50  # 나머지
print("50: " + str(r50))

r10 = q50 // 10  # 매수
q10 = q50 % 10  # 나머지
print("10: " + str(r10))

r5 = q10 // 5  # 매수
q5 = q10 % 5  # 나머지
print("5: " + str(r5))

print("1: " + str(q5))

# 2-2.
coin = [5000, 1000, 500, 100, 50, 10, 5, 1]
for i in coin:
    r = change // i
    change %= i  # 계속 갱신된다
    print(str(i) + ": " + str(r))

# 4.
for i in coin:
    r, change = divmod(change, i)
    print(str(i) + ": " + str(r))
