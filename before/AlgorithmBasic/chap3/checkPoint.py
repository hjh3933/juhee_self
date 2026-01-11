# check1
# 신장과 체중으로 BMI를 구하는 함수
def bmi(height, weight):
    # 신장(cm)의 단위를 m으로 변환
    h = height / 100
    return weight / (h * h)


# 복잡도 O(1)


# check2
# 원주율의 근삿값을 구하는 함수
def pi(n):
    cnt = 0
    for i in range(n):
        for j in range(n):
            # 피타고라스 정리로 부채꼴 내부인지 판정
            if i * i + j * j <= n * n:
                cnt += 1
    # 부채꼴에서 원형으로 변환하기 위해 4배로
    return cnt * 4 / (n * n)


# 복잡도 O(n^2)


# check3
# 원주율의 근삿값을 구하는 함수
def pi(n):
    result = 4
    plus_minus = -1

    for i in range(1, n):
        result += plus_minus * 4 / (i * 2 + 1)
        # 부호를 반전
        plus_minus *= -1

    return result


# 복잡도 O(n)
