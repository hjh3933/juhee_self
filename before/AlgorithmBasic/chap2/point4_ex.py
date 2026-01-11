# 10진수를 2진수로 변환
def convert(n):
    result = ""  # 문자열로 초기화
    while n > 0:
        result = str(n % 2) + result
        n //= 2
    # 반복문이 끝나면 2진수 숫자를 출력
    print(result)


n = 6
convert(n)


# 기수도 인수로 받아서 변환
def convert2(n, base):
    result = ""
    while n > 0:
        result = str(n % base) + result
        n //= base
    print(result)


a = 18
convert2(a, 2)
convert2(a, 3)
convert2(a, 8)


# 2진수를 10진수로 변환
def convert3(n):
    result = 0
    for i in range(len(n)):
        result += int(n[i]) * (2 ** (len(n) - i - 1))
    print(result)


convert3("10010")

# 파이썬 내장 함수
num1 = 18
num2 = "110"
print(bin(18))  # 0b10010 출력
print(int(num2, 2))  # 6 출력
