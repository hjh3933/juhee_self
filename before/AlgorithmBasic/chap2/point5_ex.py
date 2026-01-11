import math, time


# 소수판별 프로그램
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True


# 200까지의 정수 중 소수를 출력
# for i in range(200):
#     if is_prime(i):
#         print(i, end=" ")

# 처리시간


def is_prime_time(n):
    for i in range(n):
        if is_prime(i):
            print(i, end=" ")


start = time.time()
is_prime_time(100000)
end = time.time()

print("\n")
# float형으로 소수점 5자리까지 출력
print(f"{end - start:.5f} sec")  # 0.19705 sec


# 에라토스테네스의 체
def get_prime(n):
    if n <= 1:
        return []
    prime = [2]
    limit = int(math.sqrt(n))

    # 홀수 리스트 작성 - 리스트 내포
    data = [i + 1 for i in range(2, n, 2)]
    while limit >= data[0]:
        prime.append(data[0])
        data = [j for j in data if j % data[0] != 0]
    return prime + data


print(get_prime(200))

# 처리 시간
start2 = time.time()
get_prime(100000)
end2 = time.time()

print("\n")
print(f"{end2 - start2:.5f} sec")  # 0.09009 sec
