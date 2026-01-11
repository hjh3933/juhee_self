# 재귀함수를 사용한 피보나치 수열 프로그램
def fibonacci(n):
    if (n == 1) or (n == 2):
        return 1
    return fibonacci(n - 1) + fibonacci(n - 2)


print(fibonacci(6))  # 8


# 반복문을 사용한 피보나치 수열 프로그램
def fibonacci2(n):
    fib = [1, 1]
    for i in range(2, n):
        fib.append(fib[i - 1] + fib[i - 2])
    return fib[n - 1]


print(fibonacci2(6))  # 8

# 메모이제이션
memo = {1: 1, 2: 1}


def fibonacci3(n):
    if n in memo:
        return memo[n]
    # 저장되어있지 않은 경우
    memo[n] = fibonacci3(n - 1) + fibonacci3(n - 2)
    return memo[n]


print(fibonacci3(6))
