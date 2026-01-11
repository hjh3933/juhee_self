# check1
# 같은 문자가 연속 될 경우 해당문자의 출현 횟수를 세어 압축하는 알고리즘을 생각해보자
# 0과 1의 두 문자로 이루어진 문자열을 각각의 그룹별 문자수를 요소로 하는 리스트로 변환하는 프로그램을 만들어 본다
# 문자열은 반드시 0에서 시작하며, 1로 시작하는 경우 리스트의 첫번째 요솟값을 0으로 바꿔야한다


def strCount(s):
    result = []
    count = 0
    now = "0"
    for idx, i in enumerate(s):
        # 첫번째가 1로시작하는 경우 리스트의 첫번째 값을 0으로
        if (idx == 0) and i == "1":
            result.append(0)
            now = i
        if i != now:
            # 값이 변한 경우 지금까지의 count를 리스트에 추가하고 count와 now(현재 문자값)을 갱신
            result.append(count)
            count = 1
            now = i
        else:
            count += 1
    # 마지막 그룹 추가
    result.append(count)

    return result


print(strCount("000000111111100111000000001111"))
