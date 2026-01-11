# 역폴란드 표기법
def calc(expression):
    stack = []

    # 공백으로 요소를 구분하여 리스트의 첫번째 요소부터 하나씩 사용
    for i in expression.split(" "):
        print(stack)

        # 사칙연산의 경우 계산값을 stack에 쌓기
        if i == "+":
            # 후입선출이므로 순서에 주의
            b, a = stack.pop(), stack.pop()
            stack.append(a + b)
        elif i == "-":
            b, a = stack.pop(), stack.pop()
            stack.append(a - b)
        elif i == "*":
            b, a = stack.pop(), stack.pop()
            stack.append(a * b)
        elif i == "/":
            b, a = stack.pop(), stack.pop()
            stack.append(a // b)
        # 숫자인 경우 stack에 쌓기
        else:
            stack.append(int(i))

    return stack[0]


print(calc("4 6 2 + * 3 1 - 5 * -"))


# 유클리드 호제법
def gcd(a, b):
    r = a % b

    while r != 0:
        a, b = b, r
        r = a % b

    return b


print(gcd(1274, 975))


# 나머지 직접 대입
def gcd2(a, b):
    while b != 0:
        a, b = b, a % b

    return a


print(gcd2(1274, 975))
